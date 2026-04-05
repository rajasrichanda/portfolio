import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = ({ isDark }) => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Combine education and experience chronologically
  const allExperiences = [
    {
      type: 'internship',
      ...portfolioData.experience[0],
    },
    ...portfolioData.education.map((edu) => ({
      type: 'education',
      ...edu,
    })),
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-dark-bg' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
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
            My <span className="text-accent-teal">Journey</span>
          </h2>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div
              className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
                isDark ? 'bg-accent-purple/30' : 'bg-accent-teal/30'
              }`}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {allExperiences.map((exp, index) => {
                const isEducation = exp.type === 'education';
                const Icon = isEducation ? FaGraduationCap : FaBriefcase;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isEducation
                            ? isDark
                              ? 'bg-accent-teal text-dark-bg'
                              : 'bg-accent-teal text-white'
                            : isDark
                            ? 'bg-accent-purple text-dark-bg'
                            : 'bg-accent-purple text-white'
                        }`}
                      >
                        <Icon size={20} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left pl-20 md:pl-12'
                      } pl-20 md:pl-0`}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        className={`p-6 rounded-lg transition-all ${
                          isDark
                            ? 'bg-dark-secondary hover:bg-dark-tertiary'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {/* Company/Institution */}
                        <h3
                          className={`text-xl font-bold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {exp.company || exp.institution}
                        </h3>

                        {/* Position/Degree */}
                        <p
                          className={`text-lg font-semibold mt-1 ${
                            isEducation
                              ? 'text-accent-teal'
                              : 'text-accent-purple'
                          }`}
                        >
                          {exp.position || exp.degree}
                        </p>

                        {/* Duration */}
                        <p className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-600 text-sm mt-2'}>
                          {exp.duration}
                        </p>

                        {/* CGPA (for education) */}
                        {exp.cgpa && (
                          <p className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                            CGPA: {exp.cgpa} ({exp.percentage})
                          </p>
                        )}

                        {/* Percentage (for education without CGPA) */}
                        {!exp.cgpa && exp.percentage && (
                          <p className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                            {exp.percentage}
                          </p>
                        )}

                        {/* Responsibilities */}
                        {exp.responsibilities && (
                          <ul className={`mt-4 space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-3 mt-1">▸</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
