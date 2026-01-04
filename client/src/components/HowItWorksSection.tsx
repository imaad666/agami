import { Card } from "@/components/ui/card";
import { Zap, Activity, BarChart3, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: Zap,
    number: "01",
    title: "Molecular Translocation",
    description: "Bio-molecules (DNA, RNA, Proteins) are driven by an electric field through a nanometer-sized aperture.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Activity,
    number: "02",
    title: "Ionic Current Blockade",
    description: "As molecules pass through, they partially block the flow of ions, creating a unique current signature.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Signature Analysis",
    description: "Machine learning analysis of current changes reveals the molecule's physical and chemical properties.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Stethoscope,
    number: "04",
    title: "Clinical Diagnosis",
    description: "Our AI identifies cancerous patterns early, allowing for intervention before symptoms even appear.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            How Nanopore Sensing Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solid-state nanopores act as high-resolution "smart" filters. Unlike traditional chemical assays, our technology measures individual molecules physically, providing unparalleled sensitivity for detecting trace amounts of cancer biomarkers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 relative overflow-visible" data-testid={`card-step-${index}`}>
                <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center border-2 border-background shadow-sm`}>
                  <span className={`text-sm font-bold ${step.color}`}>{step.number}</span>
                </div>
                <div className="pt-4">
                  <div className={`inline-flex p-2 rounded-lg ${step.bgColor} mb-3`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative bg-background rounded-xl border p-8 w-full max-w-md shadow-sm">
              <div className="text-center mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Nanopore Visualization</span>
              </div>
              
              <svg viewBox="0 0 300 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="150" y="25" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">DNA molecules in blood sample</text>
                
                <circle cx="80" cy="55" r="8" fill="#06b6d4" opacity="0.9">
                  <animate attributeName="cy" values="55;70;55" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="45" r="6" fill="#4169E1" opacity="0.8">
                  <animate attributeName="cy" values="45;65;45" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="60" r="7" fill="#E91E8C" opacity="0.85">
                  <animate attributeName="cy" values="60;75;60" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="50" r="5" fill="#06b6d4" opacity="0.7">
                  <animate attributeName="cy" values="50;68;50" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="48" r="6" fill="#4169E1" opacity="0.75">
                  <animate attributeName="cy" values="48;62;48" dur="1.9s" repeatCount="indefinite" />
                </circle>
                
                <rect x="100" y="100" width="100" height="100" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                <text x="150" y="95" textAnchor="middle" fontSize="9" fill="hsl(var(--primary))" fontWeight="600">NANOPORE CHIP</text>
                
                <rect x="140" y="140" width="20" height="30" rx="2" fill="hsl(var(--primary))" opacity="0.3" />
                <rect x="147" y="145" width="6" height="20" fill="hsl(var(--primary))" />
                <text x="150" y="185" textAnchor="middle" fontSize="8" fill="hsl(var(--foreground))">Pore</text>
                
                <circle cx="150" cy="230" r="5" fill="#06b6d4">
                  <animate attributeName="cy" values="210;250;210" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                <path d="M50 270 L80 270 L85 250 L95 290 L105 260 L115 280 L125 265 L135 275 L145 268 L155 272 L165 270 L250 270" stroke="#06b6d4" strokeWidth="2" fill="none" />
                <text x="150" y="295" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">Electrical Signal Fingerprint</text>
                
                <rect x="220" y="140" width="60" height="30" rx="4" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="1" />
                <text x="250" y="158" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--primary))">0.1 nm</text>
                <text x="250" y="170" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Resolution</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
