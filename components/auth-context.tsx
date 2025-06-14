"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  email: string
  type: "parent" | "child"
}

interface AuthContextType {
  user: User | null
  login: (email: string, type: "parent" | "child") => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for stored user on mount
    const storedUserType = localStorage.getItem("nina-user-type")
    const storedUserEmail = localStorage.getItem("nina-user-email")

    if (storedUserType && storedUserEmail) {
      setUser({
        email: storedUserEmail,
        type: storedUserType as "parent" | "child",
      })
    }
  }, [])

  const login = (email: string, type: "parent" | "child") => {
    setUser({ email, type })
    localStorage.setItem("nina-user-type", type)
    localStorage.setItem("nina-user-email", email)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("nina-user-type")
    localStorage.removeItem("nina-user-email")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
