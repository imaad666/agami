import logoImage from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-3" data-testid="logo">
            <img src={logoImage} alt="AagamiSEQ Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg tracking-tight">AagamiSEQ Technologies</span>
          </div>
        </div>
      </div>
    </header>
  );
}
