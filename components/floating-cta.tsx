"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-gray-800/95 backdrop-blur-md border border-[#00E676]/20 rounded-2xl p-6 w-80 shadow-2xl shadow-[#00E676]/20"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">¡Hablemos!</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              ¿Tienes un proyecto en mente? Contáctanos por WhatsApp y te responderemos en minutos.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white font-medium"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar WhatsApp
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-[#00E676] to-[#1A237E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00E676]/30 hover:shadow-xl hover:shadow-[#00E676]/40 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 230, 118, 0.3)",
            "0 0 30px rgba(0, 230, 118, 0.5)",
            "0 0 20px rgba(0, 230, 118, 0.3)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
