import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { blogFAQs } from "@/lib/faqs/blog-faqs";

const Blog = () => {
  const structuredData = generateFAQSchema(blogFAQs);

  const featuredArticles = [
    {
      title: "Digital Transformation for Health Insurers: A 2025 Roadmap",
      excerpt: "How leading insurers are reducing claim processing time by 60% and scaling to tier-2/3 cities with digital infrastructure.",
      category: "Insurers",
      readTime: "8 min read",
      date: "Jan 15, 2025",
      link: "insurers-digital-transformation"
    },
    {
      title: "Reducing Claims Fraud: AI-Powered Detection",
      excerpt: "Learn how AI and data analytics help insurers detect fraud, saving ₹800-1200 per suspicious claim and reducing fraud rates by 40%.",
      category: "Insurers",
      readTime: "10 min read",
      date: "Jan 20, 2025",
      link: "insurers-claims-fraud"
    },
    {
      title: "Employee Wellness Programs That Drive ROI",
      excerpt: "How brokers use digital wellness platforms to increase retention by 35%, reduce claims by 20%, and differentiate in competitive markets.",
      category: "Brokers",
      readTime: "9 min read",
      date: "Jan 18, 2025",
      link: "brokers-engagement"
    },
    {
      title: "Technology Stack for Modern Insurance Brokers",
      excerpt: "How tech-enabled brokers are serving 3x more clients with 40% lower operational costs through automation.",
      category: "Brokers",
      readTime: "11 min read",
      date: "Jan 22, 2025",
      link: "brokers-tech"
    },
    {
      title: "Chronic Disease Management at Scale",
      excerpt: "Discover how disease management programs reduce hospitalizations by 45% and lower treatment costs by ₹8,000-12,000 per patient annually.",
      category: "Disease Management",
      readTime: "12 min read",
      date: "Jan 25, 2025",
      link: "disease-management-chronic"
    },
    {
      title: "Patient Engagement: Getting to 70%+ Participation",
      excerpt: "Proven strategies to achieve 70%+ enrollment and 50%+ active engagement in disease management programs through behavioral design.",
      category: "Disease Management",
      readTime: "11 min read",
      date: "Jan 28, 2025",
      link: "disease-management-engagement"
    },
    {
      title: "API-First Healthcare Infrastructure",
      excerpt: "Build faster with healthcare APIs. Launch diagnostics, consultations, and pharmacy in 14 days instead of 14 months.",
      category: "Digital Health",
      readTime: "9 min read",
      date: "Jan 12, 2025",
      link: "digital-health-api"
    },
    {
      title: "Scaling to Tier 2/3 Cities",
      excerpt: "Expand beyond metros with infrastructure that works in 600+ cities. Learn how platforms scale profitably to tier 2/3 markets.",
      category: "Digital Health",
      readTime: "7 min read",
      date: "Jan 16, 2025",
      link: "digital-health-scale"
    },
    {
      title: "Joining Healthcare Networks: A Provider's Guide",
      excerpt: "How doctors, labs, and hospitals grow practice volume by 40% through digital health network partnerships.",
      category: "Providers",
      readTime: "8 min read",
      date: "Jan 19, 2025",
      link: "providers-network"
    },
    {
      title: "Digital Tools for Healthcare Providers",
      excerpt: "Learn how digital tools help providers manage appointments, reduce no-shows by 60%, and improve patient satisfaction.",
      category: "Providers",
      readTime: "7 min read",
      date: "Jan 23, 2025",
      link: "providers-tech"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Blog & Knowledge Hub - Labstack"
        description="Healthcare technology insights, API integration guides, regulatory compliance updates, and market expansion strategies. Expert knowledge for digital health platforms."
        keywords="healthcare blog, healthtech insights, telemedicine trends, API integration guides, healthcare compliance, digital health knowledge"
        canonical="https://labstack.in/resources/blog"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">KNOWLEDGE HUB</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Healthcare Insights & <span className="text-gradient">Expert Knowledge</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                In-depth guides, industry trends, technical tutorials, and regulatory updates for healthcare technology leaders.
              </p>

              <div className="sr-only">
                <TLDR summary="Comprehensive healthcare content covering API integration, Tier-2/3 expansion, regulatory compliance (IT Act 2000, DISHA, Telemedicine Guidelines), case studies, and market insights. Published 2-3x weekly." />
              </div>
            </div>

            {/* Featured Articles */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article, index) => (
                  <Link key={index} to={`/resources/blog/${article.link}`}>
                    <div className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover h-full">
                      <div className="p-6">
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                          {article.category}
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{article.date}</span>
                            <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" />{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <Button variant="ghost" size="sm" className="w-full">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-white mb-20">
              <BookOpen className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Stay Updated</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get weekly healthcare insights, regulatory updates, and technical guides delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
