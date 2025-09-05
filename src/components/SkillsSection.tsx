import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Eye, 
  Database, 
  Code, 
  Wrench, 
  Users,
  PenTool,
  MessageSquare 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML Skills",
      color: "bg-blue-500",
      skills: ["Python", "SQL", "TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "FastAPI", "MLFlow"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      color: "bg-purple-500",
      skills: ["Object Detection", "Image Classification", "Segmentation", "YOLO", "SSD", "CNNs", "Transfer Learning"]
    },
    {
      icon: PenTool,
      title: "Annotation Tools",
      color: "bg-teal-500",
      skills: ["CVAT", "Labelbox", "Roboflow", "SuperAnnotate", "Label Studio", "Amazon SageMaker Ground Truth"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      color: "bg-orange-500",
      skills: ["Git", "Docker", "Linux", "Postman", "Excel", "AWS", "GCP"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "bg-green-500",
      skills: ["Data Preprocessing", "Data Augmentation", "Model Evaluation", "Pandas", "Data Visualization"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "bg-indigo-500",
      skills: ["Collaboration", "Communication", "Data Quality Focus", "Problem Solving", "Team Leadership"]
    }
  ];

  const achievements = [
    { metric: "95%+", label: "QA Accuracy Maintained", icon: "📊" },
    { metric: "2+", label: "Years Experience", icon: "🎯" },
    { metric: "1000s", label: "Images Annotated", icon: "🖼️" },
    { metric: "Multiple", label: "ML Frameworks", icon: "⚡" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Comprehensive expertise across the AI/ML stack, from data annotation 
              to model deployment and optimization.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-card hover:shadow-elegant transition-smooth group">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-navy mb-2 group-hover:text-teal transition-smooth">
                  {achievement.metric}
                </div>
                <div className="text-sm text-slate-light font-medium">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-white shadow-card hover:shadow-elegant transition-smooth group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.color} rounded-xl text-white group-hover:scale-110 transition-smooth`}>
                    <category.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-gray-100 text-slate hover:bg-teal hover:text-white transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-card border-teal border-2">
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Specialized Expertise
              </h3>
              <p className="text-lg text-slate leading-relaxed max-w-4xl mx-auto">
                Specialized in NLP & LLM annotation workflows, with proven experience in 
                machine learning dataset preparation, quality assurance processes, and 
                cross-functional collaboration with AI engineering teams. Fluent in English 
                with strong technical communication skills.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;