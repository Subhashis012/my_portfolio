'use client';
import { useState, useRef, useEffect } from 'react';

const dsaTopics = [
  {
    category: "Arrays & Strings",
    icon: "ri-list-ordered",
    color: "from-blue-400 to-cyan-400",
    problems: 45,
    difficulty: "Easy to Hard",
    description: "Master array manipulations, string operations, and sliding window techniques",
    keyTopics: ["Two Pointers", "Sliding Window", "String Matching", "Array Rotation"]
  },
  {
    category: "Linked Lists",
    icon: "ri-links-line",
    color: "from-green-400 to-emerald-400",
    problems: 28,
    difficulty: "Easy to Medium",
    description: "Understand pointer manipulation and linked data structures",
    keyTopics: ["Reversal", "Cycle Detection", "Merge Operations", "Fast & Slow Pointers"]
  },
  {
    category: "Trees & Graphs",
    icon: "ri-node-tree",
    color: "from-purple-400 to-pink-400",
    problems: 62,
    difficulty: "Medium to Hard",
    description: "Explore tree traversals, graph algorithms, and search techniques",
    keyTopics: ["BFS/DFS", "Binary Trees", "Graph Traversal", "Shortest Path"]
  },
  {
    category: "Dynamic Programming",
    icon: "ri-flow-chart",
    color: "from-orange-400 to-red-400",
    problems: 38,
    difficulty: "Medium to Hard",
    description: "Solve optimization problems using memoization and tabulation",
    keyTopics: ["Memoization", "Tabulation", "State Transitions", "Optimization"]
  },
  {
    category: "Sorting & Searching",
    icon: "ri-search-line",
    color: "from-indigo-400 to-blue-400",
    problems: 32,
    difficulty: "Easy to Medium",
    description: "Master efficient sorting algorithms and binary search variations",
    keyTopics: ["Binary Search", "Quick Sort", "Merge Sort", "Search Variations"]
  },
  {
    category: "Stack & Queue",
    icon: "ri-stack-line",
    color: "from-teal-400 to-green-400",
    problems: 25,
    difficulty: "Easy to Medium",
    description: "Implement LIFO and FIFO data structures for problem solving",
    keyTopics: ["Monotonic Stack", "Queue Operations", "Expression Evaluation", "Next Greater"]
  }
];

const achievements = [
  { platform: "LeetCode", solved: 50, rating: 1847, badge: "Expert" },
  { platform: "GeeksforGeeks", solved: 50, rating: 1650, badge: "5 Star" },
  { platform: "CodeChef", solved: 50, rating: 1520, badge: "3 Star" },
  { platform: "HackerRank", solved: 95, rating: 1680, badge: "Gold" }
];

export default function DSASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringDSA, setIsHoveringDSA] = useState(false);
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

  return (
    <section 
      id="dsa" 
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden"
      onMouseEnter={() => setIsHoveringDSA(true)}
      onMouseLeave={() => setIsHoveringDSA(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-black/80"></div>

      {/* DSA Section Custom Cursor */}
      {isHoveringDSA && (
        <>
          <div 
            className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-200 ease-out"
            style={{
              left: cursorPosition.x - 15,
              top: cursorPosition.y - 15,
              width: '30px',
              height: '30px',
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Data Structures &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Algorithms
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            Mastering the fundamentals of computer science through systematic problem-solving
          </p>
        </div>

        {/* DSA Topics Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dsaTopics.map((topic, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 border border-white/20 hover:border-cyan-400/50 transform hover:-translate-y-3 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index 
                  ? 'translateY(-12px) perspective(1000px) rotateX(5deg) rotateY(5deg)' 
                  : 'translateY(0px) perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'all 0.3s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${topic.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${topic.icon} text-xl text-white`}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{topic.problems}</div>
                    <div className="text-xs text-gray-400">Problems</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {topic.category}
                </h3>
                
                <div className="text-sm text-cyan-300 mb-3 font-medium">
                  {topic.difficulty}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {topic.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {topic.keyTopics.map((keyTopic, keyIndex) => (
                      <span key={keyIndex} className="px-2 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg text-xs text-gray-300 border border-gray-600/30">
                        {keyTopic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Coding Platform{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105">
                  <div className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {achievement.platform}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {achievement.solved}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">Problems Solved</div>
                  {/* <div className="text-sm text-gray-300 mb-2">
                    Rating: <span className="font-semibold text-blue-400">{achievement.rating}</span>
                  </div> */}
                  {/* <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs rounded-full font-medium">
                    {achievement.badge}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Background */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.1), transparent)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          filter: 'blur(15px)'
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 right-16 w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-ping"></div>
    </section>
  );
}