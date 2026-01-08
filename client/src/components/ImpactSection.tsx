import { Badge } from "@/components/ui/badge";
import { Building2, Microscope, Hospital } from "lucide-react";

const impactItems = [
  {
    icon: Building2,
    iconBg: "bg-rose-100 dark:bg-rose-900/30",
    iconColor: "text-rose-500",
    label: "CLINICAL CLINICS",
    labelColor: "text-rose-500",
    title: "Point-of-Care Diagnosis",
    description: "Our compact readout device allows small clinics to perform liquid biopsy tests without sending samples to centralized labs, reducing wait times from weeks to hours.",
    stat: "90% Faster Results",
    statBg: "bg-rose-100 dark:bg-rose-900/30",
    statColor: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Microscope,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-500",
    label: "RESEARCH LABS",
    labelColor: "text-blue-500",
    title: "Single Molecule Precision",
    description: "Empowering biophysicists and oncologists with the tools to study molecular dynamics, epigenetics, and protein folding in real-time at unprecedented resolution.",
    stat: "Sub-nm Resolution",
    statBg: "bg-blue-100 dark:bg-blue-900/30",
    statColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Hospital,
    iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-500",
    label: "HOSPITALS",
    labelColor: "text-cyan-500",
    title: "Large-Scale Screening",
    description: "Standardized chips and AI software enable high-throughput screening of entire populations, making early detection a routine part of annual health checkups.",
    stat: "Cost Reduction: 60%",
    statBg: "bg-cyan-100 dark:bg-cyan-900/30",
    statColor: "text-cyan-600 dark:text-cyan-400",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Driving Global Impact</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are bridging the gap between cutting-edge biophysics and everyday medical practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {impactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full" data-testid={`card-impact-${index}`}>
              <div className={`inline-flex p-5 rounded-xl ${item.iconBg} mb-5`}>
                <item.icon className={`w-10 h-10 ${item.iconColor}`} />
              </div>
              <p className={`text-xs font-semibold tracking-wider mb-3 ${item.labelColor}`}>{item.label}</p>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-base mb-8 leading-relaxed flex-grow">{item.description}</p>
              <Badge variant="secondary" className={`${item.statBg} ${item.statColor} border-0 px-5 py-2.5 text-sm font-semibold`}>
                {item.stat}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
