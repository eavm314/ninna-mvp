"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function UserTypeSelection() {
  const router = useRouter()

  const handleUserTypeSelect = (type: "parent" | "child") => {
    if (type === "parent") {
      router.push("/auth/parent")
    } else {
      router.push("/auth/child")
    }
  }

  return (
    <div className="min-h-screen nina-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-4 sm:mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 rounded-2xl text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        <div className="text-center text-white mb-6 sm:mb-8">
          <div className="text-4xl sm:text-6xl mb-4">🤔</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">¡Hola! ¿Quién eres?</h1>
          <p className="text-lg sm:text-xl opacity-90">
            Elige tu perfil para comenzar tu experiencia personalizada con NINA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Parent Option */}
          <Card
            className="nina-card cursor-pointer hover:scale-105 transition-all duration-300 border-2 hover:border-blue-300 hover:shadow-2xl"
            onClick={() => handleUserTypeSelect("parent")}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-blue-600 mb-2">👨‍👩‍👧‍👦 Soy Padre/Tutor</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Soy un adulto responsable que quiere configurar y supervisar la navegación segura de mi hijo/a
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm sm:text-base text-gray-600 space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">🛡️</span>
                  Panel de control parental completo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">⚙️</span>
                  Configuración de restricciones y filtros
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">📊</span>
                  Monitoreo de actividad en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">🔔</span>
                  Notificaciones de seguridad instantáneas
                </li>
              </ul>
              <Button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-base sm:text-lg h-12 sm:h-14 font-semibold shadow-lg">
                Continuar como Padre/Tutor
              </Button>
            </CardContent>
          </Card>

          {/* Child Option */}
          <Card
            className="nina-card cursor-pointer hover:scale-105 transition-all duration-300 border-2 hover:border-purple-300 hover:shadow-2xl"
            onClick={() => handleUserTypeSelect("child")}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-purple-600 mb-2">🧒 Soy un Niño/a</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Soy un niño o niña que quiere navegar de forma segura y divertida por internet
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm sm:text-base text-gray-600 space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">🌟</span>
                  Navegación segura y supervisada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">🎮</span>
                  Juegos y actividades educativas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">🤖</span>
                  Asistente virtual amigable (NINA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">💝</span>
                  Botón de ayuda emocional siempre disponible
                </li>
              </ul>
              <Button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-base sm:text-lg h-12 sm:h-14 font-semibold shadow-lg">
                Continuar como Niño/a
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
