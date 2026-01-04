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
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(1.8) contrast(0.85) saturate(0.2)" }}
        data-testid="video-background"
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 border-[#4169E1] text-[#4169E1] bg-[#4169E1]/10">
          PRECISION DIAGNOSTICS
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-[#0D1B2A]">
          AAGAMI<span className="text-[#9333EA]">SEQ</span> Nanopore
          <br />
          Diagnostics
        </h1>

        <p className="text-lg text-[#0D1B2A]/70 max-w-2xl mx-auto mb-10">
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>

        <Button
          size="lg"
          onClick={scrollToNextSection}
          className="px-8 bg-[#4169E1] text-white border-0 shadow-lg"
          data-testid="button-discover-tech"
        >
          Discover our tech
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#4169E1]/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#4169E1]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
