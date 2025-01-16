import { Navigation } from "@/components/navigation"
import { BlogPostCard } from "@/components/blog-post-card"

const blogPosts = [
  {
    id: "1",
    title: "Coming Soon",
    excerpt: "I will write blogs about the topics I find interesting",
    date: "January 16th, 2025",
    tags: []
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-[-10%] right-[20%] h-[500px] w-[500px] bg-white/10 rounded-full blur-[128px] opacity-20" />
      </div>
      
      <div className="relative">
        <Navigation />
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

