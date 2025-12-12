import { Droplet, Dna, Activity, Cpu } from "lucide-react";

const steps = [
  {
    icon: Droplet,
    title: "1. Simple Blood Draw",
    description:
      "A standard blood sample is collected from the patient during a routine visit.",
  },
  {
    icon: Dna,
    title: "2. DNA Threads Through Nanopore",
    description:
      "Circulating tumor DNA (ctDNA) from the sample is isolated and passed through our solid-state nanopore chip.",
  },
  {
    icon: Activity,
    title: "3. Signal Acquisition",
    description:
      'Each molecule creates a unique electrical "fingerprint" which is read in real-time by our proprietary device.',
  },
  {
    icon: Cpu,
    title: "4. AI-Powered Diagnosis",
    description:
      "Our software analyzes millions of molecular signals to generate a clear, actionable report for clinicians.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold">The AAGAMISEQ Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent bg-background mb-6">
                <step.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
