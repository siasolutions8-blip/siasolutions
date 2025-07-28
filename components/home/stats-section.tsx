"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 200, suffix: "+", label: "Proyectos Completados" },
  { number: 98, suffix: "%", label: "Satisfacción del Cliente" },
  { number: 50, suffix: "+", label: "Empresas Confiaron en Nosotros" },
  { number: 5, suffix: "+", label: "Años de Experiencia" },
]

function AnimatedCounter({ number, suffix, duration = 2 }: { number: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * number))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, number, duration])

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-[#00E676] to-[#1A237E] bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-[#1A237E]/20 to-gray-900 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Resultados que Hablan</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Números que demuestran nuestro compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group-hover:border-[#00E676]/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00E676]/20">
                <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                <p className="text-gray-300 mt-2 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
