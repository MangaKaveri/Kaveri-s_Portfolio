import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
const About = () => {
  const certifications = ["AI/ML for Geodata Analysis – ISRO", "Python for Data Science – IIT Madras", "Generative AI – NxtWave", "Data Science & Visualization – IBM", "Cybersecurity Fundamentals – Cisco", "Google Cloud Generative AI – Google"];
  const achievements = ["99.17% in SSC Board Examinations", "89.5% in Intermediate Board", "78.44% Current CGPA in B.Tech", "Multiple Technical Internships", "AI/ML Competition Participant"];
  return <section id="about" className="py-20 bg-gradient-soft relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
          I am a versatile professional skilled in data analysis, machine learning engineering, Python development and web development. 
          With a passion for leveraging data-driven insights and cutting-edge technologies, I excel at uncovering patterns, 
          developing impactful solutions, and crafting robust applications.
        </p>
        
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <Card className="shadow-elegant hover-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">B.Tech – Computer Science (Data Science)</h4>
                  <p className="text-sm text-muted-foreground">Vignan's Institute of Engineering for Women</p>
                  <p className="text-sm text-muted-foreground">Expected 2026 | 8.60 CGPA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Intermediate</h4>
                  <p className="text-sm text-muted-foreground">Board of Intermediate Education, AP</p>
                  <p className="text-sm text-muted-foreground">2022 | 89.5%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">SSC</h4>
                  <p className="text-sm text-muted-foreground">Board of Secondary Education, AP</p>
                  <p className="text-sm text-muted-foreground">2020 | 99.17%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-elegant hover-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert, index) => <Badge key={index} variant="outline" className="text-xs block w-full text-left justify-start p-2">
                    {cert}
                  </Badge>)}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          
        </div>

        {/* Personal Description */}
        <div className="mt-12 text-center">
          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed">
                My expertise spans from analyzing complex datasets to designing intuitive user interfaces, 
                driven by a commitment to excellence and a thirst for innovation. I am passionate about 
                participating in coding hackathons and AI/Data Science competitions, which has given me 
                hands-on problem-solving experience and helped me stay at the forefront of technological advancements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;