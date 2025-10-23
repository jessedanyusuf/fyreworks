import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import moonImage from '../assets/moon.png';
import rocketImage from '../assets/rocket.png';
import earthImage from '../assets/earth.png';

const IdeaFireSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-based rocket animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Track from when section enters to when it exits
  });

  const rocketY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -300]);

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
            <div className="space-y-0 relative">
              
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
                <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  YOUR IDEA
                </h1>
                
                {/* Moon above IDEA - shifted right */}
                <motion.div
                  className="absolute -top-8 sm:-top-12 lg:-top-16 xl:-top-20 right-8 sm:right-12 lg:right-16 xl:right-20
                           w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 z-10"
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
                <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
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
                <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
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
                <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                             font-bold uppercase leading-none tracking-tight"
                    style={{ fontFamily: 'var(--sf-display)' }}>
                  ON FIRE
                </h1>
                
                {/* Earth below FIRE - much bigger and shifted left */}
                <motion.div
                  className="absolute top-full left-8 sm:left-12 lg:left-16 xl:left-20 -mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-20
                           w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10"
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
                         w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { 
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                } : {}}
                style={{ y: rocketY }}
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
