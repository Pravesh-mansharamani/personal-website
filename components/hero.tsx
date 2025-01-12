"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Orbitron, Instrument_Sans, Roboto_Mono } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })
const instrumentSans = Instrument_Sans({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h1 className={`${orbitron.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white`}>
          PRAVESH MANSHARAMANI
        </h1>
        
        <div className={`${instrumentSans.className} space-y-2 sm:space-y-4 text-base sm:text-lg md:text-xl text-zinc-400`}>
          <p>Engineer based in Toronto, building at the intersection of <span className={`${robotoMono.className} text-orange-400`}>Blockchain</span> and <span className={`${robotoMono.className} text-orange-400`}>AI</span>.</p>
          <p>Studying <span className={`${robotoMono.className} text-orange-400`}>Mathematics</span> at the University of Waterloo. VP at Waterloo Blockchain.</p>
          <p>Currently at EasyLabs. Previously at Nethermind, Rivvi, and Flowise AI (YC S23).</p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a href="https://github.com/Pravesh-mansharamani" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/pravesh-mansharamani/" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/ImTheBigP" className="text-zinc-400 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:praveshramani295@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

