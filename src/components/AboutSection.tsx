import { Card } from "@/components/ui/card";
import { Brain, Eye, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "2+ years developing and optimizing machine learning models for real-world applications"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Specialized in object detection, image classification, and segmentation using YOLO, TensorFlow"
    },
    {
      icon: Target,
      title: "Data Quality",
      description: "Proven track record maintaining 95%+ accuracy in annotation workflows and QA processes"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about developing AI-driven solutions for complex real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-slate leading-relaxed">
                I'm a dedicated AI/ML Engineer with a passion for transforming complex data into 
                actionable insights. My expertise spans the entire machine learning pipeline, from 
                data annotation and preprocessing to model deployment and optimization.
              </p>
              
              <p className="text-lg text-slate leading-relaxed">
                With extensive experience in computer vision and deep learning, I specialize in 
                building robust models for object detection, image classification, and segmentation. 
                My work at leading tech companies has involved managing large-scale annotation 
                projects and ensuring the highest data quality standards.
              </p>
              
              <p className="text-lg text-slate leading-relaxed">
                I'm particularly passionate about developing AI solutions that solve real-world 
                problems, whether it's enhancing retail surveillance systems, improving agricultural 
                monitoring, or advancing medical image analysis.
              </p>
              
              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple text-white rounded-full text-sm font-medium">Python Expert</span>
                  <span className="px-4 py-2 bg-purple text-white rounded-full text-sm font-medium">Computer Vision</span>
                  <span className="px-4 py-2 bg-purple text-white rounded-full text-sm font-medium">Deep Learning</span>
                  <span className="px-4 py-2 bg-purple text-white rounded-full text-sm font-medium">Data Quality</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 bg-white shadow-card hover:shadow-elegant transition-smooth group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-gradient-primary rounded-2xl text-white group-hover:scale-110 transition-smooth">
                      <highlight.icon size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{highlight.title}</h3>
                    <p className="text-sm text-slate-light leading-relaxed">{highlight.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;