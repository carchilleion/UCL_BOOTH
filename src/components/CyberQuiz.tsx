import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomQuestions, type QuizQuestion } from '../data/cyberQuizData';
import { Trophy, ArrowRight, RotateCcw, User, ChevronRight, Crown, Medal, Award, Shield, Gift, Clock, Loader2 } from 'lucide-react';
import { fetchLeaderboard, addLeaderboardEntry, type LeaderboardEntry } from '../services/leaderboardService';

interface AttemptRecord {
    date: string;
    period: 'AM' | 'PM';
    count: number;
}

const QUIZ_COUNT = 15;
const MAX_ATTEMPTS = 2;
const ATTEMPTS_KEY = 'ucl-cyber-quiz-attempts';

function getCurrentPeriod(): 'AM' | 'PM' {
    return new Date().getHours() < 12 ? 'AM' : 'PM';
}

function getTodayDate(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getAttemptRecord(): AttemptRecord {
    try {
        const data = localStorage.getItem(ATTEMPTS_KEY);
        if (data) {
            const record: AttemptRecord = JSON.parse(data);
            const today = getTodayDate();
            const period = getCurrentPeriod();
            if (record.date === today && record.period === period) {
                return record;
            }
        }
    } catch { /* ignore */ }
    return { date: getTodayDate(), period: getCurrentPeriod(), count: 0 };
}

function incrementAttempt(): AttemptRecord {
    const record = getAttemptRecord();
    record.count += 1;
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(record));
    return record;
}

function getRemainingAttempts(): number {
    const record = getAttemptRecord();
    return Math.max(0, MAX_ATTEMPTS - record.count);
}

type QuizState = 'name-input' | 'quiz' | 'result' | 'leaderboard' | 'locked';

const CyberQuiz: React.FC = () => {
    const [state, setState] = useState<QuizState>('name-input');
    const [playerName, setPlayerName] = useState('');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [leaderboardLoading, setLeaderboardLoading] = useState(false);
    const [remaining, setRemaining] = useState(getRemainingAttempts());

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(getRemainingAttempts());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const startQuiz = useCallback(() => {
        if (!playerName.trim()) return;
        const attemptsLeft = getRemainingAttempts();
        if (attemptsLeft <= 0) {
            setState('locked');
            return;
        }
        incrementAttempt();
        setRemaining(getRemainingAttempts());
        setQuestions(getRandomQuestions(QUIZ_COUNT));
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setHasAnswered(false);
        setState('quiz');
    }, [playerName]);

    const handleAnswer = (index: number) => {
        if (hasAnswered) return;
        setSelectedAnswer(index);
        setHasAnswered(true);
        if (index === questions[currentIndex].correctIndex) {
            setScore((s) => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((i) => i + 1);
            setSelectedAnswer(null);
            setHasAnswered(false);
        } else {
            const entry: LeaderboardEntry = {
                name: playerName.trim(),
                score,
                total: QUIZ_COUNT,
                date: new Date().toISOString(),
            };
            // Save to Firebase (and localStorage fallback)
            addLeaderboardEntry(entry).then(() => {
                fetchLeaderboard().then(setLeaderboard);
            });
            setState('result');
        }
    };

    const showLeaderboard = async () => {
        setState('leaderboard');
        setLeaderboardLoading(true);
        try {
            const data = await fetchLeaderboard();
            setLeaderboard(data);
        } finally {
            setLeaderboardLoading(false);
        }
    };

    const retakeQuiz = () => {
        const attemptsLeft = getRemainingAttempts();
        if (attemptsLeft <= 0) {
            setState('locked');
            return;
        }
        incrementAttempt();
        setRemaining(getRemainingAttempts());
        setQuestions(getRandomQuestions(QUIZ_COUNT));
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setHasAnswered(false);
        setState('quiz');
    };

    const resetAll = () => {
        setPlayerName('');
        setRemaining(getRemainingAttempts());
        if (getRemainingAttempts() <= 0) {
            setState('locked');
        } else {
            setState('name-input');
        }
    };

    useEffect(() => {
        fetchLeaderboard().then(setLeaderboard);
        const attemptsLeft = getRemainingAttempts();
        setRemaining(attemptsLeft);
        if (attemptsLeft <= 0) {
            setState('locked');
        }
    }, []);

    const currentQ = questions[currentIndex];
    const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
    const isPerfect = score === QUIZ_COUNT;
    const period = getCurrentPeriod();

    const getRankIcon = (index: number) => {
        if (index === 0) return <Crown className="w-5 h-5 text-accent" />;
        if (index === 1) return <Medal className="w-5 h-5 text-gray-400" />;
        if (index === 2) return <Award className="w-5 h-5 text-lilo-sunset" />;
        return <span className="w-5 h-5 inline-flex items-center justify-center text-xs font-bold text-gray-400">#{index + 1}</span>;
    };

    const scorePercent = QUIZ_COUNT > 0 ? Math.round((score / QUIZ_COUNT) * 100) : 0;

    return (
        <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {/* ───────── LOCKED ───────── */}
                {state === 'locked' && (
                    <motion.div
                        key="locked"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl shadow-lg border border-secondary/20 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-secondary via-lilo-sunset to-accent p-1">
                            <div className="bg-white rounded-t-2xl p-8 md:p-12 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-lilo-sunset flex items-center justify-center shadow-lg">
                                    <Clock className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-stitch-dark mb-2">No Attempts Remaining</h3>
                                <p className="text-gray-500 mb-4">
                                    {`You've used your `}<strong>2 tries</strong>{` for this ${period === 'AM' ? 'morning' : 'afternoon'} session.`}
                                </p>
                                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6">
                                    <p className="text-stitch-dark font-medium text-sm">
                                        {`Come back ${period === 'AM' ? 'this afternoon' : 'tomorrow morning'} for 2 more tries!`}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        2 tries every morning (AM) &bull; 2 tries every afternoon (PM)
                                    </p>
                                </div>
                                <button
                                    onClick={showLeaderboard}
                                    className="w-full max-w-sm mx-auto py-3 rounded-xl border-2 border-tropical-sand text-gray-600 font-semibold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                >
                                    <Trophy className="w-4 h-4" /> View Leaderboard
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ───────── NAME INPUT ───────── */}
                {state === 'name-input' && (
                    <motion.div
                        key="name-input"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl shadow-lg border border-stitch-light/20 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-primary via-stitch-light to-tropical-teal p-1">
                            <div className="bg-white rounded-t-2xl p-8 md:p-12 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-stitch-light to-primary flex items-center justify-center shadow-lg">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-stitch-dark mb-2">Ready to Test Your Knowledge?</h3>
                                <p className="text-gray-500 mb-3">
                                    Answer {QUIZ_COUNT} randomized cybersecurity questions. <br />
                                    Your score will be recorded on the leaderboard!
                                </p>

                                {/* Attempt info badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-stitch-light/10 border border-stitch-light/20">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-stitch-dark">
                                        {remaining} {remaining === 1 ? 'try' : 'tries'} left this {period === 'AM' ? 'morning' : 'afternoon'}
                                    </span>
                                </div>

                                {/* Perfect score reward notice */}
                                <div className="bg-gradient-to-r from-accent/10 to-lilo-sunset/10 border border-accent/30 rounded-xl p-4 mb-6 max-w-sm mx-auto">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Gift className="w-5 h-5 text-secondary" />
                                        <span className="font-bold text-secondary text-sm">Perfect Score Reward!</span>
                                    </div>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Score 15/15 and get a <strong>FREE sticker</strong> — present your result to the staff at the booth!
                                    </p>
                                </div>

                                <div className="max-w-sm mx-auto space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={playerName}
                                            onChange={(e) => setPlayerName(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && startQuiz()}
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-tropical-sand focus:border-primary focus:ring-4 focus:ring-stitch-light/20 outline-none transition-all text-stitch-dark font-medium placeholder:text-gray-400"
                                            maxLength={30}
                                            id="quiz-name-input"
                                        />
                                    </div>
                                    <button
                                        onClick={startQuiz}
                                        disabled={!playerName.trim()}
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-stitch-light text-white font-bold text-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        id="quiz-start-btn"
                                    >
                                        Start Quiz <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={showLeaderboard}
                                        className="w-full py-3 rounded-xl border-2 border-tropical-sand text-gray-600 font-semibold hover:border-accent hover:text-stitch-dark transition-all flex items-center justify-center gap-2"
                                        id="quiz-leaderboard-btn"
                                    >
                                        <Trophy className="w-4 h-4" /> View Leaderboard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ───────── QUIZ ───────── */}
                {state === 'quiz' && currentQ && (
                    <motion.div
                        key={`quiz-${currentIndex}`}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.35 }}
                        className="bg-white rounded-3xl shadow-lg border border-stitch-light/20 overflow-hidden"
                    >
                        {/* Progress bar */}
                        <div className="h-1.5 bg-tropical-sand/50">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-stitch-light rounded-r-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-semibold text-primary bg-stitch-light/10 px-3 py-1 rounded-full">
                                    Question {currentIndex + 1} / {questions.length}
                                </span>
                                <span className="text-sm font-semibold text-gray-500">
                                    Score: {score}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-stitch-dark mb-6 leading-relaxed">
                                {currentQ.question}
                            </h3>

                            <div className="space-y-3 mb-8">
                                {currentQ.options.map((option, idx) => {
                                    let optionStyle = 'border-tropical-sand hover:border-stitch-light hover:bg-stitch-light/5';
                                    if (hasAnswered) {
                                        if (idx === currentQ.correctIndex) {
                                            optionStyle = 'border-tropical-green bg-tropical-green/5 ring-2 ring-tropical-green/30';
                                        } else if (idx === selectedAnswer && idx !== currentQ.correctIndex) {
                                            optionStyle = 'border-secondary bg-secondary/5 ring-2 ring-secondary/20';
                                        } else {
                                            optionStyle = 'border-gray-200 opacity-50';
                                        }
                                    } else if (idx === selectedAnswer) {
                                        optionStyle = 'border-primary bg-stitch-light/10 ring-2 ring-stitch-light/30';
                                    }

                                    const letters = ['A', 'B', 'C', 'D'];

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(idx)}
                                            disabled={hasAnswered}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${optionStyle} ${!hasAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                                        >
                                            <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${hasAnswered && idx === currentQ.correctIndex
                                                ? 'bg-tropical-green text-white'
                                                : hasAnswered && idx === selectedAnswer && idx !== currentQ.correctIndex
                                                    ? 'bg-secondary text-white'
                                                    : 'bg-tropical-sand/60 text-stitch-dark'
                                                }`}>
                                                {letters[idx]}
                                            </span>
                                            <span className="font-medium text-gray-800 pt-1">{option}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {hasAnswered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-between"
                                >
                                    <p className={`font-semibold text-sm ${selectedAnswer === currentQ.correctIndex ? 'text-tropical-green' : 'text-secondary'
                                        }`}>
                                        {selectedAnswer === currentQ.correctIndex ? '✓ Correct!' : '✗ Incorrect'}
                                    </p>
                                    <button
                                        onClick={nextQuestion}
                                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-stitch-light text-white font-bold hover:opacity-90 transition-all shadow-md flex items-center gap-2"
                                    >
                                        {currentIndex < questions.length - 1 ? 'Next' : 'See Results'}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* ───────── RESULT ───────── */}
                {state === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-lg border border-stitch-light/20 overflow-hidden"
                    >
                        <div className={`bg-gradient-to-r ${isPerfect ? 'from-accent via-lilo-sunset to-secondary' : 'from-primary via-stitch-light to-tropical-teal'} p-1`}>
                            <div className="bg-white rounded-t-2xl p-8 md:p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                    className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-xl ${isPerfect
                                        ? 'bg-gradient-to-br from-accent to-lilo-sunset'
                                        : 'bg-gradient-to-br from-stitch-light to-primary'
                                        }`}
                                >
                                    {isPerfect
                                        ? <Gift className="w-12 h-12 text-white" />
                                        : <Trophy className="w-12 h-12 text-white" />
                                    }
                                </motion.div>

                                <h3 className="text-2xl font-bold text-stitch-dark mb-1">
                                    {isPerfect ? 'PERFECT SCORE! 🌺' : 'Quiz Complete!'}
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    {isPerfect ? `Incredible, ${playerName}!` : `Great effort, ${playerName}!`}
                                </p>

                                {isPerfect && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-gradient-to-r from-accent/10 via-lilo-sunset/10 to-secondary/10 border-2 border-accent/40 rounded-2xl p-6 mb-8 max-w-md mx-auto"
                                    >
                                        <div className="text-4xl mb-3">🎉🏆🌺</div>
                                        <h4 className="text-xl font-bold text-secondary mb-2">You Won a FREE Sticker!</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            Present this screen to the <strong>staff at the booth</strong> to claim your reward.
                                        </p>
                                        <div className="bg-white/80 rounded-xl p-3 border border-accent/30">
                                            <p className="text-xs text-gray-500 mb-1">Verification</p>
                                            <p className="font-bold text-stitch-dark">{playerName}</p>
                                            <p className="text-sm text-secondary font-semibold">{score}/{QUIZ_COUNT} — Perfect Score</p>
                                            <p className="text-xs text-gray-400 mt-1">{new Date().toLocaleString()}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {!isPerfect && (
                                    <>
                                        <div className="relative w-36 h-36 mx-auto mb-8">
                                            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                                                <circle cx="60" cy="60" r="52" fill="none" stroke="#F5E6D3" strokeWidth="8" />
                                                <motion.circle
                                                    cx="60" cy="60" r="52" fill="none"
                                                    stroke={scorePercent >= 70 ? '#38A169' : scorePercent >= 40 ? '#FFD166' : '#E8475F'}
                                                    strokeWidth="8"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 52}`}
                                                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                                                    animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - scorePercent / 100) }}
                                                    transition={{ duration: 1, delay: 0.3 }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-3xl font-bold text-stitch-dark">{score}</span>
                                                <span className="text-sm text-gray-400">out of {QUIZ_COUNT}</span>
                                            </div>
                                        </div>

                                        <p className="text-lg font-medium text-gray-700 mb-4">
                                            {scorePercent >= 90
                                                ? `🌟 So close! Almost perfect!`
                                                : scorePercent >= 70
                                                    ? `🌟 Great job! You know your stuff!`
                                                    : scorePercent >= 50
                                                        ? `👍 Not bad! Keep learning!`
                                                        : `📚 Keep studying — you'll get there!`}
                                        </p>

                                        <div className="bg-stitch-light/10 border border-stitch-light/20 rounded-xl p-3 mb-6 max-w-sm mx-auto">
                                            <p className="text-primary text-xs">
                                                <Gift className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                                                Score a perfect <strong>15/15</strong> to win a free sticker! 🌺
                                            </p>
                                        </div>
                                    </>
                                )}

                                <div className="bg-tropical-sand/50 rounded-xl p-3 mb-6 max-w-sm mx-auto">
                                    <p className="text-gray-500 text-sm">
                                        <Clock className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                                        {remaining > 0
                                            ? <>{remaining} {remaining === 1 ? 'try' : 'tries'} remaining this {period === 'AM' ? 'morning' : 'afternoon'}</>
                                            : <>No tries left this {period === 'AM' ? 'morning' : 'afternoon'}</>
                                        }
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                                    {remaining > 0 && (
                                        <button
                                            onClick={retakeQuiz}
                                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-stitch-light text-white font-bold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                                        >
                                            <RotateCcw className="w-4 h-4" /> Retake
                                        </button>
                                    )}
                                    <button
                                        onClick={showLeaderboard}
                                        className="flex-1 py-3 rounded-xl border-2 border-tropical-sand text-gray-600 font-semibold hover:border-accent hover:text-stitch-dark transition-all flex items-center justify-center gap-2"
                                    >
                                        <Trophy className="w-4 h-4" /> Leaderboard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ───────── LEADERBOARD ───────── */}
                {state === 'leaderboard' && (
                    <motion.div
                        key="leaderboard"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl shadow-lg border border-stitch-light/20 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-accent via-lilo-sunset to-secondary p-1">
                            <div className="bg-white rounded-t-2xl p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-lilo-sunset flex items-center justify-center shadow-lg">
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-stitch-dark">Leaderboard</h3>
                                    <p className="text-gray-500 text-sm mt-1">Top quiz scores</p>
                                </div>

                                {leaderboardLoading ? (
                                    <div className="text-center py-8 text-gray-400">
                                        <Loader2 className="w-8 h-8 mx-auto mb-2 animate-spin text-primary" />
                                        <p className="text-sm">Loading leaderboard...</p>
                                    </div>
                                ) : leaderboard.length === 0 ? (
                                    <div className="text-center py-8 text-gray-400">
                                        <p className="text-lg font-medium">No scores yet</p>
                                        <p className="text-sm">Be the first to take the quiz!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {leaderboard.slice(0, 10).map((entry, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${idx === 0
                                                    ? 'bg-gradient-to-r from-accent/10 to-lilo-sunset/10 border border-accent/30'
                                                    : idx === 1
                                                        ? 'bg-gray-50 border border-gray-200'
                                                        : idx === 2
                                                            ? 'bg-secondary/5 border border-secondary/20'
                                                            : 'hover:bg-tropical-sand/30'
                                                    }`}
                                            >
                                                <div className="flex-shrink-0">{getRankIcon(idx)}</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-semibold text-stitch-dark truncate">{entry.name}</p>
                                                        {entry.score === entry.total && (
                                                            <span className="text-xs bg-accent/20 text-secondary px-1.5 py-0.5 rounded-full font-bold">🌺 Perfect</span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-gray-400">
                                                        {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-lg font-bold text-primary">{entry.score}</span>
                                                    <span className="text-sm text-gray-400">/{entry.total}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-8 flex gap-3">
                                    <button
                                        onClick={resetAll}
                                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-stitch-light text-white font-bold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                                    >
                                        <RotateCcw className="w-4 h-4" /> New Quiz
                                    </button>
                                    <button
                                        onClick={() => {
                                            setRemaining(getRemainingAttempts());
                                            if (getRemainingAttempts() <= 0) {
                                                setState('locked');
                                            } else {
                                                setState('name-input');
                                            }
                                        }}
                                        className="flex-1 py-3 rounded-xl border-2 border-tropical-sand text-gray-600 font-semibold hover:border-primary hover:text-primary transition-all"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CyberQuiz;
