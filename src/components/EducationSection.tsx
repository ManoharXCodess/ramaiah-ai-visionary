import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      institution: "St. Mary's Group of Institutions",
      period: "2016 - 2019",
      type: "B.Tech",
      coursework: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Data Analytics", "Data Structures"]
    },
    {
      degree: "Diploma (Polytechnic)",
      institution: "Bapatla Polytechnic College",
      period: "2012 - 2016",
      type: "Diploma",
      coursework: ["Electronics Engineering", "Programming Fundamentals", "Mathematics", "Circuit Design"]
    }
  ];

  const awards = [
    {
      title: "Gem Award",
      organization: "Centific Global Technologies",
      description: "Recognized for exceptional performance in data annotation quality and workflow optimization",
      year: "2024"
    },
    {
      title: "Team Excellence Award",
      organization: "Centific Global Technologies",
      description: "Awarded for outstanding collaboration and contribution to AI project success",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Education & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center gap-3">
                <GraduationCap className="text-teal" size={28} />
                Academic Background
              </h3>
              
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-white shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl text-white flex-shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-teal text-white">
                          {edu.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-slate-light">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-navy mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-teal font-medium mb-4">{edu.institution}</p>
                      
                      <div>
                        <p className="text-sm font-medium text-slate mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Awards Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center gap-3">
                <Award className="text-teal" size={28} />
                Awards & Recognition
              </h3>
              
              {awards.map((award, index) => (
                <Card key={index} className="p-6 bg-white shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl text-white flex-shrink-0">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-navy">
                          {award.title}
                        </h4>
                        <Badge variant="secondary" className="bg-accent text-white">
                          {award.year}
                        </Badge>
                      </div>
                      
                      <p className="text-teal font-medium mb-3">{award.organization}</p>
                      <p className="text-slate leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Additional Recognition Card */}
              <Card className="p-6 bg-gradient-card border-teal border-2">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-xl font-semibold text-navy mb-3">
                    Professional Excellence
                  </h4>
                  <p className="text-slate leading-relaxed">
                    Consistently recognized for maintaining 95%+ quality standards in 
                    data annotation workflows and contributing to successful AI model 
                    deployments across multiple projects.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;