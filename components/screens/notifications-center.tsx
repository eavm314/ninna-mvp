"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, AlertTriangle, Shield, Clock, CheckCircle, X, Eye, MessageCircle } from "lucide-react"

export function NotificationsCenter() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Contenido Bloqueado",
      message: "Sofia intentó acceder a un sitio web no apropiado para su edad",
      time: "5 min ago",
      priority: "high",
      read: false,
      actions: ["Ver detalles", "Configurar filtros"],
    },
    {
      id: 2,
      type: "help",
      title: "Solicitud de Ayuda",
      message: 'Sofia presionó el botón "Necesito ayuda" desde el dashboard',
      time: "15 min ago",
      priority: "high",
      read: false,
      actions: ["Contactar", "Ver estado emocional"],
    },
    {
      id: 3,
      type: "achievement",
      title: "Logro Desbloqueado",
      message: "Sofia completó 5 actividades educativas esta semana",
      time: "1 hora ago",
      priority: "low",
      read: true,
      actions: ["Ver progreso"],
    },
    {
      id: 4,
      type: "time",
      title: "Límite de Tiempo",
      message: "Sofia ha usado 90% de su tiempo de pantalla diario",
      time: "2 horas ago",
      priority: "medium",
      read: false,
      actions: ["Extender tiempo", "Ver actividad"],
    },
    {
      id: 5,
      type: "system",
      title: "Actualización de Seguridad",
      message: "Los filtros de contenido han sido actualizados automáticamente",
      time: "1 día ago",
      priority: "low",
      read: true,
      actions: ["Ver cambios"],
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "help":
        return <MessageCircle className="h-5 w-5 text-orange-500" />
      case "achievement":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "time":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "system":
        return <Shield className="h-5 w-5 text-purple-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50"
      case "medium":
        return "border-l-yellow-500 bg-yellow-50"
      case "low":
        return "border-l-green-500 bg-green-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen nina-gradient p-4">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center text-white mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3 sm:mb-4">
            <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/30">
              <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xl sm:text-2xl">
                🔔
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Centro de Notificaciones</h1>
              <p className="text-base sm:text-lg opacity-90">Mantente informado sobre la actividad de Sofia</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-600">2</div>
              <p className="text-xs sm:text-sm text-gray-600">Alertas Activas</p>
            </CardContent>
          </Card>
          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">5</div>
              <p className="text-xs sm:text-sm text-gray-600">Total Hoy</p>
            </CardContent>
          </Card>
          <Card className="nina-card">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600">3</div>
              <p className="text-xs sm:text-sm text-gray-600">Resueltas</p>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <div className="space-y-3 sm:space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`nina-card border-l-4 ${getPriorityColor(notification.priority)} ${
                !notification.read ? "ring-2 ring-blue-200" : ""
              }`}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg truncate">{notification.title}</h3>
                        {!notification.read && (
                          <Badge className="mt-1 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">Nuevo</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs sm:text-sm text-gray-500">{notification.time}</span>
                        <Button variant="ghost" size="sm" className="rounded-full p-1 h-6 w-6 sm:h-8 sm:w-8">
                          <X className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{notification.message}</p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                      {notification.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant={index === 0 ? "default" : "outline"}
                          size="sm"
                          className="rounded-xl text-xs sm:text-sm h-8 sm:h-9"
                        >
                          {action}
                        </Button>
                      ))}
                      {!notification.read && (
                        <Button variant="ghost" size="sm" className="rounded-xl text-xs sm:text-sm h-8 sm:h-9">
                          <Eye className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Marcar como leído</span>
                          <span className="sm:hidden">Leído</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pb-4">
          <Button variant="outline" className="rounded-xl text-sm sm:text-base h-10 sm:h-11">
            Marcar Todas como Leídas
          </Button>
          <Button variant="outline" className="rounded-xl text-sm sm:text-base h-10 sm:h-11">
            Configurar Notificaciones
          </Button>
        </div>
      </div>
    </div>
  )
}
