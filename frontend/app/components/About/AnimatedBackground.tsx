"use client";

import { useState, useEffect } from 'react';

export default function AboutAnimatedBackground() {
  // Generate particle positions only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{
    id: string;
    size: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles on client side only
    setParticles(
      Array.from({ length: 30 }).map((_, i) => ({
        id: `particle-${i}`,
        size: Math.floor(Math.random() * 6) + 2,
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        delay: Math.floor(Math.random() * 10) * 100,
        duration: Math.floor(Math.random() * 20) + 10,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/30 to-gray-900/90 z-10"></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.size % 3 === 0 ? '#3b82f6' : particle.size % 3 === 1 ? '#8b5cf6' : '#10b981',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}ms`,
          }}
        ></div>
      ))}

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>

      {/* Code-like decorative elements */}
      <div className="hidden lg:block absolute -left-20 top-40 w-80 h-80 border border-blue-500/10 rounded-full"></div>
      <div className="hidden lg:block absolute -right-40 bottom-20 w-96 h-96 border border-purple-500/10 rounded-full"></div>
      <div className="hidden lg:block absolute right-1/4 top-1/4 w-40 h-40 border border-green-500/10 rounded-full"></div>
    </div>
  );
}
