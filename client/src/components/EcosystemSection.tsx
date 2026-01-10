import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Layers, Brain, Package } from "lucide-react";

const ecosystemItems = [
  {
    icon: Cpu,
    title: "Core Readout Device",
    subtitle: "The Engine of Discovery",
    description: "High-precision sensing hardware built for ultra-low noise current measurement and stable readouts from nanopore chips.",
    features: ["Pico-ampere sensitivity", "Multi-channel I/O", "Compact benchtop form factor"],
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    bulletColor: "bg-rose-500",
    buttonText: "Coming Soon",
  },
  {
    icon: Layers,
    title: "Solid-State Nanopore Chips",
    subtitle: "Custom-Engineered Precision",
    description: "Silicon-nitride membranes with atomically precise pores, tuned to specific biomarker sizes for consistent, high-fidelity sensing.",
    features: ["Custom pore diameters", "High durability", "Sub-nanometer precision"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    bulletColor: "bg-blue-500",
    buttonText: "Contact Sales",
  },
  {
    icon: Brain,
    title: "AI Analysis Software",
    subtitle: "Intelligent Signal Processing",
    description: "A cloud-native platform using deep learning to classify molecular signatures and identify actionable cancer markers in real time.",
    features: ["Real-time functionality", "Automated anomaly detection", "Clinical reporting dashboard"],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    bulletColor: "bg-emerald-500",
    buttonText: "Coming Soon",
  },
  {
    icon: Package,
    title: "Consumables & Kits",
    subtitle: "Standardized Workflow",
    description: "Ready-to-use sample prep kits and buffer solutions, optimized for maximum signal-to-noise ratio and reliable assay performance.",
    features: ["Fast sample prep", "High stability reagents", "Lot-to-lot consistency"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    bulletColor: "bg-violet-500",
    buttonText: "Coming Soon",
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 bg-background">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Our Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We provide a complete, integrated solution for single-molecule sensing, from the physical sensor to the final clinical insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemItems.map((item, index) => (
            <Card key={index} className="p-6 flex flex-col h-[420px]" data-testid={`card-ecosystem-${index}`}>
              {/* Top section: Icon + Title + Subtitle + Description */}
              <div className="flex-shrink-0">
                <div className={`inline-flex p-3 rounded-lg ${item.bgColor} mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 leading-tight">{item.title}</h3>
                <p className={`text-sm ${item.color} mb-3 leading-snug`}>{item.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed h-[72px]">{item.description}</p>
              </div>
              
              {/* Middle section: Bullet points at consistent position */}
              <ul className="space-y-2 mt-4 flex-shrink-0">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-3 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.bulletColor} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Bottom section: CTA pinned to bottom */}
              <Button 
                variant={item.buttonText === "Contact Sales" ? "default" : "outline"}
                className="w-full mt-auto"
                data-testid={`button-ecosystem-${index}`}
              >
                {item.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
