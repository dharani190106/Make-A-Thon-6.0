"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, ChevronLeft, ChevronRight, Users, Code, Award, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AchievementsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Gallery state
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gallery images
  const galleryImages = [
    {
      src: "/prize_winners.png?height=600&width=800",
      alt: "Winners of MAKE-A-THON 5.0",
      caption: "Grand Prize Winners - Team Quantum Leap",
    },
    {
      src: "/intense_coding1.png?height=600&width=800",
      alt: "Participants working on projects",
      caption: "Intense coding session during the 24-hour hackathon",
    },
    {
      src: "/intense_coding2.png?height=600&width=800",
      alt: "Participants working on projects",
      caption: "Intense coding session during the 24-hour hackathon",
    },
    {
      src: "/judge.png?height=600&width=800",
      alt: "Project demonstration",
      caption: "Team Blockchain Wizards demonstrating their solution",
    },
    {
      src: "/ceremony_with_industry.png?height=600&width=800",
      alt: "Award ceremony",
      caption: "Award ceremony with industry sponsors",
    },
    {
      src: "/mentors.png?height=600&width=800",
      alt: "Mentoring session",
      caption: "Expert mentors providing guidance to participants",
    },
  ]

  // Achievement stats
  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />,
      value: "500+",
      label: "Participants",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      value: "120",
      label: "Projects",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />,
      value: "35K",
      label: "Prize Pool",
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      value: "10+",
      label: "Internships",
    },
  ]

  // Notable projects
  const notableProjects = [
    {
      name: "EcoTrack",
      team: "Green Innovators",
      description:
        "IoT-based solution for monitoring and reducing carbon footprint in urban areas. Deployed in 3 smart cities.",
      achievement: "First Prize & Sustainability Award",
    },
    {
      name: "SecureChain",
      team: "Crypto Defenders",
      description:
        "Blockchain-based secure voting system that was adopted by a university student council for elections.",
      achievement: "Best Blockchain Implementation",
    },
    {
      name: "MediAssist AI",
      team: "Health Hackers",
      description: "AI-powered diagnostic assistant that helps identify early signs of skin conditions from images.",
      achievement: "Most Innovative Solution & Industry Choice Award",
    },
  ]

  // Navigation functions
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  // Preload all images
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  return (
    <section id="achievements" ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Previous Year Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Celebrating the innovation and success from MAKE-A-THON 5.0. Take a look at what our participants achieved
            last year.
          </p>
        </motion.div>

        <motion.div style={{ y, opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 h-full"
          >
            <div className="relative aspect-video">
              <Image
                src={galleryImages[currentIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentIndex].alt}
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-2 sm:p-3 text-white text-center text-sm sm:text-base">
                {galleryImages[currentIndex].caption}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm p-1 sm:p-2 rounded-full text-white hover:bg-cyan-500/50 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm p-1 sm:p-2 rounded-full text-white hover:bg-cyan-500/50 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 flex justify-center gap-1 sm:gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === currentIndex ? "bg-cyan-400" : "bg-white/50"}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats and Notable Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-black/70 rounded-lg border border-cyan-500/30">{stat.icon}</div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trophy icon */}
            <div className="flex justify-center">
              <div className="p-3 sm:p-4 bg-black/70 rounded-full border border-cyan-500/30">
                <Trophy className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-400" />
              </div>
            </div>

            {/* Notable Projects */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">Notable Projects</h3>
              {notableProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-1 sm:mb-2">
                    <h4 className="font-bold text-white text-sm sm:text-base">{project.name}</h4>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full self-start sm:self-auto">
                      {project.team}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">{project.description}</p>
                  <div className="text-purple-400 text-xs sm:text-sm font-medium">🏆 {project.achievement}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-4 sm:p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg text-center mt-8 sm:mt-12"
        >
          <p className="text-base sm:text-lg text-gray-300 italic mb-2 sm:mb-4">
            "MAKE-A-THON was a life-changing experience. Our team's project caught the attention of investors, and now
            we're developing it into a full-fledged startup!"
          </p>
          <p className="text-white font-medium text-sm sm:text-base">— Sarah Chen, Winner of MAKE-A-THON 5.0</p>
        </motion.div>
        */}

        {/* Circuit lines */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mt-10 sm:mt-16 mx-auto max-w-md"
        />
      </div>
    </section>
  )
}