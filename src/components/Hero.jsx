import React from 'react';
import image from '../assets/img/Founder.jpg'; // Make sure this path is correct
import logo from '../assets/img/Logo.png'; // Add this import
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        id="intro"
        className="min-h-screen w-full flex flex-col lg:flex-row text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Floating Background Circles */}
        <motion.div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Left Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-slate-950/90 via-blue-700 to-slate-950/90 justify-center items-center px-6 sm:px-10 lg:px-16 z-10 text-center py-12 space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
            <p className="uppercase tracking-widest text-sm text-blue-300">Hello</p>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 mb-3">
                <img
                  src={logo}
                  alt="Zenitech Solutions Logo"
                  className="h-32 w-auto drop-shadow-lg rounded-xl"
                />
              </div>
              <p className="text-blue-200 text-sm font-light">Innovating for a Better Tomorrow</p>
            </motion.div>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            I'm <span className="text-white">Haider Ali</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-light">Founder and CEO</motion.h2>
          <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-light">at</motion.p>
          <motion.a 
            href="https://www.zenitech.in" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-orange-500">Zenitech</span>{' '}
              <span className="text-blue-400">Solutions</span>
            </h3>
          </motion.a>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-blue-200">
            based in Bengaluru,<br />India.
          </motion.p>

          {/* Social Media Links */}
          <motion.div 
            className="flex justify-center gap-4 pt-4"
            variants={containerVariants}
          >
            <div className="relative group">
              <a 
                href="https://www.linkedin.com/in/haideraliraja/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                linkedin.com/in/haideraliraja
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </div>
            </div>

            <div className="relative group">
              <a 
                href="https://wa.me/918820066999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-green-600 transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                +91 8820066999
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </div>
            </div>

            <div className="relative group">
              <a
                href="tel:+918820066999"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                +91 8820066999
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </div>
            </div>

            <div className="relative group">
              <a
                href="mailto:haider@zenitech.in"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                haider@zenitech.in
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            variants={containerVariants}
          >
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition hover:scale-105 shadow">
                More About Me
              </button>
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-medium transition hover:scale-105">
                Get in Touch
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="w-full lg:w-1/2 relative z-10 flex flex-col items-center justify-center p-4 lg:p-0"
          variants={imageVariants}
        >
          <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none aspect-square lg:aspect-auto lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-900/20 rounded-2xl lg:hidden"></div>
            <motion.img
              src={image}
              alt="Haider Ali - Founder and CEO"
              className="w-full h-full object-contain lg:object-cover rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Mobile CTA */}
          <motion.div 
            className="lg:hidden mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a 
              href="https://www.zenitech.in" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition hover:scale-105 flex items-center gap-2">
                VIEW OUR WEBSITE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.a>
          </motion.div>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden lg:block absolute bottom-8 right-8 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a 
              href="https://www.zenitech.in" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition hover:scale-105 flex items-center gap-2">
                VIEW OUR WEBSITE
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-white/70 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.span 
            className="text-xs uppercase tracking-widest mb-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.svg 
            className="w-4 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
