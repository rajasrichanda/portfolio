import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    // Simulate form submission
    try {
      // In a real application, you would send this data to a backend
      // For now, we'll just show a success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: portfolioData.personal.location,
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
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
            className={`text-4xl font-bold mb-4 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In <span className="text-accent-purple">Touch</span>
          </h2>

          <p
            className={`text-center mb-16 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-lg text-center transition-all ${
                    isDark
                      ? 'bg-dark-bg hover:bg-dark-tertiary'
                      : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-dark-tertiary' : 'bg-gray-100'}`}>
                      <Icon size={24} className="text-accent-purple" />
                    </div>
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {info.label}
                  </h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    {info.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-lg ${
              isDark
                ? 'bg-dark-bg border border-dark-tertiary'
                : 'bg-white border border-gray-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border-2 transition-all focus:outline-none ${
                    isDark
                      ? 'bg-dark-secondary border-dark-tertiary focus:border-accent-purple text-white'
                      : 'bg-gray-50 border-gray-200 focus:border-accent-purple'
                  }`}
                  placeholder="Your name"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border-2 transition-all focus:outline-none ${
                    isDark
                      ? 'bg-dark-secondary border-dark-tertiary focus:border-accent-teal text-white'
                      : 'bg-gray-50 border-gray-200 focus:border-accent-teal'
                  }`}
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg border-2 transition-all focus:outline-none resize-none ${
                    isDark
                      ? 'bg-dark-secondary border-dark-tertiary focus:border-accent-bright text-white'
                      : 'bg-gray-50 border-gray-200 focus:border-accent-bright'
                  }`}
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg bg-green-500/20 text-green-600"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg bg-red-500/20 text-red-600"
                >
                  Please fill in all fields correctly.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-accent-purple to-accent-teal hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect With Me
            </h3>
            <div className="flex justify-center gap-6">
              <motion.a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg transition-all ${
                  isDark
                    ? 'bg-dark-bg hover:bg-dark-tertiary text-blue-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                }`}
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg transition-all ${
                  isDark
                    ? 'bg-dark-bg hover:bg-dark-tertiary text-accent-purple'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                <FaGithub size={24} />
              </motion.a>


            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
