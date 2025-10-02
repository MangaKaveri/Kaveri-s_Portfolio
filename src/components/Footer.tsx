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
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Kaveri Manga</h3>
            <p className="text-muted-foreground">
              Data Scientist & Machine Learning Engineer passionate about transforming data into actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className={`text-muted-foreground ${social.color} transition-smooth hover:scale-110 transform`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Kaveri Manga. Built with <Heart className="h-4 w-4 text-primary inline" /> using React & Tailwind CSS
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="transition-smooth"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;