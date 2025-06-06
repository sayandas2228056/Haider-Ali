import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/img/Logo.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center z-50">
      
      {/* Blurred Pulse Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="Zenitech Logo" 
            className="h-40 w-auto drop-shadow-lg rounded-2xl" 
          />
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-gray-800 text-2xl font-semibold tracking-wide">
            I'm Haider Ali
          </h2>
          <p className="text-gray-600 text-lg">
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Bouncing Dots */}
        <div className="flex items-center justify-center space-x-3 mb-8 mt-6">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-black rounded-full"
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  "0 0 0 0 rgba(0,0,0,0.2)",
                  "0 0 0 10px rgba(0,0,0,0)",
                  "0 0 0 0 rgba(0,0,0,0.2)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: "0%" }}
            animate={{ 
              width: "100%",
              boxShadow: [
                "0 0 0 0 rgba(0,0,0,0.2)",
                "0 0 0 5px rgba(0,0,0,0)",
                "0 0 0 0 rgba(0,0,0,0.2)"
              ]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
