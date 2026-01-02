export default function MissionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Mission</h2>
          <p className="text-xl font-bold text-foreground mb-6">
            To democratize genetic insights for a healthier world.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The future of medicine is personal, and at its core lies rapid, accurate, and 
            accessible genetic information. However, current sequencing technologies face 
            limitations in speed, cost, and complexity—creating a bottleneck for widespread 
            clinical adoption. AAGAMISEQ was founded to break this barrier. Our mission is 
            to democratize genetic diagnostics by pioneering a fully integrated solid-state 
            nanopore sequencing platform, delivering actionable insights from sample to 
            result with unprecedented efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
