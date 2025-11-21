import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  location?: string
}

export function TestimonialCard({
  name,
  rating,
  text,
  location,
}: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{text}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          {location && <p className="text-sm text-muted-foreground">{location}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

