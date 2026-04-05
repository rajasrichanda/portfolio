import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ParticlesBackground from './ParticlesBackground';

const Hero = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-dark-bg' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}
    >
      <ParticlesBackground isDark={isDark} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.h2
            variants={itemVariants}
            className={`text-lg sm:text-xl font-semibold ${
              isDark ? 'text-accent-purple' : 'text-accent-teal'
            }`}
          >
            Welcome to my portfolio
          </motion.h2>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {portfolioData.personal.name}
          </motion.h1>

          {/* Role with typing effect */}
          <motion.div
            variants={itemVariants}
            className="relative h-20 flex items-center justify-center"
          >
            <span
              className={`text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-accent-purple via-accent-teal to-accent-bright bg-clip-text text-transparent`}
            >
              {portfolioData.personal.role}
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-accent-purple to-accent-teal text-white hover:shadow-lg hover:shadow-accent-purple/50'
                  : 'bg-gradient-to-r from-accent-purple to-accent-teal text-white hover:shadow-lg hover:shadow-accent-teal/50'
              }`}
            >
              View My Projects
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                isDark
                  ? 'border-accent-teal text-accent-teal hover:bg-accent-teal/10'
                  : 'border-accent-purple text-accent-purple hover:bg-accent-purple/10'
              }`}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown
            size={24}
            className={isDark ? 'text-accent-purple' : 'text-accent-teal'}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
