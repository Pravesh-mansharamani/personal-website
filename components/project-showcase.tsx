"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "AI Code Assistant",
    description: "An AI-powered code completion and suggestion tool built with OpenAI's GPT-4",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TypeScript", "React", "OpenAI", "TailwindCSS"],
    link: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for monitoring and analyzing real-time data streams",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "WebSocket", "D3.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Blockchain Explorer",
    description: "A modern interface for exploring and analyzing blockchain transactions",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Web3.js", "GraphQL", "Node.js"],
    link: "#"
  }
]

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Featured Projects
          <span className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`cursor-pointer transition-colors hover:bg-zinc-900/50 backdrop-blur-sm border-zinc-800
                  ${activeIndex === index ? 'bg-zinc-900/50' : 'bg-black/50'}`}
                onClick={() => setActiveIndex(index)}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative aspect-video">
            <Image
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              fill
              className="object-cover rounded-lg"
            />
            <Button
              variant="outline"
              className="absolute bottom-4 right-4 gap-2"
              asChild
            >
              <a href={projects[activeIndex].link}>
                View Project <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

