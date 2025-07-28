"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, Brain, Users, MessageSquare, Zap } from "lucide-react"

const quickAccess = [
  {
    title: "Servicios",
    description: "Descubre nuestras soluciones tecnológicas",
    icon: <Globe className="w-8 h-8" />,
    href: "/servicios",
    color: "from-[#00E676] to-[#1A237E]",
  },
  {
    title: "Proyectos",
    description: "Explora nuestros casos de éxito",
    icon: <Smartphone className="w-8 h-8" />,
    href: "/proyectos",
    color: "from-[#1A237E] to-[#00E676]",
  },
  {
    title: "IA Solutions",
    description: "Automatización inteligente",
    icon: <Brain className="w-8 h-8" />,
    href: "/servicios#ia",
    color: "from-[#00E676] to-purple-600",
  },
  {
    title: "Sobre Nosotros",
    description: "Conoce nuestro equipo",
    icon: <Users className="w-8 h-8" />,
    href: "/sobre-nosotros",
    color: "from-purple-600 to-[#1A237E]",
  },
  {
    title: "Contacto",
    description: "Hablemos de tu proyecto",
    icon: <MessageSquare className="w-8 h-8" />,
    href: "/contacto",
    color: "from-[#1A237E] to-[#00E676]",
  },
  {
    title: "Demo IA",
    description: "Prueba nuestra tecnología",
    icon: <Zap className="w-8 h-8" />,
    href: "#demo",
    color: "from-[#00E676] to-yellow-500",
  },
]

export function QuickAccessGrid() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Acceso Rápido</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Navega directamente a lo que necesitas</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Link href={item.href}>
                <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00E676] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
