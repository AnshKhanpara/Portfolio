import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-white/5' : 'py-6 md:py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <Cpu className="text-[#003840] w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase mb-0.5">ANSH.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-8 items-center">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  className="text-lg font-bold uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="w-full h-px bg-white/5 my-2"></div>
              <p className="text-[10px] uppercase tracking-widest text-muted/40 font-display">
                Silicon Valley • RTL Architect
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
