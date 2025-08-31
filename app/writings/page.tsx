"use client"

import Link from "next/link"
import { writings } from "@/lib/data"

export default function WritingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="flex justify-start">
          {/* Back link */}
          <Link href="/" className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base">
            ← Back
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Writing section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-20 lg:w-24 flex-shrink-0">
              <h1 className="text-gray-500 font-normal text-sm sm:text-base">Writing</h1>
            </div>
            <div className="flex-1">
              <div className="space-y-4 sm:space-y-6">
                {writings.map((writing, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex-1">
                      {writing.link !== "#" ? (
                        <Link 
                          href={writing.link} 
                          className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {writing.title}
                        </Link>
                      ) : (
                        <span className="text-black text-sm sm:text-base">
                          {writing.title}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">{writing.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}