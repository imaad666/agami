import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1533] via-[#162044] to-[#1F3A8A]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-20" />
      </div>
      
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white/80 text-sm">Next-Gen Cancer Diagnostics</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
          AAGAMISEQ Nanopore
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Diagnostics
          </span>
        </h1>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Detecting molecular signatures with sub-nanometer precision. A paradigm shift in early-stage oncology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 bg-gradient-to-r from-[#4169E1] to-[#00BCD4] text-white border-0 shadow-lg shadow-[#4169E1]/30 hover:shadow-xl hover:shadow-[#4169E1]/40 transition-all"
            data-testid="button-patients-families"
          >
            For Patients & Families
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            data-testid="button-medical-professionals"
          >
            For Medical Professionals
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
