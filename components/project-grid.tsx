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
    "title": "IMIT8",
    "description": "SocialFi platform integrating gamification",
    "type": "project",
    "image": "https://cdn.loom.com/sessions/thumbnails/5c4c813f9b7b4301beb090d4af0acf8b-dc2c529cfcefacd7-full-play.gif",
    "link": "https://github.com/Pravesh-mansharamani/Imit8",
    "content": "Developed an Avalanche L1 blockchain-based platform where users imitate emojis to earn IMIT tokens. Includes a scoring ML model, dApp, and gamified social engagement. Won 1st place at MBC 2024",
    "technologies": ["Python", "ML", "Avalanche L1", "Smart Contracts", "Facial Recognition"]
  },
  {
    "title": "CAPCHECK",
    "description": "Fraud detection for trading communities usijng ZK Proofs",
    "type": "project",
    "image": "assets/capcheck.png",
    "link": "https://ethglobal.com/showcase/cap-or-no-cap-m8k1t",
    "content": "CapCheck uses RISC Zero technology and an interactive Telegram bot to verify trading profit claims. It helps ensure transparency and detect fraudulent activity in trading communities. Won the zircuits best telegram mini app at ETH Global Bangkok 2024",
    "technologies": ["RISC Zero", "Telegram Bot", "Zircuit", "ZK Proofs", "Rust"]
  },
  {
    "title": "NETHERMIND",
    "description": "Building AI and blockchain solutions",
    "type": "work",
    "image": "assets/nethermind.png",
    "link": "https://auditagent.nethermind.io/",
    "content": "Implemented an ML pipeline to detect over 12 vulnerability types in EVM-based smart contracts with 97% precision. Created an AI-powered Slack bot using LangChain, Pinecone, and Python, saving 500+ hours annually. Built an SDK to accelerate internal AI agent development by 7x and deployed a CI/CD pipeline, reducing deployment time by 50% while catching 95% of pre-production bugs.",
    "technologies": ["Python", "LangChain", "Pinecone", "Docker", "GitHub Actions"]
  },
  {
    "title": "Waterloo Blockchain Leadership",
    "description": "Led Waterloo Blockchain, Canada's largest and most active blockchain club, driving innovation, education, and community engagement in Web3 technologies.",
    "type": "work",
    "image": "assets/waterlooblockchain.png",
    "link": "https://waterlooblockchain.ca",
    "content": "As the leader of Waterloo Blockchain, I spearheaded initiatives to establish the club as the largest and most influential blockchain organization in Canada, recognized globally as a top 3 university blockchain club. My role involved organizing educational workshops, hackathons, and networking events to foster a thriving blockchain ecosystem. I collaborated with industry leaders, partnered with blockchain startups, and mentored students in building decentralized applications and smart contracts. Through strategic planning and execution, I helped expand the club's impact and presence in the global blockchain community.",
    "technologies": ["Blockchain", "Web3", "EVM", "Smart Contracts", "Community Building", "Event Organization"]
  },
  {
    "title": "HEDERA HABIBIS",
    "description": "Twitter bot that tweets noteworthy transactions on Hedera",
    "type": "project",
    "image": "assets/hederahabibi.png",
    "link": "https://devfolio.co/projects/hedera-habibis-4693",
    "content": "Developed a bot to provide engaging updates about noteworthy transactions and high-value accounts on the Hedera network. Won the Hedera track at ETH Denver 2024",
    "technologies": ["Python", "Hedera SDK", "REST API", "Tweepy", "AWS"]
  },
  {
    "title": "MRGOOSE",
    "description": "Innovative token ecosystem with app integration",
    "type": "project",
    "image": "assets/mrgoose.png",
    "link": "https://github.com/WaterlooBlockchain/MRGOOSE",
    "content": "Designed the $MrGoose token on Solana, developed tokenomics, and built a mobile app for airdrops and merch purchases. Achieved 250k tokens in circulation and won Solana Track at ETHDenver 2024.",
    "technologies": ["Solana", "Tokenomics", "React Native", "Blockchain"]
  },
  {
    "title": "RIVVI",
    "description": "Fintech for HR and Payroll",
    "type": "work",
    "image": "assets/rivvi.png",
    "link": "https://www.rivvi.com/",
    "content": "Developed an AI chatbot for HR and payroll queries using Python, React, and AWS, reducing query resolution time by 50%. Optimized a Next.js landing page, increasing user sign-ups by 20%. Built a Flask HTTP server with exclusive API endpoints for premium users, boosting API revenue by 30%. Ensured platform uptime by implementing Python test scripts with 90% coverage.",
    "technologies": ["Python", "React", "Next.js", "AWS", "Flask"]
  },
  {
    "title": "FLOWISE AI(YC S23)",
    "description": "Best no code tool for building LLM chatbots",
    "type": "work",
    "image": "assets/flowiseai.png",
    "link": "https://github.com/FlowiseAI/Flowise/pull/341",
    "content": "Contributed key features like a Figma loader and LaTeX text splitter, enhancing functionality for over 60,000+ users.",
    "technologies": ["TypeScript", "LangChain", "Node.js", "Figma"]
  },
  {
    "title": "CERTUARY",
    "description": "Digital certificates stored on IPFS and secured using blockchain",
    "type": "project",
    "image": "assets/centuary.png",
    "link": "https://devpost.com/software/certuary",
    "content": "Certuary creates tamper-proof and verifiable digital certificates. Leveraging blockchain technology and IPFS, it ensures authenticity and decentralization for certificate management.",
    "technologies": ["Python", "React", "Tailwind CSS", "FastAPI"]
  },
  {
    "title": "LIFESTYLE NUTRITION",
    "description": "E-commerce platform for protein products",
    "type": "project",
    "image": "assets/lifestyle.png",
    "link": "https://lifestyle-nutrition.vercel.app/",
    "content": "Developed an e-commerce platform for my fathers protein business that has processed over 6,000 orders.",
    "technologies": ["React", "Express", "PostgreSQL", "Redis", "Tailwind CSS", "AWS"]
  },
  {
    "title": "SMS SPAM CLASSIFIER",
    "description": "A high-accuracy machine learning model designed to classify SMS messages as spam or ham, achieving 97% accuracy and 100% precision.",
    "type": "project",
    "image": "assets/spam.png",
    "link": "https://github.com/Pravesh-mansharamani/SMS-spam-classifier-",
    "content": "This project leverages machine learning and natural language processing (NLP) to build a reliable SMS spam detection system. It ensures high accuracy and zero false positives, with practical applications in messaging apps, telecom systems, and inbox management tools. The classifier demonstrates efficient text analysis and is built using Python, scikit-learn, and related libraries.",
    "technologies": ["Machine Learning", "Python", "scikit-learn", "pandas", "numpy", "Natural Language Processing (NLP)"]
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

