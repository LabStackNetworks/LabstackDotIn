import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense, lazy } from "react";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const StartBuilding = lazy(() => import("./pages/StartBuilding"));
const CustomSolutions = lazy(() => import("./pages/CustomSolutions"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const PlatformOverview = lazy(() => import("./pages/PlatformOverview"));
const Diagnostics = lazy(() => import("./pages/platform/Diagnostics"));
const Consultations = lazy(() => import("./pages/platform/Consultations"));
const Pharmacy = lazy(() => import("./pages/platform/Pharmacy"));
const SpecializedNetworks = lazy(() => import("./pages/platform/SpecializedNetworks"));
const Integrations = lazy(() => import("./pages/platform/Integrations"));
const HealthcareInfrastructure = lazy(() => import("./pages/solutions/HealthcareInfrastructure"));
const DigitalPlatform = lazy(() => import("./pages/solutions/DigitalPlatform"));
const APISolutions = lazy(() => import("./pages/solutions/APISolutions"));
const CoverageExpansion = lazy(() => import("./pages/solutions/CoverageExpansion"));
const WhoWeServeOverview = lazy(() => import("./pages/who-we-serve/WhoWeServeOverview"));
const InsurersTPAs = lazy(() => import("./pages/who-we-serve/InsurersTPAs"));
const BrokersCorporateWellness = lazy(() => import("./pages/who-we-serve/BrokersCorporateWellness"));
const DiseaseManagement = lazy(() => import("./pages/who-we-serve/DiseaseManagement"));
const DigitalHealthPlatforms = lazy(() => import("./pages/who-we-serve/DigitalHealthPlatforms"));
const Providers = lazy(() => import("./pages/who-we-serve/Providers"));
const ProvidersOverview = lazy(() => import("./pages/provider/ProvidersOverview"));
const ProviderJoinForm = lazy(() => import("./pages/provider/ProviderJoinForm"));
const HospitalsLabsJoin = lazy(() => import("./pages/provider/HospitalsLabsJoin"));
const HospitalsLabsForm = lazy(() => import("./pages/provider/HospitalsLabsForm"));
const DoctorsJoin = lazy(() => import("./pages/provider/DoctorsJoin"));
const DoctorsForm = lazy(() => import("./pages/provider/DoctorsForm"));
const NutritionistsHealthCoaches = lazy(() => import("./pages/provider/NutritionistsHealthCoaches"));
const NutritionistsForm = lazy(() => import("./pages/provider/NutritionistsForm"));
const FieldStaffJoin = lazy(() => import("./pages/provider/FieldStaffJoin"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PartnerTerms = lazy(() => import("./pages/PartnerTerms"));
const Careers = lazy(() => import("./pages/Careers"));
const Login = lazy(() => import("./pages/Login"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const ResearchHub = lazy(() => import("./pages/resources/ResearchHub"));
const APIDocumentation = lazy(() => import("./pages/resources/APIDocumentation"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/platform-overview" element={<PlatformOverview />} />
              <Route path="/platform/diagnostics" element={<Diagnostics />} />
              <Route path="/platform/consultations" element={<Consultations />} />
              <Route path="/platform/pharmacy" element={<Pharmacy />} />
              <Route path="/platform/specialized-networks" element={<SpecializedNetworks />} />
              <Route path="/platform/integrations" element={<Integrations />} />
              <Route path="/about" element={<About />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="/start-building" element={<StartBuilding />} />
              <Route path="/custom-solutions" element={<CustomSolutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions/healthcare-infrastructure" element={<HealthcareInfrastructure />} />
              <Route path="/solutions/digital-platform" element={<DigitalPlatform />} />
              <Route path="/solutions/api-solutions" element={<APISolutions />} />
              <Route path="/solutions/coverage-expansion" element={<CoverageExpansion />} />
              <Route path="/who-we-serve" element={<WhoWeServeOverview />} />
              <Route path="/who-we-serve/insurers-tpas" element={<InsurersTPAs />} />
              <Route path="/who-we-serve/brokers-corporate-wellness" element={<BrokersCorporateWellness />} />
              <Route path="/who-we-serve/disease-management" element={<DiseaseManagement />} />
              <Route path="/who-we-serve/digital-health-platforms" element={<DigitalHealthPlatforms />} />
              <Route path="/who-we-serve/providers" element={<Providers />} />
              <Route path="/provider" element={<ProvidersOverview />} />
              <Route path="/provider/join-network" element={<ProviderJoinForm />} />
              <Route path="/provider/hospitals-labs" element={<HospitalsLabsJoin />} />
              <Route path="/provider/hospitals-labs/apply" element={<HospitalsLabsForm />} />
              <Route path="/provider/doctors" element={<DoctorsJoin />} />
              <Route path="/provider/doctors/apply" element={<DoctorsForm />} />
              <Route path="/provider/nutritionists-health-coaches" element={<NutritionistsHealthCoaches />} />
              <Route path="/provider/nutritionists-health-coaches/apply" element={<NutritionistsForm />} />
              <Route path="/provider/field-staff" element={<FieldStaffJoin />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/partner-terms" element={<PartnerTerms />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/research-hub" element={<ResearchHub />} />
          <Route path="/resources/api-documentation" element={<APIDocumentation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
