import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import IIITBLogo from '../assets/EduLogo/iiitbofficial_logo.jpeg';
import IITRLogo from '../assets/EduLogo/indian_institute_of_technology_roorkee_logo.jpeg';
import AIMALogo from '../assets/EduLogo/All India Management Association.jpeg';
import VMLogo from '../assets/EduLogo/ramakrishna_mission_vidyamandira_logo.jpeg';

const Education = () => {
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
      id="edu"
      className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24"
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
            Education & <span className="text-blue-600">Certifications</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-400 mx-auto mb-6"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Continuous learning and professional development in technology and business leadership
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education Section */}
          <motion.div 
            className="mb-16"
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <BookOpen className="mr-2 text-blue-600" size={24} />
              Education
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.img 
                    src={IITRLogo} 
                    alt="IIT Roorkee Logo" 
                    className="w-10 h-10 rounded-full bg-white border mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">Nov 2023 – Apr 2025</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                      <span className="mr-2">Indian Institute of Technology, Roorkee</span>
                    </motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Advanced Certification in Cloud Computing</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.img 
                    src={IIITBLogo} 
                    alt="IIIT Bangalore Logo" 
                    className="w-10 h-10 rounded-full bg-white border mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">Apr 2024 – Nov 2024</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                      <span className="mr-2">International Institute of Information Technology Bangalore</span>
                    </motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Advanced Executive Program in Cybersecurity</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.img 
                    src={AIMALogo} 
                    alt="AIMA Logo" 
                    className="w-10 h-10 rounded-full bg-white border mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">1996 – 1998</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                      <span className="mr-2">All India Management Association (AIMA)</span>
                    </motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Post Graduate Diploma in Information Technology & Management</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.img 
                    src={VMLogo} 
                    alt="Ramakrishna Mission Vidyamandira Logo" 
                    className="w-10 h-10 rounded-full bg-white border mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">1992 – 1995</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1 flex items-center">
                      <span className="mr-2">Ramakrishna Mission Vidyamandira</span>
                    </motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Bachelor of Science</motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Award className="mr-2 text-blue-600" size={24} />
              Professional Certifications
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2023</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">AWS Certified Solutions Architect</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Amazon Web Services (AWS)</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2023</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">Microsoft Certified: Azure Solutions Architect Expert</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Microsoft</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2022</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">CISSP - Certified Information Systems Security Professional</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">(ISC)²</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2021</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">VMware Certified Professional - Data Center Virtualization</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">VMware</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2020</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">Project Management Professional (PMP)</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">Project Management Institute</motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 p-5 rounded-lg border border-slate-100"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-blue-600" size={20} />
                  </motion.div>
                  <div>
                    <motion.div variants={itemVariants} className="text-xs font-medium text-blue-900 mb-1">2019</motion.div>
                    <motion.h4 variants={itemVariants} className="text-base font-semibold text-slate-900 mb-1">ITIL v4 Foundation</motion.h4>
                    <motion.div variants={itemVariants} className="text-sm text-slate-600">AXELOS</motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
