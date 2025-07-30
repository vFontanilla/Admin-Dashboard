"use client"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type Props = {
  children: React.ReactNode
  roles?: string[]
}

export default function AuthGuard({ children, roles }: Props) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.replace("/login")
    else if (roles && !roles.includes(user.role)) router.replace("/login")
  }, [user, router, roles])

  if (!user) return null
  if (roles && !roles.includes(user.role)) return null

  return <>{children}</>
}
