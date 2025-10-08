export default function PortfolioSection() {
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import hudlsbradar from "@assets/images/hudlsbradar.png";
import hudliq from "@assets/images/hudliq.png";
import controlcastdiagram from "@assets/images/controlcastdiagram.png";

const portfolioData = [
  {
    title: "Hudl Sportscode Big Data Migration",
    description: "Led the migration of Hudl Sportscode from a legacy XML-based data model to a modern, scalable big data architecture. This project improved data processing times by over 90% and enabled new data-driven features for elite sports teams.",
    image: hudlsbradar,
    tags: ["Big Data", "Sports Analytics", "Product Strategy"],
    metric: "90% Improvement in Data Processing"
  },
  {
    title: "Hudl IQ: AI-Powered Game Analysis",
    description: "Conceptualized and launched Hudl IQ, an AI-driven feature that automatically identifies key game moments and generates tactical insights. This product saved coaches hundreds of hours in manual video analysis.",
    image: hudliq,
    tags: ["Artificial Intelligence", "Computer Vision", "Product Launch"],
    metric: "+200 Hours Saved Per-Team"
  },
  {
    title: "Controlcast Live Production",
    description: "Managed the development of Controlcast, a live video production suite that allows broadcasters to create professional-quality streams with real-time graphics and data integrations. It is now used by major sports leagues and broadcasters.",
    image: controlcastdiagram,
    tags: ["Live Video", "Broadcast Technology", "UI/UX Design"],
    metric: "Used by 5 Major Leagues"
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4" id="portfolio">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mb-4">
                  {item.tags.map(tag => <Badge key={tag} variant="secondary" className="mr-2 mb-2">{tag}</Badge>)}
                </div>
                <p className="text-accent font-bold">{item.metric}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

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
