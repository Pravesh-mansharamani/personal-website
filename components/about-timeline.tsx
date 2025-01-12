'use client'

import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: 2025,
    events: [
      "Completed internship at AI research lab, focusing on natural language processing",
      "Presented research paper on advanced machine learning techniques at international conference",
      "Launched personal tech blog, sharing insights on emerging technologies"
    ]
  },
  {
    year: 2024,
    events: [
      "Secured full-stack developer position at a tech startup",
      "Developed and deployed a scalable e-commerce platform using Next.js and GraphQL",
      "Contributed to open-source projects in the React ecosystem"
    ]
  },
  {
    year: 2023,
    events: [
      "Completed software engineering internship at a major tech company",
      "Led university hackathon team to first place with an innovative AI-powered app",
      "Achieved Dean's List for academic excellence in Computer Science program"
    ]
  },
  {
    year: 2022,
    events: [
      "Began studies in Software Engineering at University of Waterloo",
      "Developed first mobile app using React Native, published on App Store",
      "Started learning machine learning and data science fundamentals"
    ]
  }
]

export function AboutTimeline() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">About Me</h1>
        <div className="space-y-12">
          {timelineEvents.map((yearEvents, index) => (
            <motion.div
              key={yearEvents.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{yearEvents.year}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {yearEvents.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="text-zinc-300">{event}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

