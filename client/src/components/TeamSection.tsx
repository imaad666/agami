import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Name TBD",
    role: "Role TBD",
    bio: "Bio placeholder text. This section will contain a brief description of the team member's background, expertise, and contributions to AAGAMISEQ.",
  },
  {
    id: 2,
    name: "Name TBD",
    role: "Role TBD",
    bio: "Bio placeholder text. This section will contain a brief description of the team member's background, expertise, and contributions to AAGAMISEQ.",
  },
  {
    id: 3,
    name: "Name TBD",
    role: "Role TBD",
    bio: "Bio placeholder text. This section will contain a brief description of the team member's background, expertise, and contributions to AAGAMISEQ.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">The Minds Behind the Innovation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our interdisciplinary team combines expertise in quantum physics, semiconductor engineering, and clinical oncology to redefine the future of diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-6 text-center" data-testid={`card-team-member-${member.id}`}>
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900 dark:to-rose-800">
                    <User className="w-10 h-10 text-rose-400" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
