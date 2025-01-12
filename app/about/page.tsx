import { Navigation } from "@/components/navigation"
import { AboutTimeline } from "@/components/about-timeline"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-[-10%] right-[20%] h-[500px] w-[500px] bg-white/10 rounded-full blur-[128px] opacity-20" />
      </div>
      
      <div className="relative">
        <Navigation />
        <AboutTimeline />
      </div>
    </main>
  )
}

