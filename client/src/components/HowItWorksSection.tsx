import { Zap, Activity, BarChart3, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Molecular Translocation",
    description: "Bio-molecules (DNA, RNA, Proteins) are driven by an electric field through a nanometer-sized aperture.",
    color: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Ionic Current Blockade",
    description: "As molecules pass through, they partially block the flow of ions, creating a unique current signature.",
    color: "text-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Signature Analysis",
    description: "Machine learning analysis of current changes reveals the molecule's physical and chemical properties.",
    color: "text-violet-500",
  },
  {
    icon: Stethoscope,
    title: "Clinical Diagnosis",
    description: "Our AI identifies cancerous patterns early, allowing for intervention before symptoms even appear.",
    color: "text-rose-500",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              How Nanopore Sensing Works
            </h2>
            <p className="text-muted-foreground mb-8">
              Solid-state nanopores act as high-resolution "smart" filters. Unlike traditional chemical assays, our technology measures individual molecules physically, providing unparalleled sensitivity for detecting trace amounts of cancer biomarkers in blood or urine.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg bg-background border`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-background rounded-xl border p-8 w-full max-w-md">
              <svg viewBox="0 0 300 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="120" y="80" width="60" height="120" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                <rect x="145" y="130" width="10" height="20" fill="hsl(var(--primary))" />
                
                <circle cx="100" cy="60" r="6" fill="#06b6d4" opacity="0.8" />
                <circle cx="150" cy="40" r="4" fill="#06b6d4" opacity="0.6" />
                <circle cx="200" cy="55" r="5" fill="#06b6d4" opacity="0.7" />
                <circle cx="130" cy="50" r="3" fill="#06b6d4" opacity="0.5" />
                
                <path d="M150 200 L150 250" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="150" cy="220" r="4" fill="#06b6d4" />
                <circle cx="150" cy="240" r="4" fill="#06b6d4" />
                
                <text x="150" y="270" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">RESOLUTION</text>
                
                <text x="260" y="145" textAnchor="start" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">0.1</text>
                <text x="260" y="160" textAnchor="start" fontSize="10" fill="hsl(var(--primary))">Nanometers</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
