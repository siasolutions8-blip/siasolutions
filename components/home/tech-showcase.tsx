"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "React",
    logo: "/placeholder.svg?height=60&width=60&text=React",
    category: "Frontend",
    description: "Biblioteca para interfaces de usuario",
  },
  {
    name: "Python",
    logo: "/placeholder.svg?height=60&width=60&text=Python",
    category: "Backend",
    description: "Lenguaje de programación versátil",
  },
  {
    name: "TensorFlow",
    logo: "/placeholder.svg?height=60&width=60&text=TF",
    category: "IA/ML",
    description: "Framework de machine learning",
  },
  {
    name: "Node.js",
    logo: "/placeholder.svg?height=60&width=60&text=Node",
    category: "Backend",
    description: "Runtime de JavaScript",
  },
  {
    name: "Next.js",
    logo: "/placeholder.svg?height=60&width=60&text=Next",
    category: "Frontend",
    description: "Framework de React",
  },
  {
    name: "OpenAI",
    logo: "/placeholder.svg?height=60&width=60&text=AI",
    category: "IA/ML",
    description: "Inteligencia artificial avanzada",
  },
  {
    name: "MongoDB",
    logo: "/placeholder.svg?height=60&width=60&text=Mongo",
    category: "Database",
    description: "Base de datos NoSQL",
  },
  {
    name: "AWS",
    logo: "/placeholder.svg?height=60&width=60&text=AWS",
    category: "Cloud",
    description: "Servicios en la nube",
  },
]

const categories = ["Todos", "Frontend", "Backend", "IA/ML", "Database", "Cloud"]

export function TechShowcase() {
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Tecnologías que Dominamos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stack tecnológico de vanguardia para crear soluciones robustas y escalables
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group"
            >
              <Card className="bg-gray-800/30 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-[#00E676]/20 h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-[#00E676]/20 transition-colors">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#00E676] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{tech.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            Nuestro equipo se mantiene actualizado con las últimas tecnologías y mejores prácticas de la industria para
            garantizar que tu proyecto utilice las herramientas más efectivas y modernas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
