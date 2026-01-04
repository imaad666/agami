import { Zap, Activity, BarChart3, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: Zap,
    number: "1",
    title: "Molecular Translocation",
    description: "Bio-molecules (DNA, RNA, Proteins) are driven by an electric field through a nanometer-sized aperture.",
    color: "bg-blue-500",
  },
  {
    icon: Activity,
    number: "2",
    title: "Ionic Current Blockade",
    description: "As molecules pass through, they partially block the flow of ions, creating a unique current signature.",
    color: "bg-cyan-500",
  },
  {
    icon: BarChart3,
    number: "3",
    title: "Signature Analysis",
    description: "The magnitude and duration of current changes reveal the molecule's physical and chemical properties.",
    color: "bg-violet-500",
  },
  {
    icon: Stethoscope,
    number: "4",
    title: "Clinical Diagnosis",
    description: "Our AI identifies 'cancerous' patterns early, allowing for intervention before symptoms even appear.",
    color: "bg-rose-500",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              How Nanopore Sensing Works
            </h2>
            <p className="text-muted-foreground mb-10">
              Solid-state nanopores act as high-resolution "smart" filters. Unlike traditional chemical assays, our technology measures individual molecules physically, providing unparalleled sensitivity for detecting trace amounts of cancer biomarkers in blood or urine.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
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
            <div className="relative bg-background rounded-xl border p-8 w-full max-w-md shadow-sm">
              <svg viewBox="0 0 300 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="50" r="20" fill="#4169E1" opacity="0.3">
                  <animate attributeName="cy" values="50;100;50" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="50" r="12" fill="#4169E1" opacity="0.6">
                  <animate attributeName="cy" values="50;100;50" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <rect x="50" y="120" width="200" height="8" rx="4" fill="hsl(var(--muted))" />
                
                <circle cx="150" cy="124" r="16" fill="hsl(var(--background))" stroke="#4169E1" strokeWidth="3" />
                <circle cx="150" cy="124" r="6" fill="#4169E1" />
                
                <circle cx="80" cy="124" r="3" fill="hsl(var(--border))" />
                <circle cx="100" cy="124" r="3" fill="hsl(var(--border))" />
                <circle cx="120" cy="124" r="3" fill="hsl(var(--border))" />
                <circle cx="180" cy="124" r="3" fill="hsl(var(--border))" />
                <circle cx="200" cy="124" r="3" fill="hsl(var(--border))" />
                <circle cx="220" cy="124" r="3" fill="hsl(var(--border))" />
                
                <circle cx="150" cy="200" r="16" fill="#06b6d4" opacity="0.4">
                  <animate attributeName="cy" values="160;200;160" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="200" r="10" fill="#06b6d4" opacity="0.7">
                  <animate attributeName="cy" values="160;200;160" dur="2s" repeatCount="indefinite" />
                </circle>
                
                <text x="260" y="210" textAnchor="start" fontSize="10" fill="hsl(var(--muted-foreground))" letterSpacing="1">RESOLUTION</text>
                <text x="260" y="235" textAnchor="start" fontSize="24" fontWeight="700" fill="hsl(var(--foreground))">0.1</text>
                <text x="260" y="255" textAnchor="start" fontSize="14" fontWeight="600" fill="#4169E1">Nanometers</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
