import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const StartBuilding = lazy(() => import("./pages/StartBuilding"));
const CustomSolutions = lazy(() => import("./pages/CustomSolutions"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const PlatformOverview = lazy(() => import("./pages/PlatformOverview"));
const HealthcareInfrastructure = lazy(() => import("./pages/solutions/HealthcareInfrastructure"));
const DigitalPlatform = lazy(() => import("./pages/solutions/DigitalPlatform"));
const APISolutions = lazy(() => import("./pages/solutions/APISolutions"));
const CoverageExpansion = lazy(() => import("./pages/solutions/CoverageExpansion"));
const InsurersTPAs = lazy(() => import("./pages/who-we-serve/InsurersTPAs"));
const BrokersAggregators = lazy(() => import("./pages/who-we-serve/BrokersAggregators"));
const DiseaseManagement = lazy(() => import("./pages/who-we-serve/DiseaseManagement"));
const DigitalHealthPlatforms = lazy(() => import("./pages/who-we-serve/DigitalHealthPlatforms"));
const Providers = lazy(() => import("./pages/who-we-serve/Providers"));
const ProvidersJoin = lazy(() => import("./pages/join/ProvidersJoin"));
const FieldStaffJoin = lazy(() => import("./pages/join/FieldStaffJoin"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/platform-overview" element={<PlatformOverview />} />
              <Route path="/about" element={<About />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="/start-building" element={<StartBuilding />} />
              <Route path="/custom-solutions" element={<CustomSolutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions/healthcare-infrastructure" element={<HealthcareInfrastructure />} />
              <Route path="/solutions/digital-platform" element={<DigitalPlatform />} />
              <Route path="/solutions/api-solutions" element={<APISolutions />} />
              <Route path="/solutions/coverage-expansion" element={<CoverageExpansion />} />
              <Route path="/who-we-serve/insurers-tpas" element={<InsurersTPAs />} />
              <Route path="/who-we-serve/brokers-aggregators" element={<BrokersAggregators />} />
              <Route path="/who-we-serve/disease-management" element={<DiseaseManagement />} />
              <Route path="/who-we-serve/digital-health-platforms" element={<DigitalHealthPlatforms />} />
              <Route path="/who-we-serve/providers" element={<Providers />} />
              <Route path="/join-network/providers" element={<ProvidersJoin />} />
              <Route path="/join-network/field-staff" element={<FieldStaffJoin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
