import { db } from '../firebaseConfig';
import {
    ref,
    push,
    query,
    orderByChild,
    limitToLast,
    get,
} from 'firebase/database';

export interface LeaderboardEntry {
    name: string;
    score: number;
    total: number;
    date: string;
}

const LEADERBOARD_REF = 'leaderboard';
const LOCAL_STORAGE_KEY = 'ucl-cyber-quiz-leaderboard';
const MAX_ENTRIES = 50;

/**
 * Fetch the top leaderboard entries from Firebase.
 * Falls back to localStorage if Firebase is unavailable.
 */
export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
        const dbRef = ref(db, LEADERBOARD_REF);
        const q = query(dbRef, orderByChild('score'), limitToLast(MAX_ENTRIES));
        const snapshot = await get(q);

        if (!snapshot.exists()) return [];

        const entries: LeaderboardEntry[] = [];
        snapshot.forEach((child) => {
            entries.push(child.val() as LeaderboardEntry);
        });

        // Sort descending by score, then ascending by date for ties
        entries.sort(
            (a, b) =>
                b.score - a.score ||
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        return entries;
    } catch (error) {
        console.warn('Firebase unavailable, falling back to localStorage:', error);
        return getLocalLeaderboard();
    }
}

/**
 * Add a new entry to the Firebase leaderboard.
 * Also saves to localStorage as a fallback.
 */
export async function addLeaderboardEntry(
    entry: LeaderboardEntry
): Promise<void> {
    // Always save locally as backup
    saveLocalLeaderboard(entry);

    try {
        const dbRef = ref(db, LEADERBOARD_REF);
        await push(dbRef, entry);
    } catch (error) {
        console.warn('Firebase write failed, saved to localStorage only:', error);
    }
}

// ─── localStorage fallback helpers ───

function getLocalLeaderboard(): LeaderboardEntry[] {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveLocalLeaderboard(entry: LeaderboardEntry): void {
    const lb = getLocalLeaderboard();
    lb.push(entry);
    lb.sort(
        (a, b) =>
            b.score - a.score ||
            new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lb.slice(0, MAX_ENTRIES)));
}
