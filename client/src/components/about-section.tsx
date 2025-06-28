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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern workspace showcasing product management environment" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-secondary mb-6">Product Management Excellence</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over 8 years of experience in product management, I specialize in transforming complex challenges into elegant solutions that drive business growth and user satisfaction. My approach combines strategic thinking with hands-on execution.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I've successfully launched multiple products from concept to market, working with cross-functional teams to deliver exceptional user experiences. My expertise spans agile methodologies, user research, data analysis, and stakeholder management.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-neutral rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 font-medium">Products Launched</div>
              </div>
              <div className="text-center p-4 bg-neutral rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$10M+</div>
                <div className="text-gray-600 font-medium">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20 fade-in">
          <h3 className="text-2xl font-bold text-secondary text-center mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">Strategic Planning</h4>
              <p className="text-gray-600">Product roadmap development and strategic vision alignment</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">User Research</h4>
              <p className="text-gray-600">User interviews, usability testing, and persona development</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">Data Analytics</h4>
              <p className="text-gray-600">KPI tracking, A/B testing, and performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
