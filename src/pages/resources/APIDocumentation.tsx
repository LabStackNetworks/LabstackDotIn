import { Code, Book, Terminal, Zap, ArrowRight, CheckCircle, FileCode, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { apiDocumentationFAQs } from "@/lib/faqs/api-documentation-faqs";

const APIDocumentation = () => {
  const structuredData = generateFAQSchema(apiDocumentationFAQs);

  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Modern REST APIs for diagnostics, consultations, pharmacy, and specialized services. OpenAPI 3.0 specification.",
      icon: Code
    },
    {
      title: "Official SDKs",
      description: "JavaScript/TypeScript, Python, PHP, and Java SDKs. All open-sourced on GitHub with comprehensive examples.",
      icon: Terminal
    },
    {
      title: "Sandbox Environment",
      description: "Full-featured test environment with mock data. No charges, unlimited testing, instant production switch.",
      icon: Play
    },
    {
      title: "Webhooks",
      description: "Real-time event notifications for orders, reports, consultations, payments, and exceptions with retry logic.",
      icon: Zap
    }
  ];

  const quickstartGuides = [
    {
      title: "Authentication Setup",
      description: "OAuth 2.0 and API key authentication. JWT tokens for user operations.",
      time: "5 min"
    },
    {
      title: "Diagnostics Integration",
      description: "Complete guide from test catalog to order tracking to report retrieval.",
      time: "15 min"
    },
    {
      title: "Consultations API",
      description: "Doctor scheduling, video platform integration, and e-prescription handling.",
      time: "12 min"
    },
    {
      title: "Pharmacy Orders",
      description: "Medicine search, prescription upload, order creation, and delivery tracking.",
      time: "10 min"
    }
  ];

  const technicalResources = [
    "Interactive API Reference",
    "Postman Collections",
    "Code Examples (5 languages)",
    "Webhook Implementation Guide",
    "Error Handling Best Practices",
    "Rate Limiting Strategies",
    "Migration Guides",
    "Video Tutorials"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="API Documentation & Developer Resources - Labstack"
        description="Complete healthcare API documentation with SDKs, sandbox environment, code examples, and interactive guides. RESTful APIs for diagnostics, pharmacy, and consultations."
        keywords="healthcare API documentation, medical API, diagnostic API docs, telemedicine API, pharmacy API, developer resources, RESTful healthcare API"
        canonical="https://labstack.in/resources/api-documentation"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">DEVELOPER DOCS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                API Documentation & <span className="text-gradient">Developer Hub</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Comprehensive technical documentation, SDKs, code examples, and integration guides for healthcare APIs.
              </p>

              <div className="sr-only">
                <TLDR summary="Complete REST API docs with SDKs (JS, Python, PHP, Java), sandbox environment, webhooks, Postman collections, and interactive guides. 99.9% uptime SLA. Free sandbox testing." />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link to="/start-building">
                  <Button size="lg" className="btn-gradient">
                    Start Building <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/resources/api-documentation-coming-soon">
                  <Button size="lg" variant="outline">
                    <Book className="mr-2 h-5 w-5" /> View API Docs
                  </Button>
                </Link>
              </div>
            </div>

            {/* API Features Grid */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Developer-First Platform</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="bg-card-gradient rounded-xl p-6 border border-border/20 card-hover text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quickstart Guides */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Quickstart Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickstartGuides.map((guide, index) => (
                  <div key={index} className="bg-gradient-hero rounded-xl p-6 border border-border/50 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold mb-2">{guide.title}</h3>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </div>
                      <span className="text-xs text-primary font-medium whitespace-nowrap ml-4">{guide.time}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">
                      Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example Section */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Get Started in Minutes</h2>
              <div className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden">
                <div className="bg-gradient-primary p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Terminal className="w-6 h-6" />
                      <span className="font-heading font-bold">Example: Book a Diagnostic Test</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 rounded bg-white/20 text-xs font-medium">Node.js</button>
                      <button className="px-3 py-1 rounded bg-white/10 text-xs font-medium">Python</button>
                      <button className="px-3 py-1 rounded bg-white/10 text-xs font-medium">PHP</button>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-muted/50 font-mono text-sm">
                  <pre className="overflow-x-auto">
{`const labstack = require('@labstack/sdk');

// Initialize client
const client = new labstack.Client({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Create diagnostic order
const order = await client.diagnostics.createOrder({
  pincode: '560001',
  tests: ['CBC', 'LIPID_PROFILE'],
  collectionType: 'home',
  patientDetails: {
    name: 'Patient Name',
    age: 35,
    gender: 'male'
  }
});

console.log('Order created:', order.id);`}
                  </pre>
                </div>
                <div className="p-4 bg-muted/30 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Try in sandbox environment</span>
                  <Button size="sm" variant="ghost">
                    <Play className="mr-2 h-4 w-4" /> Run in Sandbox
                  </Button>
                </div>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Complete Technical Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technicalResources.map((resource, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card/50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="font-medium">{resource}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support CTA */}
            <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-white mb-20">
              <Code className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Need Integration Help?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Our engineering team provides direct support during implementation. Get technical guidance, code reviews, and architecture assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contact Engineering
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join Developer Community
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={apiDocumentationFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APIDocumentation;
