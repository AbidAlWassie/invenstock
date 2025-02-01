// app/demo/layout.tsx
import { AppSidebar } from "@/components/sidebar/demo-sidebar";
import type React from "react";
// import "./../globals.css";





export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex">
        <main className="flex-1 overflow-auto p-6">{children}</main>
          <AppSidebar />
      </div>
  );
}