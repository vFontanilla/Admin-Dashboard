"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type UIContextValue = {
  dark: boolean
  sidebarCollapsed: boolean
  toggleTheme: () => void
  toggleSidebar: () => void
}

const UIContext = createContext<UIContextValue | undefined>(undefined)

export function UIProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) setDark(storedTheme === "dark")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  const toggleTheme = () => setDark((d) => !d)
  const toggleSidebar = () => setSidebarCollapsed((s) => !s)

  return (
    <UIContext.Provider value={{ dark, sidebarCollapsed, toggleTheme, toggleSidebar }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error("useUI must be used within UIProvider")
  return ctx
}
