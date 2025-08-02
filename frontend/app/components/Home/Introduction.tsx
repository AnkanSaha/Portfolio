"use client"; // Add this directive at the top to mark as client component

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaTerminal } from 'react-icons/fa';

const Introduction: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Ankan Saha
          </h1>

          {/* Subtitle with typing effect */}
          <div className="text-2xl md:text-3xl mb-8 font-light">
            <span className="text-gray-300">Full-Stack Developer</span>
            <span className="text-blue-400 ml-2">@Hoichoi</span>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8">
            <FaCode className="text-green-400 mr-2" />
            <span className="text-gray-300">1.3+ Years of Experience</span>
          </div>

          {/* Bio */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            🚀 MERN Stack Developer | Node.js Enthusiast 💻 | Passionate about mastering new technologies
            and crafting innovative solutions 🌟 Let's create the future together! 🤝
          </p>

          {/* Current Status */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 text-sm">Available for opportunities</span>
            </div>
            <div className="flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
              <FaTerminal className="text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Building with Rust & Go</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/AnkanSaha"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/ankan-saha"
              className="p-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 hover:border-blue-600/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
