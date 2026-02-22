import { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    glowIntensity: number;
}

const CyberBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas to fill the window
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Create particles/nodes
        const NODE_COUNT = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
        const CONNECTION_DISTANCE = 180;
        const nodes: Node[] = [];

        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() > 0.85 ? 2.5 + Math.random() * 2 : 1 + Math.random() * 1.5,
                opacity: 0.3 + Math.random() * 0.7,
                glowIntensity: Math.random() > 0.7 ? 15 + Math.random() * 10 : 6 + Math.random() * 8,
            });
        }

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear with gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0e27');    // Deep navy
            gradient.addColorStop(0.4, '#0d1440');  // Dark indigo
            gradient.addColorStop(0.7, '#111b5e');  // Rich blue
            gradient.addColorStop(1, '#0a1628');    // Dark blue-black
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update node positions
            for (const node of nodes) {
                node.x += node.vx;
                node.y += node.vy;

                // Wrap around edges
                if (node.x < -10) node.x = canvas.width + 10;
                if (node.x > canvas.width + 10) node.x = -10;
                if (node.y < -10) node.y = canvas.height + 10;
                if (node.y > canvas.height + 10) node.y = -10;
            }

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(100, 160, 255, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes with glow
            for (const node of nodes) {
                // Outer glow
                const glowGradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.glowIntensity
                );
                glowGradient.addColorStop(0, `rgba(0, 200, 255, ${node.opacity * 0.4})`);
                glowGradient.addColorStop(0.5, `rgba(60, 140, 255, ${node.opacity * 0.15})`);
                glowGradient.addColorStop(1, 'rgba(60, 140, 255, 0)');
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.glowIntensity, 0, Math.PI * 2);
                ctx.fillStyle = glowGradient;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(120, 220, 255, ${node.opacity})`;
                ctx.fill();
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
};

export default CyberBackground;
