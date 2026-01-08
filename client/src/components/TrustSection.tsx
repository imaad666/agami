import logoIcon from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";

const backers = [
  {
    name: "IISc Bangalore",
    shortName: "IISc",
    subtitle: "Indian Institute of Science",
    description: "Premier Research Institute",
    color: "text-[#4169E1]",
  },
  {
    name: "C-CAMP",
    shortName: "C-CAMP",
    subtitle: "Centre for Cellular & Molecular Platforms",
    description: "Life Sciences Innovation Hub",
    color: "text-[#00BCD4]",
  },
  {
    name: "SID-IISc",
    shortName: "SID",
    subtitle: "Society for Innovation & Development",
    description: "Technology Transfer & Incubation",
    color: "text-[#9333EA]",
  },
  {
    name: "MeitY Startup Hub",
    shortName: "MeitY",
    subtitle: "Ministry of Electronics & IT",
    description: "Government Innovation Support",
    color: "text-[#E91E8C]",
  },
  {
    name: "INCENSE",
    shortName: "INCENSE",
    subtitle: "IISc Incubation Centre",
    description: "Deep Tech Incubator",
    color: "text-[#10B981]",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <div className="inline-block bg-white p-3 rounded-lg mb-6">
            <img src={logoIcon} alt="AagamiSEQ" className="h-14 w-auto" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Network of Trust</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Backed by leading research institutions and innovation hubs
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
          {backers.map((backer, index) => (
            <div key={index} className="flex flex-col items-center gap-3 w-36" data-testid={`backer-${index}`}>
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                <div className="text-center px-1">
                  <div className={`text-lg font-bold ${backer.color}`}>{backer.shortName}</div>
                </div>
              </div>
              <span className="text-sm font-medium text-foreground text-center">{backer.name}</span>
              <span className="text-xs text-muted-foreground text-center">{backer.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
