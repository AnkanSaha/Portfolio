import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">DevPortfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;