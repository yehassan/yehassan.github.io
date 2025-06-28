export default function CareerSection() {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: "Leading product strategy for a $5M ARR SaaS platform, managing a portfolio of features used by 50,000+ active users. Implemented data-driven product decisions that increased user engagement by 35% and reduced churn by 22%.",
      skills: ["Product Strategy", "Agile Development", "User Analytics", "Stakeholder Management"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120"
    },
    {
      title: "Product Manager",
      company: "InnovateLab",
      period: "2019 - 2021",
      description: "Launched 3 successful mobile applications from concept to market, achieving 100K+ downloads within first 6 months. Collaborated with design and engineering teams to deliver user-centric solutions in fast-paced startup environment.",
      skills: ["Mobile Products", "Go-to-Market", "Cross-functional Leadership", "User Research"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120"
    },
    {
      title: "Associate Product Manager",
      company: "Digital Dynamics",
      period: "2017 - 2019",
      description: "Started career managing feature development for enterprise software solutions. Gained expertise in requirements gathering, user story creation, and cross-team coordination while supporting products serving Fortune 500 clients.",
      skills: ["Enterprise Software", "Requirements Analysis", "Client Relations", "Feature Development"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120"
    }
  ];

  return (
    <section className="py-20 bg-neutral" id="career">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Career Journey</h2>
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
