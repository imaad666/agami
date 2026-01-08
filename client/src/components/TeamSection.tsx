import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: 1,
    name: "Prof. Manoj Varma",
    role: "Founder | R&D Advisor",
    title: "Professor, CeNSE, IISc",
    initials: "MV",
    bio: "Leading research and development initiatives, bringing decades of expertise in nanoscale engineering and semiconductor physics to drive innovation at AAGAMISEQ.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Dr. Divya Mohan Yadav",
    role: "Founder | CEO",
    title: "PhD, CeNSE, IISc",
    initials: "DY",
    bio: "Spearheading the company's vision and strategic direction, combining deep scientific expertise with entrepreneurial leadership to revolutionize cancer diagnostics.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    name: "Muddukrishna P",
    role: "Founder | CPO",
    title: "Senior Project Associate, CeNSE, IISc",
    initials: "MP",
    bio: "Driving product development and engineering excellence, translating cutting-edge research into practical, scalable diagnostic solutions.",
    gradient: "from-purple-500 to-pink-600",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-8 text-center h-full flex flex-col" data-testid={`card-team-member-${member.id}`}>
              <div className="flex justify-center mb-6">
                <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
                  <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white text-2xl font-bold`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-5">{member.title}</p>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
