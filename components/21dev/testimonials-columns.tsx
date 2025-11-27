"use client"

import { Star } from "lucide-react"

interface Testimonial {
  name: string
  rating: number
  text: string
  location?: string
}

interface TestimonialsColumnsProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export function TestimonialsColumns({ 
  testimonials, 
  title = "What Our Customers Say",
  subtitle 
}: TestimonialsColumnsProps) {
  return (
    <section className="py-28 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          {title && (
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="flex-1 mb-6">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground mb-1">
                  {testimonial.name}
                </p>
                {testimonial.location && (
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


