import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SignatureBeliefSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-4xl mx-auto text-center relative frosted-card py-16 px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top highlight */}
          <div className="glass-highlight" />
          
          {/* Add subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-6xl font-bold"
              style={{ letterSpacing: '-0.05em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "An idea can set the world on fire."
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureBeliefSection;
