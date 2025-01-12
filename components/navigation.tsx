"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/projects", label: "projects" },
    { href: "/photos", label: "photos" },
  ]

  return (
    <nav className="py-6 px-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center gap-12">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm uppercase tracking-wider hover:text-orange-400 transition-colors",
              pathname === href && "text-orange-400"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

