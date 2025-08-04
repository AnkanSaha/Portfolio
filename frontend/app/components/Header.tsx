"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMail, FiMenu, FiX, FiMessageSquare, FiBook, FiCode, FiArrowRight } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper function to render icons from string names
  const renderIcon = (iconName: string, className: string | undefined) => {
    switch (iconName) {
      case 'home':
        return <FiHome className={className} />;
      case 'user':
        return <FiUser className={className} />;
      case 'mail':
        return <FiMail className={className} />;
      case 'message-square':
        return <FiMessageSquare className={className} />;
      case 'book':
        return <FiBook className={className} />;
      case 'code':
        return <FiCode className={className} />;
      case 'arrow-right':
        return <FiArrowRight className={className} />;
      default:
        return null;
    }
  };

  // Define navigation items as an array for easier management
  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: "home",
      activeColor: "text-blue-400",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "/about",
      label: "About Me",
      icon: "user",
      activeColor: "text-purple-400",
      hoverColor: "hover:text-purple-400"
    },
    {
      href: "/chat",
      label: "Chat With Me",
      icon: "message-square",
      activeColor: "text-teal-400",
      hoverColor: "hover:text-teal-400"
    },
    {
      href: "/projects",
      label: "Showcase",
      icon: "code",
      activeColor: "text-cyan-400",
      hoverColor: "hover:text-cyan-400",
      subtitle: "(My Projects)"
    },
    {
      href: "/insights",
      label: "Insights",
      icon: "book",
      activeColor: "text-amber-400",
      hoverColor: "hover:text-amber-400",
      subtitle: "(My Tech Journey)"
    },
    {
      href: "/contact",
      label: "Contact",
      icon: "mail",
      activeColor: "text-green-400",
      hoverColor: "hover:text-green-400"
    }
  ];

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
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] relative z-10"
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
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link href={item.href} className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all">
                {renderIcon(item.icon, item.activeColor)}
                <span className={`text-white ${item.hoverColor} transition-colors`}>{item.label}</span>
                {item.subtitle && <span className="hidden xl:inline-block text-xs text-gray-400 ml-1">{item.subtitle}</span>}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} className="ml-4">
            <Link
              href="/join"
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              <motion.span
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Me</span>
                {renderIcon('arrow-right', 'text-white')}
              </motion.span>
            </Link>
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
            {navItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800/50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {renderIcon(item.icon, item.activeColor)}
                  <span className="text-white">{item.label}</span>
                </Link>
              </motion.li>
            ))}

            <motion.div variants={itemVariants} className="flex flex-col space-y-2 mt-2 border-t border-gray-700 pt-4">
              <Link
                href="/join"
                className="flex items-center justify-center space-x-2 p-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white">Join Me</span>
                  {renderIcon('arrow-right', 'text-white')}
                </motion.div>
              </Link>
            </motion.div>
          </motion.ul>
        </motion.div>
      )}
    </motion.header>
  );
}
