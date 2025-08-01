
'use client';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "MediMeet",
    description: "A Full Stack App for Doctor Appointments & 1:1 Video Consultations 🚀🎥 Proud to unveil MediMeet, a secure and scalable doctor-patient platform built to simplify online consultations and streamline healthcare access.",
    technologies: ["Next.js", "Vonage", "Prisma", "Tailwind Css", "ShadCn UI"],
    image: "/assets/medimeet.png",
    github: "https://github.com/Subhashis012/MediMeet",
    live: "https://medi-meet-jade.vercel.app/"
  },
  {
    id: 2,
    title: "Vehiql",
    description: "An AI-Powered Car Marketplace Built with Next.js & Gemini AI 🔍🤖",
    technologies: ["Next.js", "Gemini AI", "Prisma", "Tailwind Css", "ShadCn UI"],
    image: "/assets/vehiql.png",
    github: "https://github.com/Subhashis012/vehiql",
    live: "https://task-manager-demo.vercel.app"
  },
  {
    id: 3,
    title: "Vybe Social Dashboard",
    description: "Excited to launch Vybe, a powerful, feature-rich social media web app inspired by Instagram, with modern social experiences like Reels, Stories, Chat, and Real-Time Notifications — all built from scratch using the MERN stack.",
    technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS", "Cloudinary"],
    image: "/assets/vybe.png",
    github: "https://github.com/Subhashis012/VYBE",
    live: "https://social-dashboard-demo.vercel.app"
  },
  {
    id: 4,
    title: "GreenCart - E-commerce",
    description: "Excited to share GreenCart, a modern and scalable grocery delivery web application designed for both customers and sellers. Built using the powerful MERN stack, it offers a seamless and secure shopping experience from browsing to checkout.",
    technologies: ["React.js", "Node.js", "Stripe", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/assets/greencart.png",
    github: "https://github.com/Subhashis012/GreenCart",
    live: "https://green-cart-gamma.vercel.app/"
  },
  {
    id: 5,
    title: "PrepWise - AI Interview Assistant",
    description: "AI-powered interview preparation tool with voice recognition, feedback system, and personalized coaching for technical interviews.",
    technologies: ["Next.js", "Vapi API", "Speech Recognition", "Firebase"],
    image: "/assets/prepwise.png",
    github: "https://github.com/Subhashis012/mock_interview_platform",
    live: "https://mock-interview-platform-ecru.vercel.app/"
  },
  {
    id: 6,
    title: "SwiftTalk  - Real-Time Chat App",
    description: "Thrilled to share SwiftTalk, a fully functional and responsive chat application that delivers real-time messaging.",
    technologies: ["React", "Socket.io", "Node.js", "Express.js" , "MongoDB"],
    image: "/assets/swifttalk.png",
    github: "https://github.com/Subhashis012/SwiftTalk",
    live: "https://swift-talk-delta.vercel.app/"
  },
  {
    id: 7,
    title: "SnapCast",
    description: "Comprehensive cryptocurrency portfolio management with real-time prices, analytics, and investment tracking dashboard.",
    technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Firebase"],
    image: "/assets/snapcast.png",
    github: "https://github.com/Subhashis012/SnapCast",
    live: "https://snap-cast-bice.vercel.app/"
  },
  {
    id: 8,
    title: "YC Directory - A Blogging Platform",
    description: "Proud to share YC Directory, a powerful and content-driven platform designed to help users explore, share, and blog ideas across multiple categories. Whether you're an innovator, entrepreneur, or blogger — this app streamlines idea discovery and documentation.",
    technologies: ["Next.js", "Sanity.io", "Sentry", "Tailwind CSS"],
    image: "/assets/yc.png",
    github: "https://github.com/Subhashis012/yc_directory",
    live: "https://yc-directory-beryl.vercel.app/"
  },
  // {
  //   id: 9,
  //   title: "Food Delivery App",
  //   description: "Mobile-first food ordering platform with restaurant management, real-time tracking, and payment integration.",
  //   technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
  //   image: "https://readdy.ai/api/search-image?query=Food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20food%20items%2C%20ordering%20system%2C%20modern%20food%20app%20design%2C%20delivery%20application%20mockup&width=400&height=250&seq=project-food-009&orientation=landscape",
  //   github: "https://github.com/subhashisdhara",
  //   live: "https://food-delivery-demo.vercel.app"
  // }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work in web development and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => openLink(project.live)}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Website Link
                    </button>
                    <button 
                      onClick={() => openLink(project.github)}
                      className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      GitHub Repository Link
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openLink(project.github)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line text-white text-sm"></i>
                    </button>
                    <button 
                      onClick={() => openLink(project.live)}
                      className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line text-white text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none rounded-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div 
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </section>
  );
}
