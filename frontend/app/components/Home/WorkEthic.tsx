import React from 'react';

const WorkEthic = () => {
  const principles = [
    {
      title: "Clean Code",
      description: "Writing maintainable, readable, and scalable code that stands the test of time"
    },
    {
      title: "System Understanding",
      description: "Deep diving into how networks, protocols, and distributed systems work"
    },
    {
      title: "Data Architecture",
      description: "Building efficient data structures and understanding database internals"
    },
    {
      title: "Tool Building",
      description: "Creating developer tools and CLI utilities that solve real problems"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Work Ethic & Philosophy
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My approach to development and continuous learning
          </p>
        </div>

        {/* Main Quote */}
        <div className="text-center mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic leading-relaxed mb-6">
              &quot;I dedicate my free hours daily to learning, building, and exploring how systems work —
              from network protocols to databases and developer tools.&quot;
            </blockquote>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto"></div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Daily Routine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Build</h3>
            <p className="text-gray-300 text-sm">
              Creating projects that challenge my understanding and push the boundaries of what I know
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Learn</h3>
            <p className="text-gray-300 text-sm">
              Continuously studying new technologies, reading documentation, and understanding core concepts
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Explore</h3>
            <p className="text-gray-300 text-sm">
              Diving deep into system internals, network protocols, and understanding how things work under the hood
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing</h3>
            <p className="text-gray-300 mb-6">
              Always excited to collaborate on interesting projects and discuss innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/AnkanSaha"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 rounded-full font-semibold transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WorkEthic;
