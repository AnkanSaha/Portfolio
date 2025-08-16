import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaClock } from 'react-icons/fa';

const Projects = () => {
  const currentProjects = [
    {
      name: "AxioDB",
      status: "In Development",
      description: "Fast, lightweight, and scalable open-source NoSQL Database Management System with JSON-based data storage and advanced features",
      features: [
        "Advanced Schema Validation with flexible configuration",
        "AES-256 encryption for secure data storage",
        "Chainable query methods with auto-indexing",
        "InMemoryCache mechanism for accelerated queries",
        "Web-based GUI dashboard (in development)"
      ],
      technologies: ["TypeScript", "Node.js", "AES-256 Encryption", "JSON", "Streams"],
      githubUrl: "https://github.com/AnkanSaha/AxioDB",
      liveUrl: "https://www.npmjs.com/package/axiodb",
      progress: 85,
      timeline: "November 2024 – March 2025"
    },
    {
      name: "Portfolio (This Website)",
      status: "In Development", 
      description: "Full-stack portfolio platform with Next.js frontend, Fastify backend, and Expo mobile admin app",
      features: [
        "Dynamic content management system",
        "Real-time chat system with WebSocket",
        "Mobile admin app with biometric authentication",
        "Integrated payment processing via Stripe",
        "Server-side rendering with Cloudflare hosting"
      ],
      technologies: ["Next.js 14", "React 18", "Fastify", "PostgreSQL", "Prisma", "React Native", "Expo", "Tailwind CSS"],
      githubUrl: "https://github.com/AnkanSaha/Portfolio",
      liveUrl: "https://ankan.site",
      progress: 90,
      timeline: "Ongoing"
    }
  ];

  const completedProjects = [
    {
      name: "PaisaPay",
      description: "Web-based payment wallet application built with MERN stack featuring secure family payments and transaction management",
      features: [
        "Balance loading from bank accounts",
        "Secure family payment transfers",
        "Real-time transaction history tracking",
        "JWT tokens & CryptoJS encryption",
        "User-friendly interface design"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API", "JWT", "CryptoJS"],
      timeline: "July 2023 – Aug 2023",
      githubUrl: "https://github.com/AnkanSaha/PaisaPay",
      stars: 6
    },
    {
      name: "ContainDB",
      description: "Open-source CLI tool for automated database container management with instant setup and seamless integration",
      features: [
        "Supports MongoDB, Redis, MySQL, PostgreSQL, MariaDB",
        "Instant setup with sensible defaults",
        "Auto-rollback mechanism & conflict detection",
        "Data persistence with volume management",
        "Interactive credential prompts for security"
      ],
      technologies: ["Go", "Docker", "CLI", "Container Management"],
      timeline: "2023",
      githubUrl: "https://github.com/AnkanSaha/ContainDB"
    },
    {
      name: "MongoSuper",
      description: "Enhanced NPM package for MongoDB interactions with automatic reconnection and simplified CRUD operations",
      features: [
        "Secure MongoDB connection management",
        "Automatic reconnection functionality",
        "Complex query filtering support",
        "Optional timestamp tracking",
        "Nested object support"
      ],
      technologies: ["Node.js", "MongoDB", "JavaScript", "NPM"],
      timeline: "2023",
      githubUrl: "https://github.com/AnkanSaha/MongoSuper"
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
      technologies: ["Node.js", "TypeScript", "Encryption", "HTTP", "NPM"],
      timeline: "June 2023 – Aug 2023",
      githubUrl: "https://github.com/AnkanSaha/outers"
    }
  ];

  const plannedProjects = [
    {
      name: "Peer-to-Peer Terminal Chat",
      tech: "Go",
      description: "Terminal-based P2P chat over local Wi-Fi",
      features: [
        "Public IP/Port Forwarding support",
        "No central server"
      ],
      estimatedStart: "Q2 2025"
    },
    {
      name: "Bengali-Like Programming Language",
      tech: "Rust",
      description: "Scripting language inspired by BhaiLang supporting Bengali syntax",
      features: [
        "Custom Bengali syntax",
        "CLI-based REPL"
      ],
      estimatedStart: "Q3 2025"
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
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
            <FaRocket className="text-green-400 mr-3" />
            Current Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <h4 className="text-2xl font-bold text-white mr-3">{project.name}</h4>
                  </div>
                  <div className="flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-300 text-xs font-medium">{project.status}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

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
                      <span className="text-sm">{project.name === "AxioDB" ? "NPM Package" : project.name === "Portfolio (This Website)" ? "Live Site" : "Live Demo"}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
            <FaGithub className="text-blue-400 mr-3" />
            Completed Projects
          </h3>

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
                    {project.stars && (
                      <div className="flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-2 py-1">
                        <span className="text-yellow-300 text-xs font-medium">⭐ {project.stars}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1">
                    <span className="text-blue-300 text-xs font-medium">{project.timeline}</span>
                  </div>
                </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planned Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
            <FaClock className="text-yellow-400 mr-3" />
            Planned Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plannedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <h4 className="text-xl font-bold text-white">{project.name}</h4>
                  </div>
                  <div className="flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                    <FaClock className="text-yellow-400 mr-2 text-xs" />
                    <span className="text-yellow-300 text-xs font-medium">{project.estimatedStart}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-xs text-purple-300 font-medium">
                    {project.tech}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Features */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-500 mb-2">Planned Features:</h5>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
