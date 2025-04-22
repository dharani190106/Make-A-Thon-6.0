"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Heart, Share2, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

// Mock social media data
const instagramFeed = [
  {
    id: 1,
    image: "/psrelease.jpeg?height=600&width=600",
    caption:
      "🔴 MAKE-A-THON 6.0  Registrations Open! 🛠️🚀 The ultimate National-Level Hackathon is here! Ready to Innovate, Elevate & Collaborate? 💡💻 📢 Problem Statements Released! 🚀  Tag your team & start hacking! 💻💡#makeathon6.O #technicalhackathon #svce #ecefest #innovateelevate",
    likes: 245,
    user: {
      name: "ECEA, IETE-SF, RAIC",
      avatar: "/new ECEA logo.png?height=50&width=50",
    },
    link: "https://www.instagram.com/p/DHYYdsAP8Q-/?igsh=ODJobXU2bHdzcXVj",
    postedAt: "Today",
  },
  {
    id: 2,
    image: "/date.jpeg?height=600&width=600",
    caption:
      "🛠️ BIG REVEAL !!! The National-Level MAKE-A-THON 6.0 - Innovate, Elevate & Collaborate is happening on 29th & 30th April 2025 at Sri Venkateswara College of Engineering 🚀Gear up for an electrifying experience of innovation, technology, and problem-solving !!!Stay tuned for registration details and exciting updates. #makeathon6.o #techshowcase #hackathon #innovation #svce",
    likes: 189,
    user: {
      name: "ECEA, IETE-SF, RAIC",
      avatar: "/new ECEA logo.png?height=50&width=50",
    },
    link: "https://www.instagram.com/p/DHV6Zt1S_FZ/?igsh=MTR5Nmd1ZmZhZ29ncw==",
    postedAt: "1 days ago",
  },
  {
    id: 3,
    image: "/weblive.jpeg?height=600&width=600",
    caption:
      "🚀 MAKE-A-THON 6.0 – Innovate. Elevate. Collaborate. 🚀⚡24-Hour National-Level Hackathon ⚡🔥 WE ARE LIVE! 🔥The wait is over! Our official website is now LIVE - check it out and gear up for an electrifying hackathon experience. #makeathon6.0 #hackthefuture #codecreateconquer #innovation #svce #hackathons ",
    likes: 312,
    user: {
      name: "ECEA, IETE-SF, RAIC",
      avatar: "/new ECEA logo.png?height=50&width=50",
    },
    link: "https://www.instagram.com/p/DHQqFefPtTT/?igsh=MWYxOGg4ZmNrZHE1Mw==",
    postedAt: "3 days ago",
  },
  {
    id: 4,
    image: "/coming soon.jpeg?height=600&width=600",
    caption:
      "New venue reveal! MAKE-A-THON 6.0 will be held at the stunning MPH (Multi-Purpose Hall). State-of-the-art facilities await you! #MakeAThon6 #TechHub #HackathonVenue",
    likes: 276,
    user: {
      name: "makeathon",
      avatar: "/coming soon.jpeg?height=50&width=50",
    },
    link: "https://www.instagram.com/p/example4/",
    postedAt: "2 weeks ago",
  },
]

   const chatFeed = [
      {
        id: 1,
        user: {
          name: "Organizer",
          role: "Admin",
          avatar: "/coming-soon.jpeg?height=50&width=50",
        },
        content:
          "🚀 Welcome to Make-a-Thon 6.0! Stay tuned for event updates and announcements. Check the #rules channel for guidelines.",
        time: "Just now",
        channel: "#general",
      },
      {
        id: 2,
        user: {
          name: "HackBuddy",
          role: "Participant",
          avatar: "/coming-soon.jpeg?height=50&width=50",
        },
        content: "Hey everyone! Excited to be part of Make-a-Thon 6.0. Let’s build something amazing! 💪",
        time: "5m ago",
        channel: "#introductions",
      },
      {
        id: 3,
        user: {
          name: "TechMentor",
          role: "Mentor",
          avatar: "/coming-soon.jpeg?height=50&width=50",
        },
        content: "Need help with your project? Drop your queries in #tech-support — mentors are here to help! ⚙️",
        time: "10m ago",
        channel: "#tech-support",
      },
      {
        id: 4,
        user: {
          name: "CodeWarrior",
          role: "Participant",
          avatar: "/coming-soon.jpeg?height=50&width=50",
        },
        content: "Anyone working with ESP32 and sensors? Let’s team up. 🔧 #hardware-hacks",
        time: "20m ago",
        channel: "#team-building",
      },
      {
        id: 5,
        user: {
          name: "EventBot",
          role: "Admin",
          avatar: "/coming-soon.jpeg?height=50&width=50",
        },
        content: "Reminder: Project submission deadline is tomorrow at 6 PM. Don’t forget to submit on the portal! 📅",
        time: "30m ago",
        channel: "#announcements",
      },
    ]
    

// Terminal component for live updates
function Terminal({ messages }) {
  const [displayedMessages, setDisplayedMessages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, messages[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      // Reset to start over when all messages have been displayed
      const timer = setTimeout(() => {
        setDisplayedMessages([])
        setCurrentIndex(0)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, messages])

  return (
    <div className="bg-black border border-cyan-500/30 rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">terminal@makeathon:~</span>
      </div>

      {displayedMessages.map((msg, index) => (
        <div key={index} className="mb-2">
          <span className="text-cyan-400">{">"} </span>
          <span className="text-gray-300">{msg}</span>
        </div>
      ))}

      <div className="inline-block h-4 w-2 bg-cyan-400 animate-pulse"></div>
    </div>
  )
}

// 3D Robot Mascot component
function RobotMascot() {
  return (
    <div className="relative h-64 w-full">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
      >
        {/* Simple robot representation */}
        <div className="relative">
          {/* Head */}
          <motion.div
            animate={{
              borderColor: ["#00ffff", "#ff00ff", "#00ffff"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="w-20 h-20 bg-black border-2 border-cyan-500 rounded-lg mx-auto relative"
          >
            {/* Eyes */}
            <div className="absolute top-6 left-3 w-3 h-3 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-6 right-3 w-3 h-3 bg-cyan-400 rounded-full"></div>

            {/* Mouth */}
            <motion.div
              animate={{
                width: ["60%", "40%", "60%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-cyan-400 rounded"
              style={{ width: "60%" }}
            ></motion.div>

            {/* Antenna */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-1 h-5 bg-gray-400">
              <motion.div
                animate={{
                  backgroundColor: ["#00ffff", "#ff00ff", "#00ffff"],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 rounded-full bg-cyan-400 absolute -top-1 left-1/2 transform -translate-x-1/2"
              ></motion.div>
            </div>
          </motion.div>

          {/* Body */}
          <div className="w-24 h-28 bg-black border-2 border-cyan-500 rounded-lg mx-auto mt-2 relative">
            {/* Chest light */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500/50 rounded-full"
            ></motion.div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Instagram Carousel component
function InstagramCarousel({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const nextPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1))
  }

  const prevPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div ref={carouselRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post) => (
            <div key={post.id} className="w-full flex-shrink-0">
              <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex flex-col md:flex-row gap-4 p-4 border border-cyan-500/10 rounded-lg bg-black/30 hover:bg-black/50 transition-all">
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                    <Image
                      src={post.image || "/coming soon.jpeg"}
                      alt="Instagram post"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src={post.user.avatar || "/coming soon.jpeg"}
                        alt={post.user.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="font-bold text-white">{post.user.name}</span>
                      <span className="text-gray-400 text-xs ml-auto">{post.postedAt}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-4 md:line-clamp-none">{post.caption}</p>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-400" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevPost}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-cyan-500/50 transition-all z-10"
        aria-label="Previous post"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextPost}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:bg-cyan-500/50 transition-all z-10"
        aria-label="Next post"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-cyan-400" : "bg-white/30"}`}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SocialFeedSection() {
  const terminalMessages = [
    "Initializing Make-a-Thon 6.0 live feed...",
    "The Makeathon website is now live!",
    "The Dates are released April 29th and 30th 2025",
    "Phase 1 Problem statement are live now -Go check them out",
    "Registrations are open now",
    "Stay tuned Phase 2 Problem statements ",
  ]

  return (
    <section
      id="updates"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Live Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay connected with real-time updates from the hackathon floor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="inline-block h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Live Terminal
              </h3>
              <Terminal messages={terminalMessages} />
              <div className="mt-6">
                <RobotMascot />
              </div>
            </div>
          </motion.div>

          {/* Right column - Social feeds */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Social Feed</h3>

              <Tabs defaultValue="instagram" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 border border-cyan-500/20">
                  <TabsTrigger
                    value="instagram"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </TabsTrigger>
                  <TabsTrigger
                    value="chat"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="instagram" className="mt-0">
                  <InstagramCarousel posts={instagramFeed} />
                </TabsContent>

                <TabsContent value="chat" className="mt-0 space-y-4">
                  {chatFeed.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-cyan-500/10 rounded-lg bg-black/30 hover:bg-black/50 transition-all"
                    >
                      <div className="flex gap-3">
                        <img
                          src={message.user.avatar || "/coming soon.jpeg"}
                          alt={message.user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="font-bold text-white">{message.user.name}</div>
                              <div
                                className={`text-xs px-2 py-0.5 rounded ${
                                  message.user.role === "Admin"
                                    ? "bg-red-500/20 text-red-400"
                                    : message.user.role === "Mentor"
                                      ? "bg-cyan-500/20 text-cyan-400"
                                      : "bg-gray-500/20 text-gray-400"
                                }`}
                              >
                                {message.user.role}
                              </div>
                            </div>
                            <div className="text-gray-400 text-xs">{message.time}</div>
                          </div>
                          <div className="text-xs text-purple-400 mt-1">{message.channel}</div>
                          <div className="mt-2 text-gray-300">{message.content}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

