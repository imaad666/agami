import { Card } from "@/components/ui/card";
import { Cpu, Layers, Brain, Package } from "lucide-react";

const ecosystemItems = [
  {
    icon: Cpu,
    title: "Core Readout Device",
    subtitle: "The Engine of Discovery",
    description: "High-precision sensing hardware designed for ultra-low noise current measurement from nanopore chips.",
    features: ["Pico-ampere sensitivity", "Multi-channel I/O", "Compact benchtop form factor"],
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    bulletColor: "bg-rose-500",
  },
  {
    icon: Layers,
    title: "Solid-State Nanopore Chips",
    subtitle: "Custom-Engineered Precision",
    description: "Silicon-nitride based membranes with atomically precise pores tailored for specific biomarker sizes.",
    features: ["Custom pore diameters", "High durability", "Sub-nanometer precision"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    bulletColor: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "AI Analysis Software",
    subtitle: "Intelligent Signal Processing",
    description: "Cloud-native platform that uses deep learning to classify molecular signatures and identify cancer markers.",
    features: ["Real-time functionality", "Automated anomaly detection", "Clinical reporting dashboard"],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    bulletColor: "bg-emerald-500",
  },
  {
    icon: Package,
    title: "Consumables & Kits",
    subtitle: "Standardized Workflow",
    description: "Ready-to-use sample preparation kits and buffer solutions optimized for maximum signal-to-noise ratio.",
    features: ["Fast sample prep", "High stability reagents", "Lot-to-lot consistency"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    bulletColor: "bg-violet-500",
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
            <Card key={index} className="p-6 h-full flex flex-col" data-testid={`card-ecosystem-${index}`}>
              <div className={`inline-flex p-3 rounded-lg ${item.bgColor} mb-4 self-start`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm ${item.color} mb-3`}>{item.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-5 flex-grow">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.bulletColor} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
