import { useState } from "react";
import { MapPin, TrendingUp, CheckCircle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProofOfScale = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Real Indian cities - Progressive loading based on zoom
  const allCities = [
    // Major Metros (Tier-0) - Always visible
    { name: 'Delhi NCR', x: 40, y: 25, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Mumbai', x: 20, y: 45, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Bangalore', x: 30, y: 75, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Chennai', x: 35, y: 80, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Kolkata', x: 75, y: 35, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Hyderabad', x: 45, y: 65, tier: 0, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    
    // Tier-1 Cities - Visible at zoom 1+
    { name: 'Pune', x: 25, y: 50, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Ahmedabad', x: 15, y: 40, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Jaipur', x: 28, y: 32, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Lucknow', x: 48, y: 28, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Surat', x: 18, y: 42, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Chandigarh', x: 35, y: 22, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Kochi', x: 25, y: 82, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Visakhapatnam', x: 82, y: 68, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Indore', x: 32, y: 45, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: true },
    { name: 'Coimbatore', x: 28, y: 72, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Bhopal', x: 38, y: 43, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Patna', x: 62, y: 30, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Vadodara', x: 18, y: 43, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Nagpur', x: 42, y: 48, tier: 1, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },

    // Tier-2 Cities - Visible at zoom 1.2+
    { name: 'Guwahati', x: 88, y: 30, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Bhubaneswar', x: 78, y: 42, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Mysore', x: 32, y: 78, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Thiruvananthapuram', x: 28, y: 85, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Dehradun', x: 38, y: 20, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Ranchi', x: 68, y: 38, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Raipur', x: 52, y: 48, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Jabalpur', x: 44, y: 40, tier: 2, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Varanasi', x: 55, y: 32, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Agra', x: 43, y: 28, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Nashik', x: 22, y: 42, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Madurai', x: 30, y: 82, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Vijayawada', x: 52, y: 72, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Rajkot', x: 16, y: 38, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Jodhpur', x: 22, y: 32, tier: 2, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Amritsar', x: 32, y: 18, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Gwalior', x: 42, y: 32, tier: 2, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kota', x: 30, y: 35, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Guntur', x: 48, y: 70, tier: 2, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Jalandhar', x: 33, y: 20, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Aurangabad', x: 28, y: 47, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: true, hasConsult: false },
    { name: 'Mangalore', x: 27, y: 78, tier: 2, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },

    // Tier-3 Cities - Visible at zoom 1.4+
    { name: 'Shimla', x: 36, y: 18, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Bikaner', x: 22, y: 28, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Ujjain', x: 30, y: 42, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Solapur', x: 28, y: 54, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Tirupati', x: 42, y: 78, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Siliguri', x: 72, y: 32, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kolhapur', x: 24, y: 52, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Nellore', x: 46, y: 76, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Ajmer', x: 26, y: 33, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Udaipur', x: 24, y: 36, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Tirunelveli', x: 28, y: 86, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Belgaum', x: 26, y: 68, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Salem', x: 32, y: 74, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Bhilai', x: 54, y: 48, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Warangal', x: 50, y: 64, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Durgapur', x: 70, y: 38, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Bareilly', x: 46, y: 26, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Jamshedpur', x: 72, y: 40, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Moradabad', x: 44, y: 24, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Aligarh', x: 44, y: 26, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Vellore', x: 38, y: 76, tier: 3, hasHome: true, hasCenter: true, hasPharmacy: false, hasConsult: false },
    { name: 'Rourkela', x: 74, y: 42, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Bhavnagar', x: 16, y: 44, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Muzaffarpur', x: 64, y: 32, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Bilaspur', x: 58, y: 46, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Gorakhpur', x: 57, y: 30, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Cuttack', x: 76, y: 44, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Sangli', x: 24, y: 53, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Belgavi', x: 26, y: 69, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Ambala', x: 37, y: 21, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Tumkur', x: 31, y: 76, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Erode', x: 29, y: 73, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kannur', x: 26, y: 79, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Karnal', x: 39, y: 23, tier: 3, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },

    // Tier-4 Cities - Visible at zoom 1.6+
    { name: 'Rohtak', x: 38, y: 24, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Panipat', x: 39, y: 23, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Firozabad', x: 45, y: 28, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Mathura', x: 42, y: 28, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Haridwar', x: 40, y: 22, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Meerut', x: 42, y: 24, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Saharanpur', x: 41, y: 23, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Jhansi', x: 44, y: 35, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Satna', x: 50, y: 37, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Korba', x: 58, y: 45, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Dhanbad', x: 70, y: 39, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Asansol', x: 72, y: 38, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Darjeeling', x: 75, y: 31, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Gangtok', x: 78, y: 29, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Imphal', x: 87, y: 35, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Shillong', x: 86, y: 32, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Dibrugarh', x: 91, y: 31, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Silchar', x: 87, y: 36, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Sambalpur', x: 76, y: 46, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Brahmapur', x: 78, y: 48, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Rajahmundry', x: 54, y: 70, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kakinada', x: 57, y: 69, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Nellore', x: 46, y: 77, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kurnool', x: 42, y: 68, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Anantapur', x: 40, y: 70, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Kadapa', x: 41, y: 73, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Nizamabad', x: 44, y: 60, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Karimnagar', x: 50, y: 62, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Raichur', x: 38, y: 68, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Bijapur', x: 28, y: 66, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Gulbarga', x: 35, y: 63, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Hubli', x: 27, y: 69, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Davangere', x: 30, y: 72, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Shimoga', x: 28, y: 75, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Udupi', x: 26, y: 77, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Thrissur', x: 27, y: 80, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Kollam', x: 27, y: 84, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Palakkad', x: 28, y: 79, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Alappuzha', x: 27, y: 82, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Tiruchirappalli', x: 33, y: 78, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Thanjavur', x: 34, y: 80, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Dindigul', x: 31, y: 80, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Pudukkottai', x: 34, y: 82, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Cuddalore', x: 36, y: 79, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Tiruvannamalai', x: 37, y: 78, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Hosur', x: 33, y: 76, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Pondicherry', x: 37, y: 80, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Gandhidham', x: 14, y: 38, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Junagadh', x: 15, y: 42, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Anand', x: 17, y: 41, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Bharuch', x: 17, y: 43, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
    { name: 'Valsad', x: 18, y: 44, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: false, hasConsult: false },
    { name: 'Navsari', x: 17, y: 44, tier: 4, hasHome: true, hasCenter: false, hasPharmacy: true, hasConsult: false },
  ];

  // Filter cities based on zoom level for progressive disclosure
  const getVisibleCities = () => {
    if (zoomLevel >= 1.6) return allCities; // Show all 120 cities at highest zoom
    if (zoomLevel >= 1.4) return allCities.filter(c => c.tier <= 3); // Show up to tier-3
    if (zoomLevel >= 1.2) return allCities.filter(c => c.tier <= 2); // Show up to tier-2
    if (zoomLevel >= 1.0) return allCities.filter(c => c.tier <= 1); // Show metros + tier-1
    return allCities.filter(c => c.tier === 0); // Show only metros at base zoom
  };

  const visibleCities = getVisibleCities();

  const metrics = [
    {
      icon: TrendingUp,
      value: "30,000+",
      label: "orders/month",
      description: "Growing healthcare services delivered",
      color: "text-primary"
    },
    {
      icon: MapPin,
      value: "5,000+",
      label: "active partners", 
      description: "Verified provider network",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      value: "Tier 3",
      label: "coverage",
      description: "Metros to tier-3 cities",
      color: "text-success"
    },
    {
      icon: Activity,
      value: "99.5%",
      label: "uptime",
      description: "Enterprise-grade reliability",
      color: "text-warning"
    }
  ];

  const coverageStats = [
    { region: "Metro Cities", coverage: "100%", color: "bg-primary" },
    { region: "Tier-1 Cities", coverage: "95%", color: "bg-secondary" },
    { region: "Tier-2 Cities", coverage: "80%", color: "bg-success" },
    { region: "Tier-3 Cities", coverage: "60%", color: "bg-warning" }
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Nationwide Scale</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Numbers that demonstrate our reach and reliability across India
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="card-gradient p-6 lg:p-8 rounded-2xl text-center card-hover group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-card flex items-center justify-center group-hover:scale-110 transition-smooth ${metric.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground/80">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Map Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Visualization */}
            <div className="relative">
              <div className="bg-card-gradient rounded-2xl p-8 border border-border/50 overflow-hidden">
                <div className="relative h-80 bg-muted/30 rounded-xl flex items-center justify-center mb-6 overflow-hidden group">
                  {/* Zoom Controls */}
                  <div className="absolute top-2 right-2 z-50 flex flex-col gap-1 bg-card/90 backdrop-blur-sm rounded-lg p-1 border border-border/50">
                    <button 
                      onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-primary/10 rounded text-foreground font-bold transition-colors"
                      title="Zoom In"
                    >
                      +
                    </button>
                    <div className="text-[10px] text-center text-muted-foreground px-1">
                      {visibleCities.length}
                    </div>
                    <button 
                      onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-primary/10 rounded text-foreground font-bold transition-colors"
                      title="Zoom Out"
                    >
                      −
                    </button>
                  </div>
                  {/* India Map with Progressive City Display */}
                  <div 
                    className="relative w-full h-full flex items-center justify-center transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-50"></div>
                    
                    {/* Render cities based on zoom level */}
                    {visibleCities.map((city, index) => {
                      const sizeClass = 
                        city.tier === 0 ? 'w-4 h-4' :
                        city.tier === 1 ? 'w-3 h-3' :
                        city.tier === 2 ? 'w-2.5 h-2.5' :
                        city.tier === 3 ? 'w-2 h-2' : 'w-1.5 h-1.5';
                      
                      const colorClass = 
                        city.hasHome && city.hasCenter && city.hasPharmacy && city.hasConsult ? 'bg-primary' :
                        city.hasHome && city.hasCenter && city.hasPharmacy ? 'bg-secondary' :
                        city.hasHome && city.hasCenter ? 'bg-success' :
                        city.hasHome || city.hasCenter ? 'bg-warning' : 'bg-muted';
                      
                      const animateClass = city.tier <= 1 ? 'animate-pulse-subtle' : '';
                      
                      return (
                        <div 
                          key={`city-${index}-${city.name}`}
                          className="absolute group/city isolate cursor-pointer transition-opacity duration-300"
                          style={{ top: `${city.y}%`, left: `${city.x}%` }}
                        >
                          <div className={`${sizeClass} ${colorClass} rounded-full ${animateClass} relative z-10`}></div>
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm text-xs px-3 py-2 rounded-lg shadow-xl opacity-0 invisible group-hover/city:opacity-100 group-hover/city:visible transition-all duration-200 whitespace-nowrap pointer-events-none border border-border/50" style={{ zIndex: 100 }}>
                            <div className="font-semibold mb-1">{city.name}</div>
                            <div className="flex flex-col gap-0.5 text-[10px]">
                              {city.hasHome && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Home Sample</div>}
                              {city.hasCenter && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Center Visit</div>}
                              {city.hasPharmacy && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-success rounded-full"></span>Pharmacy</div>}
                              {city.hasConsult && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-warning rounded-full"></span>Consult</div>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Connecting lines animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                      <path d="M 32% 25% Q 40% 35% 48% 45%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                      </path>
                      <path d="M 20% 45% Q 35% 40% 48% 35%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                    
                    <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm p-3 rounded-lg border border-border/50">
                      <div className="text-xs font-semibold mb-2">Service Legend</div>
                      <div className="flex flex-col gap-1.5 text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>All Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>3 Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span>2 Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-warning rounded-full"></div>
                          <span>1 Service</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">Live Network Status</span>
                    </div>
                    <div className="text-xs text-muted-foreground">99.5% Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Stats */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6 text-foreground">
                Comprehensive Geographic Coverage
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our network spans from metropolitan cities to tier-3 towns, ensuring consistent 
                healthcare access across India's diverse geography.
              </p>

              <div className="space-y-4 mb-8">
                {coverageStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${stat.color}`}></div>
                      <span className="font-medium text-foreground">{stat.region}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-bold text-foreground">{stat.coverage}</div>
                        <div className="text-xs text-muted-foreground">coverage</div>
                      </div>
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                          style={{ width: stat.coverage }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Enterprise-Grade Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      Our infrastructure is built for mission-critical healthcare operations with 
                      99.5% uptime SLA and real-time monitoring across all service points.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/solutions/coverage-expansion">
            <Button size="lg" className="btn-gradient mobile-btn-lg mobile-tap-highlight">
              Explore Our Network
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProofOfScale;