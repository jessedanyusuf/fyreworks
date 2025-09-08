import { motion } from "framer-motion";
import { useState } from "react";
import campfyreImage from "../assets/campyfre.png";
import fyreworks3dLogo from "../assets/fyreworks-3d-floating-logo.png";

const JoinTheMovementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "CAMPFYRE",
      subtitle: "The community for creators, by creators",
      description: "Where creative minds gather, collaborate, and celebrate wins together. More than a network—it's your creative collective.",
      ctaText: "Join CAMPFYRE",
      ctaSubtext: "READY TO CONNECT?",
      link: "https://www.campfyre.co",
      comingSoon: false,
      image: campfyreImage
    },
    {
      title: "LANTERN",
      subtitle: "Coming Soon",
      description: "Empowering visionaries with the resources to turn bold ideas into reality. The bridge between creative potential and capital.",
      ctaText: "Get Early Access",
      ctaSubtext: "BE THE FIRST TO KNOW",
      link: null,
      comingSoon: true,
      image: fyreworks3dLogo
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
            JOIN THE MOVEMENT
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto" style={{ letterSpacing: '-0.05em' }}>
            Two ways to become part of something bigger
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {cards.map((card, index) => {
            const CardContent = () => (
              <div className="relative frosted-card overflow-hidden flex flex-col aspect-[2/3]">
                {/* Top highlight */}
                <div className="glass-highlight" />
                
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                {/* Image section - takes up half the card */}
                <div className="relative h-1/2 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Black fade at top and bottom for CAMPFYRE */}
                  {card.title === "CAMPFYRE" && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
                
                {/* Content section - takes up half the card */}
                <div className="relative z-10 h-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-2 text-white font-bold"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      {card.title === "CAMPFYRE" ? "CAMPFYRE" : "LANTERN"}
                    </h3>
                    
                    <p className="text-sm text-white/80 mb-3 font-medium" style={{ letterSpacing: '-0.05em' }}>
                      {card.subtitle}
                    </p>
                    
                    <p className="text-sm text-white/70 mb-4" style={{ letterSpacing: '-0.05em' }}>
                      {card.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-white/60 mb-2" style={{ letterSpacing: '-0.05em' }}>
                      {card.ctaSubtext}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/20 transition-all duration-300">
                      {card.ctaText}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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
                  <div className="relative frosted-card overflow-hidden flex flex-col aspect-[2/3]">
                    {/* Top highlight */}
                    <div className="glass-highlight" />
                    
                    {/* Add subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    
                    {/* Image section - takes up half the card */}
                    <div className="relative h-1/2 overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Black fade at top and bottom for CAMPFYRE */}
                      {card.title === "CAMPFYRE" && (
                        <>
                          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent" />
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    </div>
                    
                    {/* Content section - takes up half the card */}
                    <div className="relative z-10 h-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 
                          className="text-lg mb-2 text-white font-bold"
                          style={{ letterSpacing: '-0.05em' }}
                        >
                          {card.title === "CAMPFYRE" ? "CAMPFYRE" : "LANTERN"}
                        </h3>
                        
                        <p className="text-xs text-white/80 mb-2 font-medium" style={{ letterSpacing: '-0.05em' }}>
                          {card.subtitle}
                        </p>
                        
                        <p className="text-xs text-white/70 mb-3" style={{ letterSpacing: '-0.05em' }}>
                          {card.description}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-white/60 mb-1" style={{ letterSpacing: '-0.05em' }}>
                          {card.ctaSubtext}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                          {card.ctaText}
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
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