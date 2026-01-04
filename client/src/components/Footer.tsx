import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import logoFull from "@assets/Screenshot_2026-01-05_at_1.53.04_AM_1767558189203.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D1B2A] via-[#162044] to-[#0A1533] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Reach Out</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Interested in learning more about our technology or exploring partnership opportunities? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-[#4169E1] to-[#00BCD4] text-white border-0 shadow-lg"
              data-testid="button-contact-us"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
              data-testid="button-visit-lab"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Visit Our Lab
            </Button>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logoFull} alt="AagamiSEQ Technologies" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/60 text-sm mb-4 max-w-md mx-auto">
            Pioneering early cancer detection through advanced nanopore DNA sequencing technology.
          </p>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AagamiSEQ Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
