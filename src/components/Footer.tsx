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
  return <footer className="bg-card border-t border-border">
      
    </footer>;
};
export default Footer;