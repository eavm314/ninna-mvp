"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, Users } from "lucide-react"
import Link from "next/link"

// Test credentials
const TEST_CREDENTIALS = {
  parent: { email: "parent@nina.com", password: "parent123" },
  child: { email: "child@nina.com", password: "child123", accessCode: "NINA2024" },
}

export function AuthScreen() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  // Login form state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Register form state
  const [accountType, setAccountType] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [accessCode, setAccessCode] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check credentials
    if (
      (loginEmail === TEST_CREDENTIALS.parent.email && loginPassword === TEST_CREDENTIALS.parent.password) ||
      (loginEmail === TEST_CREDENTIALS.child.email && loginPassword === TEST_CREDENTIALS.child.password)
    ) {
      setSuccess("¡Inicio de sesión exitoso!")

      // Store user type in localStorage for demo purposes
      const userType = loginEmail === TEST_CREDENTIALS.parent.email ? "parent" : "child"
      localStorage.setItem("nina-user-type", userType)
      localStorage.setItem("nina-user-email", loginEmail)

      setTimeout(() => {
        if (userType === "parent") {
          router.push("/parent-dashboard")
        } else {
          router.push("/child-dashboard")
        }
      }, 1500)
    } else {
      setError("Credenciales incorrectas. Usa las credenciales de prueba.")
    }

    setLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Validate required fields
    if (!accountType || !regEmail || !regPassword) {
      setError("Por favor completa todos los campos requeridos.")
      setLoading(false)
      return
    }

    // Validate access code for child accounts
    if (accountType === "child" && accessCode !== TEST_CREDENTIALS.child.accessCode) {
      setError("Código de acceso incorrecto. Usa: NINA2024")
      setLoading(false)
      return
    }

    setSuccess("¡Cuenta creada exitosamente! Redirigiendo a configuración de perfil...")

    // Store user type for demo purposes
    localStorage.setItem("nina-user-type", accountType)
    localStorage.setItem("nina-user-email", regEmail)

    setTimeout(() => {
      router.push("/profile-setup")
    }, 1500)

    setLoading(false)
  }

  return (
    <div className="min-h-screen nina-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 sm:mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 rounded-2xl text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        {/* Test Credentials Info */}
        <Card className="nina-card mb-4 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-800 mb-2">🧪 Credenciales de Prueba</h3>
            <div className="space-y-2 text-sm text-blue-700">
              <div>
                <strong>Padre/Tutor:</strong>
                <br />
                Email: parent@nina.com
                <br />
                Contraseña: parent123
              </div>
              <div>
                <strong>Niño/a:</strong>
                <br />
                Email: child@nina.com
                <br />
                Contraseña: child123
                <br />
                Código de Acceso: NINA2024
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="nina-card">
          <CardHeader className="text-center px-4 sm:px-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardTitle className="text-xl sm:text-2xl">Acceso Seguro</CardTitle>
            <CardDescription className="text-sm sm:text-base">Inicia sesión o crea tu cuenta protegida</CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6">
            <Tabs defaultValue="login" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 rounded-2xl h-10 sm:h-11">
                <TabsTrigger value="login" className="rounded-xl text-xs sm:text-sm">
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger value="register" className="rounded-xl text-xs sm:text-sm">
                  Registrarse
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="rounded-xl h-10 sm:h-11"
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
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="rounded-xl h-10 sm:h-11"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="account-type" className="text-sm">
                      Tipo de Cuenta
                    </Label>
                    <Select value={accountType} onValueChange={setAccountType}>
                      <SelectTrigger className="rounded-xl h-10 sm:h-11">
                        <SelectValue placeholder="Selecciona el tipo de cuenta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Padre/Tutor</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="child">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm">Niño/a</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-sm">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="reg-email"
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="rounded-xl h-10 sm:h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-sm">
                      Contraseña
                    </Label>
                    <Input
                      id="reg-password"
                      type="password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      className="rounded-xl h-10 sm:h-11"
                      required
                    />
                  </div>

                  {accountType === "child" && (
                    <div className="space-y-2">
                      <Label htmlFor="access-code" className="text-sm">
                        Código de Acceso (requerido para niños)
                      </Label>
                      <Input
                        id="access-code"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        placeholder="Código proporcionado por el tutor"
                        className="rounded-xl h-10 sm:h-11 text-sm"
                        required
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-green-500 to-blue-600 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    {loading ? "Creando cuenta..." : "Crear Cuenta"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {error && (
              <Alert className="mt-4 border-red-200 bg-red-50 rounded-xl">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mt-4 border-green-200 bg-green-50 rounded-xl">
                <AlertDescription className="text-green-800">{success}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
