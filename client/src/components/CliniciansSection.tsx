import { Stethoscope } from "lucide-react";

export default function CliniciansSection() {
  return (
    <section id="clinicians" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">For Clinicians</h2>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Our solid-state nanopore platform offers a step-change in sensitivity and data
          richness for early cancer detection. By analyzing native ctDNA molecules without
          amplification, we provide a high-resolution view of both genetic and epigenetic
          markers, enabling you to make more informed decisions, earlier.
        </p>
      </div>
    </section>
  );
}
