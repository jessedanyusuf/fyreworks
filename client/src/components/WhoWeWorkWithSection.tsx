import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const WhoWeWorkWithSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const words = [
    "Visionaries",
    "Creators", 
    "Leaders",
    "Changemakers",
    "Pioneers",
    "Trailblazers",
    "Innovators",
    "Disruptors",
    "Game-changers",
    "Revolutionaries",
    "Mavericks",
    "Catalysts",
    "Builders",
    "Founders",
    "Dreamers",
    "Doers",
    "Makers",
    "Challengers",
    "Risk-takers",
    "Rule-breakers",
    "Purpose-driven souls",
    "Impact seekers",
    "World changers",
    "Future shapers",
    "Boundary pushers",
    "Status quo challengers",
    "Believers",
    "Change Agents",
    "Movement Makers",
    "Culture Architects"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  useEffect(() => {
    if (isInView) {
              const interval = setInterval(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 800); // Change word every 0.8 seconds
      
      return () => clearInterval(interval);
    }
  }, [isInView, words.length]);
  
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* The Creative Studio - small text above */}
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-gray-400 mb-2 font-bold tracking-wide uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Creative Studio
            </motion.p>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
                style={{ fontFamily: 'var(--sf-display)', letterSpacing: '-0.05em' }}>
              For
            </h2>
            
            {/* Animated scrolling words */}
            <div className="relative h-24 md:h-32 lg:h-40 overflow-hidden">
              {words.map((word, index) => (
                <motion.h2
                  key={word}
                  className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-bold"
                  style={{ fontFamily: 'var(--sf-display)', letterSpacing: '-0.05em' }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: index === currentWordIndex ? 0 : index < currentWordIndex ? -100 : 100,
                    opacity: index === currentWordIndex ? 1 : 0
                  }}
                             transition={{ 
             duration: 0.3,
             ease: "easeInOut"
           }}
                >
                  {word}<span className="text-red-500">.</span>
                </motion.h2>
              ))}
            </div>
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-4xl lg:text-5xl opacity-80 max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: 'var(--sf-display)', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's set the world on fire
          </motion.p>
          
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="mailto:hello@fwrks.com" 
              className="frosted-button text-white font-bold"
              style={{ letterSpacing: '-0.05em' }}
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
