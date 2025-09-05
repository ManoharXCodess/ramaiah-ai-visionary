import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Annotation Specialist",
      company: "Dexian India Technologies",
      location: "Chennai, Tamil Nadu",
      period: "June 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Managed end-to-end image annotation lifecycle, including quality audits, tool setup (CVAT, Labelbox), and SOP development",
        "Developed and fine-tuned computer vision models (YOLOv5, TensorFlow) for plant disease detection, CCTV surveillance, and retail classification",
        "Collaborated with data scientists to structure high-quality datasets for model training and evaluation",
        "Validated sensor/image alignment across multiple agricultural cycles and domains",
        "Performed QA on annotations and conducted peer reviews to maintain labeling accuracy"
      ],
      technologies: ["YOLOv5", "TensorFlow", "CVAT", "Labelbox", "Python", "Computer Vision"]
    },
    {
      title: "Quality Analyst – Data Annotation",
      company: "Centific Global Technologies Pvt Ltd",
      location: "Hyderabad",
      period: "Feb 2023 - May 2024",
      type: "Full-time",
      responsibilities: [
        "Developed data visualizations and reports to communicate key findings to stakeholders, enabling data-driven decision-making for AI model improvements",
        "Annotated thousands of images using CVAT, Labelbox, and Roboflow for classification and segmentation tasks",
        "Implemented internal QA checklists, reducing labeling errors and rework",
        "Annotated 2D/3D image and video data using tools like CVAT and Roboflow for computer vision projects",
        "Worked closely with AI engineers to refine datasets for deep learning pipelines",
        "Performed multi-annotator reviews and developed annotation SOPs",
        "Maintained dataset integrity across multiple projects with 95%+ QA accuracy"
      ],
      technologies: ["CVAT", "Labelbox", "Roboflow", "Data Visualization", "Quality Assurance", "Deep Learning"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              2+ years of hands-on experience in AI/ML engineering, specializing in computer vision 
              and data annotation workflows at leading technology companies.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-white shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-primary rounded-xl text-white">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{exp.title}</h3>
                        <p className="text-teal font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-light">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <Badge variant="secondary" className="bg-teal text-white">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Right Column - Responsibilities */}
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate">
                            <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white transition-smooth">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;