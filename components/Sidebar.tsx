"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Settings } from "lucide-react"
import { useUI } from "@/context/UIContext"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarCollapsed } = useUI()
  return (
    <aside className={`${sidebarCollapsed ? "w-16" : "w-64"} bg-white dark:bg-gray-900 border-r p-4 hidden md:block`}>
      <h2 className="text-2xl font-bold mb-6">{!sidebarCollapsed && "Admin Dashboard"}</h2>
      <nav className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              pathname === href ? "bg-gray-200 dark:bg-gray-700 font-medium" : ""
            }`}
          >
            <Icon className="h-5 w-5" />
            {!sidebarCollapsed && name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
