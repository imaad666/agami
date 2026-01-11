import { Badge } from "@/components/ui/badge";
import backgroundVideo from "@assets/aagamiseq-full-nanopore-loop_(2)_1768023664487.webm";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 sm:pt-40">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-background"
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center" style={{ marginTop: '10px' }}>
        <Badge variant="outline" className="mb-8 px-5 py-2 border-[#4169E1] text-[#4169E1] bg-[#4169E1]/10 text-sm">
          PRECISION DIAGNOSTICS
        </Badge>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#0D1B2A]">
          <span className="text-[#1e3a5f]">AAGAMI</span><span className="text-[#C71585]">SEQ</span>
          <br />
          <span className="whitespace-nowrap">Nanopore Diagnostics</span>
        </h1>

        <p className="text-xl sm:text-2xl text-[#0D1B2A]/70 max-w-3xl mx-auto" style={{ marginTop: '50px' }}>
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>
      </div>
    </section>
  );
}
