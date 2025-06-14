"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Settings, Shield, Clock, Bell, Palette, Heart } from "lucide-react"

export function SettingsScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Configuración</h1>
          <p className="text-base sm:text-lg text-gray-600">Personaliza tu experiencia con NINA</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Safety Settings */}
          <Card className="nina-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Configuración de Seguridad
              </CardTitle>
              <CardDescription>Controles de protección y filtros de contenido</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="safe-search" className="text-sm font-medium">
                  Búsqueda Segura
                </Label>
                <Switch id="safe-search" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="block-ads" className="text-sm font-medium">
                  Bloquear Anuncios
                </Label>
                <Switch id="block-ads" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="content-filter" className="text-sm font-medium">
                  Filtro de Contenido Estricto
                </Label>
                <Switch id="content-filter" defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label className="text-sm font-medium">Sitios Web Permitidos</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-xl">
                    khan-academy.org
                  </Badge>
                  <Badge variant="secondary" className="rounded-xl">
                    scratch.mit.edu
                  </Badge>
                  <Badge variant="secondary" className="rounded-xl">
                    youtube.com/kids
                  </Badge>
                </div>
                <Input placeholder="Agregar nuevo sitio web..." className="rounded-xl" />
              </div>
            </CardContent>
          </Card>

          {/* Time Controls */}
          <Card className="nina-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Control de Tiempo
              </CardTitle>
              <CardDescription>Límites de tiempo de pantalla y horarios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Tiempo Diario Máximo</Label>
                <Input type="number" defaultValue="120" className="rounded-xl" />
                <p className="text-xs text-gray-600">Minutos por día</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Horario Permitido</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="time" defaultValue="08:00" className="rounded-xl" />
                  <Input type="time" defaultValue="20:00" className="rounded-xl" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="weekend-extended" className="text-sm font-medium">
                  Tiempo Extendido Fines de Semana
                </Label>
                <Switch id="weekend-extended" />
              </div>
            </CardContent>
          </Card>

          {/* Application Restrictions */}
          <Card className="nina-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Restricción de Aplicaciones
              </CardTitle>
              <CardDescription>Controlar el acceso a aplicaciones y programas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="block-all-apps" className="text-sm font-medium">
                  Bloquear Todas las Aplicaciones por Defecto
                </Label>
                <Switch id="block-all-apps" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label className="text-sm font-medium">Aplicaciones Permitidas</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-xl bg-green-100 text-green-800">
                    📚 Khan Academy Kids
                  </Badge>
                  <Badge variant="secondary" className="rounded-xl bg-green-100 text-green-800">
                    🎨 Scratch Jr
                  </Badge>
                  <Badge variant="secondary" className="rounded-xl bg-green-100 text-green-800">
                    🧮 Calculadora
                  </Badge>
                  <Badge variant="secondary" className="rounded-xl bg-green-100 text-green-800">
                    📝 Bloc de Notas
                  </Badge>
                </div>
                <Input placeholder="Agregar nueva aplicación..." className="rounded-xl" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label className="text-sm font-medium">Aplicaciones Bloqueadas</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="destructive" className="rounded-xl">
                    🎮 Steam
                  </Badge>
                  <Badge variant="destructive" className="rounded-xl">
                    💬 Discord
                  </Badge>
                  <Badge variant="destructive" className="rounded-xl">
                    📱 TikTok
                  </Badge>
                  <Badge variant="destructive" className="rounded-xl">
                    🎵 Spotify
                  </Badge>
                </div>
                <Input placeholder="Agregar aplicación a bloquear..." className="rounded-xl" />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label className="text-sm font-medium">Configuración Avanzada</Label>
                <div className="flex items-center justify-between">
                  <Label htmlFor="block-installers" className="text-sm font-medium">
                    Bloquear Instaladores (.exe, .msi)
                  </Label>
                  <Switch id="block-installers" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="block-browsers" className="text-sm font-medium">
                    Restringir Navegadores Alternativos
                  </Label>
                  <Switch id="block-browsers" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="block-system-apps" className="text-sm font-medium">
                    Bloquear Aplicaciones del Sistema
                  </Label>
                  <Switch id="block-system-apps" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Horario de Restricción de Apps</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-600">Desde</Label>
                    <Input type="time" defaultValue="22:00" className="rounded-xl" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-600">Hasta</Label>
                    <Input type="time" defaultValue="07:00" className="rounded-xl" />
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Durante este horario, solo las apps educativas estarán disponibles
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="nina-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificaciones
              </CardTitle>
              <CardDescription>Configurar alertas y recordatorios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="activity-alerts" className="text-sm font-medium">
                  Alertas de Actividad
                </Label>
                <Switch id="activity-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="time-warnings" className="text-sm font-medium">
                  Avisos de Tiempo
                </Label>
                <Switch id="time-warnings" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="safety-alerts" className="text-sm font-medium">
                  Alertas de Seguridad
                </Label>
                <Switch id="safety-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="achievement-notifications" className="text-sm font-medium">
                  Notificaciones de Logros
                </Label>
                <Switch id="achievement-notifications" />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="nina-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Apariencia
              </CardTitle>
              <CardDescription>Personalizar la interfaz y tema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-sm font-medium">
                  Modo Oscuro
                </Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text" className="text-sm font-medium">
                  Texto Grande
                </Label>
                <Switch id="large-text" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Tema de Color</Label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border-2 border-blue-600"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full cursor-pointer"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Settings */}
        <Card className="nina-card border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Heart className="h-5 w-5" />
              Configuración de Emergencia
            </CardTitle>
            <CardDescription>Contactos y opciones para situaciones de ayuda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Contacto de Emergencia</Label>
              <Input placeholder="Número de teléfono del tutor" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email de Emergencia</Label>
              <Input type="email" placeholder="email@tutor.com" className="rounded-xl" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-help" className="text-sm font-medium">
                Ayuda Automática Activada
              </Label>
              <Switch id="auto-help" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-center pb-4">
          <Button
            size="lg"
            className="rounded-2xl px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          >
            Guardar Configuración
          </Button>
        </div>
      </div>
    </div>
  )
}
