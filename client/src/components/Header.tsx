import logoFull from "@assets/Screenshot_2026-01-05_at_1.53.04_AM_1767558189203.png";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Ecosystem", id: "ecosystem" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Impact", id: "impact" },
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
];

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div data-testid="logo" className="flex-shrink-0">
            <img src={logoFull} alt="AagamiSEQ Technologies" className="h-10 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <select 
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm"
              defaultValue=""
              data-testid="nav-mobile-select"
            >
              <option value="" disabled>Navigate</option>
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
