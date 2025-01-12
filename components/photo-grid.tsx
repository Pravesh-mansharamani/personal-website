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
    year: 2025,
    image: "/placeholder.svg?height=400&width=300",
    caption: "Presenting my research at the International AI Conference"
  },
  {
    year: 2024,
    image: "/placeholder.svg?height=400&width=300",
    caption: "Celebrating the launch of our startup's first product"
  },
  {
    year: 2023,
    image: "/placeholder.svg?height=400&width=300",
    caption: "Hackathon victory with my amazing team"
  },
  {
    year: 2022,
    image: "/placeholder.svg?height=400&width=300",
    caption: "First day at University of Waterloo"
  },
  // Add more photos as needed
]

export function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Photo Memories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[3/4] mb-4">
                  <Image
                    src={photo.image}
                    alt={`Photo from ${photo.year}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-black text-sm text-center">{photo.caption}</p>
                <p className="text-gray-500 text-xs text-center mt-2">{photo.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="bg-white p-4 rounded-lg shadow-xl max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-[3/4] mb-4">
              <Image
                src={selectedPhoto.image}
                alt={`Photo from ${selectedPhoto.year}`}
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="text-black text-lg text-center">{selectedPhoto.caption}</p>
            <p className="text-gray-500 text-sm text-center mt-2">{selectedPhoto.year}</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}

