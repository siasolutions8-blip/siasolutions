"use client"

import { motion } from "framer-motion"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsFilter } from "@/components/projects/projects-filter"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsStats } from "@/components/projects/projects-stats"

export default function ProyectosPage() {
  return (
    <motion.main
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen pt-20"
    >
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <ProjectsStats />
    </motion.main>
  )
}
