export default function PortfolioSection() {
  const projects = [
    {
      title: "FinTech Mobile App",
      description: "Led development of mobile banking app with 250K+ active users. Achieved 4.8 App Store rating and 40% increase in digital engagement.",
      tags: ["Mobile", "FinTech"],
      metric: "$2M ARR",
      status: "Launched",
      statusColor: "green",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "SaaS Analytics Platform",
      description: "Built comprehensive analytics platform serving 1000+ enterprise clients. Reduced customer churn by 30% through actionable insights.",
      tags: ["SaaS", "B2B"],
      metric: "$5M ARR",
      status: "Live",
      statusColor: "blue",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "E-commerce Platform",
      description: "Launched marketplace platform connecting 500+ vendors with 50K+ customers. Achieved 25% month-over-month growth.",
      tags: ["E-commerce", "Marketplace"],
      metric: "$3M GMV",
      status: "Success",
      statusColor: "green",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "AI-Powered Tool",
      description: "Developed machine learning product for automated customer insights. Improved decision-making speed by 60% for product teams.",
      tags: ["AI/ML", "Innovation"],
      metric: "Patent Filed",
      status: "Beta",
      statusColor: "purple",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Team Collaboration Tool",
      description: "Built remote collaboration platform used by 10K+ distributed teams. Increased team productivity metrics by 45%.",
      tags: ["Collaboration", "Remote Work"],
      metric: "10K Users",
      status: "Growth",
      statusColor: "yellow",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "HealthTech Platform",
      description: "Launched patient management system used by 200+ healthcare providers. Improved patient outcomes and reduced administrative time by 35%.",
      tags: ["HealthTech", "B2B"],
      metric: "200+ Providers",
      status: "Impact",
      statusColor: "green",
      image: "https://pixabay.com/get/g6bf74cf5c0da5c3f5991b5ab43312ebb9c94f71bbf6253a633144f4af555d9b05c59235c831fe2c6280c29efb53ab598db692a8222316659960db991bb863127_1280.jpg"
    }
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
      yellow: "bg-yellow-100 text-yellow-800"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getTagColor = (tags: string[]) => {
    if (tags.includes("Mobile") || tags.includes("FinTech")) return "bg-blue-100 text-blue-800";
    if (tags.includes("SaaS") || tags.includes("B2B")) return "bg-purple-100 text-purple-800";
    if (tags.includes("E-commerce")) return "bg-green-100 text-green-800";
    if (tags.includes("AI/ML")) return "bg-indigo-100 text-indigo-800";
    if (tags.includes("Collaboration")) return "bg-orange-100 text-orange-800";
    if (tags.includes("HealthTech")) return "bg-teal-100 text-teal-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Portfolio Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Key projects that demonstrate impact, innovation, and successful product outcomes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale fade-in">
              <img 
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-secondary">{project.title}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.statusColor)}`}>
                    {project.status}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2 py-1 rounded text-xs ${getTagColor(project.tags)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-primary font-semibold text-sm">{project.metric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
