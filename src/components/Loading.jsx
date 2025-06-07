import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/img/Logo.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src={logo} 
            alt="Haider Ali Logo" 
            className="h-24 w-auto"
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, transparent, rgba(79, 70, 229, 0.1))',
                'linear-gradient(45deg, rgba(79, 70, 229, 0.1), transparent)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            I'm Haider Ali
          </h2>
          <p className="text-gray-600">
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
