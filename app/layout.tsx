import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pravesh Mansharamani",
  description: "My Site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-base leading-normal antialiased">
        {children}
      </body>
    </html>
  )
}

