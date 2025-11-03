import { ArrowLeft, Network } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";

const ProvidersNetwork = () => {
  return (
    <PageTemplate
      title="Joining Healthcare Networks: A Provider's Guide to Growth | Labstack"
      description="Discover how doctors, labs, and hospitals grow practice volume by 40% through digital health network partnerships."
      keywords="healthcare provider network, doctor partnerships India, lab network expansion, hospital digital partnerships"
      canonical="https://labstack.in/resources/blog/providers-network"
    >
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/resources/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Joining Healthcare Networks: A Provider's Guide to Growth
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            How providers increase patient volumes and revenue through network partnerships
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime="2025-02-22">February 22, 2025</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r">
            <p className="text-muted-foreground mb-0">
              Providers joining digital health networks see 40% increase in patient volume, guaranteed payment 
              within 7 days, and access to corporate and insurance patient pools.
            </p>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-4">
            <Network className="h-6 w-6 text-primary" />
            Why Join a Healthcare Network
          </h2>
          <ul className="space-y-2">
            <li>Steady patient flow from platform users</li>
            <li>Digital operations with automated bookings</li>
            <li>Fast, guaranteed payments</li>
            <li>Access to insurance and corporate accounts</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Onboarding Process</h2>
          <p>Most networks offer 7-day onboarding with digital credentialing and training.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Revenue Model</h2>
          <p>
            Providers earn per consultation, test, or procedure with transparent pricing and commission structures.
          </p>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Join Our Provider Network</h3>
          <p className="text-muted-foreground mb-6">
            Grow your practice with steady patient flow and guaranteed payments.
          </p>
          <Button asChild size="lg">
            <Link to="/provider/providers-overview">Learn More</Link>
          </Button>
        </div>
      </article>
    </PageTemplate>
  );
};

export default ProvidersNetwork;