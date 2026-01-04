import logoImage from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoImage} alt="AagamiSEQ Logo" className="h-10 w-auto brightness-0 invert" />
            <span className="font-semibold text-lg">AagamiSEQ Technologies</span>
          </div>
          <p className="text-background/70 text-sm mb-6 max-w-md mx-auto">
            Pioneering early cancer detection through advanced nanopore DNA sequencing
            technology.
          </p>
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} AagamiSEQ Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
