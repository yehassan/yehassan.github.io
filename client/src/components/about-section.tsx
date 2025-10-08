import { Check } from "lucide-react";
import myJourney from "@assets/images/myjourney.png";

export default function AboutSection() {
  const skills = [
    "Product Strategy & Vision",
    "Agile & Scrum Methodologies",
    "Big Data & Analytics",
    "AI/ML Product Development",
    "User-Centered Design",
    "Go-to-Market Strategy"
  ];

  return (
    <section className="bg-white py-20 px-4" id="about">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in-left">
          <img 
            src={myJourney} 
            alt="My Journey" 
            className="rounded-lg shadow-2xl w-full" 
          />
        </div>
        <div className="fade-in-right">
          <h2 className="text-3xl font-bold text-secondary mb-6">About Me</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a product leader with a track record of delivering innovative and impactful products in the sports technology and data analytics sectors. My expertise lies in translating complex user needs into successful product strategies, from conception to launch and beyond.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            I thrive in fast-paced, collaborative environments and am passionate about building high-performing teams to tackle ambitious goals. My approach is data-driven, customer-focused, and always aimed at creating exceptional value.
          </p>
        </div>
      </div>
    </section>
  );
}
