"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Orbitron, Instrument_Sans } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })
const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h1 className={`${orbitron.className} text-6xl md:text-7xl font-bold tracking-tighter text-white`}>
          PRAVESH MANSHARAMANI
        </h1>
        
        <div className={`${instrumentSans.className} space-y-4 text-xl text-zinc-400`}>
          <p>software engineering @ university of waterloo</p>
          <p>full stack developer @ tech startup</p>
          <p>ai researcher @ research lab</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com" className="text-zinc-400 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:email@example.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

