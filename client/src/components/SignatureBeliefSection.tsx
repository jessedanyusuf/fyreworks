import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SignatureBeliefSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section className="py-20 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            "An idea can set the world on fire."
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default SignatureBeliefSection;
