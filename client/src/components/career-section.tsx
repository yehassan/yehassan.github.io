import hudlprint from "@assets/images/hudlprint.png";
import wuzzuflogo from "@assets/images/wuzzuflogo.png";
import controlcastlogo1 from "@assets/images/controlcastlogo1.png";

export default function CareerSection() {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "Hudl (from Hudl Statsbomb)",
      period: "2020 - Present",
      description: "Leading product development on a sports data generation platform that powers a $9M ARR analytics product. Built the platform for American football event data generation that power a $2M ARR analytics product. Reduced data generation time by 50%.",
      skills: ["Product Strategy", "Agile Development", "Product Design", "AI/ML Integration"],
      image: hudlprint
    },
    {
      title: "Product Manager and Head of New Business Lines",
      company: "WUZZUF",
      period: "2019 - 2020",
      description: "Delivered the beta of WUZZUF Learning, an online learning marketplace serving 100K+ users in MENA.",
      skills: ["Market Research", "Go-to-Market", "Cross-functional Leadership", "User Research"],
      image: wuzzuflogo
    },
    {
      title: "Co-founder and Head of Product",
      company: "Controlcast",
      period: "2017 - 2019",
      description: "Started product management career launching ad-tech startup from 0 to 1 doing an average of $250K+ GMV per year, bootstrapped.",
      skills: ["0-to-1", "Entrepreneurial Leadership", "Business and Product Strategy", "Product Design"],
      image: controlcastlogo1
    }
  ];

  return (
    <section className="py-20 bg-neutral" id="career">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Product Management Career Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A track record of driving product success across diverse industries and company stages
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover-scale fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{experience.title}</h3>
                  <h4 className="text-lg text-primary font-semibold mb-2">{experience.company}</h4>
                  <p className="text-gray-500">{experience.period}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <img 
                    src={experience.image}
                    alt={`${experience.company} office`}
                    className="w-32 h-20 object-cover rounded-lg shadow-md" 
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}