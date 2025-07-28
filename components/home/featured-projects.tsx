"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "E-commerce Inteligente",
    category: "Web",
    description:
      "Plataforma de comercio electrónico con IA para recomendaciones personalizadas y análisis predictivo de ventas.",
    image: "/placeholder.svg?height=300&width=400&text=E-commerce+IA",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    metrics: { conversion: "+45%", sales: "+120%", users: "50K+" },
    link: "/proyectos/ecommerce-ia",
  },
  {
    title: "App de Gestión Empresarial",
    category: "Apps",
    description:
      "Aplicación móvil para gestión de recursos humanos con automatización de procesos y dashboard analítico.",
    image: "/placeholder.svg?height=300&width=400&text=App+Empresarial",
    tech: ["React Native", "Python", "FastAPI", "PostgreSQL"],
    metrics: { efficiency: "+60%", time: "-40%", satisfaction: "98%" },
    link: "/proyectos/app-empresarial",
  },
  {
    title: "Chatbot Inteligente",
    category: "IA",
    description:
      "Asistente virtual multiidioma para atención al cliente 24/7 con procesamiento de lenguaje natural avanzado.",
    image: "/placeholder.svg?height=300&width=400&text=Chatbot+IA",
    tech: ["OpenAI", "Node.js", "WebSocket", "Redis"],
    metrics: { response: "2s", accuracy: "95%", satisfaction: "92%" },
    link: "/proyectos/chatbot-ia",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/10 to-[#00E676]/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Casos de éxito que demuestran nuestra experiencia en transformación digital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-500 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-[#00E676] to-[#1A237E] text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E676] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-gray-700/50 rounded-lg p-2">
                        <div className="text-[#00E676] font-bold text-sm">{value}</div>
                        <div className="text-gray-400 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={project.link}>
                    <Button variant="ghost" className="w-full text-[#00E676] hover:bg-[#00E676]/10 group/btn">
                      Ver Caso de Estudio
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/proyectos">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white px-8 py-3 font-semibold group shadow-lg shadow-[#00E676]/30"
            >
              Ver Todos los Proyectos
              <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
