import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Link } from "lucide-react";
import profileImage from "@/assets/kaveri-profile.jpg";
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/10 animate-float" style={{
        animationDelay: "1s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            
          </div>

          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">

Kaveri Manga</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/90">Data Analyst & Machine Learning Engineer</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
              Passionate about leveraging data-driven insights and cutting-edge technologies to develop impactful solutions
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("#projects")} className="text-white border-white/30 backdrop-blur-sm transition-smooth hover-glow bg-indigo-300 hover:bg-indigo-200">
                View My Work
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 backdrop-blur-sm transition-smooth bg-indigo-300 hover:bg-indigo-200 text-slate-50">
                <a href="https://drive.google.com/file/d/1lc-FTF7-tJAp9WStoaFIyhzYEEduwy51/view" target="_blank" rel="noopener noreferrer" aria-label="View Kaveri resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:mangakaveri05@gmail.com" className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/mangakaveri/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/MangaKaveri" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linktr.ee/MangaKaveri" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-smooth hover:scale-110 transform" aria-label="Linktree">
                <Link className="h-6 w-6" />
              </a>
            </div>

            {/* Scroll indicator */}
            <button onClick={() => scrollToSection("#about")} className="animate-bounce text-white/60 hover:text-white transition-smooth" aria-label="Scroll to about section">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;