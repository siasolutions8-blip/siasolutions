"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Marvin Negowai",
    role: "CEO & Fundador, Lead Developer",
    description: "Líder visionario en IA y desarrollo, impulsando la innovación y el crecimiento de S.I.A SOLUTIONS.",
    avatar: "/placeholder.svg?height=200&width=200&text=Marvin+Negowai",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marc Cañellas",
    role: "CTO, Especialista",
    description: "Experto en arquitectura de software y tecnologías de vanguardia, clave en la estrategia tecnológica.",
    avatar: "/placeholder.svg?height=200&width=200&text=Marc+Cañellas",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Kanchan",
    role: "Especialista Propulsor de la Empresa",
    description: "Impulsa la eficiencia y la excelencia operativa, optimizando procesos y resultados en cada proyecto.",
    avatar: "/placeholder.svg?height=200&width=200&text=Kanchan",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Conoce a Nuestro Equipo</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertos apasionados por la tecnología y dedicados a tu éxito
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gray-900/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20 text-center overflow-hidden">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#00E676] transition-all duration-300">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                      <div className="flex space-x-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#00E676] transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#00E676] transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-[#00E676] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
