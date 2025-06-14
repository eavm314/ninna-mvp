"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, BabyIcon as Child, Upload, Palette } from "lucide-react"

const avatarOptions = ["🦸‍♀️", "🦸‍♂️", "🐱", "🐶", "🦄", "🌟", "🎨", "🚀"]

export function ProfileSetup() {
  const [selectedAvatar, setSelectedAvatar] = useState("🦸‍♀️")

  return (
    <div className="min-h-screen nina-gradient p-4">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <div className="text-center text-white mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Configurar Perfil</h1>
          <p className="text-base sm:text-lg opacity-90">Personaliza tu experiencia en NINA</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Tutor Information */}
          <Card className="nina-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                Información del Tutor
              </CardTitle>
              <CardDescription className="text-sm">Datos del padre o responsable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tutor-name" className="text-sm">
                  Nombre Completo
                </Label>
                <Input id="tutor-name" className="rounded-xl h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tutor-email" className="text-sm">
                  Correo Electrónico
                </Label>
                <Input id="tutor-email" type="email" className="rounded-xl h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tutor-phone" className="text-sm">
                  Teléfono
                </Label>
                <Input id="tutor-phone" type="tel" className="rounded-xl h-10 sm:h-11" />
              </div>
            </CardContent>
          </Card>

          {/* Child Information */}
          <Card className="nina-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Child className="h-4 w-4 sm:h-5 sm:w-5" />
                Información del Niño/a
              </CardTitle>
              <CardDescription className="text-sm">Datos del menor para personalizar la experiencia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <Label htmlFor="child-name" className="text-sm">
                  Nombre
                </Label>
                <Input id="child-name" className="rounded-xl h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="child-age" className="text-sm">
                  Edad
                </Label>
                <Input id="child-age" type="number" min="3" max="12" className="rounded-xl h-10 sm:h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="child-nickname" className="text-sm">
                  Apodo Favorito
                </Label>
                <Input
                  id="child-nickname"
                  placeholder="¿Cómo le gusta que le digan?"
                  className="rounded-xl h-10 sm:h-11 text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Avatar Selection */}
        <Card className="nina-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Palette className="h-4 w-4 sm:h-5 sm:w-5" />
              Elige tu Avatar
            </CardTitle>
            <CardDescription className="text-sm">Selecciona un avatar que represente al niño/a</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-purple-200">
                <AvatarFallback className="text-3xl sm:text-4xl bg-gradient-to-br from-blue-100 to-purple-100">
                  {selectedAvatar}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
              {avatarOptions.map((avatar, index) => (
                <Button
                  key={index}
                  variant={selectedAvatar === avatar ? "default" : "outline"}
                  className="aspect-square text-lg sm:text-2xl rounded-2xl h-12 w-12 sm:h-14 sm:w-14 p-0"
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  {avatar}
                </Button>
              ))}
            </div>

            <Separator />

            <div className="text-center">
              <Button variant="outline" className="rounded-xl text-sm sm:text-base h-10 sm:h-11">
                <Upload className="mr-2 h-4 w-4" />
                Subir Imagen Personalizada
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="nina-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">Preferencias Iniciales</CardTitle>
            <CardDescription className="text-sm">Estas se pueden cambiar más tarde en configuración</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Educativo", "Juegos", "Arte", "Ciencia", "Música", "Deportes"].map((pref) => (
                <Badge key={pref} variant="secondary" className="rounded-xl text-xs sm:text-sm px-2 sm:px-3 py-1">
                  {pref}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pb-4">
          <Button
            size="lg"
            className="rounded-2xl px-6 sm:px-8 bg-gradient-to-r from-green-500 to-blue-600 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto max-w-xs"
          >
            Completar Configuración
          </Button>
        </div>
      </div>
    </div>
  )
}
