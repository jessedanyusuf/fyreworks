import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Brand Strategy",
    description: "Clarify your message, mission, and movement"
  },
  {
    title: "Storytelling & Content",
    description: "Tell stories that connect hearts and spark minds"
  },
  {
    title: "Experience Design",
    description: "Create experiences people never forget"
  },
  {
    title: "Movement Building",
    description: "From launch to legacy, we help you scale your vision"
  }
];

const HowWeDoItSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="how-we-do-it" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.05em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            How We Do It
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-16"
            style={{ letterSpacing: '-0.05em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Through a collaborative process that blends:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="relative frosted-card p-8 overflow-hidden flex flex-col aspect-[3/5] justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top highlight */}
                <div className="glass-highlight" />
                
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4" style={{ letterSpacing: '-0.05em' }}>
                      {pillar.title}
                    </h3>
                    <div className="h-[1px] w-12 bg-white mb-6 opacity-20"></div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm md:text-base text-white/70" style={{ letterSpacing: '-0.05em' }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
