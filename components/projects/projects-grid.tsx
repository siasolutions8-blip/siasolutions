"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const allProjects = [
  {
    title: "E-commerce Inteligente",
    description:
      "Plataforma de comercio electrónico con IA para recomendaciones personalizadas y análisis predictivo de ventas.",
    image: "/placeholder.svg?height=300&width=500&text=E-commerce+IA",
    category: "Web",
    technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
    link: "/proyectos/ecommerce-ia",
  },
  {
    title: "App Gestión Empresarial",
    description:
      "Aplicación móvil para gestión de recursos humanos con automatización de procesos y dashboard analítico.",
    image: "/placeholder.svg?height=300&width=500&text=App+Empresarial",
    category: "Apps",
    technologies: ["React Native", "Python", "PostgreSQL", "AWS"],
    link: "/proyectos/app-empresarial",
  },
  {
    title: "Chatbot Multicanal",
    description: "Asistente virtual inteligente para atención al cliente 24/7 con procesamiento de lenguaje natural.",
    image: "/placeholder.svg?height=300&width=500&text=Chatbot+IA",
    category: "IA",
    technologies: ["OpenAI", "Node.js", "WebSocket", "Redis"],
    link: "/proyectos/chatbot-ia",
  },
  {
    title: "Plataforma de Consultoría",
    description: "Portal web para agendar y gestionar sesiones de consultoría tecnológica con expertos.",
    image: "/placeholder.svg?height=300&width=500&text=Consultoria+Web",
    category: "Web",
    technologies: ["Next.js", "Stripe", "Firebase"],
    link: "/proyectos/consultoria-web",
  },
  {
    title: "Sistema de Análisis de Datos",
    description: "Dashboard interactivo para visualizar y analizar grandes volúmenes de datos empresariales.",
    image: "/placeholder.svg?height=300&width=500&text=Analisis+Datos",
    category: "IA",
    technologies: ["Python", "Pandas", "Plotly", "Dash"],
    link: "/proyectos/analisis-datos",
  },
  {
    title: "App de Fitness Personalizado",
    description: "Aplicación móvil que genera rutinas de ejercicio y planes de nutrición basados en IA.",
    image: "/placeholder.svg?height=300&width=500&text=Fitness+App",
    category: "Apps",
    technologies: ["Flutter", "TensorFlow Lite", "Google Cloud"],
    link: "/proyectos/fitness-app",
  },
]

export function ProjectsGrid({ filterCategory }: { filterCategory?: string }) {
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  useEffect(() => {
    if (filterCategory && filterCategory !== "Todos") {
      setFilteredProjects(allProjects.filter((p) => p.category === filterCategory))
    } else {
      setFilteredProjects(allProjects)
    }
  }, [filterCategory])

  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title} // Use a unique key for AnimatePresence
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:border-[#00E676]/50 transition-all duration-500 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00E676]/20 overflow-hidden tilt-card">
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
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Link href={project.link}>
                      <Button variant="ghost" className="w-full text-[#00E676] hover:bg-[#00E676]/10 group/btn">
                        Ver Caso de Estudio
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 text-lg mt-12"
          >
            No se encontraron proyectos para esta categoría.
          </motion.div>
        )}
      </div>
    </section>
  )
}
