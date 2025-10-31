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
const SolutionsOverview = lazy(() => import("./pages/solutions/SolutionsOverview"));
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
const CustomSolutions = lazy(() => import("./pages/CustomSolutions"));
const InsurerCaseStudy = lazy(() => import("./pages/resources/case-studies/InsurerCaseStudy"));
const BrokerCaseStudy = lazy(() => import("./pages/resources/case-studies/BrokerCaseStudy"));
const DiseaseManagementCaseStudy = lazy(() => import("./pages/resources/case-studies/DiseaseManagementCaseStudy"));
const DigitalHealthCaseStudy = lazy(() => import("./pages/resources/case-studies/DigitalHealthCaseStudy"));
const ScalingToTier2Tier3 = lazy(() => import("./pages/resources/blog/ScalingToTier2Tier3"));
const ReducingClaimsLeakage = lazy(() => import("./pages/resources/blog/ReducingClaimsLeakage"));
const APIFirstHealthcare = lazy(() => import("./pages/resources/blog/APIFirstHealthcare"));
const InsurersDigitalTransformation = lazy(() => import("./pages/resources/blog/InsurersDigitalTransformation"));
const InsurersClaimsFraud = lazy(() => import("./pages/resources/blog/InsurersClaimsFraud"));
const BrokersEngagement = lazy(() => import("./pages/resources/blog/BrokersEngagement"));
const BrokersTech = lazy(() => import("./pages/resources/blog/BrokersTech"));
const DiseaseManagementChronic = lazy(() => import("./pages/resources/blog/DiseaseManagementChronic"));
const DiseaseManagementEngagement = lazy(() => import("./pages/resources/blog/DiseaseManagementEngagement"));
const DigitalHealthAPI = lazy(() => import("./pages/resources/blog/DigitalHealthAPI"));
const DigitalHealthScale = lazy(() => import("./pages/resources/blog/DigitalHealthScale"));
const ProvidersNetwork = lazy(() => import("./pages/resources/blog/ProvidersNetwork"));
const ProvidersTech = lazy(() => import("./pages/resources/blog/ProvidersTech"));
const InsurersMemberRetention = lazy(() => import("./pages/resources/blog/InsurersMemberRetention"));
const InsurersClaimsAutomation = lazy(() => import("./pages/resources/blog/InsurersClaimsAutomation"));
const BrokersMultiEmployer = lazy(() => import("./pages/resources/blog/BrokersMultiEmployer"));
const BrokersWellnessROI = lazy(() => import("./pages/resources/blog/BrokersWellnessROI"));
const DiseaseManagementPredictive = lazy(() => import("./pages/resources/blog/DiseaseManagementPredictive"));
const DiseaseManagementBehavioral = lazy(() => import("./pages/resources/blog/DiseaseManagementBehavioral"));
const DigitalHealthWhitelabel = lazy(() => import("./pages/resources/blog/DigitalHealthWhitelabel"));
const DigitalHealthComplianceABDM = lazy(() => import("./pages/resources/blog/DigitalHealthComplianceABDM"));
const ProvidersDigitalTransformation = lazy(() => import("./pages/resources/blog/ProvidersDigitalTransformation"));
const ProvidersNetworkPartnerships = lazy(() => import("./pages/resources/blog/ProvidersNetworkPartnerships"));

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
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<SolutionsOverview />} />
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
              <Route path="/resources/blog/scaling-to-tier-2-tier-3-cities" element={<ScalingToTier2Tier3 />} />
              <Route path="/resources/blog/reducing-opd-claims-leakage" element={<ReducingClaimsLeakage />} />
              <Route path="/resources/blog/api-first-healthcare-build-vs-buy" element={<APIFirstHealthcare />} />
              <Route path="/resources/blog/insurers-digital-transformation" element={<InsurersDigitalTransformation />} />
              <Route path="/resources/blog/insurers-claims-fraud" element={<InsurersClaimsFraud />} />
              <Route path="/resources/blog/brokers-engagement" element={<BrokersEngagement />} />
              <Route path="/resources/blog/brokers-tech" element={<BrokersTech />} />
              <Route path="/resources/blog/disease-management-chronic" element={<DiseaseManagementChronic />} />
              <Route path="/resources/blog/disease-management-engagement" element={<DiseaseManagementEngagement />} />
              <Route path="/resources/blog/digital-health-api" element={<DigitalHealthAPI />} />
              <Route path="/resources/blog/digital-health-scale" element={<DigitalHealthScale />} />
              <Route path="/resources/blog/providers-network" element={<ProvidersNetwork />} />
              <Route path="/resources/blog/providers-tech" element={<ProvidersTech />} />
              <Route path="/resources/blog/insurers-member-retention" element={<InsurersMemberRetention />} />
              <Route path="/resources/blog/insurers-claims-automation" element={<InsurersClaimsAutomation />} />
              <Route path="/resources/blog/brokers-multi-employer" element={<BrokersMultiEmployer />} />
              <Route path="/resources/blog/brokers-wellness-roi" element={<BrokersWellnessROI />} />
              <Route path="/resources/blog/disease-management-predictive" element={<DiseaseManagementPredictive />} />
              <Route path="/resources/blog/disease-management-behavioral" element={<DiseaseManagementBehavioral />} />
              <Route path="/resources/blog/digital-health-whitelabel" element={<DigitalHealthWhitelabel />} />
              <Route path="/resources/blog/digital-health-compliance-abdm" element={<DigitalHealthComplianceABDM />} />
              <Route path="/resources/blog/providers-digital-transformation" element={<ProvidersDigitalTransformation />} />
              <Route path="/resources/blog/providers-network-partnerships" element={<ProvidersNetworkPartnerships />} />
              <Route path="/resources/research-hub" element={<ResearchHub />} />
              <Route path="/resources/case-studies/insurer" element={<InsurerCaseStudy />} />
              <Route path="/resources/case-studies/broker" element={<BrokerCaseStudy />} />
              <Route path="/resources/case-studies/disease-management" element={<DiseaseManagementCaseStudy />} />
              <Route path="/resources/case-studies/digital-health" element={<DigitalHealthCaseStudy />} />
              <Route path="/resources/api-documentation" element={<APIDocumentation />} />
              <Route path="/custom-solutions" element={<CustomSolutions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
