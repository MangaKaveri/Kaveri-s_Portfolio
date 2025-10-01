import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Camera } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Audience Perspective Analyzer",
      description: "Developed an NLP-based Sentiment Analysis tool using Python, Hugging Face, and Streamlit. Automated the classification of audience comments and generated summarized insights to help content creators optimize engagement strategies based on feedback trends.",
      icon: Brain,
      technologies: ["Python", "Hugging Face", "Streamlit", "NLP", "Sentiment Analysis"],
      features: [
        "Real-time sentiment analysis of audience comments",
        "Automated classification and insight generation", 
        "Interactive Streamlit dashboard",
        "Engagement strategy optimization recommendations"
      ],
      color: "text-primary",
      githubUrl: "https://github.com/MangaKaveri/Project_Audience_Perspective_Analyzer"
    },
    {
      title: "Simple Emotion Detector",
      description: "Designed an ML-powered facial emotion recognition system using TensorFlow, OpenCV, and Tkinter. Built a user-friendly GUI for real-time image upload and prediction, achieving competitive accuracy results on the FER2013 dataset.",
      icon: Camera,
      technologies: ["TensorFlow", "OpenCV", "Tkinter", "Machine Learning", "Computer Vision"],
      features: [
        "Real-time facial emotion recognition",
        "GUI for image upload and prediction",
        "Trained on FER2013 dataset",
        "85% accuracy on benchmark datasets"
      ],
      color: "text-secondary",
      githubUrl: "https://github.com/MangaKaveri/Project_1_Emotion_Detector"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in machine learning, computer vision, and natural language processing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="shadow-elegant hover-glow transition-smooth animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className={`h-6 w-6 mr-3 ${project.color}`} />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects Teaser */}
        <div className="mt-12 text-center">
          <Card className="shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring cutting-edge technologies. 
                Check back soon for more exciting developments in AI, machine learning, and web development.
              </p>
              <Button variant="outline" onClick={() => window.open("https://github.com/MangaKaveri", "_blank")}>
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;