"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Shield, Star, BookOpen, Play, CheckCircle } from "lucide-react"

export function ExternalSite() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [site, setSite] = useState(searchParams.get("site") || "khan-academy")
  const query = searchParams.get("query") || "matemáticas"

  const siteData = {
    "khan-academy": {
      name: "Khan Academy Kids",
      url: "khanacademy.org/kids/math",
      title: "Matemáticas Divertidas - Khan Academy Kids",
      description: "Aprende matemáticas de forma divertida con juegos interactivos",
      content: {
        mainTitle: "¡Bienvenido a Matemáticas Mágicas! 🎓",
        subtitle: "Resuelve problemas y colecciona estrellas",
        features: [
          "Suma y resta con personajes divertidos",
          "Juegos de multiplicación interactivos",
          "Geometría con formas coloridas",
          "Problemas de lógica paso a paso",
        ],
        activities: [
          { name: "Suma Espacial", icon: "🚀", level: "Principiante", time: "5 min" },
          { name: "Resta Pirata", icon: "🏴‍☠️", level: "Intermedio", time: "8 min" },
          { name: "Multiplicación Ninja", icon: "🥷", level: "Avanzado", time: "10 min" },
        ],
      },
      safetyLevel: "Excelente",
      ageRange: "6-12 años",
      educationalValue: "Muy Alto",
    },
    "nat-geo": {
      name: "National Geographic Kids",
      url: "kids.nationalgeographic.com/animals/ocean",
      title: "Animales del Océano - National Geographic Kids",
      description: "Descubre la vida marina con videos y fotos increíbles",
      content: {
        mainTitle: "🌊 Explora el Mundo Marino",
        subtitle: "Conoce las criaturas más fascinantes del océano",
        features: [
          "Videos de ballenas y delfines",
          "Fotos de peces tropicales",
          "Datos curiosos sobre tiburones",
          "Juegos sobre ecosistemas marinos",
        ],
        activities: [
          { name: "Safari Marino", icon: "🐋", level: "Explorador", time: "12 min" },
          { name: "Quiz Oceánico", icon: "🐠", level: "Experto", time: "6 min" },
          { name: "Documental Coral", icon: "🪸", level: "Investigador", time: "15 min" },
        ],
      },
      safetyLevel: "Excelente",
      ageRange: "8-14 años",
      educationalValue: "Muy Alto",
    },
  }

  const currentSite = siteData[site as keyof typeof siteData] || siteData["khan-academy"]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Browser Extension Popup */}
      <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-2 duration-500">
        <Card className="w-80 shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm font-bold text-blue-800">NINNA Asistente</CardTitle>
                <p className="text-xs text-blue-600">Tu compañero de navegación</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Virtual Assistant Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-800 mb-1">¡Hola! Soy tu asistente NINNA</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {site === "khan-academy"
                    ? "Estás en una página súper divertida para aprender matemáticas. Aquí puedes jugar con números, resolver problemas y ganar estrellas. ¡Es como un videojuego pero aprendes mientras juegas!"
                    : "¡Qué genial! Estás explorando el mundo de los animales marinos. Aquí puedes ver fotos increíbles de ballenas, delfines y peces de colores. También hay videos muy interesantes sobre la vida en el océano."}
                </p>
              </div>
            </div>

            {/* Safety Reminder */}
            <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <p className="text-xs text-green-700">Este sitio es seguro y perfecto para ti</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simulated Website Content */}
      <div className="max-w-6xl mx-auto">
        {/* Website Header */}
        <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
              <div>
                <h1 className="text-xl font-bold">{currentSite.name}</h1>
                <p className="text-sm opacity-90">{currentSite.url}</p>
              </div>
            </div>
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-white/20 text-white">👦</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 space-y-6">
          {/* Hero Section */}
          <div className="text-center py-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">{currentSite.content.mainTitle}</h1>
            <p className="text-lg text-blue-600 mb-6">{currentSite.content.subtitle}</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <Play className="h-5 w-5 mr-2" />
              ¡Empezar Ahora!
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  ¿Qué Aprenderás?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {currentSite.content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-green-500" />
                  Actividades Populares
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentSite.content.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{activity.icon}</span>
                      <div>
                        <p className="font-semibold text-sm">{activity.name}</p>
                        <p className="text-xs text-gray-600">
                          {activity.level} • {activity.time}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Jugar
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Interactive Content Area */}
          <Card className="p-8">
            <div className="text-center space-y-4">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Contenido Interactivo</h3>
                  <p className="text-blue-600">¡Aquí aparecería el juego o actividad educativa!</p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                    <Play className="h-4 w-4 mr-2" />
                    Comenzar Actividad
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600">
            Este es un sitio educativo seguro verificado por NINNA • Contenido apropiado para niños
          </p>
        </footer>
      </div>
    </div>
  )
}
