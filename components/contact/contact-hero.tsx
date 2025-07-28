"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1A237E] to-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
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
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-heading mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contáctanos <span className="gradient-text-animated">Hoy</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Estamos listos para escuchar tu proyecto y convertir tus ideas en realidad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#contact-form">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-[#00E676]/30"
            >
              Enviar Mensaje
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
