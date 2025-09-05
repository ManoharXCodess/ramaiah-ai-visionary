import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Download, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Left Column - About */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ramaiah Kunchala</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI/ML Engineer passionate about developing innovative computer vision 
                  solutions and contributing to impactful machine learning projects.
                </p>
                <div className="flex items-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-teal hover:bg-teal-light text-white font-semibold shadow-elegant transition-smooth"
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </Button>
                </div>
              </div>

              {/* Middle Column - Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-teal transition-smooth">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-gray-300 hover:text-teal transition-smooth">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-300 hover:text-teal transition-smooth">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-300 hover:text-teal transition-smooth">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="text-gray-300 hover:text-teal transition-smooth">
                      Education
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column - Contact */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Get In Touch</h4>
                <div className="space-y-4">
                  <a 
                    href="tel:6301300074" 
                    className="flex items-center gap-3 text-gray-300 hover:text-teal transition-smooth group"
                  >
                    <div className="p-2 bg-navy-light rounded-lg group-hover:bg-teal transition-smooth">
                      <Phone size={18} />
                    </div>
                    <span>+91 6301300074</span>
                  </a>
                  
                  <a 
                    href="mailto:ramaiahkunchala258@gmail.com" 
                    className="flex items-center gap-3 text-gray-300 hover:text-teal transition-smooth group"
                  >
                    <div className="p-2 bg-navy-light rounded-lg group-hover:bg-teal transition-smooth">
                      <Mail size={18} />
                    </div>
                    <span>ramaiahkunchala258@gmail.com</span>
                  </a>
                  
                  <a 
                    href="http://www.linkedin.com/in/ramaiah-kunchala-65896118b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-teal transition-smooth group"
                  >
                    <div className="p-2 bg-navy-light rounded-lg group-hover:bg-teal transition-smooth">
                      <Linkedin size={18} />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-4">
                    Open to new opportunities and collaborations
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-lighter py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Ramaiah Kunchala. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-navy-light transition-smooth"
              >
                <ChevronUp size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;