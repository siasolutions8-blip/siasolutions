"use client"

import Link from "next/link"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Brain, Target, ChevronRight, PlayCircle } from "lucide-react"

const serviceCategories = [
  {
    value: "web-development",
    label: "Desarrollo Web",
    icon: <Globe className="w-5 h-5" />,
    content: {
      title: "Soluciones Web a Medida",
      description:
        "Creamos experiencias digitales impactantes, desde landing pages optimizadas hasta complejos e-commerce y sistemas de gestión de contenido (CMS).",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=y_y_y_y_y_y_y_y", // Placeholder video
      details: [
        {
          question: "¿Qué tipo de sitios web desarrollan?",
          answer:
            "Desarrollamos todo tipo de sitios web, incluyendo landing pages, e-commerce, blogs, portafolios, y plataformas personalizadas. Nos adaptamos a tus necesidades específicas.",
        },
        {
          question: "¿Usan frameworks modernos?",
          answer:
            "Sí, utilizamos frameworks y tecnologías de vanguardia como Next.js, React, Node.js, y Tailwind CSS para asegurar rendimiento, escalabilidad y una excelente experiencia de usuario.",
        },
        {
          question: "¿Ofrecen mantenimiento post-lanzamiento?",
          answer:
            "Absolutamente. Ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu sitio web funcione sin problemas, se mantenga seguro y actualizado.",
        },
      ],
    },
  },
  {
    value: "mobile-apps",
    label: "Aplicaciones Móviles",
    icon: <Smartphone className="w-5 h-5" />,
    content: {
      title: "Apps Nativas y Multiplataforma",
      description:
        "Diseñamos y desarrollamos aplicaciones móviles intuitivas y de alto rendimiento para iOS y Android, así como Progressive Web Apps (PWAs).",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=y_y_y_y_y_y_y_y", // Placeholder video
      details: [
        {
          question: "¿Desarrollan para iOS y Android?",
          answer:
            "Sí, desarrollamos aplicaciones nativas para iOS y Android, así como aplicaciones multiplataforma utilizando tecnologías como React Native, lo que permite un desarrollo más rápido y eficiente.",
        },
        {
          question: "¿Qué es una PWA?",
          answer:
            "Una Progressive Web App (PWA) es una aplicación web que ofrece una experiencia similar a una aplicación nativa, con funcionalidades como acceso offline, notificaciones push y la posibilidad de ser instalada en el dispositivo.",
        },
        {
          question: "¿Cómo aseguran la calidad de la app?",
          answer:
            "Implementamos rigurosos procesos de control de calidad, incluyendo pruebas exhaustivas, revisiones de código y feedback continuo del cliente para garantizar una aplicación robusta y sin errores.",
        },
      ],
    },
  },
  {
    value: "ai-automation",
    label: "Automatización con IA",
    icon: <Brain className="w-5 h-5" />,
    content: {
      title: "Inteligencia Artificial para tu Negocio",
      description:
        "Implementamos soluciones de IA para automatizar procesos, mejorar la toma de decisiones, y crear experiencias personalizadas con chatbots y análisis de datos.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=y_y_y_y_y_y_y_y", // Placeholder video
      details: [
        {
          question: "¿Qué tipo de procesos se pueden automatizar con IA?",
          answer:
            "Podemos automatizar una amplia gama de procesos, desde la atención al cliente con chatbots, la gestión de documentos, el análisis de datos para insights de negocio, hasta la optimización de cadenas de suministro.",
        },
        {
          question: "¿Necesito tener conocimientos de IA para usar sus soluciones?",
          answer:
            "No, nuestras soluciones están diseñadas para ser fáciles de usar e integrar en tus sistemas existentes. Nosotros nos encargamos de toda la complejidad técnica de la IA.",
        },
        {
          question: "¿Cómo se mide el ROI de la automatización con IA?",
          answer:
            "El ROI se mide a través de la reducción de costos operativos, el aumento de la eficiencia, la mejora en la satisfacción del cliente y la capacidad de tomar decisiones más informadas basadas en datos.",
        },
      ],
    },
  },
  {
    value: "tech-consulting",
    label: "Consultoría Tecnológica",
    icon: <Target className="w-5 h-5" />,
    content: {
      title: "Asesoramiento Estratégico",
      description:
        "Ofrecemos consultoría experta para ayudarte a definir tu estrategia digital, optimizar tu infraestructura tecnológica y adoptar nuevas innovaciones.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=y_y_y_y_y_y_y_y", // Placeholder video
      details: [
        {
          question: "¿En qué áreas ofrecen consultoría?",
          answer:
            "Ofrecemos consultoría en estrategia digital, arquitectura de software, selección de tecnologías, ciberseguridad, optimización de procesos y transformación digital.",
        },
        {
          question: "¿Cuál es el proceso de consultoría?",
          answer:
            "Nuestro proceso incluye una fase de diagnóstico, definición de objetivos, desarrollo de un plan estratégico, implementación de soluciones y seguimiento continuo para asegurar el éxito.",
        },
        {
          question: "¿Pueden ayudar a mi empresa a adoptar nuevas tecnologías?",
          answer:
            "Sí, somos expertos en la adopción de tecnologías emergentes. Te guiaremos en la implementación de IA, blockchain, IoT y otras innovaciones relevantes para tu sector.",
        },
      ],
    },
  },
]

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].value)

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Nuestras Áreas de Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora cómo nuestras soluciones pueden transformar tu negocio
          </p>
        </motion.div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <TabsList className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm p-2 rounded-full">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="flex items-center space-x-2 px-6 py-2 rounded-full text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00E676] data-[state=active]:to-[#1A237E] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#00E676]/20 transition-all duration-300"
                >
                  {category.icon}
                  <span>{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {serviceCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <motion.div
                key={activeTab} // Key for re-animating content on tab change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-950/50 border border-gray-700/50 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={category.content.video}
                    title={`${category.label} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white/80" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                    {category.content.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{category.content.description}</p>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {category.content.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                          <AccordionItem value={`item-${index}`} className="border-b-0">
                            <AccordionTrigger className="flex justify-between items-center p-4 text-white hover:text-[#00E676] transition-colors">
                              <span className="font-semibold text-left">{detail.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 text-gray-300 border-t border-gray-700/50">
                              {detail.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </Card>
                      </motion.div>
                    ))}
                  </Accordion>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link href="/contacto">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-[#00E676]/30"
                      >
                        Empezar tu Proyecto
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
