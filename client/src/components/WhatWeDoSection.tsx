import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatWeDoSection = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const capabilities = [
    {
      name: "Branding",
      description: "We craft distinctive brand identities that capture your vision and resonate with your audience. From strategy to visual expression, we build brands that stand out and stand for something.",
    },
    {
      name: "Brand Storytelling",
      description: "Your story is your superpower. We develop authentic narratives that connect with people on a human level, turning your mission into messages that inspire action and build movements.",
    },
    {
      name: "Content Strategy",
      description: "Strategic content that moves people. We create comprehensive content frameworks that align with your goals, engage your audience, and drive meaningful results across all platforms.",
    },
    {
      name: "Visual Identity",
      description: "Bold visuals that command attention. We design cohesive visual systems—from logos to brand guidelines—that don't just look good, they communicate clearly and leave lasting impressions.",
    },
    {
      name: "Photography",
      description: "Powerful imagery that tells your story. We create compelling visual content that captures the essence of your brand and connects with your audience on an emotional level.",
    },
    {
      name: "Web Design",
      description: "Digital experiences that convert. We design and develop websites that are beautiful, functional, and optimized to turn visitors into believers in your movement.",
    },
    {
      name: "Podcast Production",
      description: "Your voice, amplified. From concept to distribution, we produce high-quality podcasts that build authority, foster community, and spread your message to the world.",
    },
    {
      name: "Experience Design",
      description: "Memorable moments that matter. Whether digital or physical, we craft experiences that bring your brand to life and turn first encounters into lifelong believers.",
    },
    {
      name: "Movement Building",
      description: "Turn customers into champions. We help you build engaged communities and create conversations that transform passive audiences into active advocates for your vision.",
    },
    {
      name: "Launch Strategy",
      description: "Make your mark. We develop comprehensive go-to-market strategies and growth frameworks that don't just get you noticed—they get you remembered, shared, and sought after.",
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
            {/* Left: Services List */}
            <div className="space-y-0">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="relative pl-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setActiveCapability(index)}
                  animate={activeCapability === index ? { x: 12 } : { x: 0 }}
                >
                  <motion.button
                    onClick={() => setActiveCapability(index)}
                    className={`w-full text-left py-2 transition-all duration-300 ${
                      activeCapability === index
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ x: 8 }}
                  >
                    <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                      {capability.name}
                    </h3>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Right: Details Panel */}
            <div className="relative flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: activeCapability * 80
                  }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut",
                    y: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="w-full"
                >
                  <motion.div 
                    className="p-8 lg:p-12"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.p 
                      className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {capabilities[activeCapability].description}
                    </motion.p>
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
                      className="text-3xl font-bold leading-tight text-white pr-4 group-hover:text-gray-200 transition-colors duration-300"
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
                          className="text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {capability.description}
                        </motion.p>
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