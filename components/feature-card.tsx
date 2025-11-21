import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  imageSrc?: string
  imageAlt?: string
  imageFit?: "cover" | "contain"
  imageHeight?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  imageFit = "cover",
  imageHeight = "h-48",
}: FeatureCardProps) {
  return (
    <Card className="h-full">
      {imageSrc && (
        <div className={`relative ${imageHeight} w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-4`}>
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt || title}
            width={600}
            height={500}
            className={`w-full h-full ${
              imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
            fallbackText={title}
          />
        </div>
      )}
      <CardHeader>
        <Icon className="h-12 w-12 text-primary mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}

