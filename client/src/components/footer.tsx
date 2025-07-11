export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Yahia Hassan</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Product Management Professional committed to building awesome products. Let's create something amazing together.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('career')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Career
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Connect
            </button>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm">
              © 2025 Yahia Hassan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
