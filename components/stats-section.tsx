import { Award, Users, Eye, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: "1000+", label: "Clienti Soddisfatti" },
  { icon: Eye, value: "15+", label: "Anni di Esperienza" },
  { icon: Award, value: "100%", label: "Qualità Garantita" },
  { icon: Heart, value: "24/7", label: "Assistenza" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

