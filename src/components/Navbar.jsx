import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✨ 1. IMPORT LINK

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Login', href: 'login.html' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'backdrop-glass border-b border-border/50 shadow-card'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#3b82f6"}} />
                      <stop offset="100%" style={{stopColor:"#14b8a6"}} />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#6366f1"}} />
                      <stop offset="100%" style={{stopColor:"#3b82f6"}} />
                    </linearGradient>
                  </defs>
                  <path d="M50 0 C77.6 0 100 22.4 100 50 C100 65 92.5 78.4 81.3 87.1 C79.3 74.6 71.9 63.6 61.2 56.5 C72.2 49.3 75.8 35.5 69.1 24.1 C62.3 12.7 48.9 7.9 37.1 14.1 C32 16.8 27.8 21 24.9 26 C15.1 36.4 14.2 51.6 22.1 63.2 C28.5 72.5 40 78.3 50.8 76.9 C43.2 85.8 32.5 91.5 20.3 91.5 C9.1 91.5 0 82.4 0 71.2 C0 42.9 22.4 20.5 50 20.5 C50 13.7 50 6.8 50 0 Z" fill="url(#gradient1)"/>
                  <path d="M50 100 C22.4 100 0 77.6 0 50 C0 35 7.5 21.6 18.7 12.9 C20.7 25.4 28.1 36.4 38.8 43.5 C27.8 50.7 24.2 64.5 30.9 75.9 C37.7 87.3 51.1 92.1 62.9 85.9 C68 83.2 72.2 79 75.1 74 C84.9 63.6 85.8 48.4 77.9 36.8 C71.5 27.5 60 21.7 49.2 23.1 C56.8 14.2 67.5 8.5 79.7 8.5 C90.9 8.5 100 17.6 100 28.8 C100 57.1 77.6 79.5 50 79.5 C50 86.3 50 93.2 50 100 Z" fill="url(#gradient2)"/>
                </svg>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              SynergySphere
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* ✨ 2. UPDATED DESKTOP CTA BUTTON */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/get-started">
              <Button variant="hero" size="default">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-smooth font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* ✨ 3. UPDATED MOBILE CTA BUTTON */}
            <Link to="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="hero" size="default" className="w-full mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;