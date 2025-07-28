"use client"

import { motion } from "framer-motion"
import { CheckCircle, Lightbulb, Code, Rocket, RefreshCw } from "lucide-react"

const timelineSteps = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00E676]" />,
    title: "1. Descubrimiento y Estrategia",
    description:
      "Comprendemos tus necesidades, objetivos y desafíos para definir la estrategia tecnológica más adecuada.",
  },
  {
    icon: <Code className="w-8 h-8 text-[#00E676]" />,
    title: "2. Diseño y Desarrollo",
    description:
      "Creamos prototipos, diseñamos la arquitectura y desarrollamos la solución con metodologías ágiles y las últimas tecnologías.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#00E676]" />,
    title: "3. Pruebas y Calidad",
    description:
      "Realizamos pruebas exhaustivas para asegurar la funcionalidad, seguridad y rendimiento óptimo de la solución.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#00E676]" />,
    title: "4. Lanzamiento y Despliegue",
    description: "Implementamos la solución en tu entorno, asegurando una transición fluida y sin interrupciones.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-[#00E676]" />,
    title: "5. Soporte y Optimización",
    description:
      "Ofrecemos soporte continuo, mantenimiento y optimizaciones para garantizar el éxito a largo plazo de tu inversión.",
  },
]

export function ProcessTimeline() {
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Nuestro Proceso de Trabajo</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un enfoque estructurado para garantizar el éxito de cada proyecto
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00E676] to-[#1A237E] h-full hidden md:block" />

          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center w-full mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                <motion.div
                  className="bg-gray-900 border border-[#00E676]/50 rounded-full p-4 z-10 shadow-lg shadow-[#00E676]/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
              </div>

              <div className="md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl shadow-gray-950/30"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
