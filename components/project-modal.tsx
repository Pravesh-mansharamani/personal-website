"use client"

import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { Project } from './project-grid'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  const isGithubLink = (url: string) => url.includes('github.com');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          onClick={(e) => e.stopPropagation()}
          className="container mx-auto h-[calc(100vh-40px)] mt-5 bg-zinc-900/70 backdrop-blur-md rounded-lg overflow-y-auto max-w-5xl p-4 sm:p-6"
        >
          <div className="sticky top-0 z-10 bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800">
            <div className="container flex items-center justify-between p-4">
              <Button variant="ghost" onClick={onClose} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="ghost" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                  {isGithubLink(project.link) ? (
                    <>
                      GitHub
                      <Github className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Watch
                      <ExternalLink className="w-4 h-4" />
                    </>
                  )}
                </a>
              </Button>
            </div>
          </div>

          <div className="container p-4">
            <div className="max-w-3xl mx-auto space-y-8 py-8">
              <div className="text-center space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>
                <p className="text-zinc-400">{project.type}, 2024</p>
              </div>

              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Timeline</h2>
                  <p className="text-zinc-400">1 Month, November 2024</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Tools</h2>
                  <div className="space-y-1">
                    {project.technologies.map((tech) => (
                      <p key={tech} className="text-zinc-400">{tech}</p>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h2 className="text-xl font-semibold mb-2">Overview</h2>
                  <p className="text-zinc-400">{project.content}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

