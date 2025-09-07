import React, { useState, useEffect, useRef } from 'react';
import lavaIceImage from '../assets/lava-ice.png';
import philipDadaJrImage from '../assets/philip-dada-jr.png';
import yangaImage from '../assets/yanga.png';
import youngImage from '../assets/young.png';
import shushiImage from '../assets/shushi.jpg';
import ebeweleBrownImage from '../assets/ebewele-brown.png';
import smcStethoscopeImage from '../assets/smc-stethoscope.jpg';
import toritoriImage from '../assets/toritori.png';
import shenationImage from '../assets/shenation.png';

interface Client {
  name: string;
  services: string[];
  description: string;
  image?: string;
}

const ClientCarousel: React.FC = () => {
  const clients: Client[] = [
    {
      name: "LAVA",
      services: ["Branding", "Strategy", "Creative"],
      description: "Energy drink brand development and creative strategy",
      image: lavaIceImage
    },
    {
      name: "Philip Dada Jr.",
      services: ["Branding", "Strategy", "Creative"],
      description: "Men's wear brand identity and strategic positioning",
      image: philipDadaJrImage
    },
    {
      name: "YANGA",
      services: ["Branding", "Content", "Strategy"],
      description: "Social media magazine for women and lifestyle brand development",
      image: yangaImage
    },
    {
      name: "YOUNG!",
      services: ["Branding", "Content", "Strategy"],
      description: "Storytelling platform documenting Africa's youth with comprehensive brand experience",
      image: youngImage
    },
    {
      name: "Zinox Computers",
      services: ["Ecommerce Website", "Strategy"],
      description: "Digital commerce platform with strategic market positioning"
    },
    {
      name: "SHUSHI",
      services: ["Branding", "Creative", "Strategy"],
      description: "Eyewear brand development and creative strategy",
      image: shushiImage
    },
    {
      name: "Ebewele Brown",
      services: ["Creative", "Content Strategy"],
      description: "Men's wear brand creative direction and content strategy",
      image: ebeweleBrownImage
    },
    {
      name: "Siloan Medical Center",
      services: ["Creative", "Website"],
      description: "Healthcare brand creative and digital presence",
      image: smcStethoscopeImage
    },
    {
      name: "TORITORI Africa",
      services: ["Branding", "Creative", "Strategy"],
      description: "Comprehensive brand storytelling and strategic development",
      image: toritoriImage
    },
    {
      name: "SheNation",
      services: ["Branding", "Website", "Creative"],
      description: "Complete brand identity and digital presence for women empowerment platform",
      image: shenationImage
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(clients.length); // Start in middle section
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create infinite loop by duplicating clients
  const infiniteClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Auto-advance carousel - endless loop
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentSlide >= clients.length * 2) {
      // Reset to middle section without transition
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(clients.length);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700); // After transition completes
    }
  }, [currentSlide, clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-black text-white py-8 lg:py-16 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-8 lg:mb-24 transition-all duration-1000 ease-out
                      ${isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'var(--sf-display)' }}>
            Work We've Done
          </h2>
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 ease-out
                      ${isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-12 opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}>
          
          {/* Mobile Carousel - Single Card */}
          <div className="relative sm:hidden">
            <div className="overflow-hidden mx-2">
              <div 
                ref={carouselRef}
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
              {infiniteClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 h-96 flex flex-col overflow-hidden">
                    {/* Client Image Background */}
                    {client.image && (
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img 
                          src={client.image} 
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlays for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
                      </div>
                    )}
                    
                    {/* Client Header */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">For</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2" 
                          style={{ fontFamily: 'var(--sf-display)' }}>
                        {client.name}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="relative z-10 flex-grow">
                      <h4 className="text-white text-base font-medium leading-tight mb-4">
                        {client.description}
                      </h4>
                    </div>
                    
                    {/* Services Tags */}
                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                      {client.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
                        >
                          {service.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Desktop Carousel - Multiple Cards */}
          <div className="relative hidden sm:block">
            <div className="overflow-hidden mx-4 lg:mx-12">
              <div 
                ref={carouselRef}
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
              >
              {infiniteClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-1 md:px-2 lg:px-3"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 sm:p-4 lg:p-6 h-96 sm:h-96 lg:h-[450px] flex flex-col overflow-hidden">
                    {/* Client Image Background */}
                    {client.image && (
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img 
                          src={client.image} 
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlays for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
                      </div>
                    )}
                    
                    {/* Client Header */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">For</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-2" 
                          style={{ fontFamily: 'var(--sf-display)' }}>
                        {client.name}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="relative z-10 flex-grow">
                      <h4 className="text-white text-sm sm:text-base font-medium leading-tight mb-4">
                        {client.description}
                      </h4>
                    </div>
                    
                    {/* Services Tags */}
                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                      {client.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
                        >
                          {service.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Control */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {String((currentSlide % clients.length) + 1).padStart(2, '0')}
            </span>
            <div className="w-32 h-1 bg-gray-700 rounded-full relative">
              <div 
                className="h-1 bg-white rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${(((currentSlide % clients.length) + 1) / clients.length) * 100}%` 
                }}
              />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {String(clients.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
