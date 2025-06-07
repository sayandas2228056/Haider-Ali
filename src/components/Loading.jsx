import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/img/Logo.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-indigo-600/10"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(99, 102, 241, 0.1) 100%)',
              'linear-gradient(225deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative flex flex-col items-center space-y-8 z-10">
        {/* Logo Container with Glow Effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: '150px', height: '150px', left: '-50%', top: '-50%' }}
          />
          
          {/* Logo Image */}
          <div className="relative w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
            <motion.img
              src={Logo}
              alt="Zenitech Logo"
              className="w-full h-full object-contain p-2"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center space-y-2"
        >
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Haider Ali
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1] }}
            transition={{ delay: 0.8, duration: 2, repeat: Infinity }}
          >
            Welcome to my Portfolio
          </motion.p>
        </motion.div>

        {/* Advanced Loading Animation */}
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            className="w-20 h-20 border-2 border-blue-600/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 border-2 border-blue-400/50 rounded-full border-t-blue-400"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-4 border-2 border-blue-300/70 rounded-full border-r-transparent border-b-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center Dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Progress Dots */}
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-blue-300 text-sm tracking-wider"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading Portfolio...
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;