import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDemo from "./pages/BookDemo";
import StartBuilding from "./pages/StartBuilding";
import CustomSolutions from "./pages/CustomSolutions";
import HealthcareInfrastructure from "./pages/solutions/HealthcareInfrastructure";
import DigitalPlatform from "./pages/solutions/DigitalPlatform";
import APISolutions from "./pages/solutions/APISolutions";
import CoverageExpansion from "./pages/solutions/CoverageExpansion";
import InsurersTPAs from "./pages/who-we-serve/InsurersTPAs";
import BrokersAggregators from "./pages/who-we-serve/BrokersAggregators";
import DiseaseManagement from "./pages/who-we-serve/DiseaseManagement";
import DigitalHealthPlatforms from "./pages/who-we-serve/DigitalHealthPlatforms";
import Providers from "./pages/who-we-serve/Providers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/start-building" element={<StartBuilding />} />
            <Route path="/custom-solutions" element={<CustomSolutions />} />
            <Route path="/solutions/healthcare-infrastructure" element={<HealthcareInfrastructure />} />
            <Route path="/solutions/digital-platform" element={<DigitalPlatform />} />
            <Route path="/solutions/api-solutions" element={<APISolutions />} />
            <Route path="/solutions/coverage-expansion" element={<CoverageExpansion />} />
            <Route path="/who-we-serve/insurers-tpas" element={<InsurersTPAs />} />
            <Route path="/who-we-serve/brokers-aggregators" element={<BrokersAggregators />} />
            <Route path="/who-we-serve/disease-management" element={<DiseaseManagement />} />
            <Route path="/who-we-serve/digital-health-platforms" element={<DigitalHealthPlatforms />} />
            <Route path="/who-we-serve/providers" element={<Providers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
