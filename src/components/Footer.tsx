import { Github, Linkedin, Mail, Link, ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const socialLinks = [{
    icon: Mail,
    href: "mailto:mangakaveri05@gmail.com",
    label: "Email",
    color: "hover:text-primary"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mangakaveri/",
    label: "LinkedIn",
    color: "hover:text-secondary"
  }, {
    icon: Github,
    href: "https://github.com/MangaKaveri",
    label: "GitHub",
    color: "hover:text-accent"
  }, {
    icon: Link,
    href: "https://linktr.ee/MangaKaveri",
    label: "Linktree",
    color: "hover:text-primary"
  }];
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#experience",
    label: "Experience"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#blog",
    label: "Blog"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-gradient-soft border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Kaveri Manga</h3>
            <p className="text-muted-foreground text-sm">
              Data Scientist & ML Engineer passionate about leveraging data-driven insights 
              and cutting-edge technologies to create impactful solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return <a key={index} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className={`text-muted-foreground ${social.color} transition-smooth transform hover:scale-110`} aria-label={social.label}>
                    <IconComponent className="h-5 w-5" />
                  </a>;
            })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            
          </div>

          {/* Contact Info */}
          
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Kaveri Manga. Crafted with{" "}
            <Heart className="h-3 w-3 inline text-primary fill-primary" />{" "}
            and dedication to excellence.
          </p>
          
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-muted-foreground hover:text-primary" aria-label="Scroll to top">
            Back to Top
            <ArrowUp className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>;
};
export default Footer;