import hudlsbradar from "@assets/images/hudlsbradar.png";
import hudliq from "@assets/images/hudliq.png";
import controlcastdiagram from "@assets/images/controlcastdiagram.png";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Global Football Event Data Generation Platform",
      description: "Led development of Global football event data generation app that provides all  event data for Hudl Statsbomb.",
      tags: ["Data Product", "AI/ML"],
      metric: "$9M ARR",
      status: "Live",
      statusColor: "green",
      image: hudlsbradar
    },
    {
      title: "American Football Event Data Generation Platform",
      description: "Led development of American football event data generation app that provides all FBS, FCS, and NFL event data for HudlIQ.",
      tags: ["Data Product", "AI/ML"],
      metric: "$2M ARR",
      status: "Live",
      statusColor: "green",
      image: hudliq
    },
    {
      title: "Digital Out-of-Home Advertising Marketplace",
      description: "Co-founded, bootstrapped, and led product on a marketplace platform connecting 100+ digital out of home screens with 2000+ customers. Shutdown after four years.",
      tags: ["E-commerce", "Marketplace"],
      metric: "$250K GMV",
      status: "Startup",
      statusColor: "blue",
      image: controlcastdiagram
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