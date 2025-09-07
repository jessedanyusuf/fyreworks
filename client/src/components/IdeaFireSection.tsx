import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import moonImage from '../assets/moon.png';
import rocketImage from '../assets/rocket.png';
import earthImage from '../assets/earth.png';

const IdeaFireSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="min-h-[40vh] sm:min-h-[60vh] lg:min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden -mt-4 sm:-mt-8 lg:-mt-16" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-1 sm:py-2 lg:py-4 relative">

        {/* Main Typography Container */}
        <div className="relative flex items-center justify-center min-h-[30vh] sm:min-h-[40vh] lg:min-h-[60vh]">
          <div className="w-full max-w-6xl text-center">
            
            {/* Redesigned Typography with Tight Line Spacing */}
            <div className="space-y-0 sm:space-y-1 lg:space-y-2 relative">
              
              {/* Line 1 - AN IDEA */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30, x: -15 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  x: -6,
                  transition: { duration: 1.0, ease: "easeOut", delay: 0.2 }
                } : {}}
              >
                <h1 className="text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  AN IDEA
                </h1>
                
                {/* Moon above IDEA - shifted right */}
                <motion.div
                  className="absolute -top-8 sm:-top-12 lg:-top-16 xl:-top-20 right-8 sm:right-12 lg:right-16 xl:right-20
                           w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 z-10"
                  initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
                  } : {}}
                >
                  <motion.img 
                    src={moonImage} 
                    alt="Moon" 
                    className="w-full h-full object-contain filter brightness-90"
                    animate={isVisible ? {
                      rotate: 360
                    } : {}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Line 2 - CAN SET */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30, x: 25 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  x: 12,
                  transition: { duration: 1.0, ease: "easeOut", delay: 0.4 }
                } : {}}
              >
                <h1 className="text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  CAN SET
                </h1>
              </motion.div>

              {/* Line 3 - THE WORLD */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30, x: -35 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  x: -20,
                  transition: { duration: 1.0, ease: "easeOut", delay: 0.6 }
                } : {}}
              >
                <h1 className="text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  THE WORLD
                </h1>
              </motion.div>

              {/* Line 4 - ON FIRE */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30, x: 12 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  x: 6,
                  transition: { duration: 1.0, ease: "easeOut", delay: 0.8 }
                } : {}}
              >
                <h1 className="text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  ON FIRE
                </h1>
                
                {/* Earth below FIRE - much bigger and shifted left */}
                <motion.div
                  className="absolute top-full left-8 sm:left-12 lg:left-16 xl:left-20 -mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-20
                           w-32 h-32 sm:w-44 sm:h-44 lg:w-64 lg:h-64 xl:w-80 xl:h-80 z-10"
                  initial={{ opacity: 0, scale: 0.4, y: 30 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: { duration: 1.3, ease: "easeOut", delay: 1.0 }
                  } : {}}
                >
                  <motion.img 
                    src={earthImage} 
                    alt="Earth" 
                    className="w-full h-full object-contain"
                    animate={isVisible ? {
                      y: [0, -8, 0, -6, 0],
                      x: [0, 2, 0, -2, 0]
                    } : {}}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2.5
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Rocket floating between lines 2 and 3 - bigger and pushed up */}
              <motion.div
                className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         w-32 h-32 sm:w-44 sm:h-44 lg:w-60 lg:h-60 xl:w-72 xl:h-72 z-10"
                initial={{ opacity: 0, y: 100, scale: 0.2 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 1.5, ease: "easeOut", delay: 0.7 }
                } : {}}
              >
                <motion.img 
                  src={rocketImage} 
                  alt="Rocket" 
                  className="w-full h-full object-contain"
                  animate={isVisible ? {
                    x: [0, 3, -3, 2, -2, 0],
                    y: [0, -2, 2, -1, 1, 0],
                    rotate: [0, 1, -1, 0.5, -0.5, 0]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                />
              </motion.div>

            </div>
          </div>
        </div>

        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent pointer-events-none" />
        
      </div>
    </section>
  );
};

export default IdeaFireSection;
