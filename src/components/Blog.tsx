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
        

        

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default Blog;