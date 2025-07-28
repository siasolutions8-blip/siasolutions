"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["Todos", "Web", "Apps", "IA", "Consultoría"]

export function ProjectsFilter({ onFilterChange }: { onFilterChange?: (category: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    if (onFilterChange) {
      onFilterChange(category)
    }
  }

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#00E676] to-[#1A237E] text-white shadow-lg shadow-[#00E676]/20"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-[#00E676]/50"
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
