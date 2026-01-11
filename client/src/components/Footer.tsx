import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D1B2A] via-[#162044] to-[#0A1533] text-white">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3">
            Let's solve
            <br />
            <span className="text-[#4169E1]">Cancer</span> together.
          </h2>
          <p className="text-white/60 text-lg mt-6 mb-10 max-w-lg mx-auto">
            Interested in learning more about our technology or exploring partnership opportunities? We'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#4169E1]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">EMAIL US</p>
                <p className="text-white text-lg font-medium">contact@aagmiseq.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#4169E1]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">OUR HEADQUARTERS</p>
                <p className="text-white text-lg font-medium">INCeNSE Office, CeNSE, IISc, Bengaluru, Karnataka 560012</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-[#1e3a5f]">AAGAMI</span><span className="text-[#C71585]">SEQ</span>
          </h3>
          <p className="text-white/60 text-base mb-5 max-w-lg mx-auto">
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
