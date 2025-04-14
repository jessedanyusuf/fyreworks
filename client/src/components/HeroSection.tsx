import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto py-20">
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Don't build a brand. Build a movement.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fireworks helps visionaries turn ideas into movements.
          </motion.p>
          
          <motion.div
            className="spark-line mx-auto my-8 w-0"
            initial={{ width: "0%" }}
            animate={{ 
              width: ["0%", "100%", "0%"],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a 
          href="#what-we-do" 
          className="inline-block"
          aria-label="Scroll to What We Do section"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
