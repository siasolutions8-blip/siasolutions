"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Brain, Star, Globe, Target } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { QuickAccessGrid } from "@/components/home/quick-access-grid"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { TechShowcase } from "@/components/home/tech-showcase"

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSection />
      <QuickAccessGrid />
      <StatsSection />
      <FeaturedProjects />
      <TechShowcase />
      <ServicesSection />
      <ProjectsSection />
      {/* <ChatbotSection /> REMOVED */}
      <AboutSection />
      <TechnologiesSection />
      <TestimonialsSection />
    </motion.main>
  )
}

// Servicios Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Landing Pages, E-commerce, CMS personalizados",
      features: ["Responsive Design", "SEO Optimizado", "Performance"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicaciones Móviles",
      description: "iOS/Android, PWAs de alta calidad",
      features: ["Nativo", "Cross-platform", "PWA"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Automatización con IA",
      description: "Chatbots, Procesos Empresariales, Análisis de Datos",
      features: ["Machine Learning", "NLP", "Automatización"],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Consultoría Tecnológica",
      description: "Asesoramiento personalizado para tu negocio",
      features: ["Estrategia", "Implementación", "Soporte"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas innovadoras para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-[#2A5CAA] to-[#00FFC2] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">
                        {feature}
                      </Badge>
                    ))}
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

// Proyectos Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Inteligente",
      category: "Web",
      description: "Plataforma de comercio electrónico con IA para recomendaciones personalizadas",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "TensorFlow"],
    },
    {
      title: "App de Gestión Empresarial",
      category: "Apps",
      description: "Aplicación móvil para gestión de recursos humanos con automatización",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Python", "AI"],
    },
    {
      title: "Chatbot Inteligente",
      category: "IA",
      description: "Asistente virtual para atención al cliente 24/7",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["OpenAI", "Node.js", "WebSocket"],
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Casos de éxito que demuestran nuestra experiencia</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2A5CAA] text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
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

// Testimonios Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      content:
        "S.I.A SOLUTIONS transformó completamente nuestros procesos. La automatización con IA nos ahorró 40% del tiempo.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlos Rodríguez",
      content:
        "El desarrollo de nuestra aplicación móvil superó todas las expectativas. Profesionalismo y calidad excepcional.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ana Martínez",
      content:
        "La consultoría tecnológica nos ayudó a definir una estrategia clara. Resultados visibles desde el primer mes.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de empresas que confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      {/* Removed company name: <p className="text-sm text-gray-500">{testimonial.company}</p> */}
                    </div>
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

// Sobre Nosotros Section
const AboutSection = () => {
  const team = [
    {
      name: "Marvin Negowai",
      role: "CEO & Fundador, Lead Developer",
      description: "Líder visionario en IA y desarrollo, impulsando la innovación y el crecimiento.",
      avatar: "/placeholder.svg?height=200&width=200&text=Marvin+Negowai",
    },
    {
      name: "Marc Cañellas",
      role: "CTO, Especialista",
      description: "Experto en arquitectura de software y tecnologías de vanguardia.",
      avatar: "/placeholder.svg?height=200&width=200&text=Marc+Cañellas",
    },
    {
      name: "Kanchan",
      role: "Especialista Propulsor de la Empresa",
      description: "Impulsa la eficiencia y la excelencia operativa en todos los proyectos.",
      avatar: "/placeholder.svg?height=200&width=200&text=Kanchan",
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Somos un equipo apasionado por la tecnología, dedicado a transformar ideas en soluciones digitales
            innovadoras.
          </p>
          <div className="text-2xl font-bold text-[#2A5CAA] mb-8">Innovación + Eficiencia = Resultados</div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="text-center border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#2A5CAA] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-[#2A5CAA] mb-2">50+</div>
            <p className="text-gray-600">Proyectos Completados</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#2A5CAA] mb-2">98%</div>
            <p className="text-gray-600">Satisfacción del Cliente</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#2A5CAA] mb-2">5+</div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Tecnologías Section
const TechnologiesSection = () => {
  const technologies = [
    { name: "React", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Python", logo: "/placeholder.svg?height=60&width=60" },
    { name: "TensorFlow", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Next.js", logo: "/placeholder.svg?height=60&width=60" },
    { name: "OpenAI", logo: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tecnologías que Usamos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Las mejores herramientas para crear soluciones de vanguardia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-white text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
