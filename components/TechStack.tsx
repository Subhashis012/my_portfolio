
'use client';
import { useState, useRef, useEffect } from 'react';

const techStack = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "C", icon: "ri-code-s-slash-line", color: "text-blue-600", bg: "bg-blue-50", hoverBg: "hover:bg-blue-100", gradient: "from-blue-600 to-indigo-600" },
      { name: "Java", icon: "ri-cup-line", color: "text-orange-600", bg: "bg-orange-50", hoverBg: "hover:bg-orange-100", gradient: "from-orange-600 to-red-600" },
      { name: "JavaScript", icon: "ri-javascript-line", color: "text-yellow-500", bg: "bg-yellow-50", hoverBg: "hover:bg-yellow-100", gradient: "from-yellow-400 to-orange-400" },
      { name: "Python", icon: "ri-code-line", color: "text-green-600", bg: "bg-green-50", hoverBg: "hover:bg-green-100", gradient: "from-green-600 to-emerald-600" }
    ]
  },
  {
    category: "Frontend Technologies",
    technologies: [
      { name: "React", icon: "ri-reactjs-line", color: "text-blue-500", bg: "bg-blue-50", hoverBg: "hover:bg-blue-100", gradient: "from-blue-400 to-cyan-400" },
      { name: "Next.js", icon: "ri-nextjs-line", color: "text-black", bg: "bg-gray-50", hoverBg: "hover:bg-gray-100", gradient: "from-gray-700 to-gray-900" },
      { name: "Tailwind CSS", icon: "ri-css3-line", color: "text-cyan-500", bg: "bg-cyan-50", hoverBg: "hover:bg-cyan-100", gradient: "from-cyan-400 to-teal-400" },
      { name: "Redux", icon: "ri-refresh-line", color: "text-purple-600", bg: "bg-purple-50", hoverBg: "hover:bg-purple-100", gradient: "from-purple-600 to-indigo-600" }
    ]
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-500", bg: "bg-green-50", hoverBg: "hover:bg-green-100", gradient: "from-green-500 to-emerald-500" },
      { name: "Express.js", icon: "ri-server-line", color: "text-gray-600", bg: "bg-gray-50", hoverBg: "hover:bg-gray-100", gradient: "from-gray-600 to-slate-600" },
      { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-600", bg: "bg-green-50", hoverBg: "hover:bg-green-100", gradient: "from-green-600 to-lime-600" },
      { name: "Socket.io", icon: "ri-broadcast-line", color: "text-red-500", bg: "bg-red-50", hoverBg: "hover:bg-red-100", gradient: "from-red-500 to-pink-500" }
    ]
  },
  {
    category: "Tools & Services",
    technologies: [
      { name: "GitHub", icon: "ri-github-line", color: "text-gray-800", bg: "bg-gray-50", hoverBg: "hover:bg-gray-100", gradient: "from-gray-800 to-black" },
      { name: "Postman", icon: "ri-mail-send-line", color: "text-orange-500", bg: "bg-orange-50", hoverBg: "hover:bg-orange-100", gradient: "from-orange-500 to-red-500" },
      { name: "Vercel", icon: "ri-triangle-line", color: "text-black", bg: "bg-gray-50", hoverBg: "hover:bg-gray-100", gradient: "from-gray-700 to-black" },
      { name: "Render", icon: "ri-cloud-line", color: "text-green-600", bg: "bg-green-50", hoverBg: "hover:bg-green-100", gradient: "from-green-600 to-teal-600" }
    ]
  },
  {
    category: "Cloud & Backend Services",
    technologies: [
      { name: "Firebase", icon: "ri-fire-line", color: "text-orange-400", bg: "bg-orange-50", hoverBg: "hover:bg-orange-100", gradient: "from-orange-400 to-yellow-400" },
      { name: "Appwrite", icon: "ri-database-line", color: "text-pink-500", bg: "bg-pink-50", hoverBg: "hover:bg-pink-100", gradient: "from-pink-500 to-rose-500" }
    ]
  }
];

export default function TechStack() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [rotations, setRotations] = useState<{[key: string]: { x: number, y: number, spin: number }}>({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringTech, setIsHoveringTech] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>();

  // useEffect(() => {
  //   const initialRotations: {[key: string]: { x: number, y: number, spin: number }} = {};
  //   techStack.forEach(category => {
  //     category.technologies.forEach(tech => {
  //       initialRotations[tech.name] = { x: 0, y: 0, spin: 0 };
  //     });
  //   });
  //   setRotations(initialRotations);

  //   const handleGlobalMouseMove = (e: MouseEvent) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener('mousemove', handleGlobalMouseMove);
  //   return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  // }, []);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (sectionRef.current) {
  //       const rect = sectionRef.current.getBoundingClientRect();
  //       setMousePosition({
  //         x: e.clientX - rect.left,
  //         y: e.clientY - rect.top
  //       });
  //     }
  //   };

  //   const animate = () => {
  //     setRotations(prev => {
  //       const newRotations: {[key: string]: { x: number, y: number, spin: number }} = {};
  //       Object.keys(prev).forEach(key => {
  //         newRotations[key] = {
  //           x: prev[key].x + (Math.random() - 0.5) * 0.2,
  //           y: prev[key].y + (Math.random() - 0.5) * 0.2,
  //           spin: prev[key].spin + 0.5
  //         };
  //       });
  //       return newRotations;
  //     });
  //     animationRef.current = requestAnimationFrame(animate);
  //   };

  //   const section = sectionRef.current;
  //   if (section) {
  //     section.addEventListener('mousemove', handleMouseMove);
  //     animationRef.current = requestAnimationFrame(animate);
      
  //     return () => {
  //       section.removeEventListener('mousemove', handleMouseMove);
  //       if (animationRef.current) {
  //         cancelAnimationFrame(animationRef.current);
  //       }
  //     };
  //   }
  // }, []);

  const getTechCardTransform = (tech: any, isHovered: boolean) => {
    const baseRotation = rotations[tech.name] || { x: 0, y: 0, spin: 0 };
    if (isHovered) {
      return `perspective(1000px) rotateX(${baseRotation.x + 15}deg) rotateY(${baseRotation.y + 15}deg) rotateZ(${baseRotation.spin}deg) translateZ(40px) scale(1.12)`;
    }
    return `perspective(1000px) rotateX(${baseRotation.x}deg) rotateY(${baseRotation.y}deg) rotateZ(${baseRotation.spin * 0.3}deg) translateZ(0px)`;
  };

  const getIconTransform = (tech: any, isHovered: boolean) => {
    const baseRotation = rotations[tech.name] || { spin: 0 };
    const maxSpin = baseRotation.spin % 360;
    const limitedSpin = maxSpin > 180 ? 180 - (maxSpin - 180) : maxSpin;
    
    if (isHovered) {
      return `rotateY(180deg) rotateZ(${limitedSpin * 2}deg) scale(1.3)`;
    }
    return `rotateY(${limitedSpin}deg) scale(1)`;
  };

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-black/60"></div>
      
      {/* Advanced 3D Custom Cursor for Tech Section */}
      {isHoveringTech && (
        <>
          <div 
            className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-200 ease-out"
            style={{
              left: cursorPosition.x - 18,
              top: cursorPosition.y - 18,
              width: '36px',
              height: '36px',
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-white/80 rounded-full animate-pulse"></div>
              <div 
                className="absolute inset-1 rounded-full animate-spin"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                }}
              ></div>
              <div className="absolute inset-3 bg-black/40 backdrop-blur-sm rounded-full"></div>
            </div>
          </div>

          {/* 3D Cursor Ripple Layers */}
          {[1, 2, 3].map((layer) => (
            <div 
              key={layer}
              className="fixed pointer-events-none z-40 transition-all duration-300 ease-out"
              style={{
                left: cursorPosition.x - (30 + layer * 15),
                top: cursorPosition.y - (30 + layer * 15),
                width: `${60 + layer * 30}px`,
                height: `${60 + layer * 30}px`,
                background: `conic-gradient(from ${layer * 120}deg, transparent, rgba(147, 51, 234, ${0.2 / layer}), rgba(59, 130, 246, ${0.15 / layer}), transparent)`,
                borderRadius: '50%',
                transform: `translate(-50%, -50%) rotate(${layer * 45}deg)`,
                filter: `blur(${layer * 5}px)`,
                animationDuration: `${2 + layer}s`
              }}
            ></div>
          ))}
        </>
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            My{''}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              3D Tech Universe
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
            Explore my comprehensive technology stack with immersive 3D interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ transformStyle: 'preserve-3d' }}>
          {techStack.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="tech-category-card relative group col-span-1"
              style={{
                transform: `perspective(1000px) rotateX(${Math.sin(categoryIndex * 0.5) * 3}deg) rotateY(${Math.cos(categoryIndex * 0.5) * 3}deg)`,
                transformStyle: 'preserve-3d',
                animationDelay: `${categoryIndex * 0.15}s`
              }}
              onMouseEnter={() => setIsHoveringTech(true)}
              onMouseLeave={() => setIsHoveringTech(false)}
            >
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 border border-white/20 hover:border-purple-400/60 transform hover:-translate-y-6 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="relative text-xl sm:text-2xl font-bold text-white mb-6 text-center drop-shadow-lg z-10">
                  {category.category}
                </h3>
                
                <div className="relative grid grid-cols-1 gap-4 sm:gap-5 z-10">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="tech-card relative group/tech cursor-pointer"
                      onMouseEnter={() => {
                        setHoveredTech(tech.name);
                        setIsHoveringTech(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredTech(null);
                      }}
                      style={{
                        // transform: (tech, hoveredTech === tech.name),
                        transformStyle: 'preserve-3d',
                        transition: 'all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
                        animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                      }}
                    >
                      <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-lg border border-white/40 hover:border-white/70 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover/tech:opacity-40 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        {/* 3D Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        
                        <div className="flex items-center space-x-4 relative z-10">
                          <div 
                            className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${tech.gradient} text-white text-2xl sm:text-3xl transition-all duration-500 shadow-xl`}
                            style={{
                              transform: getIconTransform(tech, hoveredTech === tech.name),
                              transformStyle: 'preserve-3d',
                              boxShadow: hoveredTech === tech.name ? 
                                `0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(147, 51, 234, 0.8), inset 0 0 20px rgba(255,255,255,0.3)` : 
                                '0 6px 12px rgba(0,0,0,0.2)'
                            }}
                          >
                            <i className={tech.icon}></i>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md transition-all duration-300">
                              {tech.name}
                            </h4>
                          </div>
                        </div>
                        
                        {hoveredTech === tech.name && (
                          <>
                            {/* Animated 3D Border Effect */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none">
                              <div 
                                className="absolute inset-0 rounded-2xl animate-spin"
                                style={{
                                  background: `conic-gradient(from 0deg, ${tech.gradient.split(' ')[1]}, ${tech.gradient.split(' ')[3]}, transparent, ${tech.gradient.split(' ')[1]})`,
                                  padding: '2px',
                                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                  maskComposite: 'subtract'
                                }}
                              ></div>
                            </div>
                            
                            {/* Pulsing Inner Glow */}
                            <div className="absolute inset-2 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-xl pointer-events-none animate-pulse"></div>
                            
                            {/* Floating Particles */}
                            <div className="absolute inset-0 pointer-events-none">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white/80 rounded-full animate-ping"
                                  style={{
                                    left: `${20 + i * 10}%`,
                                    top: `${20 + (i % 2) * 40}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: `${1.5 + i * 0.3}s`
                                  }}
                                ></div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced 3D Interactive Background */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: '500px',
          height: '500px',
          background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.12), rgba(168, 85, 247, 0.08), transparent)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          filter: 'blur(30px)'
        }}
      ></div>

      {/* Multiple Interactive Background Layers */}
      {[1, 2, 3].map((layer) => (
        <div 
          key={layer}
          className="absolute pointer-events-none transition-all duration-500 ease-out z-0"
          style={{
            left: mousePosition.x - (100 + layer * 50),
            top: mousePosition.y - (100 + layer * 50),
            width: `${200 + layer * 100}px`,
            height: `${200 + layer * 100}px`,
            background: `radial-gradient(circle, rgba(147, 51, 234, ${0.1 / layer}) 0%, rgba(59, 130, 246, ${0.08 / layer}) 40%, transparent 70%)`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: `blur(${15 + layer * 5}px)`
          }}
        ></div>
      ))}

      {/* Enhanced Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className={`absolute w-${Math.floor(i/4) + 1} h-${Math.floor(i/4) + 1} rounded-full animate-ping`}
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${15 + (i * 8) % 70}%`,
            background: `linear-gradient(45deg, ${
              i % 4 === 0 ? 'rgb(59, 130, 246)' :
              i % 4 === 1 ? 'rgb(147, 51, 234)' :
              i % 4 === 2 ? 'rgb(168, 85, 247)' :
              'rgb(236, 72, 153)'
            }, transparent)`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + (i % 3)}s`
          }}
        ></div>
      ))}
    </section>
  );
}
