import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      id="about"
      className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-blue-600">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-400 mx-auto mb-6"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Visionary technology leader with 20+ years of experience driving digital transformation and innovative IT solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-semibold text-gray-900"
              >
                Haider Ali - Founder & CEO at{' '}
                <a 
                  href="https://www.zenitech.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <span className="text-orange-500">Zenitech</span>
                  <span className="text-blue-600">Solutions</span>
                </a>
              </motion.h3>
              
              <motion.div 
                className="space-y-4 text-gray-700 leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants} className="text-base sm:text-lg">
                  With over 20 years of extensive experience in technology leadership and business innovation, I founded Zenitech Solutions as a premier IT solutions provider based in Bengaluru. We specialize in comprehensive digital transformation services including cloud computing, cybersecurity solutions, enterprise software development, telecom services, networking infrastructure, and system integration.
                </motion.p>
                
                <motion.p variants={itemVariants} className="text-base sm:text-lg">
                  As a trusted technology partner and system integrator, Zenitech Solutions delivers customized solutions that address unique business challenges across diverse industries. Our strategic partnerships with industry leaders include AWS, Microsoft Azure, Google Cloud, OVHcloud, Jio Cloud, Fortinet, Sophos, SonicWall, VMware, Dell Technologies, HPE, and numerous other technology innovators.
                </motion.p>
                
                <motion.p variants={itemVariants} className="text-base sm:text-lg">
                  My vision centers on empowering businesses through cutting-edge technology solutions that enhance operational efficiency, strengthen security posture, accelerate digital transformation, and drive sustainable growth in an increasingly competitive digital landscape.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">100+</div>
                <div className="text-sm text-gray-600">Solutions Delivered</div>
              </motion.div>
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 col-span-2 sm:col-span-1"
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Skills & Expertise */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Core Expertise
              </h4>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">Cloud Computing</motion.div>
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">IT Infrastructure</motion.div>
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">System Integration</motion.div>
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">IT Service Management</motion.div>
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">IT Operations</motion.div>
                <motion.div variants={itemVariants} className="text-gray-700 font-medium">IT Strategy</motion.div>
              </motion.div>
            </motion.div>

            {/* Services & Solutions */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100"
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Our Solutions
              </h4>
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 leading-relaxed mb-4"
              >
                Comprehensive IT solutions including cloud computing, cybersecurity, software development, telecom, and networking services tailored for enterprise success.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm text-gray-600"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  AWS & Azure Cloud
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Cybersecurity
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Enterprise Software
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Network Solutions
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={containerVariants}
        >
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
            >
              Let's Transform Your Business Together
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
            >
              Ready to enhance your IT infrastructure with cutting-edge solutions? 
              Let's discuss how Zenitech Solutions can help drive your digital transformation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.a 
                href="https://www.zenitech.in/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Let's Connect
                </button>
              </motion.a>
              <motion.a 
                href="https://www.zenitech.in/services" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  View Services
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;