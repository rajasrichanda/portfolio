import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaSchool, FaLaptop, FaImage } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-dark-secondary' : 'bg-gray-50'
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
            Featured <span className="text-accent-purple">Projects</span>
          </h2>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-dark-bg hover:shadow-lg hover:shadow-accent-purple/20'
                    : 'bg-white hover:shadow-lg hover:shadow-gray-400/30'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-teal/20">
                  <motion.div
                    animate={{ scale: [1, 1.05] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent-purple text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isDark ? 'bg-dark-tertiary' : 'bg-gray-100'
                    }`}>
                      {project.icon === 'FaSchool' && <FaSchool size={24} className="text-accent-purple" />}
                      {project.icon === 'FaLaptop' && <FaLaptop size={24} className="text-accent-teal" />}
                      {project.icon === 'FaImage' && <FaImage size={24} className="text-accent-bright" />}
                    </div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? 'bg-dark-tertiary text-accent-teal'
                            : 'bg-gray-100 text-accent-purple'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-opacity-20 dark:border-gray-700">
                    <motion.a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                        isDark
                          ? 'text-accent-teal hover:text-accent-bright'
                          : 'text-accent-purple hover:text-accent-teal'
                      }`}
                    >
                      <FaGithub size={16} />
                      GitHub
                    </motion.a>

                    {project.livePreview && project.livePreview !== '#' && (
                      <motion.a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                          isDark
                            ? 'text-accent-purple hover:text-accent-bright'
                            : 'text-accent-teal hover:text-accent-bright'
                        }`}
                      >
                        <FaExternalLinkAlt size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
