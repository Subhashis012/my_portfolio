
'use client';
import { useState, useRef, useEffect } from 'react';

const developmentJourney = [
  {
    period: "June 2023 - November 2023",
    role: "Frontend Developer",
    icon: "ri-reactjs-line",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    description: "Diving into frontend development was a game-changer for me. It helped me express ideas visually and taught me the importance of clean, user-friendly design.",
    responsibilities: [
      "Built multiple responsive websites and web apps using HTML, CSS, JavaScript, and React.",
      "Learned and implemented modern frontend practices like component-based architecture and state management.",
      "Explored popular tools and libraries such as Tailwind CSS, React Router, and Axios.",
      "Focused on clean UI design and improved UX through continuous iterations.",
      "Collaborated with peers on GitHub and participated in open-source projects to gain real-world experience."
    ],
    testimonial: "Frontend development transformed how I approach problem-solving and user experience design.",
    rating: 5
  },
  {
    period: "November 2023 - April 2024",
    role: "Backened Developer",
    icon: "ri-code-s-slash-line",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-50",
    description: "Learning backend development gave me a deeper understanding of how web apps function behind the scenes. It was exciting to bring real logic and data handling into my projects.",
    responsibilities: [
      "Learned core backend concepts including REST APIs, authentication, and database design.",
      "Built full-stack projects using Node.js, Express.js, and MongoDB.",
      "Integrated third-party APIs and services to add real-world functionality to apps.",
      "Implemented user authentication using JWT and session-based strategies.",
      "Handled file uploads, form data processing, and error handling in server-side apps.",
      "Used tools like Postman for API testing and MongoDB Atlas for cloud database management.",
      "Deployed backend services on platforms like Render and Vercel for real-time access.",
    ],
    testimonial: "Every day brings new challenges and opportunities to grow as a software engineer.",
    rating: 5
  },
  {
    period: "June 2024 - Present",
    role: "Full Stack Developer",
    icon: "ri-code-box-line",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-50",
    description: "Transitioning to full-stack development opened up endless possibilities. I learned to build complete applications from database to deployment.",
    responsibilities: [
      "Developed end-to-end web applications using MERN stack (MongoDB, Express.js, React, Node.js).",
      "Implemented RESTful APIs and integrated third-party services and databases.",
      "Learned backend concepts including authentication, authorization, and data validation.",
      "Deployed applications on platforms like Vercel, Render, and Firebase.",
      "Worked with real-time features using Socket.IO and state management with Redux."
    ],
    testimonial: "Full-stack development gave me the complete picture of how modern web applications work.",
    rating: 5
  },
];

export default function DSAJourney() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringJourney, setIsHoveringJourney] = useState(false);
  const [cardRotations, setCardRotations] = useState<{[key: number]: { x: number, y: number }}>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardHover = (index: number, e: React.MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (centerX - e.clientX) / 10;
    
    setCardRotations(prev => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY }
    }));
  };

  const handleCardLeave = (index: number) => {
    setCardRotations(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900/50 to-black/80"></div>

      {/* Journey Section Custom Cursor */}
      {isHoveringJourney && (
        <>
          <div 
            className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-200 ease-out"
            style={{
              left: cursorPosition.x - 20,
              top: cursorPosition.y - 20,
              width: '40px',
              height: '40px',
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-white/70 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full animate-spin"></div>
              <div className="absolute inset-3 bg-black/30 backdrop-blur-sm rounded-full"></div>
            </div>
          </div>

          <div 
            className="fixed pointer-events-none z-40 transition-all duration-500 ease-out"
            style={{
              left: cursorPosition.x - 50,
              top: cursorPosition.y - 50,
              width: '100px',
              height: '100px',
              background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.3), transparent)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              filter: 'blur(12px)'
            }}
          ></div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            My Development{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
            From frontend enthusiast to full-stack developer - my journey through code and creativity
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-16">
            {developmentJourney.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => {
                  setHoveredCard(index);
                  setIsHoveringJourney(true);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setIsHoveringJourney(false);
                  handleCardLeave(index);
                }}
                onMouseMove={(e) => handleCardHover(index, e)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl border-4 border-white/20 transition-all duration-300 ${
                    hoveredCard === index ? 'scale-125 rotate-12' : 'scale-100'
                  }`}>
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}
                  style={{
                    transform: cardRotations[index] 
                      ? `perspective(1000px) rotateX(${cardRotations[index].x}deg) rotateY(${cardRotations[index].y}deg) translateZ(20px)` 
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-white/20 hover:border-purple-400/50 transform hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Mobile Timeline Node */}
                    <div className="lg:hidden mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl mx-auto`}>
                        <i className={`${item.icon} text-xl text-white`}></i>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                          {item.role}
                        </h3>
                        <div className="flex">
                          {[...Array(item.rating)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm sm:text-base text-blue-300 mb-4 font-medium">
                        {item.period}
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2 text-gray-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-4 border border-gray-600/30">
                        <p className="text-gray-300 italic text-sm sm:text-base">
                          "{item.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Interactive Background */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1), transparent)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          filter: 'blur(20px)'
        }}
      ></div>

      {/* Floating Animation Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
    </section>
  );
}
