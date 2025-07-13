import { motion } from "framer-motion";
import robotImage from "@assets/Robots in Agbada Conversation (1)_1752409569547.png";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen relative bg-black text-white flex items-center justify-center">
      {/* Container for centered layout */}
      <div className="container mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left side - Image */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src={robotImage} 
              alt="Three robotic figures in traditional African attire having a conversation"
              className="max-w-full h-auto rounded-lg shadow-2xl max-h-[70vh] object-contain"
            />
          </motion.div>
          
          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
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
              className="spark-line mx-auto lg:mx-0 my-8 w-0"
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
