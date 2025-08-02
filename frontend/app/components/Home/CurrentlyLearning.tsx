/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const CurrentlyLearning = () => {
  const learningItems = [
    {
      title: "Rust",
      purpose: "for background monitoring tools",
      progress: 65,
      projects: ["System monitoring CLI", "Performance profilers"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Go",
      purpose: "for CLI and server-side tools",
      progress: 75,
      projects: ["P2P Terminal Chat", "Network utilities"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Java + SQL + DSA",
      purpose: "for backend engineering depth",
      progress: 45,
      projects: ["Enterprise applications", "Algorithm implementations"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "System Design & Networking",
      purpose: "for scalable architecture",
      progress: 55,
      projects: ["Distributed systems", "Network protocols"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Currently Learning
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuously expanding my skill set and exploring new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.purpose}</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                  <span className="text-yellow-300 text-xs font-medium">Learning</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-300 relative overflow-hidden`}
                    style={{ width: `${item.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Current Projects */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Working On:
                </h4>
                <div className="space-y-2">
                  {item.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Learning Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "I dedicate my free hours daily to learning, building, and exploring how systems work —
              from network protocols to databases and developer tools. Continuous learning is not just
              a habit, it's my passion for understanding the intricate details of technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
