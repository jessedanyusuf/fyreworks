import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhoWeWorkWithSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            For Visionaries.
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-3xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Makers. Founders. Creators. Leaders.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
