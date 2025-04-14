import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Creativity",
    description: "Craft compelling visual identities and design solutions that captivate and inspire."
  },
  {
    title: "Strategy",
    description: "Develop actionable plans that align with your vision and drive meaningful results."
  },
  {
    title: "Storytelling",
    description: "Create narratives that resonate with your audience and communicate your unique value."
  },
  {
    title: "Movements",
    description: "Build communities and momentum that extend beyond traditional brand experiences."
  }
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-white text-black">
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
            className="text-xl md:text-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help visionaries build meaningful brands through:
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className="relative frosted-card p-8 rounded-none overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 pointer-events-none" />
                
                {/* Card content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                    {card.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-black mb-4 opacity-70"></div>
                  <p className="text-sm opacity-80 text-black">
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
