import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Globe, Mail, Clock, Coffee, Lightbulb, Zap, Heart, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const pulseTimer = setInterval(() => setPulseActive(prev => !prev), 3000);
    return () => {
      clearInterval(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  const timeInBengaluru = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const isWorkingHours = () => {
    const hour = new Date().getHours();
    return hour >= 9 && hour <= 18;
  };

  const contactMethods = [
    {
      id: 'call',
      icon: Phone,
      title: "Let's Talk",
      subtitle: "Direct line to innovation",
      primary: "+91 8820066999",
      action: "tel:+918820066999",
      description: "Quick decisions, faster solutions",
      color: "from-emerald-500 to-teal-600",
      hoverEffect: "scale-110 rotate-3"
    },
    {
      id: 'email',
      icon: Mail,
      title: "Drop a Line",
      subtitle: "Where ideas meet inbox",
      primary: "haider@zenitech.in",
      action: "mailto:haider@zenitech.in",
      description: "Detailed discussions welcome",
      color: "from-blue-500 to-indigo-600",
      hoverEffect: "scale-110 -rotate-3"
    },
    {
      id: 'web',
      icon: Globe,
      title: "Explore More",
      subtitle: "Our Company Website",
      primary: "www.zenitech.in",
      secondary: " IT Services ,Cloud , Cybersecurity , Software Solutions ,Telecom Services ",      action: "https://www.zenitech.in",
      description: "See what we've built",
      color: "from-purple-500 to-pink-600",
      hoverEffect: "scale-110 rotate-1"
    },
    {
      id: 'location',
      icon: MapPin,
      title: "Find Us",
      subtitle: "Silicon Valley of India",
      primary: "Bengaluru, India",
      secondary: `It's ${timeInBengaluru} here`,
      action: "#",
      description: "Where innovation never sleeps",
      color: "from-orange-500 to-red-600",
      hoverEffect: "scale-110 -rotate-2"
    }
  ];

  const quickFacts = [
    { icon: Clock, text: "Fast Consulation response", color: "text-green-400" },
    { icon: Coffee, text: "Best reached over virtual coffee", color: "text-yellow-400" },
    { icon: Lightbulb, text: "Always excited about new ideas", color: "text-blue-400" },
    { icon: Zap, text: "Fast turnaround on proposals", color: "text-purple-400" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-teal-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className={`w-3 h-3 rounded-full ${isWorkingHours() ? 'bg-green-400' : 'bg-yellow-400'} ${pulseActive ? 'animate-ping' : ''}`}></div>
            <span className="text-sm font-medium">
              {isWorkingHours() ? 'Available Now' : 'Will Respond Soon'}
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every great project starts with a conversation. Whether you have a
            <span className="text-blue-400 font-semibold ml-1"> bold vision</span>, a
            <span className="text-purple-400 font-semibold ml-1"> complex challenge</span>, or just want to
            <span className="text-teal-400 font-semibold ml-1"> explore possibilities</span> –
            I'm here to turn ideas into reality.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.id}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col items-start sm:items-center ${hoveredCard === method.id ? method.hoverEffect : ''}`}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(method.action, method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? '_self' : '_blank')}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base xs:text-lg font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                  {method.title}
                </h3>
                <p className="text-xs xs:text-sm text-slate-400 mb-3">{method.subtitle}</p>
                <div className="space-y-1 mb-3">
                  <p className="text-white font-medium text-sm xs:text-base">{method.primary}</p>
                  <p className="text-slate-300 text-xs xs:text-sm">{method.secondary}</p>
                </div>
                <p className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {method.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xs:p-8 border border-white/10 mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-red-400" />
            <h3 className="text-xl xs:text-2xl font-semibold">Why You'll Love Working Me</h3>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Icon className={`w-5 h-5 ${fact.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm xs:text-base">
                    {fact.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 xs:p-8 shadow-2xl">
            <MessageCircle className="w-10 h-10 xs:w-12 xs:h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl xs:text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm xs:text-base">
              From concept to deployment, let's build something that makes a difference.
              No project is too big or too small – every great solution starts with understanding your needs.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 items-center justify-center">
              <a
                href="tel:+918820066999"
                className="bg-white text-blue-600 px-6 xs:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg text-sm xs:text-base"
              >
                Call Now - Let's Talk!
              </a>
              <a
                href="mailto:haider@zenitech.in"
                className="border-2 border-white text-white px-6 xs:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 text-sm xs:text-base"
              >
                Send an Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;