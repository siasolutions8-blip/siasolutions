"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  const infoItems = [
    {
      icon: <Mail className="w-6 h-6 text-[#00E676]" />,
      title: "Email",
      value: "contacto@siasolutions.com",
      link: "mailto:contacto@siasolutions.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#00E676]" />,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00E676]" />,
      title: "Dirección",
      value: "123 Tech Avenue, Suite 400, Ciudad Innovación, TX 78701",
      link: "https://maps.app.goo.gl/your-address-here", // Placeholder
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00E676]" />,
      title: "Horario de Atención",
      value: "Lunes - Viernes: 9:00 AM - 6:00 PM (GMT-5)",
    },
  ]

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Información de Contacto</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. No dudes en contactarnos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group"
            >
              <Card className="h-full bg-gray-900/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gray-700/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00E676]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00E676] transition-colors">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:underline text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
