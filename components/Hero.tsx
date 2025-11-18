
import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: -1000, y: -1000, radius: 100 };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(150, 150, 150, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
            
            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

                const dxMouse = mouse.x - this.x;
                const dyMouse = mouse.y - this.y;
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                
                if (distanceMouse < mouse.radius) {
                    this.x -= dxMouse / 20;
                    this.y -= dyMouse / 20;
                } else {
                    this.x += this.speedX;
                    this.y += this.speedY;
                }

                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() * 0.4) - 0.2;
                const speedY = (Math.random() * 0.4) - 0.2;
                particles.push(new Particle(x, y, size, speedX, speedY));
            }
        };

        const connect = () => {
             if (!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        opacityValue = 1 - (distance/120);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue})`; // cyan-500
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles) {
              p.update();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        resizeCanvas();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-1"></div>
            <div className="container mx-auto px-6 text-center relative z-10 hero-content">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-title">
                    Architect of Intelligent Automation
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-cyan-400 animate-subtitle">
                    AI & Machine Learning Engineer | Backend Specialist
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-description">
                    Crafting intelligent, autonomous systems that solve real-world problems. From complex Agentic AI workflows to scalable backend architectures, my passion is turning data into impactful, automated solutions.
                </p>
                <div className="animate-buttons flex flex-wrap justify-center gap-4">
                    <a 
                        href="#contact" 
                        className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                    <a 
                        href="#projects" 
                        className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </a>
                     <a 
                        href="/OmResume.pdf"
                        download
                        className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg shadow-lg hover:bg-cyan-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;