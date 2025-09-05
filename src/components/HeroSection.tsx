import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Download } from "lucide-react";
import ramaiahHeadshot from "@/assets/ramaiah-headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} className="w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Ramaiah
                  <span className="block text-purple">Kunchala</span>
                </h1>
                <p className="text-xl lg:text-2xl text-purple-light font-medium">
                  AI/ML Engineer | Computer Vision | Data Annotation Specialist
                </p>
              </div>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Motivated and detail-oriented AI/ML Engineer with 2 years of hands-on experience 
                  in Python programming, computer vision, and image annotation workflows.
                </p>
                <p>
                  Passionate about developing AI-driven solutions for real-world problems and 
                  contributing to high-impact ML projects.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-white">
                <a href="tel:6301300074" className="flex items-center gap-3 hover:text-purple-light transition-smooth group">
                  <div className="p-2 bg-navy-light rounded-lg group-hover:bg-purple transition-smooth">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium group-hover:text-white">6301300074</span>
                </a>
                <a href="mailto:ramaiahkunchala258@gmail.com" className="flex items-center gap-3 hover:text-purple-light transition-smooth group">
                  <div className="p-2 bg-navy-light rounded-lg group-hover:bg-purple transition-smooth">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium group-hover:text-white">ramaiahkunchala258@gmail.com</span>
                </a>
                <a href="http://www.linkedin.com/in/ramaiah-kunchala-65896118b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-light transition-smooth group">
                  <div className="p-2 bg-navy-light rounded-lg group-hover:bg-purple transition-smooth">
                    <Linkedin size={18} />
                  </div>
                  <span className="font-medium group-hover:text-white">LinkedIn Profile</span>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button size="lg" className="bg-purple hover:bg-purple-light text-white font-semibold px-8 py-3 rounded-lg shadow-elegant transition-smooth">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
            
            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-smooth"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant bg-white p-4">
                  <img 
                    src={ramaiahHeadshot} 
                    alt="Ramaiah Kunchala - Professional Headshot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;