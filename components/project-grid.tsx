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
    "title": "NETHERMIND",
    "description": "Building AI and blockchain solutions",
    "type": "work",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://auditagent.nethermind.io/",
    "content": "Implemented an ML pipeline to detect over 12 vulnerability types in EVM-based smart contracts with 97% precision. Created an AI-powered Slack bot using LangChain, Pinecone, and Python, saving 500+ hours annually. Built an SDK to accelerate internal AI agent development by 7x and deployed a CI/CD pipeline, reducing deployment time by 50% while catching 95% of pre-production bugs.",
    "technologies": ["Python", "LangChain", "Pinecone", "Docker", "GitHub Actions"]
  },
  {
    "title": "RIVVI",
    "description": "Fintech for HR and Payroll",
    "type": "work",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://www.rivvi.com/",
    "content": "Developed an AI chatbot for HR and payroll queries using Python, React, and AWS, reducing query resolution time by 50%. Optimized a Next.js landing page, increasing user sign-ups by 20%. Built a Flask HTTP server with exclusive API endpoints for premium users, boosting API revenue by 30%. Ensured platform uptime by implementing Python test scripts with 90% coverage.",
    "technologies": ["Python", "React", "Next.js", "AWS", "Flask"]
  },
  {
    "title": "FLOWISE AI(YC S23)",
    "description": "Best no code tool for building LLM chatbots",
    "type": "work",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://github.com/FlowiseAI/Flowise/pull/341",
    "content": "Contributed key features like a Figma loader and LaTeX text splitter, enhancing functionality for over 60,000 users. Optimized backend ramp-up time by 25% using multi-threading and parallelization techniques.",
    "technologies": ["TypeScript", "LangChain", "Node.js", "Figma"]
  },
  {
    "title": "CERTUARY",
    "description": "Digital certificates stored on IPFS and secured using blockchain",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://devpost.com/software/certuary",
    "content": "Certuary creates tamper-proof and verifiable digital certificates. Leveraging blockchain technology and IPFS, it ensures authenticity and decentralization for certificate management.",
    "technologies": ["Python", "React", "Tailwind CSS", "FastAPI"]
  },
  {
    "title": "HEDERA HABIBIS",
    "description": "Twitter bot that tweets noteworthy transactions on Hedera",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://devfolio.co/projects/hedera-habibis-4693",
    "content": "Developed a bot to provide engaging updates about noteworthy transactions and high-value accounts on the Hedera network. The solution integrates AWS, Hedera SDK, and REST APIs.",
    "technologies": ["Python", "Hedera SDK", "REST API", "Tweepy", "AWS"]
  },
  {
    "title": "MRGOOSE",
    "description": "Innovative token ecosystem with app integration",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://github.com/WaterlooBlockchain/MRGOOSE",
    "content": "Designed the $MrGoose token on Solana, developed tokenomics, and built a mobile app for airdrops and merch purchases. Achieved 250k tokens in circulation and won Solana Track at ETHDenver.",
    "technologies": ["Solana", "Tokenomics", "React Native", "Blockchain"]
  },
  {
    "title": "CAPCHECK",
    "description": "Fraud detection for trading communities usijng ZK Proofs",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://ethglobal.com/showcase/cap-or-no-cap-m8k1t",
    "content": "CapCheck uses RISC Zero technology and an interactive Telegram bot to verify trading profit claims. It helps ensure transparency and detect fraudulent activity in trading communities.",
    "technologies": ["RISC Zero", "Telegram Bot", "Zircuit", "ZK Proofs"]
  },
  {
    "title": "IMIT8",
    "description": "SocialFi platform integrating gamification",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://github.com/Pravesh-mansharamani/Imit8",
    "content": "Developed an Avalanche L1 blockchain-based platform where users imitate emojis to earn IMIT tokens. Includes a scoring ML model, dApp, and gamified social engagement.",
    "technologies": ["Python", "ML", "Avalanche L1", "Smart Contracts", "Facial Recognition"]
  },
  {
    "title": "LIFESTYLE NUTRITION",
    "description": "E-commerce platform for protein products",
    "type": "project",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%206.20.29%E2%80%AFAM-28cmyMIplOVET8cSULaSOBZsQj4H2y.png",
    "link": "https://lifestyle-nutrition.vercel.app/",
    "content": "Developed an e-commerce platform for a protein business that has processed over 6,000 orders. Used AWS and Docker to ensure scalability and reliability.",
    "technologies": ["React", "Express", "PostgreSQL", "Redis", "Tailwind CSS", "AWS"]
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-zinc-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>
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

