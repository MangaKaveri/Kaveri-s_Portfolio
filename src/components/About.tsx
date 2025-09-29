import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";
const About = () => {
  const certifications = ["AI/ML for Geodata Analysis – ISRO", "Python for Data Science – IIT Madras", "Generative AI – NxtWave", "Data Science & Visualization – IBM", "Cybersecurity Fundamentals – Cisco", "Google Cloud Generative AI – Google"];
  const achievements = ["99.17% in SSC Board Examinations", "89.5% in Intermediate Board", "78.44% Current CGPA in B.Tech", "Multiple Technical Internships", "AI/ML Competition Participant"];
  return <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I am a versatile professional skilled in data analysis, machine learning engineering, Python development and web development. 
            With a passion for leveraging data-driven insights and cutting-edge technologies, I excel at uncovering patterns, 
            developing impactful solutions, and crafting robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <Card className="shadow-elegant hover-glow transition-smooth md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">{achievement}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
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