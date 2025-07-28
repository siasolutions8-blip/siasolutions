"use client"

import { motion } from "framer-motion"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { InteractiveMap } from "@/components/contact/interactive-map"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactoPage() {
  return (
    <motion.main
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen pt-20"
    >
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <div className="space-y-0">
          <ContactInfo />
          <InteractiveMap />
        </div>
      </div>
    </motion.main>
  )
}
