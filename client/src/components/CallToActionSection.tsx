import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CallToActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s set the world on fire
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's build something meaningful together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="mailto:hello@fwrks.com" 
              className="frosted-button text-white font-bold"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
