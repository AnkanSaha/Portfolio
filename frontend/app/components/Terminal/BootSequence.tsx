"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [bootMessages, setBootMessages] = useState<string[]>([]);

  useEffect(() => {
    const runBootSequence = async () => {
      const messages = [
        'Starting system boot...',
        'Loading Linux kernel 6.1.0-ankan...',
        'Initializing hardware...',
        'Mounting file systems...',
        'Starting system services...',
        'Loading network drivers...',
        'Configuring network interfaces...',
        'Starting display manager...',
        'Loading GUI environment...',
        'Installing GNOME Desktop...',
        'Configuring desktop environment...',
        'Installing Node.js v20.11.0...',
        'Installing npm packages...',
        'Installing React 19.0.0...',
        'Installing Next.js 15.3.4...',
        'Installing TypeScript 5.x...',
        'Installing xterm.js 6.0.0...',
        'Installing framer-motion...',
        'Compiling TypeScript files...',
        'Building production bundle...',
        'Optimizing assets...',
        'Starting web server...',
        'Initializing portfolio...',
        'Loading portfolio data...',
        'Starting terminal session...',
      ];

      for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setBootMessages(prev => [...prev, messages[i]]);
      }

      await new Promise(resolve => setTimeout(resolve, 600));
      onComplete();
    };

    runBootSequence();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-start justify-start px-8 py-8 font-mono overflow-y-auto"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {bootMessages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#00ff00] text-xs md:text-sm mb-1 flex items-start"
        >
          <span className="text-[#00ff00] mr-2 flex-shrink-0">[  OK  ]</span>
          <span>{message}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BootSequence;
