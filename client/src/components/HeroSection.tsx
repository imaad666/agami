import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import backgroundVideo from "@assets/xyz_1767556898171.webm";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const ecosystem = document.getElementById('ecosystem');
    if (ecosystem) {
      ecosystem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(1.2) contrast(1.0) saturate(0.7)" }}
        data-testid="video-background"
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-white/30" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-40">
          <line x1="100" y1="0" x2="100" y2="50" stroke="#4169E1" strokeWidth="3" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" values="0;8" dur="0.5s" repeatCount="indefinite" />
          </line>
          <rect x="70" y="50" width="60" height="20" rx="4" fill="none" stroke="#4169E1" strokeWidth="2" />
          <circle cx="100" cy="60" r="6" fill="#4169E1" />
          <line x1="100" y1="70" x2="100" y2="120" stroke="#4169E1" strokeWidth="3" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" values="0;8" dur="0.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <Badge variant="outline" className="mb-8 px-5 py-2 border-[#4169E1] text-[#4169E1] bg-[#4169E1]/10 text-sm">
          PRECISION DIAGNOSTICS
        </Badge>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#0D1B2A]">
          <span className="text-[#1e3a5f]">AAGAMI</span><span className="text-[#C71585]">SEQ</span> Nanopore
          <br />
          Diagnostics
        </h1>

        <p className="text-xl sm:text-2xl text-[#0D1B2A]/70 max-w-3xl mx-auto mb-12">
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>

        <Button
          size="lg"
          onClick={scrollToNextSection}
          className="px-10 py-6 text-lg bg-[#4169E1] text-white border-0 shadow-lg"
          data-testid="button-discover-tech"
        >
          Discover our tech
          <ChevronDown className="w-5 h-5 ml-2" />
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-[#4169E1]/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#4169E1]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
