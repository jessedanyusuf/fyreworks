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
    <section id="how-we-do-it" className="py-20 md:py-32 bg-[#F5F5F7] text-black">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            How We Do It
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Through a collaborative process that blends:
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="opacity-80">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
