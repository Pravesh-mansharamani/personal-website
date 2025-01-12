"use client"

import { useState } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ProjectModal } from "./project-modal"

export interface Project {
  title: string
  description: string
  type: string
  image: string
  link: string
  content: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: "AI Code Assistant",
    description: "An AI-powered code completion and suggestion tool built with OpenAI's GPT-4",
    type: "project",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "The AI Code Assistant is a cutting-edge tool that leverages OpenAI's GPT-4 to provide intelligent code completion and suggestions. It aims to boost developer productivity by offering context-aware code snippets and helping with complex coding tasks.",
    technologies: ["TypeScript", "React", "OpenAI API", "Node.js"]
  },
  {
    title: "Real-time Analytics",
    description: "Interactive dashboard for monitoring and analyzing real-time data streams",
    type: "work",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "Our Real-time Analytics dashboard provides businesses with instant insights into their data streams. Built with scalability in mind, it can handle millions of data points and present them in an intuitive, interactive interface.",
    technologies: ["Next.js", "WebSocket", "D3.js", "PostgreSQL"]
  },
  {
    title: "Blockchain Explorer",
    description: "A modern interface for exploring and analyzing blockchain transactions",
    type: "work",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "This Blockchain Explorer offers a user-friendly way to navigate and understand blockchain data. It's designed for both technical and non-technical users.",
    technologies: ["React", "Ethereum", "GraphQL", "IPFS"]
  },
  {
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for data processing and model training",
    type: "project",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "This project automates the machine learning pipeline, streamlining the process from data preprocessing to model deployment.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "AWS SageMaker"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure management system",
    type: "work",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "Developed a scalable cloud infrastructure management system during my internship, improving efficiency and resource allocation.",
    technologies: ["AWS", "Terraform", "Ansible", "Docker"]
  },
  {
    title: "Data Visualization",
    description: "Interactive data visualization library for complex datasets",
    type: "project",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    link: "#",
    content: "Created an interactive data visualization library to simplify the exploration of complex datasets.",
    technologies: ["D3.js", "JavaScript", "React", "Redux"]
  }
]

interface ProjectGridProps {
  filter?: string
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = filter
    ? projects.filter(project => project.type.toLowerCase() === filter.toLowerCase())
    : projects

  return (
    <section className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-zinc-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

