import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const Projects = () => {

  const completedProjects = [
    {
      name: "NexoralDNS",
      description: "Custom RFC 1035 DNS server built from scratch in JavaScript with high-performance caching and database synchronization",
      features: [
        "Custom RFC 1035 DNS implementation with UDP parsing",
        "Redis caching for sub-millisecond response times",
        "MongoDB delta sync for 400K+ DNS records",
        "Achieves 7,000+ queries per second (QPS)",
        "Supports A, AAAA, CNAME, MX, TXT, and NS records"
      ],
      technologies: ["JavaScript", "MongoDB", "Redis", "UDP", "DNS", "RFC 1035"],
      timeline: "2024",
      githubUrl: "https://github.com/Nexoral/NexoralDNS",
      stats: "7,000+ QPS | 400K+ Records"
    },
    {
      name: "ContainDB",
      description: "Golang CLI tool for one-command Docker-based database deployments with automatic backups and health monitoring",
      features: [
        "One-command Docker deployments for MongoDB, PostgreSQL, Redis",
        "Automatic backup scheduling and restoration",
        "Container health monitoring and auto-restart",
        "Environment-based configuration management",
        "Cross-platform CLI interface"
      ],
      technologies: ["Golang", "Docker", "CLI", "Shell Scripting", "Container Management"],
      timeline: "2024",
      githubUrl: "https://github.com/Nexoral/ContainDB",
      liveUrl: "https://github.com/Nexoral/ContainDB/releases"
    },
    {
      name: "AxioDB",
      description: "TypeScript embedded NoSQL database with advanced indexing, encryption, and serialization capabilities",
      features: [
        "Hash indexing for O(1) query performance",
        "Binary serialization for compact storage",
        "AES-256 encryption for data security",
        "1,950+ npm downloads",
        "Zero external dependencies for embedded use"
      ],
      technologies: ["TypeScript", "NoSQL", "Binary Serialization", "AES Encryption", "Hash Indexing"],
      timeline: "2023 - 2024",
      githubUrl: "https://github.com/Nexoral/AxioDB",
      liveUrl: "https://www.npmjs.com/package/axiodb",
      stats: "1,950+ Downloads"
    },
    {
      name: "Outers",
      description: "Versatile Node.js utility library offering encryption, HTTP handling, API calling, and console utilities",
      features: [
        "Async/sync encryption with secret keys",
        "HTTP response handling & status codes",
        "Simplified API request methods",
        "Random generation utilities",
        "Colorful console logging"
      ],
      technologies: ["TypeScript", "Node.js", "Encryption", "HTTP", "NPM"],
      timeline: "June 2023 – Aug 2023",
      githubUrl: "https://github.com/Nexoral/outers",
      liveUrl: "https://www.npmjs.com/package/outers"
    },
    {
      name: "React Caches",
      description: "Lightweight React package that simplifies the management of local storage and cache storage for React applications",
      features: [
        "Easy local storage management",
        "Cache storage utilities",
        "React-specific optimizations",
        "TypeScript support",
        "Lightweight and performant"
      ],
      technologies: ["TypeScript", "React", "Local Storage", "Cache Management"],
      timeline: "2023",
      githubUrl: "https://github.com/Nexoral/react-caches",
      liveUrl: "https://www.npmjs.com/package/react-caches"
    },
    {
      name: "UniqueGen",
      description: "Open-source package for Node.js projects, enabling the generation of random numbers, words, and unique identifiers",
      features: [
        "UUID generation capabilities",
        "Random number generation",
        "Random word generation",
        "MongoDB integration utilities",
        "Flexible generation options"
      ],
      technologies: ["TypeScript", "Node.js", "UUID", "MongoDB", "NPM"],
      timeline: "2023",
      githubUrl: "https://github.com/Nexoral/uniquegen",
      liveUrl: "https://www.npmjs.com/package/uniquegen"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building innovative solutions and exploring new technologies
          </p>
          
          {/* Organization Highlight */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <FaGithub className="text-purple-400 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Nexoral Systems</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I manage and own the <strong>Nexoral Systems</strong> GitHub organization, where I develop and maintain 
                problem-solving products that address real-world challenges in backend development and infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full">
                  <span className="text-purple-300 font-medium">NexoralDNS - DNS Server</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                  <span className="text-blue-300 font-medium">ContainDB - Container Manager</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
                  <span className="text-green-300 font-medium">AxioDB - NoSQL Database</span>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/Nexoral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="mr-2" />
                  Visit Nexoral Systems
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <h4 className="text-2xl font-bold text-white mr-3">{project.name}</h4>
                  </div>
                  <div className="flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1">
                    <span className="text-blue-300 text-xs font-medium">{project.timeline}</span>
                  </div>
                </div>

                {/* Stats Badge (if exists) */}
                {project.stats && (
                  <div className="mb-4">
                    <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-4 py-2">
                      <FaRocket className="text-green-400 mr-2 text-sm" />
                      <span className="text-green-300 text-sm font-semibold">{project.stats}</span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      <span className="text-sm">
                        {project.name === "ContainDB" ? "Download" : "NPM Package"}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Projects;
