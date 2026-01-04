import { Button } from "@/components/ui/button";
import backgroundVideo from "@assets/xyz_1767556898171.webm";
import LogoBadge from "./LogoBadge";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1533]/60 via-[#1F3A8A]/50 to-[#0D1B2A]/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-8">
          <LogoBadge size="lg" variant="hero" showText={false} />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
          AAGAMISEQ Nanopore
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Diagnostics
          </span>
        </h1>

        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 bg-gradient-to-r from-[#4169E1] to-[#00BCD4] text-white border-0 shadow-lg shadow-[#4169E1]/30 hover:shadow-xl hover:shadow-[#4169E1]/40 transition-shadow"
            data-testid="button-patients-families"
          >
            For Patients & Families
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
            data-testid="button-medical-professionals"
          >
            For Medical Professionals
          </Button>
        </div>
      </div>
    </section>
  );
}
