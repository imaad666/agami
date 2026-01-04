export default function TrustSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Network of Trust</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Backed by leading research institutions and innovation hubs
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <div className="flex flex-col items-center gap-3" data-testid="backer-iisc">
            <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4169E1]">IISc</div>
                <div className="text-[8px] text-muted-foreground leading-tight">Indian Institute<br/>of Science</div>
              </div>
            </div>
            <span className="text-sm font-medium text-foreground">IISc Bangalore</span>
            <span className="text-xs text-muted-foreground">Premier Research Institute</span>
          </div>

          <div className="flex flex-col items-center gap-3" data-testid="backer-ccamp">
            <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-[#00BCD4]">C-CAMP</div>
                <div className="text-[7px] text-muted-foreground leading-tight px-1">Centre for Cellular<br/>& Molecular Platforms</div>
              </div>
            </div>
            <span className="text-sm font-medium text-foreground">C-CAMP</span>
            <span className="text-xs text-muted-foreground">Life Sciences Innovation Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
