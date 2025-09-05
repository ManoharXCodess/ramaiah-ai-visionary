import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Zap, Cloud, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Object Detection System",
      description: "Developed an AI-powered object detection system using OpenCV and TensorFlow, capable of detecting objects in real-time video streams and images. Leveraged transfer learning techniques to fine-tune pre-trained models and improve accuracy.",
      features: [
        "Real-time object detection in video streams",
        "YOLOv5 implementation for retail product tracking",
        "CCTV surveillance integration",
        "Transfer learning optimization",
        "Multi-object tracking capabilities"
      ],
      technologies: ["OpenCV", "TensorFlow", "YOLOv5", "Python", "Computer Vision", "Real-time Processing"],
      icon: Eye,
      color: "bg-blue-500",
      status: "Completed"
    },
    {
      title: "AI Model Training and Deployment Pipeline",
      description: "Built an end-to-end AI model training and deployment pipeline using TensorFlow and cloud infrastructure (AWS/GCP) for seamless model updates and scalability. Implemented automated preprocessing and evaluation workflows.",
      features: [
        "End-to-end ML pipeline automation",
        "Cloud-based deployment (AWS/GCP)",
        "Automated data preprocessing",
        "Model evaluation and monitoring",
        "Scalable infrastructure design",
        "Continuous integration/deployment"
      ],
      technologies: ["TensorFlow", "AWS", "GCP", "Python", "MLOps", "Docker", "Pipeline Automation"],
      icon: Cloud,
      color: "bg-green-500",
      status: "Production"
    },
    {
      title: "Advanced Data Annotation Workflow",
      description: "Designed and implemented comprehensive data annotation processes and documentation systems, enabling efficient collaboration across multiple AI engineering teams and maintaining high-quality dataset standards.",
      features: [
        "Multi-annotator workflow management",
        "Quality assurance protocols",
        "SOP development and documentation",
        "Cross-team collaboration tools",
        "Dataset integrity monitoring",
        "Annotation tool integration"
      ],
      technologies: ["CVAT", "Labelbox", "Roboflow", "Quality Management", "Documentation", "Team Collaboration"],
      icon: Zap,
      color: "bg-purple-500",
      status: "Ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Production": return "bg-blue-100 text-blue-800";
      case "Ongoing": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Showcasing innovative AI/ML solutions that solve real-world problems 
              through cutting-edge computer vision and machine learning technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 bg-white shadow-card hover:shadow-elegant transition-smooth group">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 ${project.color} rounded-xl text-white group-hover:scale-110 transition-smooth flex-shrink-0`}>
                        <project.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-navy">{project.title}</h3>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-slate leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate">
                            <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Technologies & Actions */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="border-teal text-teal hover:bg-teal hover:text-white transition-smooth text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white transition-smooth">
                        <ExternalLink className="mr-2" size={16} />
                        View Details
                      </Button>
                      <Button variant="ghost" className="text-slate hover:text-navy transition-smooth">
                        <Github className="mr-2" size={16} />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-card border-teal border-2">
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-lg text-slate mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative AI/ML projects that make a real impact. 
                Let's discuss how we can build something amazing together.
              </p>
              <Button size="lg" className="bg-teal hover:bg-teal-light text-white">
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;