// components/Topbar.tsx
"use client"
import { CircleUser } from "lucide-react"

export function Topbar() {
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between bg-white">
      <h1 className="text-lg font-semibold">Dashboard Admin</h1>
      <div className="flex items-center gap-3">
        <CircleUser className="w-6 h-6" />
        <span className="text-sm">Admin User</span>
      </div>
    </header>
  )
}