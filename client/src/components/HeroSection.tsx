import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M20 4L36 32H4L20 4Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Clarity in the Fight{" "}
          <br className="hidden sm:block" />
          Against <span className="text-primary">Cancer</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          We're making early cancer detection possible with a simple, powerful test. Our
          mission is to empower you and your doctor with the information to act sooner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8"
            data-testid="button-patients-families"
          >
            For Patients & Families
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            data-testid="button-medical-professionals"
          >
            For Medical Professionals
          </Button>
        </div>
      </div>
    </section>
  );
}
