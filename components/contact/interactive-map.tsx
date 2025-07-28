"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function InteractiveMap() {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Encuéntranos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Visita nuestras oficinas o contáctanos directamente</p>
        </motion.div>

        <motion.div
          className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-gray-950/50 border border-gray-700/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Placeholder for Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2000000000005!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8f8f8f8f%3A0x8085808f8f8f8f8f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nuestra Ubicación"
          ></iframe>

          {/* Example Office Pin */}
          <motion.div
            className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-[#00E676]/50 text-white p-3 rounded-lg shadow-lg shadow-[#00E676]/20">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#00E676]" />
                <div>
                  <h4 className="font-semibold text-sm">Oficina Principal</h4>
                  <p className="text-xs text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
