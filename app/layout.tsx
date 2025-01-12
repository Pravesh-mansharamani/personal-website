import type { Metadata } from "next"
import { JetBrains_Mono, Instrument_Sans } from 'next/font/google'
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "Pravesh Mansharamani | Developer",
  description: "Full-stack developer and software engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${instrumentSans.variable} font-mono bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

