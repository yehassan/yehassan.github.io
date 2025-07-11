import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/90' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Yahia Hassan</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('career')}
                className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Career
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white hover:text-accent focus:outline-none focus:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary/90 backdrop-blur-lg">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('career')}
              className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Career
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
