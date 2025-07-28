"use client"

import { motion } from "framer-motion"
import { Calendar, Lightbulb, Users, Rocket } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "Fundación de S.I.A SOLUTIONS",
    description:
      "Nacimos con la visión de transformar negocios a través de la inteligencia artificial y el desarrollo web.",
    icon: <Lightbulb className="w-6 h-6 text-[#00E676]" />,
  },
  {
    year: "2019",
    title: "Primeros Proyectos de IA",
    description: "Lanzamos nuestros primeros chatbots y sistemas de automatización para clientes clave.",
    icon: <Rocket className="w-6 h-6 text-[#00E676]" />,
  },
  {
    year: "2021",
    title: "Expansión del Equipo",
    description: "Crecimos nuestro equipo con expertos en machine learning, desarrollo móvil y UX/UI.",
    icon: <Users className="w-6 h-6 text-[#00E676]" />,
  },
  {
    year: "2023",
    title: "Alianza Estratégica",
    description: "Establecimos alianzas con líderes tecnológicos para ofrecer soluciones más robustas.",
    icon: <Calendar className="w-6 h-6 text-[#00E676]" />,
  },
  {
    year: "Presente",
    title: "Innovación Continua",
    description: "Seguimos investigando y desarrollando nuevas tecnologías para mantenernos a la vanguardia.",
    icon: <Lightbulb className="w-6 h-6 text-[#00E676]" />,
  },
]

export function CompanyTimeline() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Nuestra Trayectoria</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un camino de innovación y crecimiento en el mundo de la tecnología
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00E676] to-[#1A237E] h-full" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center w-full mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-1/2 flex justify-center relative">
                <motion.div
                  className="bg-gray-900 border border-[#00E676]/50 rounded-full p-3 z-10 shadow-lg shadow-[#00E676]/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.icon}
                </motion.div>
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl shadow-gray-950/30"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3 className="text-xl font-bold font-heading text-white mb-1">{event.year}</h3>
                  <h4 className="text-lg font-semibold text-[#00E676] mb-2">{event.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
