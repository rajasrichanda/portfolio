import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            onClick={() => handleNavClick('#')}
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent`}>
              RC
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-accent-purple'
                    : 'text-gray-700 hover:text-accent-purple'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-dark-secondary text-yellow-400 hover:bg-dark-tertiary'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? (
                <FaTimes size={24} className={isDark ? 'text-accent-purple' : 'text-gray-700'} />
              ) : (
                <FaBars size={24} className={isDark ? 'text-accent-purple' : 'text-gray-700'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className={`md:hidden pb-4 ${isDark ? 'bg-dark-secondary' : 'bg-gray-50'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-accent-purple hover:bg-dark-tertiary'
                    : 'text-gray-700 hover:text-accent-purple hover:bg-gray-100'
                }`}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
