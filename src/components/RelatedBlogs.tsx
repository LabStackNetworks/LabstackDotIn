/**
 * Related Blogs Component
 * Shows relevant blog articles at the bottom of pages for improved SEO/GEO
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";

interface BlogArticle {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  link: string;
}

interface RelatedBlogsProps {
  category: "Insurers" | "InsureTech" | "Brokers" | "Disease Management" | "Digital Health" | "Providers";
  limit?: number;
}

const allBlogs: BlogArticle[] = [
  // Insurers
  {
    title: "Digital Transformation for Health Insurers: A 2025 Roadmap",
    excerpt: "How leading insurers are reducing claim processing time by 60% and scaling to Tier-2/3 cities with digital infrastructure.",
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
    date: "Jan 28, 2025",
    link: "insurers-claims-fraud"
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
    title: "Claims Processing Automation: From 7 Days to 2 Hours",
    excerpt: "AI-powered automation reduces processing time by 95%, cuts costs by ₹200-300 per claim, and improves satisfaction.",
    category: "Insurers",
    readTime: "11 min read",
    date: "Jun 10, 2025",
    link: "insurers-claims-automation"
  },
  // InsureTech
  {
    title: "InsureTech Revenue Growth: Healthcare as Revenue Engine",
    excerpt: "How InsureTech platforms increase ARPU by 15-25% and improve retention by 40% through healthcare benefits.",
    category: "InsureTech",
    readTime: "10 min read",
    date: "Jan 10, 2025",
    link: "insuretech-revenue-growth"
  },
  {
    title: "Product-Led Growth for InsureTech Through Healthcare",
    excerpt: "How healthcare benefits drive viral growth, reduce CAC by 25%, and create network effects for digital insurance platforms.",
    category: "InsureTech",
    readTime: "11 min read",
    date: "Feb 24, 2025",
    link: "insuretech-product-led-growth"
  },
  // Brokers
  {
    title: "Employee Wellness Programs That Drive ROI",
    excerpt: "How brokers use digital wellness platforms to increase retention by 35%, reduce claims by 20%, and differentiate in competitive markets.",
    category: "Brokers",
    readTime: "9 min read",
    date: "Feb 15, 2025",
    link: "brokers-engagement"
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
    title: "Wellness ROI: Measuring Beyond Healthcare Costs",
    excerpt: "Corporate wellness programs deliver 3:1 ROI through productivity gains, reduced absenteeism, and improved retention.",
    category: "Brokers",
    readTime: "11 min read",
    date: "Jul 18, 2025",
    link: "brokers-wellness-roi"
  },
  {
    title: "Multi-Employer Platform Management at Scale",
    excerpt: "How brokers serve 100+ corporate clients efficiently, reducing costs by 60% while improving retention.",
    category: "Brokers",
    readTime: "10 min read",
    date: "Apr 20, 2025",
    link: "brokers-multi-employer"
  },
  // Disease Management
  {
    title: "Chronic Disease Management at Scale",
    excerpt: "Discover how disease management programs reduce hospitalizations by 45% and lower treatment costs by ₹8,000-12,000 per patient annually.",
    category: "Disease Management",
    readTime: "12 min read",
    date: "Apr 8, 2025",
    link: "disease-management-chronic"
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
    title: "Predictive Analytics in Disease Management",
    excerpt: "How AI identifies high-risk members 6-12 months before complications, reducing hospitalizations by 45%.",
    category: "Disease Management",
    readTime: "9 min read",
    date: "Jun 14, 2025",
    link: "disease-management-predictive"
  },
  {
    title: "Behavioral Design for 70% Disease Management Enrollment",
    excerpt: "Proven strategies to achieve 70%+ enrollment and 50%+ active engagement through behavioral science.",
    category: "Disease Management",
    readTime: "10 min read",
    date: "Aug 12, 2025",
    link: "disease-management-behavioral"
  },
  // Digital Health
  {
    title: "API-First Healthcare Infrastructure",
    excerpt: "Build faster with healthcare APIs. Launch diagnostics, consultations, and pharmacy in 14 days instead of 14 months.",
    category: "Digital Health",
    readTime: "9 min read",
    date: "Jan 25, 2025",
    link: "digital-health-api"
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
    title: "White-Label vs Build: Launch Healthcare Apps in 14 Days",
    excerpt: "How digital health platforms launch branded apps in 14 days vs 12-18 months building from scratch.",
    category: "Digital Health",
    readTime: "10 min read",
    date: "Sep 8, 2025",
    link: "digital-health-whitelabel"
  },
  {
    title: "ABDM Integration & Healthcare Compliance in 2025",
    excerpt: "Complete guide to ABDM, DISHA, IT Act 2000, and telemedicine compliance for digital health platforms.",
    category: "Digital Health",
    readTime: "12 min read",
    date: "Oct 15, 2025",
    link: "digital-health-compliance-abdm"
  },
  // Providers
  {
    title: "Digital Transformation for Healthcare Providers",
    excerpt: "How doctors, labs, and hospitals increase patient volume by 40% and reduce no-shows by 60% through digital tools.",
    category: "Providers",
    readTime: "11 min read",
    date: "May 14, 2025",
    link: "providers-digital-transformation"
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
    title: "Provider Technology Stack for 2025",
    excerpt: "Essential tools for modern healthcare providers to improve efficiency and patient satisfaction.",
    category: "Providers",
    readTime: "9 min read",
    date: "May 5, 2025",
    link: "providers-tech"
  },
  {
    title: "Building Healthcare Networks That Scale",
    excerpt: "Strategies for expanding provider networks while maintaining quality and service standards.",
    category: "Providers",
    readTime: "10 min read",
    date: "Feb 22, 2025",
    link: "providers-network"
  }
];

const RelatedBlogs = ({ category, limit = 3 }: RelatedBlogsProps) => {
  const relatedArticles = allBlogs
    .filter(blog => blog.category === category)
    .slice(0, limit);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Related Resources
            </h2>
            <p className="text-muted-foreground">
              Expert insights and strategies for {category.toLowerCase()} professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {relatedArticles.map((article, index) => (
              <Link key={index} to={`/resources/blog/${article.link}`}>
                <div className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover h-full">
                  <div className="p-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {article.category}
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/resources/blog">
              <Button variant="outline" size="lg">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
