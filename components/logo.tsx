import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { image: "h-6", text: "text-[10px]" },
    md: { image: "h-8", text: "text-[11px]" },
    lg: { image: "h-10", text: "text-xs" },
  }

  const currentSize = sizeClasses[size]
  const logoPath = encodeURI("/images/L'Ottico di Paese_files/L'Ottico di Paese_files/logo2-png.svg")

  return (
    <div className={cn("flex flex-col items-center justify-center gap-0", className)}>
      {/* Logo Image */}
      <div className={cn("relative", currentSize.image)}>
        <Image
          src={logoPath}
          alt="L'Ottico di Paese"
          width={120}
          height={40}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Text */}
      {showText && (
        <span className={cn("font-semibold uppercase tracking-wide whitespace-nowrap", currentSize.text)}>
          L'OTTICO DI PAESE
        </span>
      )}
    </div>
  )
}

