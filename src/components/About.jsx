import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = ({ isDark }) => {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-dark-secondary' : 'bg-gray-50'
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
            About <span className="text-accent-purple">Me</span>
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Bio */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm a passionate B.Tech student specializing in Data Science from Brainware
                University. I love building interactive and responsive web applications using
                modern technologies.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                With hands-on experience in MERN stack development and a strong foundation in
                data structures and algorithms, I'm committed to writing clean, efficient code
                and creating meaningful digital experiences.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-accent-teal' : 'text-accent-purple'
                  }`}
                >
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.personal.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isDark
                          ? 'bg-dark-tertiary text-accent-teal hover:bg-accent-purple/20'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image Placeholder with Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Profile Image */}
              <div
                className={`relative w-72 h-72 mx-auto rounded-2xl overflow-hidden shadow-2xl ${
                  isDark
                    ? 'ring-4 ring-accent-purple/40 shadow-accent-purple/20'
                    : 'ring-4 ring-accent-teal/40 shadow-accent-teal/20'
                }`}
              >
                <motion.img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Rajasri Chanda"
                  className="w-full h-full object-cover object-top"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />

                {/* Subtle gradient overlay at bottom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? 'from-dark-bg/30 via-transparent to-transparent'
                      : 'from-black/10 via-transparent to-transparent'
                  }`}
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-lg text-center backdrop-blur-lg ${
                    isDark
                      ? 'bg-dark-tertiary/50 border border-accent-purple/20'
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-accent-purple">3+</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Projects</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-lg text-center backdrop-blur-lg ${
                    isDark
                      ? 'bg-dark-tertiary/50 border border-accent-teal/20'
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-accent-teal">2+ Mo</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-lg text-center backdrop-blur-lg ${
                    isDark
                      ? 'bg-dark-tertiary/50 border border-accent-bright/20'
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-accent-bright">8+</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Skills</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-lg text-center backdrop-blur-lg ${
                    isDark
                      ? 'bg-dark-tertiary/50 border border-accent-purple/20'
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-accent-purple">8.93</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>CGPA</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
