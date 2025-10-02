import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "mangakaveri05@gmail.com",
    href: "mailto:mangakaveri05@gmail.com",
    color: "text-primary"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mangakaveri",
    href: "https://www.linkedin.com/in/mangakaveri/",
    color: "text-secondary"
  }, {
    icon: Github,
    label: "GitHub",
    value: "github.com/MangaKaveri",
    href: "https://github.com/MangaKaveri",
    color: "text-accent"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Visakhapatnam, Andhra Pradesh, India",
    href: null,
    color: "text-muted-foreground"
  }];
  return <section id="contact" className="py-20 gradient-primary relative overflow-hidden">
      <ParticleBackground />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5 animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or innovative projects. 
            Let's connect and explore how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-glow transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{contact.label}</h4>
                          {contact.href ? <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white/80 hover:text-white transition-smooth">
                              {contact.value}
                            </a> : <span className="text-white/80">{contact.value}</span>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Collaborate</h3>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-white">Ready to Start a Project?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/80">
                    Whether you're looking for a data scientist, machine learning engineer, 
                    or web developer, I'd love to hear about your project and discuss how I can help bring your ideas to life.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">What I Can Help With:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                        <span>Data Analysis & Visualization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                        <span>Machine Learning Model Development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                        <span>Web Application Development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                        <span>AI/ML Consulting & Research</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm flex-1" onClick={() => window.open("mailto:mangakaveri05@gmail.com", "_blank")}>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-sm">
            Looking forward to connecting with you and exploring opportunities to collaborate on innovative projects.
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;