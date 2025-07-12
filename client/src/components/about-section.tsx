import { Lightbulb, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://github.com/yehassan/yehassan.github.io/raw/main/assets/images/myjourney.png" 
              alt="A winding path showing my journey" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          
          <div className="fade-in">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              My path to product management has been non-linear. From managing quality systems on a $45 billion infrastructure project, to co-founding an ad-tech startup, to building AI-assisted sports data generation platforms, each experience taught me that the best products emerge from truly understanding both user needs and business realities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
