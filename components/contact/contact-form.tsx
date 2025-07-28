"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Nombre muy corto").max(50, "Nombre muy largo").required("El nombre es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  message: Yup.string().min(10, "Mensaje muy corto").required("El mensaje es requerido"),
})

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitted(false)
      setSubmitError(false)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Formulario enviado:", values)
        setIsSubmitted(true)
        resetForm()
      } catch (error) {
        console.error("Error al enviar el formulario:", error)
        setSubmitError(true)
      }
    },
  })

  const getValidationIcon = (fieldName: keyof typeof formik.values) => {
    if (formik.touched[fieldName]) {
      if (formik.errors[fieldName]) {
        return <XCircle className="w-5 h-5 text-red-500 absolute right-3 top-1/2 -translate-y-1/2" />
      } else {
        return <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" />
      }
    }
    return null
  }

  return (
    <section id="contact-form" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm shadow-2xl shadow-gray-950/50">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-6 text-center">Envíanos un Mensaje</h3>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu Nombre"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00E676] focus:ring-[#00E676]/20 pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {getValidationIcon("name")}
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu Email"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00E676] focus:ring-[#00E676]/20 pr-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {getValidationIcon("email")}
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00E676] focus:ring-[#00E676]/20 min-h-[120px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {getValidationIcon("message")}
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-400 text-sm mt-1">{formik.errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00E676] to-[#1A237E] hover:from-[#00E676]/80 hover:to-[#1A237E]/80 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-[#00E676]/30"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 mt-4"
                  >
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                  </motion.p>
                )}
                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-400 mt-4"
                  >
                    Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
