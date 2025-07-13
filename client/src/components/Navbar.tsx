import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navbarBg = isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white";
  
  return (
    <header>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-black transition-all" style={{ letterSpacing: '-0.05em' }}>
            FYREWORKS
          </a>
          
          <button 
            className="focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <motion.div 
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-12 px-6">
            <a 
              href="#what-we-do" 
              className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-all text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              What We Do
            </a>
            <a 
              href="#how-we-do-it" 
              className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-all text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              How We Do It
            </a>
            <a 
              href="#contact" 
              className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-all text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
