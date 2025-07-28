"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00E676]" />,
    title: "Innovación Constante",
    description: "Nos mantenemos a la vanguardia de la tecnología para ofrecer soluciones creativas y eficientes.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00E676]" />,
    title: "Colaboración y Transparencia",
    description:
      "Trabajamos de la mano con nuestros clientes, fomentando la comunicación abierta y la confianza mutua.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#00E676]" />,
    title: "Excelencia y Calidad",
    description: "Nos comprometemos a entregar resultados de la más alta calidad, superando las expectativas.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#00E676]" />,
    title: "Integridad y Ética",
    description: "Operamos con los más altos estándares de honestidad y responsabilidad en cada interacción.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#1A237E]/5 to-gray-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Nuestros Valores Fundamentales
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Principios que guían cada decisión y acción en S.I.A SOLUTIONS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-[#00E676]/20 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      {value.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#00E676] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
