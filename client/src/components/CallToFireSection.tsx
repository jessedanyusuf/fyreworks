import { motion } from "framer-motion";

const CallToFireSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-8xl lg:text-9xl font-bold mb-12 leading-none"
            style={{ letterSpacing: '-0.05em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            An idea can set the world on fire.
          </motion.h2>
          
          <motion.div
            className="spark-line mx-auto my-12 w-0"
            initial={{ width: "0%" }}
            whileInView={{ 
              width: ["0%", "100%", "0%"],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:hello@fwrks.com" 
              className="frosted-button text-white font-bold text-lg"
              style={{ letterSpacing: '-0.05em' }}
            >
              Let's set the world on fire
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToFireSection;