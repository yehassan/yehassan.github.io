import { Briefcase } from "lucide-react";
import hudlprint from "@assets/images/hudlprint.png";
import wuzzuflogo from "@assets/images/wuzzuflogo.png";
import controlcastlogo1 from "@assets/images/controlcastlogo1.png";

const careerData = [
  {
    company: "Hudl",
    role: "Sr. Product Manager, Sports Data",
    period: "2021 - Present",
    description: "Led product strategy and development for Hudl's sports data generation platforms, including the migration to a big data architecture and the launch of AI-powered analysis tools.",
    image: hudlprint
  },
  {
    company: "WUZZUF",
    role: "Sr. Product Manager, B2B",
    period: "2019 - 2021",
    description: "Managed the B2B product suite for Egypt's leading online recruitment platform, focusing on employer-facing tools and driving significant growth in customer acquisition and retention.",
    image: wuzzuflogo
  },
  {
    company: "Controlcast",
    role: "Co-Founder & Head of Product",
    period: "2016 - 2019",
    description: "Co-founded and led product development for a digital out-of-home advertising marketplace, from initial concept to a platform with over 2000 customers and 100+ screens.",
    image: controlcastlogo1
  }
];

export default function CareerSection() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="career">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Career Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          {careerData.map((job, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img src={job.image} alt={`${job.company} logo`} className="h-10 w-10 mr-4"/>
                    <div>
                      <h3 className="text-xl font-bold">{job.company}</h3>
                      <p className="text-gray-500">{job.role}</p>
                      <p className="text-sm text-gray-400">{job.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
