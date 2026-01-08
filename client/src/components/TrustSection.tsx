import logoIcon from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";
import ccampLogo from "@assets/DS_1767879001250.jpg";
import iiscLogo from "@assets/next_iisc_1767879006237.png";
import meityLogo from "@assets/MeitYStartupHub-Logo-FINAL_5_1_1767879012603.png";
import sidLogo from "@assets/iisc_sid_1767879536206.png";
import incenseLogo from "@assets/incense_1767879539524.jpeg";

const backers = [
  {
    name: "IISc Bangalore",
    description: "Premier Research Institute",
    logo: iiscLogo,
    hasLogo: true,
    invertInLight: true,
  },
  {
    name: "C-CAMP",
    description: "Life Sciences Innovation Hub",
    logo: ccampLogo,
    hasLogo: true,
  },
  {
    name: "MeitY Startup Hub",
    description: "Government Innovation Support",
    logo: meityLogo,
    hasLogo: true,
  },
  {
    name: "SID-IISc",
    description: "Technology Transfer & Incubation",
    logo: sidLogo,
    hasLogo: true,
  },
  {
    name: "INCENSE",
    description: "Deep Tech Incubator",
    logo: incenseLogo,
    hasLogo: true,
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <img src={logoIcon} alt="AagamiSEQ" className="h-14 w-auto mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Network of Trust</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Backed by leading research institutions and innovation hubs
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
          {backers.map((backer, index) => (
            <div key={index} className="flex flex-col items-center gap-3 w-40" data-testid={`backer-${index}`}>
              <div className="w-24 h-24 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden p-2">
                <img 
                  src={backer.logo} 
                  alt={backer.name} 
                  className={`w-full h-full object-contain ${backer.invertInLight ? 'dark:invert' : ''}`}
                />
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
