import { Card } from "@/components/ui/card";
import { Building2, Microscope, Hospital } from "lucide-react";

const impactItems = [
  {
    icon: Building2,
    label: "CLINICAL CLINICS",
    title: "Point-of-Care Diagnosis",
    description: "Our compact readout device allows small clinics to perform liquid biopsy tests without sending samples to centralized labs, reducing wait times from weeks to hours.",
    stat: "90% Faster Results",
    statColor: "text-rose-500",
  },
  {
    icon: Microscope,
    label: "RESEARCH LABS",
    title: "Single Molecule Precision",
    description: "Empowering biophysicists and oncologists with the tools to study molecular dynamics, epigenetics, and protein folding in real-time at unprecedented resolution.",
    stat: "Sub-nm Resolution",
    statColor: "text-blue-500",
  },
  {
    icon: Hospital,
    label: "HOSPITALS",
    title: "Large-Scale Screening",
    description: "Standardized chips and AI software enable high-throughput screening of entire populations, making early detection a routine part of annual health checkups.",
    stat: "Cost Reduction: 60%",
    statColor: "text-emerald-500",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Driving Global Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are bridging the gap between cutting-edge biophysics and everyday medical practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactItems.map((item, index) => (
            <Card key={index} className="p-6 text-center" data-testid={`card-impact-${index}`}>
              <div className="inline-flex p-3 rounded-lg bg-muted mb-4">
                <item.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground tracking-wider mb-2">{item.label}</p>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
              <p className={`text-sm font-semibold ${item.statColor}`}>{item.stat}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
