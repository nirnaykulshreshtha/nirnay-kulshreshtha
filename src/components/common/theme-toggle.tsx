/**
 * Theme Toggle Component
 * 
 * A simple toggle button that switches between light and dark themes.
 * Provides smooth transitions and visual feedback for theme changes.
 * 
 * Features:
 * - Clean toggle button design
 * - Smooth icon transitions
 * - Light and dark mode only
 * - Accessible with proper ARIA labels
 */

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="h-14 w-14 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-6 w-6 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
