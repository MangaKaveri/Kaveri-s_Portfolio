import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart3, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "Java", "C", "Data Structures & Algorithms", "SQL"]
    },
    {
      title: "Web Development",
      icon: Code,
      color: "text-secondary",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Angular"]
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      color: "text-accent",
      skills: ["TensorFlow", "PyTorch", "Keras", "Hugging Face", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-primary",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Data Analytics Tools",
      icon: BarChart3,
      color: "text-secondary",
      skills: ["Tableau", "Power BI", "Excel", "Google Data Studio"]
    },
    {
      title: "Platforms & Tools",
      icon: Wrench,
      color: "text-accent",
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "Streamlit", "GitHub"]
    }
  ];

  const softSkills = [
    "Problem-Solving",
    "Analytical Thinking", 
    "Communication",
    "Teamwork & Collaboration",
    "Adaptability",
    "Fast Learner"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise across various domains
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-elegant hover-glow transition-smooth animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className={`h-6 w-6 mr-3 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Cloud className="h-6 w-6 mr-3 text-primary" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;