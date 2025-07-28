"use client"

import { motion } from "framer-motion"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesTabs } from "@/components/services/services-tabs"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServicesCTA } from "@/components/services/services-cta"

export default function ServiciosPage() {
  return (
    <motion.main
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen pt-20"
    >
      <ServicesHero />
      <ServicesTabs />
      <ProcessTimeline />
      <ServicesCTA />
    </motion.main>
  )
}
