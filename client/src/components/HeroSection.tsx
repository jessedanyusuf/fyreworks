import React, { useEffect, useState } from 'react';
import { WiDaySunny, WiDaySunnyOvercast, WiNightClear } from 'react-icons/wi';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [greeting, setGreeting] = useState('Hello');
  const [greetingIcon, setGreetingIcon] = useState<React.ReactElement>(<WiDaySunny />);

  useEffect(() => {
    // Set greeting based on time of day
    const now = new Date();
    const hour = now.getHours();
    
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
      setGreetingIcon(<WiDaySunny />);
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
      setGreetingIcon(<WiDaySunnyOvercast />);
    } else {
      setGreeting('Good Evening');
      setGreetingIcon(<WiNightClear />);
    }

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[40vh] sm:min-h-[70vh] lg:min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">

        {/* Main Typography Container - Pushed down for better mobile spacing */}
        <div className="relative flex items-center justify-center min-h-[25vh] sm:min-h-[30vh] lg:min-h-[45vh] mt-20 sm:mt-8 lg:-mt-4">
          <div className="w-full max-w-7xl text-center">
            {/* Time-based Greeting */}
            <div className={`mb-4 sm:mb-8 lg:mb-12 transition-all duration-1000 ease-out
                          ${isVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '0.05s' }}>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg lg:text-xl text-gray-300">
                  {greetingIcon}
                </span>
                <p className="text-sm lg:text-base text-gray-300 font-bold tracking-wide uppercase">
                  {greeting}
                </p>
              </div>
            </div>

            {/* Large Staggered Typography - Proper line spacing */}
            <div className="space-y-0 sm:space-y-1 lg:space-y-2">
            {/* Line 1 - WE HELP */}
            <div className="relative">
              <h1 className={`text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                           font-bold uppercase leading-[0.8] tracking-tight
                           transform transition-all duration-1000 ease-out
                           ${isVisible 
                             ? '-translate-x-1 sm:-translate-x-8 lg:-translate-x-12 translate-y-0 opacity-100' 
                             : '-translate-x-8 sm:-translate-x-16 lg:-translate-x-28 translate-y-6 opacity-0'}`}
                  style={{ fontFamily: 'var(--sf-display)', transitionDelay: '0.1s' }}>
                WE HELP
              </h1>
            </div>

            {/* Line 2 - VISIONARIES */}
            <h1 className={`text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                          font-bold uppercase leading-[0.8] tracking-tight
                          transform transition-all duration-1000 ease-out
                          ${isVisible 
                            ? 'translate-x-1 sm:translate-x-12 lg:translate-x-20 translate-y-0 opacity-100' 
                            : 'translate-x-12 sm:translate-x-20 lg:translate-x-36 translate-y-6 opacity-0'}`}
                style={{ fontFamily: 'var(--sf-display)', transitionDelay: '0.3s' }}>
              VISIONARIES
            </h1>

            {/* Line 3 - BUILD with descriptive copy */}
            <div className="relative flex items-center lg:items-end justify-center">
              <h1 className={`text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                           font-bold uppercase leading-[0.8] tracking-tight
                           transform transition-all duration-1000 ease-out
                           ${isVisible 
                             ? '-translate-x-2 sm:-translate-x-10 lg:-translate-x-20 translate-y-0 opacity-100' 
                             : '-translate-x-10 sm:-translate-x-20 lg:-translate-x-36 translate-y-6 opacity-0'}`}
                  style={{ fontFamily: 'var(--sf-display)', transitionDelay: '0.5s' }}>
                BUILD
              </h1>
              
              {/* Descriptive copy beside BUILD - desktop only */}
              <div className={`hidden lg:block lg:ml-16 xl:ml-24 lg:mb-4 xl:mb-6 max-w-xs xl:max-w-sm
                            transition-all duration-1000 ease-out
                            ${isVisible 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: '0.8s' }}>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-bold text-left">
                  We are FYREWORKS, a creative studio, we turn bold ideas into brand movements people believe in.
                </p>
              </div>
            </div>

            {/* Line 4 - MOVEMENTS */}
            <h1 className={`text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[11vw] xl:text-[10vw] 2xl:text-[9vw] 
                          font-bold uppercase leading-[0.8] tracking-tight
                          transform transition-all duration-1000 ease-out
                          ${isVisible 
                            ? 'translate-x-1 sm:translate-x-6 lg:translate-x-12 translate-y-0 opacity-100' 
                            : 'translate-x-8 sm:translate-x-16 lg:translate-x-28 translate-y-6 opacity-0'}`}
                style={{ fontFamily: 'var(--sf-display)', transitionDelay: '0.7s' }}>
              MOVEMENTS<span className="text-red-500 animate-pulse" style={{animationDuration: '2s'}}>.</span>
            </h1>
            </div>
          </div>
        </div>

        {/* Mobile descriptive copy - outside main container for proper spacing */}
        <div className={`lg:hidden mt-4 sm:mt-6 max-w-sm mx-auto px-6
                      transition-all duration-1000 ease-out
                      ${isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0.9s' }}>
          <p className="text-sm text-gray-300 leading-relaxed font-light text-center">
            <span className="font-bold">We are FYREWORKS,</span><br />
            a creative studio, we turn bold ideas into brand movements people believe in.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
