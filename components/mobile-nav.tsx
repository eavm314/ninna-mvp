"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, Home, User, Bell, Settings, Shield, Heart, Gamepad2, LogOut } from "lucide-react"
import { useAuth } from "./auth-context"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    setOpen(false)
    router.push("/")
  }

  // Show all navigation items regardless of authentication status
  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/user-type", label: "Elegir Tipo de Usuario", icon: User },
    { href: "/child-dashboard", label: "Dashboard Niño", icon: Gamepad2 },
    { href: "/parent-dashboard", label: "Panel Parental", icon: Shield },
    { href: "/notifications", label: "Notificaciones", icon: Bell, badge: "2" },
    { href: "/profile-setup", label: "Configurar Perfil", icon: User },
    { href: "/settings", label: "Configuración", icon: Settings },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <div className="nina-gradient h-full flex flex-col">
            {/* Header */}
            <div className="p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12 border-2 border-white/30">
                  <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xl">
                    🦸‍♀️
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-bold text-lg">NINA</h2>
                  <p className="text-sm opacity-90">Navegación Segura</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="px-4 space-y-2 flex-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 p-3 rounded-xl text-white hover:bg-white/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{item.badge}</Badge>
                    )}
                  </div>
                </Link>
              ))}

              <Separator className="my-4 bg-white/20" />

              {/* Logout Button - only show if user is logged in */}
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 p-3 rounded-xl text-white hover:bg-white/20 transition-colors w-full text-left"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Cerrar Sesión</span>
                </button>
              )}
            </div>

            {/* Help Button */}
            <div className="p-4">
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-2xl py-3 shadow-lg"
                onClick={() => setOpen(false)}
              >
                <Heart className="mr-2 h-4 w-4" />
                ¡Necesito Ayuda!
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
