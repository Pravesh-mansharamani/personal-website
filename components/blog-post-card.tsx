'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-400/50 transition-colors"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-zinc-400">{post.date}</p>
            <p className="text-xs text-zinc-500">{post.readTime} read</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-zinc-400 mb-4">{post.excerpt}</p>
        <Link href={`/blogs/${post.id}`} className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors">
          Read more <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

