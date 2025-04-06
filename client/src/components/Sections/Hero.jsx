/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-blue-500 font-semibold">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ankan Saha
              </h1>
              <p className="text-2xl text-gray-300">Software Engineer & Freelancer</p>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                Based in <span className="text-blue-400">India</span>, I'm a passionate full-time software engineer with a knack for crafting elegant solutions to complex problems.
              </p>
              <p className="text-gray-400">
                As a dedicated freelancer, I help businesses transform their digital presence through clean, efficient, and scalable code.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/AnkanSaha" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/theankansaha" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`"mailto:ankan@${window.location.host}`} target='_blank'
                className="hover:text-blue-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Coding workspace"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;