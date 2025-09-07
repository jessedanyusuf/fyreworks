import { motion } from "framer-motion";
import { useState } from "react";

const JoinTheMovementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "CAMPFYRE",
      description: "Creative education for creators, by creators",
      link: "https://www.campfyre.co",
      comingSoon: false
    },
    {
      title: "LANTERN",
      description: "Funding creative people, platforms and possibilities",
      link: null,
      comingSoon: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ letterSpacing: '-0.05em' }}>
            Join the Movement
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {cards.map((card, index) => {
            const CardContent = () => (
              <div className="relative frosted-card p-10 overflow-hidden flex flex-col aspect-[2/3] justify-between">
                {/* Top highlight */}
                <div className="glass-highlight" />
                
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                {/* Card content */}
                <div className="relative z-10 w-full flex flex-col h-full">
                  <div>
                    <h3 
                      className={`text-xl md:text-2xl mb-4 text-white ${
                        card.title === "CAMPFYRE" || card.title === "LANTERN" 
                          ? 'font-bold' 
                          : 'font-black'
                      }`}
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      {card.title === "CAMPFYRE" ? "Campfyre" : 
                       card.title === "LANTERN" ? "Lantern" : 
                       card.title}
                    </h3>
                    
                    {/* Pills under headings */}
                    {card.title === "CAMPFYRE" && (
                      <div className="mb-6">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                          Our Community
                        </span>
                      </div>
                    )}
                    {card.title === "LANTERN" && (
                      <div className="mb-6">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto">
                    <p className="text-base text-white/70 mb-2" style={{ letterSpacing: '-0.05em' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={card.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <CardContent />
                  </a>
                ) : (
                  <CardContent />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card, index) => {
                const CardContent = () => (
                  <div className="relative frosted-card p-8 overflow-hidden flex flex-col aspect-[2/3] justify-between">
                    {/* Top highlight */}
                    <div className="glass-highlight" />
                    
                    {/* Add subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    
                    {/* Card content */}
                    <div className="relative z-10 w-full flex flex-col h-full">
                      <div>
                        <h3 
                          className={`text-xl mb-4 text-white ${
                            card.title === "CAMPFYRE" || card.title === "LANTERN" 
                              ? 'font-bold' 
                              : 'font-black'
                          }`}
                          style={{ letterSpacing: '-0.05em' }}
                        >
                          {card.title === "CAMPFYRE" ? "Campfyre" : 
                           card.title === "LANTERN" ? "Lantern" : 
                           card.title}
                        </h3>
                        
                        {/* Pills under headings */}
                        {card.title === "CAMPFYRE" && (
                          <div className="mb-6">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                              Our Community
                            </span>
                          </div>
                        )}
                        {card.title === "LANTERN" && (
                          <div className="mb-6">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                              Coming Soon
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-auto">
                        <p className="text-base text-white/70 mb-2" style={{ letterSpacing: '-0.05em' }}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={card.title}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {card.link ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <CardContent />
                      </a>
                    ) : (
                      <CardContent />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                         ${index === currentSlide 
                           ? 'bg-white scale-125' 
                           : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovementSection;