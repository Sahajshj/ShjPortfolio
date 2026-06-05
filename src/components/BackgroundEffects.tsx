/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking for ambient glow spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  // Canvas floating particle network simulation representing DevOps packets
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle structure
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      alphaSpeed: number;
    }

    const particles: Particle[] = [];
    const maxParticles = width < 768 ? 25 : 55;
    const colors = ['#00E5FF', '#7B61FF', '#00FFB2'];

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
        alphaSpeed: (Math.random() - 0.5) * 0.005,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            const currentAlpha = Math.min(p1.alpha, p2.alpha) * (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(0, 229, 255, ${currentAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Sparkle alpha
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.7) {
          p.alphaSpeed *= -1;
        }
        // Clamping alpha just in case
        p.alpha = Math.max(0.08, Math.min(0.7, p.alpha));
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="tech-bg-container" className="fixed inset-0 z-0 overflow-hidden bg-[#0A0F1E] pointer-events-none">
      {/* Dynamic Grid Overlay */}
      <div id="grid-backdrop" className="absolute inset-0 tech-grid opacity-35" />
      <div id="dot-backdrop" className="absolute inset-0 tech-dots opacity-40" />

      {/* Futuristic Aurora Animated Mesh Clouds */}
      <div id="aurora-clouds" className="absolute inset-0 opacity-20 filter blur-[90px] mix-blend-screen">
        <div 
          id="aurora-cyan"
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] animate-aurora opacity-70"
          style={{ animationDuration: '24s' }}
        />
        <div 
          id="aurora-purple"
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#7B61FF] to-[#00FFB2] animate-aurora opacity-60"
          style={{ animationDuration: '30s', animationDelay: '-5s' }}
        />
        <div 
          id="aurora-green"
          className="absolute top-[30%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-[#00FFB2] to-[#00E5FF] animate-aurora opacity-50"
          style={{ animationDuration: '18s', animationDelay: '-12s' }}
        />
      </div>

      {/* Active Interactive Glowing Mouse Cursor spotlight */}
      <div
        id="mouse-spotlight"
        className="absolute hidden md:block w-[700px] h-[700px] rounded-full pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x - 350}px, ${mousePos.y - 350}px)`,
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.04) 0%, rgba(123, 97, 255, 0.02) 40%, transparent 70%)',
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Decorative vertical light beam on the right margin */}
      <div id="right-side-lightbar" className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00E5FF]/25 to-transparent shadow-[0_0_10px_rgba(0,229,255,0.2)]" />
      <div id="left-side-lightbar" className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#7B61FF]/15 to-transparent" />

      {/* Particles canvas */}
      <canvas id="particles-canvas" ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
