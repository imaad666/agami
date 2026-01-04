import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import logoFull from "@assets/Screenshot_2026-01-05_at_1.53.04_AM_1767558189203.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D1B2A] via-[#162044] to-[#0A1533] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
              Let's solve
              <br />
              <span className="text-[#4169E1]">Cancer</span> together.
            </h2>
            <p className="text-white/60 mt-4 mb-8 max-w-md">
              Interested in implementing our technology or exploring collaboration opportunities? Our team of biophysicists and clinical experts is ready to assist.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#4169E1]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">EMAIL US</p>
                  <p className="text-white font-medium">contact@aagamiseq.io</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#4169E1]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">OUR HEADQUARTERS</p>
                  <p className="text-white font-medium">Nanopore Lab, IISc, Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-[#0D1B2A]">
            <form className="space-y-4" data-testid="form-contact">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm text-muted-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" data-testid="input-first-name" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm text-muted-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1" data-testid="input-last-name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm text-muted-foreground">Work Email</Label>
                <Input id="email" type="email" placeholder="john@hospital.org" className="mt-1" data-testid="input-email" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm text-muted-foreground">Subject</Label>
                <Input id="subject" placeholder="Request Product Demo" className="mt-1" data-testid="input-subject" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                <Textarea id="message" rows={4} className="mt-1 resize-none" data-testid="input-message" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#4169E1] text-white"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>
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
