"use client"

import Link from "next/link"
import Image from "next/image"
import { personalInfo, workExperience, building, writings } from "@/lib/data"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{backgroundColor: '#FFFFFF'}}>
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
          {/* Name/Logo */}
          <h1 className="text-xl sm:text-2xl font-normal text-black tracking-wide">Big P</h1>
          
          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6">
            <Link href={`mailto:${personalInfo.email}`} className="text-black hover:text-gray-600 transition-colors underline text-base">
              Email
            </Link>
            <Link href={personalInfo.github} className="text-black hover:text-gray-600 transition-colors underline text-base" target="_blank">
              GitHub
            </Link>
            <Link href={personalInfo.twitter} className="text-black hover:text-gray-600 transition-colors underline text-base" target="_blank">
              Twitter
            </Link>
            <Link href={personalInfo.linkedin} className="text-black hover:text-gray-600 transition-colors underline text-base" target="_blank">
              LinkedIn
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About section */}
        <section className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-24 lg:w-28 flex-shrink-0">
              <h2 className="text-gray-500 font-normal text-base">About</h2>
            </div>
            <div className="flex-1 text-black leading-relaxed text-base">
              <p className="mb-4 sm:mb-5">
                I'm a junior studying Math @ <Link href="https://uwaterloo.ca" className="px-1 rounded transition-colors text-base font-normal text-black hover:text-gray-600" style={{backgroundColor: '#FFFF00'}} target="_blank">Waterloo</Link>. Won 10x hackathons and $44k in prizes. Currently Vice President of <Link href="https://waterlooblockchain.ca" className="px-1 rounded transition-colors text-base font-normal text-black hover:text-gray-600" style={{backgroundColor: '#FFFF00'}} target="_blank">Waterloo Blockchain</Link>. Host of <Link href="https://linktr.ee/decodedpodcast" className="px-1 rounded transition-colors text-base font-normal text-black hover:text-gray-600" style={{backgroundColor: '#FFFF00'}} target="_blank">Decoded</Link> Podcast.
              </p>
              <p className="text-base">
               I've founded and shipped projects quickly, now building at the intersection of blockchain and AI. 
               Always down to talk startups, scalable systems and <Link href="https://www.youtube.com/@ImTheBigP" className="px-1 rounded transition-colors text-base font-normal text-black hover:text-gray-600" style={{backgroundColor: '#FFFF00'}} target="_blank">music</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience section */}
        <section className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-24 lg:w-28 flex-shrink-0">
              <h2 className="text-gray-500 font-normal text-base">Experience</h2>
            </div>
            <div className="flex-1">
              <div className="space-y-4 sm:space-y-5">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                    {/* Company logo */}
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-50 rounded flex items-center justify-center">
                      {job.logo ? (
                        <Link href={job.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full rounded hover:bg-gray-100 transition-colors">
                          <Image 
                            src={job.logo} 
                            alt={`${job.company} logo`}
                            width={32}
                            height={32}
                            className="rounded object-contain w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const nextEl = target.nextElementSibling as HTMLElement;
                              if (nextEl) nextEl.style.display = 'flex';
                            }}
                          />
                        </Link>
                      ) : null}
                      <span className="text-xs sm:text-sm font-medium text-gray-600 hidden">
                        {job.company.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-normal text-base truncate sm:whitespace-normal">{job.role} @ {job.company}</p>
                          <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap flex-shrink-0">{job.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-24 lg:w-28 flex-shrink-0">
              <h2 className="text-gray-500 font-normal text-base">Building</h2>
            </div>
            <div className="flex-1">
              <div className="space-y-4 sm:space-y-5">
                {building.map((project, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                    {/* Company logo */}
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-50 rounded flex items-center justify-center">
                      {project.logo ? (
                        <Link href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full rounded hover:bg-gray-100 transition-colors">
                          <Image 
                            src={project.logo} 
                            alt={`${project.company} logo`}
                            width={32}
                            height={32}
                            className="rounded object-contain w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const nextEl = target.nextElementSibling as HTMLElement;
                              if (nextEl) nextEl.style.display = 'flex';
                            }}
                          />
                        </Link>
                      ) : null}
                      <span className="text-xs sm:text-sm font-medium text-gray-600 hidden">
                        {project.company.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-normal text-base truncate sm:whitespace-normal">{project.company}</p>
                          <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap flex-shrink-0">{project.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Writing section */}
        <section className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-24 lg:w-28 flex-shrink-0">
              <Link href="/writings" className="text-gray-500 font-normal hover:text-gray-700 transition-colors text-base">
                Writings
              </Link>
            </div>
                        <div className="flex-1">
              <div className="space-y-4 sm:space-y-5">
                {/* Dynamically render writings from data */}
                {writings.map((writing, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                    <Link href={writing.link} className="text-black hover:text-gray-600 transition-colors text-base flex-1 sm:flex-initial" target="_blank" rel="noopener noreferrer">
                      {writing.title}
                    </Link>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{writing.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Analytics />
      </main>
    </div>
  )
}