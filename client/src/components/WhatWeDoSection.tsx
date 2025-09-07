import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatWeDoSection = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const capabilities = [
    {
      name: "Brand Strategy & Positioning",
      description: "We dig deep to uncover what makes your vision unique, then craft a strategic foundation that gives your brand clarity, direction, and unstoppable momentum.",
      services: [
        "Brand positioning & differentiation",
        "Messaging framework development", 
        "Competitive analysis & market positioning",
        "Brand architecture & naming",
        "Voice & tone development"
      ]
    },
    {
      name: "Story & Content Creation",
      description: "Every movement needs a story worth spreading. We develop authentic narratives that connect with your audience on a human level—turning your mission into messages that move people to action.",
      services: [
        "Brand storytelling & narrative development",
        "Content strategy & planning",
        "Copywriting & messaging",
        "Video & podcast production",
        "Social media content creation"
      ]
    },
    {
      name: "Visual Identity & Design",
      description: "Your vision deserves a visual language that commands attention. We create bold, cohesive identities that don't just look good—they feel right, communicate clearly, and leave lasting impressions.",
      services: [
        "Logo & brand mark design",
        "Visual identity systems",
        "Brand guidelines & style guides",
        "Print & digital design",
        "Packaging & merchandise design"
      ]
    },
    {
      name: "Experience Design",
      description: "Whether digital or physical, we craft experiences that bring your brand to life. From websites that convert to events that inspire, we design touchpoints that turn first encounters into lifelong believers.",
      services: [
        "Website design & development",
        "User experience (UX) design",
        "Event & activation design",
        "Digital product design",
        "Customer journey mapping"
      ]
    },
    {
      name: "Movement Building",
      description: "Ideas become movements when people feel compelled to join in. We help you build communities, create conversations, and turn customers into champions who carry your vision forward.",
      services: [
        "Community strategy & building",
        "Social media strategy",
        "Influencer & partnership programs",
        "Brand ambassador programs",
        "Grassroots marketing campaigns"
      ]
    },
    {
      name: "Launch & Growth Strategy",
      description: "Ready to make your mark? We develop comprehensive launch strategies and growth frameworks that don't just get you noticed—they get you remembered, shared, and sought after.",
      services: [
        "Go-to-market strategy",
        "Campaign development & execution",
        "PR & media strategy",
        "Growth marketing",
        "Performance tracking & optimization"
      ]
    }
  ];

  const handleMobileToggle = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };
  
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4" 
                style={{ fontFamily: 'var(--sf-display)', letterSpacing: '-0.05em' }}>
            What We Do
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your ideas into impactful movements
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Navigation */}
            <div className="space-y-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => setActiveCapability(index)}
                    className={`w-full text-left py-6 transition-all duration-500 ${
                      activeCapability === index
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.h3 
                      className={`text-2xl lg:text-3xl font-bold mb-4 transition-all duration-500 ${
                        activeCapability === index ? 'text-white' : 'text-gray-400'
                      }`}
                      animate={activeCapability === index ? {
                        textShadow: "0 0 20px rgba(255,255,255,0.3)"
                      } : {}}
                    >
                      {capability.name}
                    </motion.h3>
                    
                    <motion.div 
                      className={`h-0.5 transition-all duration-500 ${
                        activeCapability === index ? 'bg-white' : 'bg-gray-600'
                      }`}
                      animate={activeCapability === index ? {
                        width: "100%",
                        boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                      } : {
                        width: "4rem"
                      }}
                    />
                  </motion.button>
                  
                </motion.div>
              ))}
            </div>

            {/* Right Content */}
            <div className="relative flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -30, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                  style={{ 
                    transform: `translateY(${activeCapability * 8}rem)` 
                  }}
                >
                  <motion.div 
                    className="p-8"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold mb-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {capabilities[activeCapability].name}
                    </motion.h3>
          
          <motion.p 
                      className="text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
          >
                      {capabilities[activeCapability].description}
          </motion.p>
          
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mb-4 text-white">Services:</h4>
                      <ul className="space-y-3">
                        {capabilities[activeCapability].services.map((service, serviceIndex) => (
                          <motion.li 
                            key={serviceIndex} 
                            className="flex items-start group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + serviceIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.span 
                              className="text-red-500 mr-3 mt-1 group-hover:text-red-400 transition-colors duration-300"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                transition: { duration: 0.6, delay: 0.5 + serviceIndex * 0.1 }
                              }}
                            >
                              •
                            </motion.span>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {service}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Accordion Layout */}
          <div className="md:hidden space-y-6">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => handleMobileToggle(index)}
                  className="w-full text-left py-6 transition-all duration-300 group"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      className="text-xl font-bold text-white pr-4 group-hover:text-gray-200 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {capability.name}
                    </motion.h3>
                    <motion.div
                      animate={{ 
                        rotate: expandedMobile === index ? 180 : 0,
                        scale: expandedMobile === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <svg 
                        className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="mt-3 h-0.5 bg-gradient-to-r from-red-500 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: expandedMobile === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>

                <AnimatePresence>
                  {expandedMobile === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="pt-6"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.p 
                          className="text-gray-300 mb-6 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {capability.description}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <h4 className="text-lg font-semibold mb-4 text-white">Services:</h4>
                          <ul className="space-y-3">
                            {capability.services.map((service, serviceIndex) => (
                              <motion.li 
                                key={serviceIndex} 
                                className="flex items-start group"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 + serviceIndex * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.span 
                                  className="text-red-500 mr-3 mt-1 flex-shrink-0 group-hover:text-red-400 transition-colors duration-300"
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 0.5, delay: 0.5 + serviceIndex * 0.1 }
                                  }}
                                >
                                  •
                                </motion.span>
                                <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                  {service}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;