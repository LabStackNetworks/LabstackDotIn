import { BookOpen, TrendingUp, Code, FileText, ArrowRight, Calendar, User } from "lucide-react";
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
      title: "Scaling Healthcare to Tier-2/3 Cities: A Practical Guide",
      excerpt: "How to expand diagnostic and telemedicine services to 200+ Tier-2 and Tier-3 cities with quality control and profitability.",
      category: "Market Expansion",
      readTime: "8 min read",
      date: "Dec 15, 2024"
    },
    {
      title: "Reducing OPD Claims Leakage by 12%: Insurer Case Study",
      excerpt: "SKU-level controls, audit trails, and fraud detection reduced claims leakage from 18% to 6% for a major TPA.",
      category: "Insurance",
      readTime: "6 min read",
      date: "Dec 12, 2024"
    },
    {
      title: "API-First Healthcare: Why Build vs Buy Is No Longer a Question",
      excerpt: "Analysis of 12-18 month build timelines vs 14-day API integration. Real cost comparisons and ROI calculations.",
      category: "Technology",
      readTime: "10 min read",
      date: "Dec 10, 2024"
    }
  ];

  const categories = [
    { name: "Healthcare Technology", count: 45, icon: Code },
    { name: "Regulatory Compliance", count: 32, icon: FileText },
    { name: "Market Expansion", count: 28, icon: TrendingUp },
    { name: "Customer Success", count: 24, icon: User }
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

              <TLDR summary="Comprehensive healthcare content covering API integration, Tier-2/3 expansion, regulatory compliance (IT Act 2000, DISHA, Telemedicine Guidelines), case studies, and market insights. Published 2-3x weekly." />
            </div>

            {/* Featured Articles */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                  <div key={index} className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover">
                    <div className="p-6">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                        {article.category}
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
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
                ))}
              </div>
            </div>

            {/* Content Categories */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <div key={index} className="bg-gradient-hero rounded-xl p-6 border border-border/50 card-hover cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.count} articles</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
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

            {/* FAQ Section */}
            <FAQ items={blogFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
