import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  const sizes = { sm: "h-8", md: "h-10", lg: "h-14" };

  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/royal-tech-logo.svg"
        alt="Royal Tech IT"
        className={cn(
          sizes[size],
          "w-auto",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </div>
  );
}

export function LogoMark({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-9 w-9 flex-shrink-0", className)}>
      <rect x="4" y="10" width="10" height="10" rx="2.5" fill={variant === "light" ? "#0DB1F3" : "#039EEC"} />
      <rect x="17" y="10" width="10" height="10" rx="2.5" fill={variant === "light" ? "#0DB1F3" : "#039EEC"} opacity="0.7" />
      <rect x="4" y="24" width="10" height="10" rx="2.5" fill={variant === "light" ? "#0DB1F3" : "#039EEC"} opacity="0.4" />
      <path d="M36 14L44 20L36 26V14Z" fill={variant === "dark" ? "#051634" : "#FFFFFF"} />
      <rect x="34" y="26" width="12" height="3" rx="1.5" fill={variant === "dark" ? "#051634" : "#FFFFFF"} />
      <rect x="34" y="32" width="12" height="3" rx="1.5" fill={variant === "dark" ? "#051634" : "#FFFFFF"} />
      <rect x="34" y="38" width="8" height="3" rx="1.5" fill={variant === "dark" ? "#051634" : "#FFFFFF"} />
    </svg>
  );
}

export function CrownLogo({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const fill = variant === "light" ? "#0DB1F3" : "#039EEC";

  return (
    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("flex-shrink-0", className)}>
      <path d="M3 24V9L11 16L19 4L27 16L35 9V24H3Z" fill={fill} />
      <rect x="6" y="21" width="26" height="4" rx="1.5" fill={fill} opacity="0.7" />
    </svg>
  );
}
