"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Sponsor data with your specified categories
// To add a logo:
// 1. For local images: Add the image file to the public folder (e.g., public/sponsors/logo.png)
// 2. Set the logo path to "/sponsors/logo.png" (without "public")
// 3. Or use placeholder images as shown below
const sponsors = {
  title: [
    {
      name: "CUB",
      // Use your actual logo path here
      logo: "/sponsors/new/cub.png",
    },
  ],
  silver: [
    {
      name: "Edwise",
      // Example with placeholder - replace with your actual logo
      logo: "/sponsors/new/Edwise.png?height=80&width=160",
    },
    {
      name: "E2W",
      logo: "/sponsors/new/E2W.png?height=80&width=160",
    },
  ],
  credential: [
    {
      name: "Poorvika",
      logo: "/sponsors/new/Poorvika.png?height=80&width=160",
    },
    {
      name: "SLK Digital",
      logo: "/sponsors/new/SLK_digital.png?height=80&width=160",
    },
  ],
  industrial: [
    {
      name: "Spacetug",
      logo: "/sponsors/new/SpaceTug.png?height=60&width=120",
    },
    {
      name: "Montra",
      logo: "/sponsors/new/Montra.png?height=60&width=120",
    },
    {
      name: "Magnipower",
      logo: "/sponsors/new/Magnipower.png?height=60&width=120",
    },
    {
      name: "Engineering Monk",
      logo: "/sponsors/new/Engineering_Monk.png?height=60&width=120",
    },
  ],
}

// Helper function to handle image errors
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "/placeholder.svg?height=80&width=160"
}

export default function SponsorsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Make-a-Thon 6.0 is made possible by the generous support of our sponsors.
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
              Title Sponsor
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {sponsors.title.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-zinc-100/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 flex items-center fit-content justify-center h-40 group-hover:border-cyan-500/50 transition-all">
                  {/* Neon flicker effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      boxShadow: [
                        "0 0 10px rgba(0, 255, 255, 0.3)",
                        "0 0 20px rgba(0, 255, 255, 0.5)",
                        "0 0 10px rgba(0, 255, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-lg pointer-events-none"
                  ></motion.div>

                  {/* Using standard img tag with error handling */}
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    onError={handleImageError}
                    className="max-h-full max-w-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-gray-500/20 to-gray-400/20 rounded-full border border-gray-500/30">
              Silver Sponsors
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-zinc-100/80 backdrop-blur-sm border border-gray-500/20 rounded-lg p-6 flex items-center justify-center h-32 group-hover:border-gray-400/50 transition-all">
                  {/* Subtle glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-lg bg-gray-500/5 pointer-events-none"
                  ></motion.div>

                  {/* Using standard img tag with error handling */}
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    onError={handleImageError}
                    className="max-h-full max-w-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credential Partners */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
              Credential Partners
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {sponsors.credential.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-zinc-100/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 flex items-center justify-center h-32 group-hover:border-cyan-500/50 transition-all">
                  {/* Subtle glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-lg bg-cyan-500/5 pointer-events-none"
                  ></motion.div>

                  {/* Using standard img tag with error handling */}
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    onError={handleImageError}
                    className="max-h-full max-w-full transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industrial Partners */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
              Industrial Partners
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.industrial.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-zinc-100/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 flex items-center justify-center h-32 group-hover:border-cyan-500/50 transition-all">
                  {/* Subtle glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-lg bg-cyan-500/5 pointer-events-none"
                  ></motion.div>

                  {/* Using standard img tag with error handling */}
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    onError={handleImageError}
                    className="max-h-150 max-w-150 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Interested in sponsoring Make-a-Thon 6.0?</p>
          <a
            href="https://forms.gle/2ndnQQqH6j1iih4w6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-md transition-all shadow-md hover:shadow-lg"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
