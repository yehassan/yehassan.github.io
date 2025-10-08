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
