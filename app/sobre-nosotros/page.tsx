"use client"

import { motion } from "framer-motion"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyTimeline } from "@/components/about/company-timeline"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export default function SobreNosotrosPage() {
  return (
    <motion.main
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen pt-20"
    >
      <AboutHero />
      <CompanyTimeline />
      <TeamSection />
      <ValuesSection />
    </motion.main>
  )
}
