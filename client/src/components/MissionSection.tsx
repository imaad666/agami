import { Card } from "@/components/ui/card";

const stats = [
  {
    value: ">50%",
    title: "The Challenge of Late Detection",
    description:
      "Over half of cancers are found in late stages, where survival rates plummet. We're shifting the paradigm to proactive, early screening.",
  },
  {
    value: "$6K+",
    title: "The Burden of Invasive Procedures",
    description:
      "Painful, costly tissue biopsies provide only a single snapshot. We provide a non-invasive, dynamic view of cancer through a simple blood draw.",
  },
  {
    value: "<50%",
    title: "The Limits of Current Tests",
    description:
      "Existing liquid biopsies miss too many early-stage cancers. Our technology offers a step-change in sensitivity to find cancer sooner.",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            To build a future where cancer is no longer a death sentence, but a manageable
            condition found early and treated with precision. We are dedicated to making
            molecular diagnostics accessible, accurate, and actionable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold mb-3">{stat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
