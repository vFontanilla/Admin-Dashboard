// components/Sidebar.tsx
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Settings } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition ${
              pathname === href ? "bg-gray-200 font-medium" : ""
            }`}
          >
            <Icon className="h-5 w-5" />
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}