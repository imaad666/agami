import { Check } from "lucide-react";

const features = [
  {
    title: "Reading DNA Directly",
    description:
      "Unlike other tests that copy DNA over and over (which can hide important details), we read each piece of DNA in its natural state. This gives us a clearer, more accurate picture.",
  },
  {
    title: "A Simple Electrical Signal",
    description:
      'Think of it like a barcode scanner for DNA. Each piece creates a unique electrical "blip" as it passes through a tiny hole\u2014a nanopore. It\'s fast, simple, and gives us rich information.',
  },
  {
    title: "A More Complete Picture",
    description:
      'Our technology can see subtle changes on the DNA that other tests might miss. These "decorations" can be the earliest signs of cancer, allowing us to find it sooner.',
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-muted/50 rounded-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm text-muted-foreground mb-2">
                  DNA piece from blood
                </div>
                <svg
                  viewBox="0 0 400 120"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 60 Q50 30, 100 60 T200 60 T300 60 T400 60"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M0 60 Q50 90, 100 60 T200 60 T300 60 T400 60"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                  <rect
                    x="150"
                    y="40"
                    width="100"
                    height="40"
                    rx="4"
                    fill="hsl(var(--primary))"
                    opacity="0.2"
                  />
                  <rect
                    x="155"
                    y="45"
                    width="90"
                    height="30"
                    rx="2"
                    fill="hsl(var(--primary))"
                    opacity="0.3"
                  />
                  <text
                    x="200"
                    y="65"
                    textAnchor="middle"
                    fontSize="10"
                    fill="hsl(var(--foreground))"
                  >
                    Nanopore
                  </text>
                </svg>
                <div className="mt-4 flex justify-center">
                  <svg
                    viewBox="0 0 200 60"
                    className="w-48 h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 30 L20 30 L25 10 L35 50 L45 20 L55 40 L65 25 L75 35 L85 28 L95 32 L105 30 L200 30"
                      stroke="hsl(var(--accent))"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="text-center text-sm text-accent mt-2">
                  Unique "Fingerprint"
                </div>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  Our Nanopore Chip
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Our Technology: Seeing What Others Miss
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}:</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
