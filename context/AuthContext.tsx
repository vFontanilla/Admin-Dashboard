"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type User = {
  name: string
  role: string
}

type AuthContextValue = {
  user: User | null
  login: (name: string, role: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("auth_user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const login = (name: string, role: string) => {
    const u = { name, role }
    setUser(u)
    localStorage.setItem("auth_user", JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth_user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
