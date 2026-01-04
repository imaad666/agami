import LogoBadge from "./LogoBadge";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          <div data-testid="logo">
            <LogoBadge size="md" variant="light" />
          </div>
        </div>
      </div>
    </header>
  );
}
