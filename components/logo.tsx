import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { icon: "h-8 w-8", text: "text-xs" },
    md: { icon: "h-12 w-12", text: "text-sm" },
    lg: { icon: "h-16 w-16", text: "text-base" },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Three glasses icons */}
      <div className="flex items-center -space-x-1">
        {/* Round glasses */}
        <svg
          viewBox="0 0 50 30"
          className={currentSize.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="15" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="25" cy="15" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="18" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Square glasses */}
        <svg
          viewBox="0 0 50 30"
          className={currentSize.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="10" width="14" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="20" y="10" width="14" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="18" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Hexagonal glasses */}
        <svg
          viewBox="0 0 50 30"
          className={currentSize.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="10,8 18,8 22,12 18,16 10,16 6,12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <polygon
            points="20,8 28,8 32,12 28,16 20,16 16,12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="18" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <span className={cn("font-bold uppercase tracking-wide whitespace-nowrap", currentSize.text)}>
          L'OTTICO DI PAESE
        </span>
      )}
    </div>
  )
}

