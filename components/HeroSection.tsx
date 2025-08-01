"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      hue: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 5 + 2,
        alpha: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 80 + 200,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    let time = 0;
    const animate = () => {
      time += 0.02;
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += dx * 0.00015 * force;
          particle.vy += dy * 0.00015 * force;
        }

        const pulse = Math.sin(time * particle.pulseSpeed) * 0.5 + 0.5;
        const dynamicSize = particle.size * (0.6 + pulse * 0.6);
        const dynamicAlpha = particle.alpha * (0.5 + pulse * 0.5);

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          dynamicSize * 4
        );
        gradient.addColorStop(
          0,
          `hsla(${particle.hue}, 90%, 70%, ${dynamicAlpha})`
        );
        gradient.addColorStop(
          0.3,
          `hsla(${particle.hue}, 80%, 60%, ${dynamicAlpha * 0.7})`
        );
        gradient.addColorStop(
          0.7,
          `hsla(${particle.hue}, 70%, 50%, ${dynamicAlpha * 0.3})`
        );
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (1 - distance / 150) * 0.4;
              const gradient = ctx.createLinearGradient(
                particle.x,
                particle.y,
                otherParticle.x,
                otherParticle.y
              );
              gradient.addColorStop(
                0,
                `hsla(${particle.hue}, 80%, 70%, ${opacity})`
              );
              gradient.addColorStop(
                0.5,
                `hsla(${(particle.hue + otherParticle.hue) / 2}, 85%, 65%, ${
                  opacity * 1.2
                })`
              );
              gradient.addColorStop(
                1,
                `hsla(${otherParticle.hue}, 80%, 70%, ${opacity})`
              );

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none"></div>

      {/* Enhanced Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          width: "40px",
          height: "40px",
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white rounded-full animate-spin"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Cursor Trail Effect */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-700 ease-out"
        style={{
          left: cursorPosition.x - 50,
          top: cursorPosition.y - 50,
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.15) 30%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(10px)",
        }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="floating-element mb-6 sm:mb-8">
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-pulse cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src="/assets/profile.jpg"
              alt="Subhashis Dhara"
              width={160} // optional: provide width & height for optimization
              height={160}
              className="rounded-full object-cover object-top w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 floating-text">
          Hi, I'm
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Subhashis Dhara
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 floating-text-delayed">
          A Passionate Full Stack Developer
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed floating-text-delayed-2">
          Passionate about creating innovative web applications with modern
          technologies. I bring ideas to life through clean code and exceptional
          user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center floating-buttons">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => setIsHoveringHero(true)}
              onMouseLeave={() => setIsHoveringHero(false)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              onMouseEnter={() => setIsHoveringHero(true)}
              onMouseLeave={() => setIsHoveringHero(false)}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:border-white/40 hover:scale-105 transform transition-all duration-300 hover:bg-white/20 whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <span>View Journey</span>
                <i className="ri-roadmap-line group-hover:scale-110 transition-transform"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("tech-stack")}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
}
