export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-background"
            >
              <path
                d="M20 4L36 32H4L20 4Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
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
