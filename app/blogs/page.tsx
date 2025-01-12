import { Navigation } from "@/components/navigation"
import { BlogPostCard } from "@/components/blog-post-card"

const blogPosts = [
  {
    id: "1",
    title: "The Future of Blockchain in Finance",
    excerpt: "Exploring how blockchain technology is revolutionizing the financial sector and what it means for the future of banking and investments.",
    date: "2025-03-15",
    readTime: "5 min",
    tags: ["Blockchain", "Finance", "Technology"]
  },
  {
    id: "2",
    title: "AI-Powered Code Generation: A Developer's Perspective",
    excerpt: "An in-depth look at how AI is changing the landscape of software development, with insights from my experience using AI coding assistants.",
    date: "2025-02-28",
    readTime: "7 min",
    tags: ["AI", "Programming", "Software Development"]
  },
  {
    id: "3",
    title: "Mathematics in Cryptography: From Theory to Practice",
    excerpt: "Diving into the mathematical foundations of modern cryptography and how they're applied in blockchain and secure communications.",
    date: "2025-01-10",
    readTime: "10 min",
    tags: ["Mathematics", "Cryptography", "Blockchain"]
  },
  {
    id: "4",
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Sharing lessons learned and best practices from developing high-performance web applications using Next.js and React.",
    date: "2024-12-05",
    readTime: "8 min",
    tags: ["Web Development", "Next.js", "React"]
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

