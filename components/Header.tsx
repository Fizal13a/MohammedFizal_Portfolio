import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Professional', id: 'professional' },
    { name: 'Personal', id: 'personal' },
    { name: 'Tools', id: 'tools' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-4 border-white/10 shadow-lg' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <div 
          className="text-xl font-bold text-white cursor-pointer tracking-tighter z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {PROFILE.name.split(' ')[1]}<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          <a
            href={`mailto:${PROFILE.email}`}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all hover:scale-105 shadow-lg shadow-indigo-500/20 flex items-center gap-2"
          >
            <Mail size={16} />
            <span>Connect</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 pt-24 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-800/50 text-left"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-4 flex justify-center items-center gap-2 px-5 py-3 text-base font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all"
              >
                <Mail size={18} />
                Connect via Email
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;