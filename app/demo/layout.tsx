// app/demo/layout.tsx
import type React from "react"; // Import React
import "./../globals.css";


export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </>
  );
}