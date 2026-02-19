"use client"

import Link from "next/link"
import Image from "next/image"
import { personalInfo, workExperience } from "@/lib/data"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white lowercase flex flex-col" style={{backgroundColor: '#FFFFFF'}}>
      {/* Header - centered BIGP */}
      <header className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
        <h1 className="text-black uppercase leading-none text-center" style={{ fontFamily: 'var(--font-archivo-black)', fontSize: 'clamp(36px, 5vw, 48px)' }}>BIGP</h1>
      </header>

      {/* Main content */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex-1">
        {/* About section */}
        <section className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-28 lg:w-32 flex-shrink-0">
              <h2 className="text-gray-500 font-normal text-lg">about</h2>
            </div>
            <div className="flex-1 text-black leading-relaxed text-lg">
              <p className="mb-4 sm:mb-5">
                co-founder at <Link href="https://totalis.trade" className="underline decoration-dotted underline-offset-4 text-black hover:text-gray-600 transition-colors" target="_blank">totalis</Link> — building derivative products for prediction markets.
              </p>
              <p className="mb-4 sm:mb-5">
                on leave from <Link href="https://uwaterloo.ca" className="underline decoration-dotted underline-offset-4 text-black hover:text-gray-600 transition-colors" target="_blank">waterloo</Link>.
              </p>
              <p className="mb-4 sm:mb-5">
                always side quest maxxing — <Link href="https://www.youtube.com/@ImTheBigP" className="underline decoration-dotted underline-offset-4 text-black hover:text-gray-600 transition-colors" target="_blank">music</Link>, <Link href="https://linktr.ee/decodedpodcast" className="underline decoration-dotted underline-offset-4 text-black hover:text-gray-600 transition-colors" target="_blank">podcast</Link> & poker.
              </p>
              <p className="text-lg">
                don't be a stranger, reach out and say hi — <Link href="mailto:pravesh@totalis.trade" className="underline decoration-dotted underline-offset-4 text-black hover:text-gray-600 transition-colors">pravesh@totalis.trade</Link> (we're hiring)
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience section */}
        <section className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-28 lg:w-32 flex-shrink-0">
              <h2 className="text-gray-500 font-normal text-lg">experience</h2>
            </div>
            <div className="flex-1">
              <div className="space-y-4 sm:space-y-5">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                    {/* Company logo */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-50 rounded flex items-center justify-center">
                      {job.logo ? (
                        <Link href={job.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full rounded hover:bg-gray-100 transition-colors">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={40}
                            height={40}
                            className="rounded object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const nextEl = target.nextElementSibling as HTMLElement;
                              if (nextEl) nextEl.style.display = 'flex';
                            }}
                          />
                        </Link>
                      ) : null}
                      <span className="text-sm sm:text-base font-medium text-gray-600 hidden">
                        {job.company.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-normal text-lg truncate sm:whitespace-normal">{job.role} @ {job.company}</p>
                          <p className="text-gray-600 text-base mt-1">{job.description}</p>
                        </div>
                        <span className="text-gray-400 text-base whitespace-nowrap flex-shrink-0">{job.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <Link href={personalInfo.github} className="text-black hover:text-gray-600 transition-colors underline text-lg" target="_blank">
            github
          </Link>
          <Link href={personalInfo.X} className="text-black hover:text-gray-600 transition-colors underline text-lg" target="_blank">
            x
          </Link>
          <Link href={personalInfo.linkedin} className="text-black hover:text-gray-600 transition-colors underline text-lg" target="_blank">
            linkedin
          </Link>
        </nav>
      </footer>
      <Analytics />
    </div>
  )
}
