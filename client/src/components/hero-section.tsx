import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <img 
            src="https://github.com/yehassan/yehassan.github.io/raw/main/assets/images/heroyahia.jpg" 
            alt="Yahia Hassan Professional Photo" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover" 
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-accent">Yahia Hassan</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Product Management Leader
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Currently leading sports data generation platform development at Hudl. I am passionate about solving uncommon problems and helping businesses grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
