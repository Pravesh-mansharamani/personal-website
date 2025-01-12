"use client"

import { useState } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"

interface Photo {
  year: number
  image: string
  caption: string
}

const photos: Photo[] = [
  {
    year: 2024,
    image: "/assets/IMG_2316.JPG",
    caption: "Origin of ImTheBigP :)"
  },
  {
    year: 2024,
    image: "/assets/IMG_1202.JPG",
    caption: "MBC conference w/ dalhousie gang"
  },
  {
    year: 2024,
    image: "assets/IMG_2117.JPG",
    caption: "ETH Denver was lit, made a lot of friends"
  },
  {
    year: 2024,
    image: "/assets/IMG_2079.jpg",
    caption: "ran into sandeep & illia"
  },
  {
    year: 2024,
    image: "/assets/IMG_2434.jpg",
    caption: "met the goat mert at breakpoint"
  },
  {
    year: 2024,
    image: "assets/IMG_2731.JPG",
    caption: "singapore w/ waterloo gang"
  },
  {
    year: 2024,
    image: "assets/IMG_3298.JPG",
    caption: "I was lightman for halloween"
  },
  {
    year: 2024,
    image: "assets/IMG_3593.JPG",
    caption: "first time pitching a stock $RENDER to the moon guys"
  },
  {
    year: 2024,
    image: "assets/IMG_5592.jpg",
    caption: "Hosted a boba event onboarding students onchain"
  },
  {
    year: 2024,
    image: "assets/IMG_9104.JPG",
    caption: "went climbing for the first time, I highly recommend it!"
  },
  {
    year: 2024,
    image: "assets/IMG_4013.JPG",
    caption: "waterloo blockchain <3"
  },
  {
    year: 2024,
    image: "assets/IMG_3933.PNG",
    caption: "ETH Global Bangkok"
  },
]
export function PhotoGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Photo Memories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full aspect-[4/3] mb-4">
                  <Image
                    src={photo.image}
                    alt={`Photo from ${photo.year}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-cover rounded"
                    quality={95}
                  />
                </div>
                <p className="text-black text-xs sm:text-sm text-center">{photo.caption}</p>
                <p className="text-gray-500 text-xs text-center mt-2">{photo.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

