import logoFull from "@assets/Screenshot_2026-01-05_at_1.53.04_AM_1767558189203.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D1B2A] via-[#162044] to-[#0A1533] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logoFull} alt="AagamiSEQ Technologies" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Pioneering early cancer detection through advanced nanopore DNA sequencing
            technology.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} AagamiSEQ Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
