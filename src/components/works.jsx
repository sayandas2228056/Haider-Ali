import React from 'react';
import { Briefcase, Award, Users, Globe, Building2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Works = () => {
  const achievements = [
    {
      icon: <Building2 className="text-blue-600" size={24} />,
      title: "Founded Zenitech Solutions",
      description: "Established leading IT Services & Consulting firm in Bengaluru",
      year: "2021-Present"
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Enterprise Leadership",
      description: "9+ years at Reliance Communications managing East Region enterprise business",
      year: "2011-2020"
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: "Strategic Partnerships",
      description: "Partnerships with AWS, Microsoft Azure, Google Cloud, Fortinet, VMware, and more",
      year: "2021-Present"
    },
    {
      icon: <Lightbulb className="text-blue-600" size={24} />,
      title: "Innovation Leadership",
      description: "Pioneered cloud and cybersecurity solutions in Indian market",
      year: "2010-Present"
    },
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Sales Excellence",
      description: "Multiple awards including Foreign Tours for over-achieving targets at RCom",
      year: "2011-2020"
    },
    {
      icon: <Briefcase className="text-blue-600" size={24} />,
      title: "Major Client Wins",
      description: "Executed orders from Allahabad Bank (1500 locations), Intel, Microsoft, Continental",
      year: "2007-2020"
    }
  ];

  const experience = [
    {
      title: "Founder & CEO",
      company: "Zenitech Solutions",
      period: "Oct 2021 - Present",
      location: "Bengaluru, India",
      highlights: [
        "Leading IT Services & Consulting firm offering Cloud, Cybersecurity, Software, and Telecom services",
        "Delivering solutions across India and globally with partnerships from AWS, Microsoft Azure, Google Cloud, and more",
        "Specializing in Cloud Solutions, Cyber Security, Telecom Services, and Software Licensing"
      ]
    },
    {
      title: "Business Head",
      company: "Naush Group",
      period: "Oct 2020 - Sep 2021",
      location: "Kolkata, India",
      highlights: [
        "Led business operations and strategic initiatives",
        "Managed enterprise client relationships",
        "Drove business growth and development"
      ]
    },
    {
      title: "Assistant General Manager (Enterprise Business)",
      company: "Reliance Communications Ltd",
      period: "Aug 2011 - Sep 2020",
      location: "Kolkata, India",
      highlights: [
        "Managed top enterprise customers across East Region (West Bengal, Bihar, Jharkhand, Assam)",
        "Awarded Foreign Tour twice for over-achieving sales targets",
        "Executed major orders including Allahabad Bank (1500 locations) and multiple cloud solutions"
      ]
    },
    {
      title: "Manager-Sales & Marketing (B2B U&R Cluster Head)",
      company: "Bharti Airtel Limited",
      period: "Feb 2010 - Jul 2011",
      location: "Bangalore, India",
      highlights: [
        "Led team of 15 personnel for B2B customer engagement",
        "Received Gold Award for increasing revenue from enterprise customers",
        "Overachieved AOP targets and managed multiple industry verticals"
      ]
    },
    {
      title: "Manager-Sales (Enterprise Business)",
      company: "Tata Teleservices Ltd",
      period: "Sep 2009 - Jan 2010",
      location: "Bangalore, India",
      highlights: [
        "Managed strategic customers including Intel, Microsoft, AOL, Capgemini, Toyota Kirloskar",
        "Responsible for sales targets, revenue maximization, and customer retention",
        "Developed customized solutions for enterprise clients"
      ]
    },
    {
      title: "Senior Manager-Sales (Enterprise Business)",
      company: "Reliance Communications Ltd",
      period: "Dec 2007 - Jun 2009",
      location: "Bangalore, India",
      highlights: [
        "Handled key clients including Continental, Volvo, PUMA, Quintiles, and Monsanto",
        "Managed existing customers and identified new market opportunities",
        "Analyzed competitor offerings and implemented cost-saving solutions"
      ]
    },
    {
      title: "Manager-Business Development",
      company: "ORG Informatics Limited",
      period: "May 2005 - Nov 2007",
      location: "Bangalore, India",
      highlights: [
        "Handled key clients including BSNL, RBI, C-DAC, DRDO Labs, ISRO, and various banks",
        "Managed large bids and turnkey IT projects for government tenders",
        "Built strong OEM relationships with HP, IBM, Dell, Cisco, Microsoft, and others"
      ]
    },
    {
      title: "Account Manager (Sales)",
      company: "Thakral Computers Pvt Ltd",
      period: "Jul 2001 - May 2005",
      location: "New Delhi and Bangalore, India",
      highlights: [
        "Handled major clients including Apollo Hospitals, Daimler Chrysler, Schneider Electric",
        "Over-achieved sales targets consistently",
        "Built strong rapport with OEMs for lead generation and deal closure"
      ]
    },
    {
      title: "Marketing Executive",
      company: "Zenith Computers Limited",
      period: "Jul 1998 - Jun 2001",
      location: "New Delhi, India",
      highlights: [
        "Managed key clients including Siemens, Citicorp, and various corporate accounts",
        "Closed major orders including 500+ PCs from Siemens",
        "Developed new accounts and maintained strategic partnerships"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      id="works" 
      className="bg-gradient-to-br from-slate-50 to-slate-100 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A journey of leadership and innovation in the technology sector
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="space-y-8 mb-16"
          variants={containerVariants}
        >
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <div className="text-sm font-medium text-blue-600 mb-1">
                    {exp.period}
                  </div>
                  <div className="text-sm text-slate-600">
                    {exp.location}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-lg text-blue-600 mb-3">
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2"
                        variants={itemVariants}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <p className="text-slate-700">{highlight}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Key <span className="text-blue-600">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-400 mx-auto mb-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-2 bg-blue-50 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <div>
                  <div className="text-sm font-medium text-blue-600 mb-1">
                    {achievement.year}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Highlights */}
        <motion.div 
          className="mt-12 bg-white rounded-xl p-8 shadow-sm"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Professional Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "25+ years of experience in Enterprise IT & Telecom Solutions",
                "Expertise in Cloud Infrastructure and Cybersecurity",
                "Extensive experience with Fortune 500 companies and Government clients"
              ].map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                  <p className="text-slate-700">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "Proven track record in business development",
                "Strong focus on client success and satisfaction",
                "Leadership in digital transformation initiatives"
              ].map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                  <p className="text-slate-700">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;