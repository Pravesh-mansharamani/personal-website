import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pravesh Mansharamani",
  description: "My Site",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cstyle%3E.text%7Bfont-family:system-ui,sans-serif;font-size:28px;font-weight:bold;fill:%23000%7D%3C/style%3E%3Crect width='100' height='100' fill='%23fff'/%3E%3Ctext x='50' y='60' text-anchor='middle' class='text'%3EBig P%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      }
    ],
    shortcut: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cstyle%3E.text%7Bfont-family:system-ui,sans-serif;font-size:28px;font-weight:bold;fill:%23000%7D%3C/style%3E%3Crect width='100' height='100' fill='%23fff'/%3E%3Ctext x='50' y='60' text-anchor='middle' class='text'%3EBig P%3C/text%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cstyle%3E.text%7Bfont-family:system-ui,sans-serif;font-size:28px;font-weight:bold;fill:%23000%7D%3C/style%3E%3Crect width='100' height='100' fill='%23fff'/%3E%3Ctext x='50' y='60' text-anchor='middle' class='text'%3EBig P%3C/text%3E%3C/svg%3E"
  }
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

