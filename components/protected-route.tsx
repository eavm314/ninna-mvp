"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-context"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredUserType?: "parent" | "child"
}

export function ProtectedRoute({ children, requiredUserType }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth")
      return
    }

    if (requiredUserType && user?.type !== requiredUserType) {
      // Redirect to appropriate dashboard based on user type
      if (user?.type === "parent") {
        router.push("/parent-dashboard")
      } else {
        router.push("/child-dashboard")
      }
    }
  }, [isAuthenticated, user, requiredUserType, router])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen nina-gradient flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Verificando autenticación...</p>
        </div>
      </div>
    )
  }

  if (requiredUserType && user?.type !== requiredUserType) {
    return (
      <div className="min-h-screen nina-gradient flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Redirigiendo...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
