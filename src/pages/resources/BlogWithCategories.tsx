import { BookOpen, ArrowRight, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { blogFAQs } from "@/lib/faqs/blog-faqs";
import { useState } from "react";

const BlogWithCategories = () => {
  const structuredData = generateFAQSchema(blogFAQs);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Insurers",
    "InsureTech",
    "Brokers",
    "Disease Management",
    "Digital Health",
    "Providers"
  ];

  const allArticles = [
    {
      title: "InsureTech Revenue Growth: Healthcare as Revenue Engine",
      excerpt: "How InsureTech platforms increase ARPU by 15-25% and improve retention by 40% through healthcare benefits.",
      category: "InsureTech",
      readTime: "10 min read",
      date: "Jan 10, 2025",
      link: "insuretech-revenue-growth"
    },
    {
      title: "Digital Transformation for Health Insurers: A 2025 Roadmap",
      excerpt: "How leading insurers are reducing claim processing time by 60% and scaling to Tier-2/3 cities with digital infrastructure.",
      category: "Insurers",
      readTime: "8 min read",
      date: "Jan 15, 2025",
      link: "insurers-digital-transformation"
    },
    {
      title: "API-First Healthcare Infrastructure",
      excerpt: "Build faster with healthcare APIs. Launch diagnostics, consultations, and pharmacy in 14 days instead of 14 months.",
      category: "Digital Health",
      readTime: "9 min read",
      date: "Jan 25, 2025",
      link: "digital-health-api"
    },
    {
      title: "Reducing Claims Fraud: AI-Powered Detection",
      excerpt: "Learn how AI and data analytics help insurers detect fraud, saving ₹800-1200 per suspicious claim and reducing fraud rates by 40%.",
      category: "Insurers",
      readTime: "10 min read",
      date: "Jan 28, 2025",
      link: "insurers-claims-fraud"
    },
    {
      title: "Scaling to Tier 2/3 Cities",
      excerpt: "Expand beyond metros with infrastructure that works in 600+ cities. Learn how platforms scale profitably to Tier-2/3 markets.",
      category: "Digital Health",
      readTime: "7 min read",
      date: "Feb 5, 2025",
      link: "digital-health-scale"
    },
    {
      title: "Employee Wellness Programs That Drive ROI",
      excerpt: "How brokers use digital wellness platforms to increase retention by 35%, reduce claims by 20%, and differentiate in competitive markets.",
      category: "Brokers",
      readTime: "9 min read",
      date: "Feb 15, 2025",
      link: "brokers-engagement"
    },
    {
      title: "Building Healthcare Networks That Scale",
      excerpt: "Strategies for expanding provider networks while maintaining quality and service standards.",
      category: "Providers",
      readTime: "10 min read",
      date: "Feb 22, 2025",
      link: "providers-network"
    },
    {
      title: "Product-Led Growth for InsureTech Through Healthcare",
      excerpt: "How healthcare benefits drive viral growth, reduce CAC by 25%, and create network effects for digital insurance platforms.",
      category: "InsureTech",
      readTime: "11 min read",
      date: "Feb 24, 2025",
      link: "insuretech-product-led-growth"
    },
    {
      title: "Technology Stack for Modern Insurance Brokers",
      excerpt: "How tech-enabled brokers are serving 3x more clients with 40% lower operational costs through automation.",
      category: "Brokers",
      readTime: "11 min read",
      date: "Mar 12, 2025",
      link: "brokers-tech"
    },
    {
      title: "Member Retention Through Digital Health Benefits",
      excerpt: "How insurers reduce churn by 35% and increase lifetime value by ₹45,000-60,000 per member through digital health.",
      category: "Insurers",
      readTime: "12 min read",
      date: "Mar 15, 2025",
      link: "insurers-member-retention"
    },
    {
      title: "Chronic Disease Management at Scale",
      excerpt: "Discover how disease management programs reduce hospitalizations by 45% and lower treatment costs by ₹8,000-12,000 per patient annually.",
      category: "Disease Management",
      readTime: "12 min read",
      date: "Apr 8, 2025",
      link: "disease-management-chronic"
    },
    {
      title: "Multi-Employer Platform Management at Scale",
      excerpt: "How brokers serve 100+ corporate clients efficiently, reducing costs by 60% while improving retention.",
      category: "Brokers",
      readTime: "10 min read",
      date: "Apr 20, 2025",
      link: "brokers-multi-employer"
    },
    {
      title: "Provider Technology Stack for 2025",
      excerpt: "Essential tools for modern healthcare providers to improve efficiency and patient satisfaction.",
      category: "Providers",
      readTime: "9 min read",
      date: "May 5, 2025",
      link: "providers-tech"
    },
    {
      title: "Digital Transformation for Healthcare Providers",
      excerpt: "How doctors, labs, and hospitals increase patient volume by 40% and reduce no-shows by 60% through digital tools.",
      category: "Providers",
      readTime: "11 min read",
      date: "May 14, 2025",
      link: "providers-digital-transformation"
    },
    {
      title: "Patient Engagement: Getting to 70%+ Participation",
      excerpt: "Proven strategies to achieve 70%+ enrollment and 50%+ active engagement in disease management programs through behavioral design.",
      category: "Disease Management",
      readTime: "11 min read",
      date: "May 20, 2025",
      link: "disease-management-engagement"
    },
    {
      title: "Claims Processing Automation: From 7 Days to 2 Hours",
      excerpt: "AI-powered automation reduces processing time by 95%, cuts costs by ₹200-300 per claim, and improves satisfaction.",
      category: "Insurers",
      readTime: "11 min read",
      date: "Jun 10, 2025",
      link: "insurers-claims-automation"
    },
    {
      title: "Predictive Analytics in Disease Management",
      excerpt: "How AI identifies high-risk members 6-12 months before complications, reducing hospitalizations by 45%.",
      category: "Disease Management",
      readTime: "9 min read",
      date: "Jun 14, 2025",
      link: "disease-management-predictive"
    },
    {
      title: "Wellness ROI: Measuring Beyond Healthcare Costs",
      excerpt: "Corporate wellness programs deliver 3:1 ROI through productivity gains, reduced absenteeism, and improved retention.",
      category: "Brokers",
      readTime: "11 min read",
      date: "Jul 18, 2025",
      link: "brokers-wellness-roi"
    },
    {
      title: "Behavioral Design for 70% Disease Management Enrollment",
      excerpt: "Proven strategies to achieve 70%+ enrollment and 50%+ active engagement through behavioral science.",
      category: "Disease Management",
      readTime: "10 min read",
      date: "Aug 12, 2025",
      link: "disease-management-behavioral"
    },
    {
      title: "White-Label vs Build: Launch Healthcare Apps in 14 Days",
      excerpt: "How digital health platforms launch branded apps in 14 days vs 12-18 months building from scratch.",
      category: "Digital Health",
      readTime: "10 min read",
      date: "Sep 8, 2025",
      link: "digital-health-whitelabel"
    },
    {
      title: "Provider Network Partnerships: Revenue Growth Strategy",
      excerpt: "How joining digital health networks increases provider revenue by 40% through insurance and aggregator visibility.",
      category: "Providers",
      readTime: "10 min read",
      date: "Sep 22, 2025",
      link: "providers-network-partnerships"
    },
    {
      title: "ABDM Integration & Healthcare Compliance in 2025",
      excerpt: "Complete guide to ABDM, DISHA, IT Act 2000, and telemedicine compliance for digital health platforms.",
      category: "Digital Health",
      readTime: "12 min read",
      date: "Oct 15, 2025",
      link: "digital-health-compliance-abdm"
    }
  ];

  const filteredArticles = selectedCategory === "All" 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

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

            {/* Category Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-8">
                {/* <Filter className="w-5 h-5 text-muted-foreground" /> */}
                {/* <span className="text-sm font-medium text-muted-foreground">Filter by Category:</span> */}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-gradient" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Articles */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
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

export default BlogWithCategories;
