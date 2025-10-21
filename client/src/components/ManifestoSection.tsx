import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ManifestoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"]
  });

  // Split the manifesto text into segments for highlighting
  const manifestoSegments = [
    "We believe the world needs more visionaries—",
    "people who see possibility where others see problems",
    "and refuse to accept \"that's just how it is.\"",
    "But sparks need fuel, structure, and soul",
    "to become unstoppable movements.",
    "That's where we come in.",
    "We turn bold visions into brand movements that matter,",
    "helping you build authentic stories that move people,",
    "strategic foundations that last,",
    "and communities that carry your mission forward.",
    "Because the world doesn't need another brand—",
    "it needs your movement."
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const segmentIndex = Math.floor(progress * manifestoSegments.length);
      setHighlightedIndex(segmentIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, manifestoSegments.length]);

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 font-bold tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Manifesto
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
              style={{ fontFamily: 'var(--sf-display)', letterSpacing: '-0.05em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          {/* Manifesto Text with Scroll Highlighting */}
          <div 
            ref={textRef}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
              {manifestoSegments.map((segment, index) => (
                <motion.span
                  key={index}
                  className={`inline transition-all duration-700 ease-out ${
                    highlightedIndex >= index 
                      ? 'text-white opacity-100' 
                      : 'text-gray-600 opacity-40'
                  }`}
                  style={{ 
                    fontFamily: 'var(--sf-display)', 
                    letterSpacing: '-0.02em'
                  }}
                  initial={{ opacity: 0.4 }}
                  animate={{ 
                    opacity: highlightedIndex >= index ? 1 : 0.4,
                    color: highlightedIndex >= index ? '#ffffff' : '#6b7280'
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {segment}
                  {index < manifestoSegments.length - 1 && ' '}
                </motion.span>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-16 md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={highlightedIndex >= manifestoSegments.length - 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a 
                  href="mailto:hello@fyreworks.co" 
                  className="frosted-button text-white font-bold text-lg md:text-xl"
                  style={{ letterSpacing: '-0.05em' }}
                >
                  Join Our Movement
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default ManifestoSection;
