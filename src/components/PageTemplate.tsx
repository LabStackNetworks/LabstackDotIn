import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface PageTemplateProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  structuredData?: object | object[];
}

const PageTemplate = ({
  children,
  title,
  description,
  keywords,
  canonical,
  structuredData
}: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
