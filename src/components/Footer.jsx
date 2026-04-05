import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${isDark ? 'bg-dark-bg border-t border-dark-tertiary' : 'bg-gray-900 border-t border-gray-800'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 text-sm">
              Full-stack developer passionate about creating amazing digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-purple transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-gray-400 hover:text-accent-teal transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-gray-400 hover:text-accent-teal transition-colors"
                >
                  {portfolioData.personal.phone}
                </a>
              </li>
              <li className="text-gray-400">{portfolioData.personal.location}</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`my-8 ${isDark ? 'border-t border-dark-tertiary' : 'border-t border-gray-800'}`} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-accent-purple transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-accent-purple" size={16} /> by Rajasri Chanda
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
