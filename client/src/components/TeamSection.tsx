import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import manojVarmaImg from "@assets/Manoj_varma_1767878481292.png";
import divyaYadavImg from "@assets/dr_divya_1767878460060.png";
import muddukrishnaImg from "@assets/muddu_bhaiya_1767878464750.jpg";
import anumolImg from "@assets/WhatsApp_Image_2026-01-10_at_11.19.59_AM_1768024244618.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Prof. Manoj Varma",
    role: "Founder | R&D Advisor",
    title: "Professor, CeNSE, IISc",
    initials: "MV",
    image: manojVarmaImg,
    bio: "Leading research and development initiatives, bringing decades of expertise in nanoscale engineering and semiconductor physics to drive innovation at AAGAMISEQ.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Dr. Divya Mohan Yadav",
    role: "Founder | CEO",
    title: "PhD, CeNSE, IISc",
    initials: "DY",
    image: divyaYadavImg,
    bio: "Spearheading the company's vision and strategic direction, combining deep scientific expertise with entrepreneurial leadership to revolutionize cancer diagnostics.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    name: "Muddukrishna P",
    role: "Founder | CPO",
    title: "Senior Project Associate, CeNSE, IISc",
    initials: "MP",
    image: muddukrishnaImg,
    bio: "Driving product development and engineering excellence, translating cutting-edge research into practical, scalable diagnostic solutions.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    name: "Anumol Dominic",
    role: "Founder | Lead Fabrication Engg",
    title: "",
    initials: "AD",
    image: anumolImg,
    bio: "Develops and optimizes nanopore chips, ensuring reliable fabrication, reproducibility, and production.",
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">The Minds Behind the Innovation</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our interdisciplinary team combines expertise in quantum physics, semiconductor engineering, and clinical oncology to redefine the future of diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-6 text-center h-full flex flex-col" data-testid={`card-team-member-${member.id}`}>
              <div className="flex justify-center mb-5">
                <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  ) : null}
                  <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white text-xl font-bold`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
              {member.title && <p className="text-muted-foreground text-xs mb-4">{member.title}</p>}
              {!member.title && <div className="mb-4" />}
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
