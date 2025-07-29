"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-[#1A237E]/80 to-gray-900/90 z-10" />
        <motion.div
          className="w-full h-full bg-gradient-to-r from-[#1A237E]/20 to-[#00E676]/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(26, 35, 126, 0.2) 0%, rgba(0, 230, 118, 0.2) 100%)",
              "linear-gradient(225deg, rgba(0, 230, 118, 0.2) 0%, rgba(26, 35, 126, 0.2) 100%)",
              "linear-gradient(45deg, rgba(26, 35, 126, 0.2) 0%, rgba(0, 230, 118, 0.2) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0 z-5">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00E676] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-left z-20 relative">
        {" "}
        {/* Changed text-center to text-left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-white">Transformamos</span>
            <span className="block bg-gradient-to-r from-[#00E676] to-[#1A237E] bg-clip-text text-transparent">
              el Futuro
            </span>
            <span className="block text-white">con IA</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed" // Removed mx-auto
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Líderes en automatización inteligente, desarrollo web de vanguardia y soluciones tecnológicas que
            revolucionan tu negocio
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start items-center" // Changed justify-center to justify-start
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/servicios">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-[#00E676]/30 hover:shadow-xl hover:shadow-[#00E676]/40 transition-all duration-300"
              >
                Explorar Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#00E676] text-[#00E676] hover:bg-[#00E676] hover:text-gray-900 px-8 py-4 text-lg font-semibold group transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Demo
            </Button>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          
        </motion.div>
      </div>
    </section>
  )
}
