"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

export function ParentAuth() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")

  // Form state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")

    // Accept any email and password
    if (email && password) {
      setSuccess("¡Inicio de sesión exitoso!")

      // Store user type in localStorage
      localStorage.setItem("nina-user-type", "parent")
      localStorage.setItem("nina-user-email", email)

      // Immediate redirect
      setTimeout(() => {
        router.push("/parent-dashboard")
      }, 500)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen nina-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 sm:mb-6">
          <Link href="/user-type">
            <Button variant="ghost" className="text-white hover:bg-white/20 rounded-2xl text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        <Card className="nina-card">
          <CardHeader className="text-center px-4 sm:px-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardTitle className="text-xl sm:text-2xl">Acceso para Padres/Tutores</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Ingresa tus credenciales para acceder al panel de control parental
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl h-10 sm:h-11"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl h-10 sm:h-11"
                  placeholder="Tu contraseña"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 h-10 sm:h-11 text-sm sm:text-base"
              >
                {loading ? "Iniciando sesión..." : "Acceder al Panel Parental"}
              </Button>
            </form>

            {success && (
              <Alert className="mt-4 border-green-200 bg-green-50 rounded-xl">
                <AlertDescription className="text-green-800">{success}</AlertDescription>
              </Alert>
            )}

            <div className="mt-4 p-3 bg-blue-50 rounded-xl">
              <p className="text-xs text-blue-700 text-center">
                💡 Puedes usar cualquier email y contraseña para esta demostración
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
