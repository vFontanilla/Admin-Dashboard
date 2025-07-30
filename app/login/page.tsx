"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useState, useEffect } from "react"

export default function LoginPage() {
  const { user, login } = useAuth()
  const router = useRouter()
  const [name, setName] = useState("")
  const [role, setRole] = useState("Viewer")

  useEffect(() => {
    if (user) router.replace("/dashboard")
  }, [user, router])

  if (user) return null

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(name || "User", role)
    router.replace("/dashboard")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Login</h2>
        <div>
          <label className="block text-sm">Name</label>
          <input className="border px-2 py-1 w-full" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select className="border px-2 py-1 w-full" value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Login</button>
      </form>
    </div>
  )
}
