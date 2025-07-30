// app/users/page.tsx
"use client"
import AuthGuard from "@/components/AuthGuard"

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "Viewer" },
]

export default function UsersPage() {
  return (
    <AuthGuard roles={["Admin", "Editor"]}>
    <div>
      <h2 className="text-xl font-semibold mb-4">Users Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AuthGuard>
  )
}