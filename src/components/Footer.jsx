import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 border-t border-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          {/* Left Side - Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left text-sm sm:text-base mb-2 md:mb-0"
          >
            <p className="text-blue-200">
              <span className="font-semibold">Haider Ali</span> - Founder & CEO at{' '}
              <a
                href="https://www.zenitech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-blue-400 transition-colors inline-block"
              >
                Zenitech<span className='text-blue-400'> Solutions </span>
              </a>
            </p>
          </motion.div>

          {/* Right Side - Credits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right text-blue-200 text-sm sm:text-base"
          >
            <p>
              Made by{' '}
              <a
                href="https://www.linkedin.com/in/sayan-das-b99810213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-blue-300 transition-colors font-semibold inline-block"
              >
                Sayan Das
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
