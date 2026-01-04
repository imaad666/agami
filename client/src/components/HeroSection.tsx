import { Button } from "@/components/ui/button";
import backgroundVideo from "@assets/xyz_1767556898171.webm";
import logoImage from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";

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
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-8">
          <img src={logoImage} alt="AagamiSEQ Logo" className="h-20 w-auto" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
          AAGAMISEQ Nanopore
          <br />
          <span className="text-cyan-400">Diagnostics</span>
        </h1>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 bg-white text-gray-900 hover:bg-white/90"
            data-testid="button-patients-families"
          >
            For Patients & Families
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-white text-white hover:bg-white/10"
            data-testid="button-medical-professionals"
          >
            For Medical Professionals
          </Button>
        </div>
      </div>
    </section>
  );
}
