import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Craft",
    description: "Craft compelling narratives that resonate with your audience and inspire action."
  },
  {
    title: "Design",
    description: "Design strategic experiences that connect and engage on a deeper level."
  },
  {
    title: "Build",
    description: "Build communities that move with purpose and shared values."
  },
  {
    title: "Launch",
    description: "Launch movements that outlive trends and create lasting impact."
  }
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-16 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help brands:
          </motion.p>
          
          <div className="flex flex-col space-y-6 md:space-y-8">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className="relative frosted-card p-10 md:p-12 rounded-sm overflow-hidden flex flex-col md:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top highlight */}
                <div className="glass-highlight" />
                
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                {/* Card content */}
                <div className="relative z-10 w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {card.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-white mb-6 opacity-20"></div>
                  <p className="text-base text-white/70">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
