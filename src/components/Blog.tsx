import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight, TrendingUp, Brain, Code2 } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
const Blog = () => {
  const blogPosts = [{
    title: "Understanding Neural Networks: A Practical Guide",
    excerpt: "Explore the fundamentals of neural networks and how they power modern AI applications. Learn about activation functions, backpropagation, and optimization techniques.",
    date: "2024-03-15",
    category: "Machine Learning",
    readTime: "8 min read",
    icon: Brain,
    tags: ["Deep Learning", "Neural Networks", "AI"]
  }, {
    title: "Data Preprocessing Best Practices for ML Models",
    excerpt: "Discover essential data preprocessing techniques that can significantly improve your machine learning model performance and accuracy.",
    date: "2024-03-08",
    category: "Data Science",
    readTime: "6 min read",
    icon: TrendingUp,
    tags: ["Data Science", "Preprocessing", "ML"]
  }, {
    title: "Building Production-Ready ML Pipelines",
    excerpt: "Learn how to create scalable, maintainable machine learning pipelines that can handle real-world production environments and evolving data.",
    date: "2024-02-28",
    category: "MLOps",
    readTime: "10 min read",
    icon: Code2,
    tags: ["MLOps", "Production", "Pipelines"]
  }];
  return <section id="blog" className="py-20 bg-background relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Blog & Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights on AI, machine learning, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return <Card key={index} className="shadow-elegant hover-glow transition-smooth group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className="h-10 w-10 text-primary" />
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>)}
                  </div>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>;
          })}
        </div>
      </div>
    </section>;
};
export default Blog;