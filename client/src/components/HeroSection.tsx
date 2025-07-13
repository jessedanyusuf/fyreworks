import { motion } from "framer-motion";
import robotImage from "@assets/Robots in Agbada Conversation (1)_1752409569547.png";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen relative bg-black overflow-hidden">
      {/* Centered Image Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img 
          src={robotImage} 
          alt="Three robotic figures in traditional African attire having a conversation"
          className="max-h-[70vh] max-w-[80vw] object-contain rounded-lg shadow-2xl"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      {/* Black blur overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      
      {/* Text content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-8 tracking-tight flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span>Don't build a brand.</span>
              <span>Build a movement.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              An idea can set the world on fire.
            </motion.p>
            
            <motion.div
              className="spark-line my-8 w-0"
              initial={{ width: "0%" }}
              animate={{ 
                width: ["0%", "100%", "0%"],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="mailto:hello@fwrks.com" 
                className="frosted-button text-white font-bold"
              >
                Let&apos;s set the world on fire
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
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
