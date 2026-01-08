const steps = [
  {
    number: "1",
    title: "Molecular Translocation",
    description: "Bio-molecules (DNA, RNA, Proteins) are driven by an electric field through a nanometer-sized aperture.",
    color: "bg-blue-500",
  },
  {
    number: "2",
    title: "Ionic Current Blockade",
    description: "As molecules pass through, they partially block the flow of ions, creating a unique current signature.",
    color: "bg-cyan-500",
  },
  {
    number: "3",
    title: "Signature Analysis",
    description: "The magnitude and duration of current changes reveal the molecule's physical and chemical properties.",
    color: "bg-violet-500",
  },
  {
    number: "4",
    title: "Clinical Diagnosis",
    description: "Our AI identifies 'cancerous' patterns early, allowing for intervention before symptoms even appear.",
    color: "bg-rose-500",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
              How Nanopore Sensing Works
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Solid-state nanopores act as high-resolution "smart" filters. Unlike traditional chemical assays, our technology measures individual molecules physically, providing unparalleled sensitivity for detecting trace amounts of cancer biomarkers in blood or urine.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-background rounded-2xl border p-10 w-full max-w-md shadow-sm">
              <svg viewBox="0 0 280 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="140" cy="40" r="24" fill="#4169E1" opacity="0.2">
                  <animate attributeName="cy" values="40;80;40" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="140" cy="40" r="14" fill="#4169E1" opacity="0.5">
                  <animate attributeName="cy" values="40;80;40" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="140" cy="40" r="6" fill="#4169E1">
                  <animate attributeName="cy" values="40;80;40" dur="2.5s" repeatCount="indefinite" />
                </circle>
                
                <line x1="140" y1="100" x2="140" y2="130" stroke="#4169E1" strokeWidth="3" strokeDasharray="6,4">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="0.4s" repeatCount="indefinite" />
                </line>
                
                <rect x="40" y="130" width="200" height="40" rx="6" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                <rect x="120" y="130" width="40" height="40" fill="hsl(var(--background))" stroke="#4169E1" strokeWidth="2" />
                <circle cx="140" cy="150" r="10" fill="#4169E1" opacity="0.3" />
                <circle cx="140" cy="150" r="5" fill="#4169E1" />
                
                <circle cx="70" cy="150" r="4" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <circle cx="95" cy="150" r="4" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <circle cx="185" cy="150" r="4" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <circle cx="210" cy="150" r="4" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                
                <line x1="140" y1="170" x2="140" y2="200" stroke="#00BCD4" strokeWidth="3" strokeDasharray="6,4">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="0.4s" repeatCount="indefinite" />
                </line>
                
                <circle cx="140" cy="240" r="20" fill="#00BCD4" opacity="0.2">
                  <animate attributeName="cy" values="220;260;220" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="140" cy="240" r="12" fill="#00BCD4" opacity="0.4">
                  <animate attributeName="cy" values="220;260;220" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="140" cy="240" r="5" fill="#00BCD4">
                  <animate attributeName="cy" values="220;260;220" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
              
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">RESOLUTION</p>
                <p className="text-3xl font-bold text-foreground">0.1</p>
                <p className="text-lg font-semibold text-[#4169E1]">Nanometers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
