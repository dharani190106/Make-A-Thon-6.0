"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Clock, Award, Zap, Users, MessageSquare, Send, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TimelineSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Timeline events
  const timelineEvents = [
    {
      date: "March 18, 2025",
      title: "Dates Release",
      description: "Mark your calendars for MAKE-A-THON 6.0 event dates!",
      icon: <Users className="h-6 w-6 text-purple-400" />,
    },
    {
      date: "March 19, 2025",
      //date: "To Be Announced",
      title: "Problem Statement Release",
      description: "Explore the challenges for MAKE-A-THON 6.0 and start shaping your innovative solutions!",
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
    },
    {
      date: "April 14, 2025",
      //date: "To Be Announced",
      title: "Registration Closes",
      description: "Last chance to sign up and secure your spot for MAKE-A-THON 6.0!",
      icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
    },
    {
      date: "April 23, 2025",
      //date: "To Be Announced",
      title: "Shortlisted Teams Announcement",
      description: "Check out the shortlisted teams for MAKE-A-THON 6.0. Congratulations to all the selected teams!",
      icon: <Award className="h-6 w-6 text-purple-400" />,
    },
    {
      date: "April 25, 2025",
      //date: "To Be Announced",
      title: "Final Confirmation",
      description: "Congratulations to the shortlisted teams—get ready to shine at MAKE-A-THON 6.0!",
      icon: <Award className="h-6 w-6 text-purple-400" />,
    },
    {
      date: "April 29-30, 2025",
      //date: "To Be Announced",
      title: "MAKE-A-THON 6.0 - Event Day",
      description: "The wait is over! Witness innovation and creativity as teams bring their ideas to life at MAKE-A-THON 6.0. Let the hacking begin!",
      icon: <Award className="h-6 w-6 text-purple-400" />,
    },
  ]

  return (
    <section id="timeline" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.05)_0%,transparent_70%)] -z-20"></div>

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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mark your calendar for these key dates and join us on this exciting journey of innovation and creativity.
          </p>
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative max-w-4xl mx-auto">
          {/* Central line with animated pulse effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{
                y: ["-100%", "100%"],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              }}
            />
          </div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex flex-col ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center`}
            >
              {/* Center dot with pulse effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <div className="w-3 h-3 rounded-full bg-black"></div>
              </div>

              {/* Event content */}
              <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"} mt-8 md:mt-0`}
              >
                <div className="p-6 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all shadow-lg shadow-purple-500/10">
                  <div
                    className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}
                  >
                    <div className="p-2 rounded-full bg-black/70 border border-purple-500/30">{event.icon}</div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-3">{event.description}</p>
                  <div
                    className={`flex items-center gap-2 text-sm text-purple-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <Clock className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top 40 Teams Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >

{/* 

          <Link href="/top-teams">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 group px-6 py-3 text-lg">
              <span>View Top 40 Selected Teams</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

           */}

        </motion.div>

       

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-purple-500/20 rounded-full blur-[80px] bg-purple-500/10"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-pink-500/20 rounded-full blur-[100px] bg-pink-500/10"></div>

        {/* Circuit lines */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 mt-16 mx-auto max-w-md"
        />
      </div>
    </section>
  )
}

