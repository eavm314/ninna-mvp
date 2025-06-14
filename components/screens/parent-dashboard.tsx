"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Activity, Shield, Clock, AlertTriangle, CheckCircle, XCircle, BarChart3, Settings } from "lucide-react"
import Link from "next/link"

export function ParentDashboard() {
  const todayActivities = [
    { name: "Khan Academy Kids", time: "45 min", type: "educational", status: "completed" },
    { name: "Scratch Jr", time: "30 min", type: "creative", status: "completed" },
    { name: "YouTube Kids", time: "20 min", type: "entertainment", status: "monitored" },
  ]

  const suggestedTasks = [
    { name: "Matemáticas Divertidas", description: "Juegos de números para su edad", difficulty: "easy" },
    { name: "Cuentos Interactivos", description: "Lectura guiada con NINA", difficulty: "medium" },
    { name: "Arte Digital", description: "Crear dibujos digitales seguros", difficulty: "easy" },
  ]

  const restrictions = [
    { type: "blocked", content: "Redes sociales", reason: "Edad inapropiada" },
    { type: "limited", content: "Videos de YouTube", reason: "Tiempo limitado" },
    { type: "blocked", content: "Compras online", reason: "Protección financiera" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Panel de Control Parental</h1>
            <p className="text-sm sm:text-base text-gray-600">Monitoreo y configuración para Sofia</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/profile">
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
              <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-lg sm:text-xl">
                🦸‍♀️
              </AvatarFallback>
            </Avatar>
            </Link>
            <Link href="/settings">
              <Button variant="outline" className="flex rounded-xl text-sm sm:text-base h-9 sm:h-10">
                <Settings className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Configurar</span>
                <span className="sm:hidden">Config</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-green-100 rounded-xl">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Tiempo Hoy</p>
                  <p className="text-lg sm:text-2xl font-bold">1h 35m</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-blue-100 rounded-xl">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Actividades</p>
                  <p className="text-lg sm:text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-xl">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Alertas</p>
                  <p className="text-lg sm:text-2xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-purple-100 rounded-xl">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Protección</p>
                  <p className="text-lg sm:text-2xl font-bold text-green-600">Activa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* What did they do today? */}
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
                ¿Qué hizo hoy?
              </CardTitle>
              <CardDescription className="text-sm">Actividades realizadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {todayActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">{activity.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{activity.time}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 ml-2">
                    <Badge
                      variant={activity.type === "educational" ? "default" : "secondary"}
                      className="rounded-lg text-xs px-1.5 sm:px-2"
                    >
                      {activity.type}
                    </Badge>
                    {activity.status === "completed" ? (
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What can they do? */}
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                ¿Qué puede hacer?
              </CardTitle>
              <CardDescription className="text-sm">Tareas sugeridas seguras</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {suggestedTasks.map((task, index) => (
                <div key={index} className="p-2 sm:p-3 bg-green-50 rounded-xl">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h4 className="font-medium text-sm sm:text-base">{task.name}</h4>
                    <Badge variant="outline" className="rounded-lg text-xs px-1.5 sm:px-2 ml-2 flex-shrink-0">
                      {task.difficulty}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{task.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What can't they do? */}
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <XCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                ¿Qué no puede hacer?
              </CardTitle>
              <CardDescription className="text-sm">Contenido bloqueado y restricciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {restrictions.map((restriction, index) => (
                <div key={index} className="p-2 sm:p-3 bg-red-50 rounded-xl">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h4 className="font-medium text-sm sm:text-base">{restriction.content}</h4>
                    <Badge
                      variant={restriction.type === "blocked" ? "destructive" : "secondary"}
                      className="rounded-lg text-xs px-1.5 sm:px-2 ml-2 flex-shrink-0"
                    >
                      {restriction.type}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{restriction.reason}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Activity Chart */}
        <Card className="nina-card">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
              Actividad Semanal
            </CardTitle>
            <CardDescription className="text-sm">Tiempo de uso por día</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, index) => (
                <div key={day} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 sm:w-12 text-xs sm:text-sm font-medium">{day}</div>
                  <div className="flex-1">
                    <Progress value={Math.random() * 100} className="h-2" />
                  </div>
                  <div className="w-12 sm:w-16 text-xs sm:text-sm text-gray-600 text-right">
                    {Math.floor(Math.random() * 120)}min
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
