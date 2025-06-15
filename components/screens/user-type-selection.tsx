"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
              <CardTitle className="text-2xl sm:text-3xl text-blue-600 mb-2">👨‍👩‍👧‍👦 Cuidador/a</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Soy un adulto responsable que quiere configurar y supervisar la navegación segura de mi hijo/a
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Child Option */}
          <Card
            className="nina-card cursor-pointer hover:scale-105 transition-all duration-300 border-2 hover:border-blue-300 hover:shadow-2xl"
            onClick={() => handleUserTypeSelect("child")}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-blue-600 mb-2">🧒 Niño/a</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Soy un niño o niña que quiere navegar de forma segura y divertida por internet
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
