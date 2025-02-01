// app/demo/layout.tsx
import { AppSidebar } from "@/components/sidebar/demo-sidebar"
import type React from "react"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <AppSidebar className="hidden md:flex" />
      <main className="flex-1">{children}</main>
    </div>
  )
}

