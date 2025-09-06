"use client"; // Add this directive at the top to mark as client component

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaFacebook, FaInstagram, FaEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa';

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
            Hi 👋, I'm Ankan
          </h1>

          {/* Subtitle with typing effect */}
          <div className="text-2xl md:text-3xl mb-8 font-light">
            <span className="text-gray-300">A Software Engineer from India ❤️</span>
          </div>

          <div className="text-xl md:text-2xl mb-8 font-light">
            <span className="text-gray-300">Full-Stack Developer</span>
            <a
              href="https://hoichoi.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2 hover:text-blue-300 transition-colors duration-200"
            >
              @Hoichoi
            </a>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8">
            <FaCode className="text-green-400 mr-2" />
            <span className="text-gray-300">1.5+ Years of Experience</span>
          </div>

          {/* Bio */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable solutions and optimizing performance 🚀 Currently working on AxioDB & contributing to open-source projects 💻
            Ask me about NodeJS, MongoDB, Javascript, Typescript, Microservices Architecture 🌟
          </p>

          {/* Current Status */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 text-sm">Available for opportunities</span>
            </div>
            <div className="flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
              <FaTerminal className="text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Currently learning Go</span>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">GitHub Achievements</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-sm text-purple-300">GitHub Pro</span>
              <span className="px-3 py-1 bg-green-600/20 border border-green-600/30 rounded-full text-sm text-green-300">Pull Shark x4</span>
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-sm text-blue-300">Pair Extraordinaire</span>
              <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 rounded-full text-sm text-yellow-300">YOLO</span>
              <span className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-sm text-red-300">Quickdraw</span>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-300 italic">
              ⚡ Fun fact: "There are only 10 types of people in the world: those who understand binary and those who don't."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://github.com/AnkanSaha"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/theankansaha"
              className="p-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 hover:border-blue-600/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-300" />
            </a>
            <a
              href="https://twitter.com/theankansaha"
              className="p-4 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-600/30 hover:border-sky-600/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-sky-400 hover:text-sky-300" />
            </a>
            <a
              href="https://fb.com/theankansaha"
              className="p-4 bg-blue-800/20 hover:bg-blue-800/30 border border-blue-800/30 hover:border-blue-800/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-blue-500 hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com/theankansaha"
              className="p-4 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-600/30 hover:border-pink-600/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-pink-400 hover:text-pink-300" />
            </a>
            <a
              href="https://www.youtube.com/c/@javascriptalks"
              className="p-4 bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 hover:border-red-600/50 rounded-full transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl text-red-400 hover:text-red-300" />
            </a>
            <a
              href="mailto:help@ankanweb.site"
              className="p-4 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 hover:border-green-600/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope className="text-2xl text-green-400 hover:text-green-300" />
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
