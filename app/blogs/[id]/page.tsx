import { Navigation } from "@/components/navigation"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

const blogPosts = {
  "1": {
    title: "The Future of Blockchain in Finance",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2025-03-15",
    readTime: "5 min",
    tags: ["Blockchain", "Finance", "Technology"]
  },
  // Add other blog posts here...
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-[-10%] right-[20%] h-[500px] w-[500px] bg-white/10 rounded-full blur-[128px] opacity-20" />
      </div>
      
      <div className="relative">
        <Navigation />
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <Link href="/blogs" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to blogs
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-sm text-zinc-400">{post.date}</p>
            <p className="text-sm text-zinc-400">{post.readTime} read</p>
          </div>
          <div className="prose prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

