"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMail, FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mr-4"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
        </motion.div>
        <motion.h1
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          AnkanHub
        </motion.h1>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <motion.ul className="flex space-x-6 items-center">
          <motion.li variants={itemVariants}>
            <Link href="/" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all">
              <FiHome className="text-blue-400" />
              <span className="text-white hover:text-blue-400 transition-colors">Home</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link href="/about" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all">
              <FiUser className="text-purple-400" />
              <span className="text-white hover:text-purple-400 transition-colors">About</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link href="/contact" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all">
              <FiMail className="text-green-400" />
              <span className="text-white hover:text-green-400 transition-colors">Contact</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <motion.a
              href="https://github.com/AnkanSaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="text-white" />
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="text-white" />
            </motion.a>
          </motion.li>
        </motion.ul>
      </motion.nav>

      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg md:hidden"
        >
          <motion.ul
            className="flex flex-col space-y-2 p-4"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemVariants}>
              <Link
                href="/"
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800/50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiHome className="text-blue-400" />
                <span className="text-white">Home</span>
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                href="/about"
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800/50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiUser className="text-purple-400" />
                <span className="text-white">About</span>
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                href="/contact"
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800/50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiMail className="text-green-400" />
                <span className="text-white">Contact</span>
              </Link>
            </motion.li>
            <motion.div variants={itemVariants} className="flex space-x-3 p-3">
              <motion.a
                href="https://github.com/AnkanSaha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="text-white" />
              </motion.a>
            </motion.div>
          </motion.ul>
        </motion.div>
      )}
    </motion.header>
  );
}
