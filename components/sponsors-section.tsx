"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Mock sponsor data
const sponsors = {
   /*
  platinum: [
    { name: "TechCorp", logo: "/coming soon.jpeg?height=100&width=200" },
    { name: "InnovateLabs", logo: "/coming soon.jpeg?height=100&width=200" },
    { name: "FutureAI", logo: "/coming soon.jpeg?height=100&width=200" },
  ],
  gold: [
    { name: "CodeWorks", logo: "/coming soon.jpeg?height=80&width=160" },
    { name: "QuantumTech", logo: "/coming soon.jpeg?height=80&width=160" },
    { name: "CyberSolutions", logo: "/coming soon.jpeg?height=80&width=160" },
    { name: "DataSphere", logo: "/coming soon.jpeg?height=80&width=160" },
  ],
  silver: [
    { name: "CloudNine", logo: "/coming soon.jpeg?height=60&width=120" },
    { name: "DevOps Inc", logo: "/coming soon.jpeg?height=60&width=120" },
    { name: "SecureNet", logo: "/coming soon.jpeg?height=60&width=120" },
    { name: "BlockChain Co", logo: "/coming soon.jpeg?height=60&width=120" },
    { name: "RoboTech", logo: "/coming soon.jpeg?height=60&width=120" },
    { name: "AIVentures", logo: "/coming soon.jpeg?height=60&width=120" },
  ],
  */
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
{/*}
        {/* Platinum Sponsors 
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
              Platinum Sponsors
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 flex items-center justify-center h-40 group-hover:border-cyan-500/50 transition-all">
                  {/* Neon flicker effect 
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

                  <img
                    src={sponsor.logo || "/coming soon.jpeg"}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors 
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              Gold Sponsors
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 flex items-center justify-center h-32 group-hover:border-yellow-500/50 transition-all">
                  {/* Subtle glow effect 
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-lg bg-yellow-500/5 pointer-events-none"
                  ></motion.div>

                  <img
                    src={sponsor.logo || "/coming soon.jpeg"}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
*/}
        {/* Silver Sponsors 
        <div>
          <h3 className="text-xl font-bold text-center mb-8 text-white">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-gray-500/20 to-gray-400/20 rounded-full border border-gray-500/30">
              Silver Sponsors
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-gray-500/20 rounded-lg p-4 flex items-center justify-center h-24 group-hover:border-gray-400/50 transition-all">
                  <img
                    src={sponsor.logo || "/coming soon.jpeg"}
                    alt={sponsor.name}
                    className="max-h-12 max-w-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
*/}

{/* Replaced Platinum, Gold, and Silver sponsors with a single "Coming Soon" image */}
<div className="mb-16">
  <h3 className="text-xl font-bold text-center mb-8 text-white">
    {/*<span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
      Coming Soon
    </span>*/}
  </h3>
  <div className="flex justify-center">
    {/* Gradient Border Container */}
    <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg -z-10 "></div>
      {/* Image */}
      <img
        src="/coming soon.jpeg"
        alt="Coming Soon"
        className="w-full h-auto object-cover transition-all duration-300 rounded-lg relative z-10 p-2"
      />
    </div>
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
  href="https://forms.gle/2ndnQQqH6j1iih4w6" // Replace with your actual form link
  target="_blank" // Opens the link in a new tab
  rel="noopener noreferrer" // Ensures security when opening links in a new tab
  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-md transition-all shadow-md hover:shadow-lg"
>
  Become a Sponsor
</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
