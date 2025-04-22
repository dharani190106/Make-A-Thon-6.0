"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Zap } from "lucide-react"

interface ScrollingAnnouncementProps {
  eventDate?: string
  eventLocation?: string
  registrationDeadline?: string
  problemStatement?: string
}

export default function ScrollingAnnouncement({
            eventDate="Date Changed: April 29-30, 2025",
            eventLocation="Sri Venkateswara College of Engineering",
            registrationDeadline="Date Changed: April 14, 2025",
            problemStatement = "Phase 1 Problem Statement Released",
            checkOut = "Phase 2 Problem Statement Released",
}: ScrollingAnnouncementProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Announcements to display in the ticker
  const announcements = [
    {
      icon: <Calendar className="h-5 w-5 text-cyan-400" />,
      text: `MAKE-A-THON 6.0: ${eventDate}`,
      highlight: true,
    },
    {
      icon: <Clock className="h-5 w-5 text-purple-400" />,
      text: `REGISTRATION DEADLINE: ${registrationDeadline}`,
      highlight: false,
    },
    {
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      text: `VENUE: ${eventLocation}`,
      highlight: false,
    },
    {
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      text: `PROBLEM STATEMENT: ${problemStatement}`,
      highlight: false,
    },
    {
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      text: `${checkOut}`,
      highlight: false,
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-12 bg-gradient-to-r from-purple-900/80 via-black/90 to-cyan-900/80 border-t-2 border-b-2 border-cyan-500/50"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-purple-500/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Glowing edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Scrolling content */}
      <div className="relative h-full flex items-center">
        <motion.div
          animate={{
            x: [containerRef.current ? containerRef.current.offsetWidth : 1500, -3000],
          }}
          transition={{
            x: {
              duration: 50,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          className="flex items-center gap-8 absolute whitespace-nowrap"
        >
          {/* Repeat announcements multiple times to ensure continuous scrolling */}
          {[...Array(5)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex items-center gap-8">
              {announcements.map((announcement, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  className={`flex items-center gap-3 ${
                    announcement.highlight
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-1 rounded-full border border-cyan-500/30"
                      : ""
                  }`}
                >
                  <div className="p-1 bg-black/50 rounded-full">{announcement.icon}</div>
                  <span className={`text-base font-bold ${announcement.highlight ? "text-white" : "text-gray-200"}`}>
                    {announcement.text}
                  </span>

                  {/* Animated separator */}
                  {index < announcements.length - 1 && (
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-cyan-400 mx-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated light beam effect */}
      <motion.div
        className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        animate={{
          x: [-100, containerRef.current ? containerRef.current.offsetWidth + 100 : 1500],
        }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 3.5,
        }}
      />

      {/* Animated light beam effect 2 */}
      <motion.div
        className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
        animate={{
          x: [-100, containerRef.current ? containerRef.current.offsetWidth + 100 : 1500],
        }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
