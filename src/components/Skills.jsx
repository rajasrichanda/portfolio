import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  FaLinux,
  FaGit,
  FaGithub,
  FaServer,
  FaMicrosoft,
} from 'react-icons/fa';
import {
  SiFigma,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = ({ isDark }) => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getToolIcon = (toolName) => {
    const iconMap = {
      Linux: <FaLinux size={32} />,
      'VS Code': <VscVscode size={32} />,
      Git: <FaGit size={32} />,
      Github: <FaGithub size={32} />,
      Figma: <SiFigma size={32} />,
      Vercel: <SiVercel size={32} />,
      Render: <FaServer size={32} />,
      'MS Office': <FaMicrosoft size={32} />,
    };
    return iconMap[toolName] || null;
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-dark-bg' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2
            className={`text-4xl font-bold mb-16 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technical <span className="text-accent-teal">Skills</span>
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Languages */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={skillVariants}
                className={`text-2xl font-bold mb-6 ${isDark ? 'text-accent-purple' : 'text-accent-purple'}`}
              >
                Languages
              </motion.h3>
              <div className="space-y-4">
                {portfolioData.skills.languages.map((skill, index) => (
                  <motion.div key={index} variants={skillVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                      <span className="text-accent-purple font-semibold">{skill.level}%</span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-dark-tertiary' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-teal"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Web Technologies */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={skillVariants}
                className={`text-2xl font-bold mb-6 ${isDark ? 'text-accent-teal' : 'text-accent-teal'}`}
              >
                Web Tech
              </motion.h3>
              <div className="space-y-4">
                {portfolioData.skills.webTechnologies.map((skill, index) => (
                  <motion.div key={index} variants={skillVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                      <span className="text-accent-teal font-semibold">{skill.level}%</span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-dark-tertiary' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-accent-teal to-accent-bright"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Placeholder */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={skillVariants}
                className={`text-2xl font-bold mb-6 ${isDark ? 'text-accent-bright' : 'text-accent-bright'}`}
              >
                Tools
              </motion.h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                See tool icons below
              </p>
            </motion.div>
          </div>

          {/* Tools Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`text-2xl font-bold mb-8 text-center ${
                isDark ? 'text-accent-bright' : 'text-accent-bright'
              }`}
            >
              Tools & Platforms
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-4 md:grid-cols-8 gap-6"
            >
              {portfolioData.skills.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                    isDark
                      ? 'bg-dark-secondary hover:bg-dark-tertiary'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className={`mb-2 ${isDark ? 'text-accent-purple' : 'text-accent-teal'}`}>
                    {getToolIcon(tool.name)}
                  </div>
                  <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
