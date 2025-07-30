// app/settings/page.tsx
"use client"
import AuthGuard from "@/components/AuthGuard"

export default function SettingsPage() {
  return (
    <AuthGuard roles={["Admin"]}>
      <h2 className="text-xl font-semibold">Settings</h2>
    </AuthGuard>
  )
}