import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight, TrendingUp, Brain, Code2 } from "lucide-react";
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
  return <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => {
          const IconComponent = post.icon;
          return <Card key={index} className="shadow-elegant hover-glow transition-smooth animate-scale-in group cursor-pointer" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                    </div>
                  </div>
                  <CardTitle className="flex items-start text-lg leading-tight">
                    <IconComponent className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{post.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>)}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <Card className="shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">More Articles Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm continuously writing about data science, machine learning, and emerging technologies. 
                Subscribe to stay updated with the latest insights and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  Subscribe to Newsletter
                </Button>
                <Button variant="secondary">
                  View All Articles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Blog;