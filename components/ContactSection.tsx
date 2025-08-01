
'use client';
import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringForm, setIsHoveringForm] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'subhashisdhara789@gmail.com',
      link: 'mailto:subhashisdhara789@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 6289034783',
      link: 'tel:+916289034783',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Kolkata, West Bengal',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'ri-github-line',
      url: 'https://github.com/Subhashis012',
      color: 'hover:from-gray-600 hover:to-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-line',
      url: 'https://www.linkedin.com/in/subhashisdhara/',
      color: 'hover:from-blue-600 hover:to-blue-700'
    },
    // {
    //   name: 'Twitter',
    //   icon: 'ri-twitter-line',
    //   url: 'https://twitter.com/subhashisdhara',
    //   color: 'hover:from-blue-400 hover:to-blue-500'
    // },
    {
      name: 'Instagram',
      icon: 'ri-instagram-line',
      url: 'https://www.instagram.com/subhashis_dhara_1/',
      color: 'hover:from-pink-500 hover:to-rose-500'
    }
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden"
    >
      {/* Dark Theme Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-black/90"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        ></div>
      ))}

      {/* Contact Section Custom Cursor */}
      {isHoveringForm && (
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
              <div className="absolute inset-0 border-2 border-cyan-400/80 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-spin opacity-90"></div>
              <div className="absolute inset-3 bg-black/50 backdrop-blur-sm rounded-full"></div>
            </div>
          </div>

          {/* Contact Cursor Glow Effect */}
          <div 
            className="fixed pointer-events-none z-40 transition-all duration-500 ease-out"
            style={{
              left: cursorPosition.x - 40,
              top: cursorPosition.y - 40,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(12px)'
            }}
          ></div>
        </>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
            Let's collaborate and bring your innovative ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <div className="space-y-6 sm:space-y-8">
            <div 
              className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsHoveringForm(true)}
              onMouseLeave={() => setIsHoveringForm(false)}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-lg z-10">
                Contact Information
              </h3>
              
              <div className="relative space-y-4 z-10">
                {contactInfo.map((info, index) => (
                  <button
                    key={index}
                    onClick={() => openLink(info.link)}
                    onMouseEnter={() => setIsHoveringForm(true)}
                    onMouseLeave={() => setIsHoveringForm(false)}
                    className="w-full flex items-center space-x-4 p-4 sm:p-5 rounded-2xl hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50 transition-all duration-400 cursor-pointer group border border-transparent hover:border-gray-600/50"
                  >
                    <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <i className={`${info.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-semibold text-white text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{info.value}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="relative mt-8 z-10">
                <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => openLink(social.url)}
                      onMouseEnter={() => setIsHoveringForm(true)}
                      onMouseLeave={() => setIsHoveringForm(false)}
                      className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-xl hover:scale-110 hover:rotate-12 transition-all duration-400 cursor-pointer shadow-lg border border-gray-600/30 hover:border-gray-500/50 ${social.color} hover:text-white`}
                    >
                      <i className={`${social.icon} text-2xl`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
            onMouseEnter={() => setIsHoveringForm(true)}
            onMouseLeave={() => setIsHoveringForm(false)}
          >
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-purple-600/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-lg z-10">
              Send Message
            </h3>
            
            <form id="contact-form" onSubmit={handleSubmit} className="relative space-y-6 z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setIsHoveringForm(true)}
                  onBlur={() => setIsHoveringForm(false)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 text-sm hover:border-cyan-400/50 cursor-pointer backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setIsHoveringForm(true)}
                  onBlur={() => setIsHoveringForm(false)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 text-sm hover:border-cyan-400/50 cursor-pointer backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={5}
                  onFocus={() => setIsHoveringForm(true)}
                  onBlur={() => setIsHoveringForm(false)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 text-sm resize-none hover:border-cyan-400/50 cursor-pointer backdrop-blur-sm"
                  placeholder="Tell me about your project or collaboration ideas..."
                ></textarea>
                <p className="text-xs text-gray-400 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setIsHoveringForm(true)}
                onMouseLeave={() => setIsHoveringForm(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-400 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <span className="relative z-10">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <i className="ri-send-plane-line"></i>
                    </div>
                  )}
                </span>
              </button>

              {submitStatus && (
                <div className="p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 rounded-xl text-sm backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-circle-line text-green-400"></i>
                    <span>{submitStatus}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced Interactive Background Effects */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(20px)'
        }}
      ></div>

      {/* Additional Layered Effects */}
      <div 
        className="absolute pointer-events-none transition-all duration-500 ease-out z-0"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.08), transparent)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%) rotate(180deg)',
          filter: 'blur(15px)'
        }}
      ></div>

      {/* Animated Corner Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}
