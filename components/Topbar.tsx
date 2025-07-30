"use client"
import { CircleUser, Menu, Sun, Moon, LogOut } from "lucide-react"
import { useUI } from "@/context/UIContext"
import { useAuth } from "@/context/AuthContext"

export function Topbar() {
  const { toggleTheme, dark, toggleSidebar } = useUI()
  const { user, logout } = useAuth()
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between bg-white dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="md:hidden"> <Menu className="w-6 h-6" /> </button>
        <h1 className="text-lg font-semibold">Dashboard Admin</h1>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme}>{dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
        <CircleUser className="w-6 h-6" />
        <span className="text-sm">{user?.name}</span>
        <button onClick={logout}><LogOut className="w-5 h-5" /></button>
      </div>
    </header>
  )
}
