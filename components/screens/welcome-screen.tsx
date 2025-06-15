"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play, Sparkles } from "lucide-react"
import Link from "next/link"

export function WelcomeScreen() {
  return (
    <div className="min-h-screen nina-gradient flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Panel - Welcome Content */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 text-white order-2 lg:order-1">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
              ¡Hola! Soy{" "}
              <span className="inline-flex items-center gap-1 sm:gap-2">
                NINNA
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto lg:mx-0">
              Tu compañera inteligente para navegar de forma segura por internet. Juntos exploraremos el mundo digital
              de manera divertida y protegida.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <Link href="/user-type">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto"
              >
                Comenzar Aventura
              </Button>
            </Link>

            <div className="flex justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/20 rounded-2xl text-sm sm:text-base">
                    <Play className="mr-2 h-4 w-4" />
                    Ver Video de Introducción
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-4xl mx-4">
                  <video controls className="w-full h-full rounded-lg" poster="/logo.jpeg">
                    <source src="/ninna.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Right Panel - Character Avatar */}
        <div className="flex justify-center order-1 lg:order-2">
          <Card className="nina-card p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <img
                    src="/logo.jpeg"
                    alt="NINNA Logo"
                    className="size-full sm:w-32 sm:h-32 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">NINNA</h3>
                  <p className="text-sm sm:text-base text-gray-600">Tu Asistente Digital</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
