import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  "Craft compelling narratives that resonate",
  "Design strategic experiences that connect",
  "Build communities that move with purpose",
  "Launch movements that outlive trends"
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
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
            We help brands:
          </motion.p>
          
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className="mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <h3 className="text-xl md:text-3xl font-medium mb-4">
                {point}
              </h3>
              <div className="h-[1px] w-24 bg-black mb-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
