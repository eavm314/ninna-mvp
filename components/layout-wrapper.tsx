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
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 p-4">
          <div className="flex items-center justify-between">
            <MobileNav />
            <div className="text-white font-bold text-lg">NINA</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={showMobileNav ? "md:pt-0 pt-16" : ""}>{children}</div>
    </div>
  )
}
