"use client"

import type React from "react"

import { MobileNav } from "./mobile-nav"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface LayoutWrapperProps {
  children: React.ReactNode
  showMobileNav?: boolean
}

export function LayoutWrapper({ children, showMobileNav = true }: LayoutWrapperProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative">
      {/* Mobile Navigation Header */}
      {showMobileNav && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-500 to-purple-600 p-4">
          <div className="flex items-center justify-between">
            <MobileNav />
            <div className="text-white font-bold text-lg">NINA</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={showMobileNav ? "md:pt-0 pt-16" : ""}>{children}</div>
    </div>
  )
}
