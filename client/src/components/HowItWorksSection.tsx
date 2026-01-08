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
              <svg viewBox="0 0 200 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="120" width="80" height="60" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                
                <rect x="90" y="120" width="20" height="60" fill="hsl(var(--background))" />
                <line x1="90" y1="120" x2="90" y2="180" stroke="#4169E1" strokeWidth="2" />
                <line x1="110" y1="120" x2="110" y2="180" stroke="#4169E1" strokeWidth="2" />
                
                <circle cx="100" cy="50" r="12" fill="#4169E1">
                  <animate 
                    attributeName="cy" 
                    values="50;150;250" 
                    dur="2s" 
                    repeatCount="indefinite"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                  />
                  <animate 
                    attributeName="r" 
                    values="12;8;12" 
                    dur="2s" 
                    repeatCount="indefinite"
                    keyTimes="0;0.5;1"
                  />
                </circle>
                
                <text x="100" y="290" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12" fontWeight="500">
                  NANOPORE TRANSLOCATION
                </text>
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
