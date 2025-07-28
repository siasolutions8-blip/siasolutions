import type React from "react"
import type { Metadata } from "next"
import { Inter, Bai_Jamjuree } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { FloatingCTA } from "@/components/floating-cta"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
})

export const metadata: Metadata = {
  title: "S.I.A SOLUTIONS - Transformamos el Futuro con IA",
  description:
    "Líderes en automatización con IA, desarrollo web y soluciones tecnológicas innovadoras. Experiencia digital de vanguardia.",
  keywords: "IA, inteligencia artificial, desarrollo web, automatización, tecnología, innovación",
  authors: [{ name: "S.I.A SOLUTIONS" }],
  openGraph: {
    title: "S.I.A SOLUTIONS - Transformamos el Futuro con IA",
    description: "Líderes en automatización con IA y desarrollo web",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${baiJamjuree.variable} font-sans antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <FloatingCTA />
      </body>
    </html>
  )
}
