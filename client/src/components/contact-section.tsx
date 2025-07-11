import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral to-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Ready to discuss your next product challenge or explore collaboration opportunities? I'd love to hear from you.
          </p>
          
          {/* Centered LinkedIn Connection */}
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover-scale">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                  <FaLinkedin className="h-8 w-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-secondary mb-1">Connect on LinkedIn</h3>
                  <p className="text-gray-600 text-sm">Let's discuss opportunities and collaborate</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://bit.ly/linkedinPP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
                >
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  Connect with me
                </a>
              </div>
            </div>
            
            {/* Additional subtle call-to-action */}
            <p className="text-gray-500 text-sm">
              Always open to discussing product management, innovation, and new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
