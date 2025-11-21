import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">L'OTTICO DI PAESE</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Soluzioni visive personalizzate con tecnologia all'avanguardia
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>MARTEDI' - SABATO</span>
              </div>
              <div className="flex items-center space-x-2 pl-6">
                <span>9.00-12:30 / 15:30-19:30</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4">DOVE SIAMO</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Via Guglielmo Marconi, 7<br />31038 Paese TV</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">CONTATTI</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0422450568" className="hover:underline">
                  0422 450568
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@lotticodipaese.com" className="hover:underline">
                  info@lotticodipaese.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>L'Ottico di Paese P.IVA/C.F.: 05244170261</p>
            <div className="mt-4 md:mt-0">
              <p className="text-primary-foreground/80">SEGUICI SUI SOCIAL</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

