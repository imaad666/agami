import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D1B2A] via-[#162044] to-[#0A1533] text-white">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-3">
              Let's solve
              <br />
              <span className="text-[#4169E1]">Cancer</span> together.
            </h2>
            <p className="text-white/60 text-lg mt-6 mb-10 max-w-md">
              Interested in learning more about our technology or exploring partnership opportunities? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#4169E1]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">EMAIL US</p>
                  <p className="text-white text-lg font-medium">contact@aagamiseq.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4169E1]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#4169E1]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">OUR HEADQUARTERS</p>
                  <p className="text-white text-lg font-medium">Nanopore Lab, IISc, Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-[#0D1B2A]">
            <form className="space-y-5" data-testid="form-contact">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName" className="text-sm text-muted-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1.5" data-testid="input-first-name" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm text-muted-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1.5" data-testid="input-last-name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm text-muted-foreground">Work Email</Label>
                <Input id="email" type="email" placeholder="john@hospital.org" className="mt-1.5" data-testid="input-email" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm text-muted-foreground">Subject</Label>
                <Input id="subject" placeholder="Request Product Demo" className="mt-1.5" data-testid="input-subject" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                <Textarea id="message" rows={4} className="mt-1.5 resize-none" data-testid="input-message" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#4169E1] text-white py-6 text-lg"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>
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
