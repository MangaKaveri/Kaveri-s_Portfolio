import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Experience = () => {
  const internships = [
    {
      company: "HMIES Solutions PVT. LTD",
      role: "Data Analytics Intern",
      duration: "8 Weeks",
      description: [
        "Analyzed business datasets using Python, SQL, and Tableau to extract insights",
        "Designed interactive dashboards that improved reporting efficiency and decision-making"
      ],
      skills: ["Python", "SQL", "Tableau", "Data Analysis", "Dashboard Design"]
    },
    {
      company: "ExcelR",
      role: "Data Science Intern",
      duration: "8 Weeks", 
      description: [
        "Built predictive models using ML/DL techniques to forecast outcomes",
        "Enhanced model performance through advanced preprocessing and feature engineering"
      ],
      skills: ["Machine Learning", "Deep Learning", "Predictive Modeling", "Feature Engineering"]
    },
    {
      company: "Null Class",
      role: "AI & ML Intern",
      duration: "5 Weeks",
      description: [
        "Developed a real-time emotion detection system using TensorFlow & OpenCV",
        "Achieved 85% accuracy on benchmark datasets (FER2013)"
      ],
      skills: ["TensorFlow", "OpenCV", "Computer Vision", "Emotion Detection", "FER2013"]
    },
    {
      company: "Internpe",
      role: "Web Development Intern",
      duration: "2 Weeks",
      description: [
        "Built a responsive auction and job portal using Java, HTML/CSS, and MySQL",
        "Implemented user authentication & database integration to ensure secure access"
      ],
      skills: ["Java", "HTML/CSS", "MySQL", "Authentication", "Web Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-soft relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hands-on experience gained through diverse internships across data analytics, machine learning, and web development
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <Card key={index} className="shadow-elegant hover-glow transition-smooth animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span className="text-xl">{internship.role}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {internship.duration}
                  </div>
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="font-medium">{internship.company}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Description */}
                  <ul className="space-y-2">
                    {internship.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Experience Section */}
        <div className="mt-12 text-center">
          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Extracurricular Activities</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Competitions & Hackathons</h4>
                  <p className="text-muted-foreground">
                    Participated in coding hackathons and AI/Data Science competitions, 
                    gaining hands-on problem-solving experience and staying current with industry trends.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Technical Clubs</h4>
                  <p className="text-muted-foreground">
                    Active member of Technical & Innovation Clubs at college, 
                    collaborating on projects and sharing knowledge with peers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;