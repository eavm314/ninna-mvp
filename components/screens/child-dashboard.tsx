"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Gamepad2, Lightbulb, MapPin, Heart, Star, Trophy } from "lucide-react"

export function ChildDashboard() {
  const safeTasks = [
    { name: "Matemáticas Mágicas", progress: 75, icon: "🔢", color: "bg-blue-500" },
    { name: "Cuentos Fantásticos", progress: 50, icon: "📚", color: "bg-green-500" },
    { name: "Arte Creativo", progress: 90, icon: "🎨", color: "bg-purple-500" },
  ]

  const games = [
    { name: "Scratch Jr", description: "Crea tus propias historias", icon: "🐱" },
    { name: "Khan Academy Kids", description: "Aprende jugando", icon: "🎓" },
    { name: "Toca Boca", description: "Mundo de diversión", icon: "🏠" },
  ]

  const infoZone = [
    { title: "Animales del Océano", type: "video", duration: "5 min" },
    { title: "Cómo Funcionan los Volcanes", type: "artículo", duration: "3 min" },
    { title: "Experimentos Divertidos", type: "actividad", duration: "10 min" },
  ]

  return (
    <div className="min-h-screen nina-gradient p-4">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center text-white mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/30">
              <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xl sm:text-2xl">
                🦸‍♀️
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">¡Hola, Sofia! 👋</h1>
              <p className="text-base sm:text-lg opacity-90">¿Qué aventura tendremos hoy?</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <Badge className="bg-white/20 text-white border-white/30 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
              <Star className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Nivel 5
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
              <Trophy className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              15 Logros
            </Badge>
          </div>
        </div>

        {/* Safe Tasks */}
        <Card className="nina-card">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
              Mis Tareas Seguras
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">Continúa con tus actividades favoritas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {safeTasks.map((task, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-purple-200 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{task.icon}</div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">{task.name}</h3>
                    <div className="space-y-2">
                      <Progress value={task.progress} className="h-2 sm:h-3" />
                      <p className="text-xs sm:text-sm text-gray-600">{task.progress}% completado</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Educational Games */}
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5" />
                Juegos Educativos
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Aprende mientras te diviertes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-colors cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{game.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base">{game.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{game.description}</p>
                  </div>
                  <Button size="sm" className="rounded-xl text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 flex-shrink-0">
                    Jugar
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Informative Zone */}
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
                Zona Informativa
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Descubre cosas increíbles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {infoZone.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl hover:from-green-100 hover:to-blue-100 transition-colors cursor-pointer"
                >
                  <div className="p-1.5 sm:p-2 bg-white rounded-xl flex-shrink-0">
                    {item.type === "video" && <span className="text-lg sm:text-xl">🎥</span>}
                    {item.type === "artículo" && <span className="text-lg sm:text-xl">📖</span>}
                    {item.type === "actividad" && <span className="text-lg sm:text-xl">⚗️</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base truncate">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{item.duration}</p>
                  </div>
                  <Badge variant="outline" className="rounded-xl text-xs px-2 py-1 flex-shrink-0">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tracker */}
        <Card className="nina-card">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              Mi Rastro de Navegación
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">Lugares seguros que has visitado hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge className="bg-green-100 text-green-800 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                Khan Academy Kids - 45min
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                Scratch Jr - 30min
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                YouTube Kids - 20min
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Help Button */}
        <div className="text-center pb-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg w-full sm:w-auto max-w-xs"
          >
            <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            ¡Necesito Ayuda!
          </Button>
        </div>
      </div>
    </div>
  )
}
