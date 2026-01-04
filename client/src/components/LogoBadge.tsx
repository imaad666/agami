import logoImage from "@assets/Screenshot_2026-01-05_at_1.43.47_AM_1767557632163.png";

interface LogoBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "hero";
  showText?: boolean;
}

export default function LogoBadge({ size = "md", variant = "light", showText = true }: LogoBadgeProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  };

  const containerClasses = {
    light: "bg-gradient-to-r from-[#4169E1]/5 via-[#00BCD4]/5 to-[#E91E8C]/5 border border-[#4169E1]/10 shadow-[0_4px_12px_rgba(65,105,225,0.12)]",
    dark: "bg-gradient-to-r from-[#162044] via-[#1F3A8A] to-[#0D1B2A] border border-white/10 shadow-[0_10px_30px_rgba(12,25,60,0.45)]",
    hero: "bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_24px_rgba(0,188,212,0.25)]",
  };

  const textClasses = {
    light: "text-foreground",
    dark: "text-white",
    hero: "text-white",
  };

  return (
    <div 
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl ${containerClasses[variant]}`}
      style={{ filter: "drop-shadow(0 4px 12px rgba(65,105,225,0.15))" }}
    >
      <img 
        src={logoImage} 
        alt="AagamiSEQ Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
      {showText && (
        <span className={`font-semibold text-lg tracking-tight ${textClasses[variant]}`}>
          AagamiSEQ Technologies
        </span>
      )}
    </div>
  );
}
