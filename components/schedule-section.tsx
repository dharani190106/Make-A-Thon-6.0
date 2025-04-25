"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Calendar, Users, Award, Coffee, Code, Lightbulb, Zap, Music, Mic, BookOpen } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Updated schedule data for Make-a-Thon 6.0
const scheduleData = {
  day1: [
    {
      time: "08:30 AM - 09:00 AM",
      title: "Registration",
      description: "Get your badges and welcome kit",
      icon: <Users className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "09:00 AM - 09:05 AM",
      title: "Prayer Song",
      description: "By Ms. Harinee V T, Executive Member, IETE-SF",
      icon: <Music className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "09:05 AM - 09:10 AM",
      title: "Welcome Speech",
      description: "By Mr. Haresh Krishna, Secretary, RAIC",
      icon: <Mic className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "09:10 AM - 09:20 AM",
      title: "Introduction of Chief Guests",
      description: "By Ms. Subasri, Treasurer, ECEA",
      icon: <Users className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "09:20 AM - 09:25 AM",
      title: "Lighting of Lamps",
      description: "Inaugural of the event",
      icon: <Lightbulb className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "09:25 AM - 09:30 AM",
      title: "Address of the Gathering",
      description: "By Dr. G.A. Sathish Kumar, HoD-ECE",
      icon: <Mic className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "09:30 AM - 09:50 AM",
      title: "Inaugural Talk",
      description: "By Dr. R. Karthikeyan, Honorary Secretary, IETE Chennai Centre",
      icon: <BookOpen className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "10:00 AM",
      title: "Commencement of Make-a-Thon 6.0",
      description: "Start building your projects",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "12:00 PM - 01:00 PM",
      title: "Lunch",
      description: "Networking lunch with sponsors",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "01:30 PM - 03:30 PM",
      title: "Review 1",
      description: "First project review by mentors",
      icon: <Code className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "04:30 PM - 05:00 PM",
      title: "Refreshment",
      description: "Evening snacks and networking",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "09:00 PM - 09:30 PM",
      title: "Dinner",
      description: "Refuel for the night ahead",
      icon: <Coffee className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "11:30 PM - 01:00 AM",
      title: "Review 2",
      description: "Second project review by mentors",
      icon: <Code className="h-5 w-5 text-cyan-400" />,
    },
  ],
  day2: [
    {
      time: "02:30 AM - 03:00 AM",
      title: "Refreshment",
      description: "Late night energy boost",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "08:30 AM - 09:00 AM",
      title: "Breakfast",
      description: "Morning fuel for hackers",
      icon: <Coffee className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "10:00 AM - 12:00 PM",
      title: "Final Review",
      description: "Final project evaluation by judges",
      icon: <Code className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "12:00 PM - 01:00 PM",
      title: "Lunch",
      description: "Final meal before closing ceremony",
      icon: <Coffee className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Prize Distribution & Valedictory Ceremony",
      description: "Winners announcement and prizes",
      icon: <Award className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "02:00 PM - 02:10 PM",
      title: "Vote of Thanks",
      description: "By Ms. Srimathi R, Executive Member, ECEA",
      icon: <Mic className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "02:10 PM - 02:15 PM",
      title: "National Anthem",
      description: "Closing of the ceremony",
      icon: <Music className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "02:15 PM",
      title: "End of Make-a-Thon 6.0",
      description: "Thank you for participating!",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
    },
  ],
}

// 3D Digital Clock Component
function DigitalClock({ time }) {
  return (
    <div className="relative w-32 h-16 perspective-500">
      <motion.div
        initial={{ rotateX: -90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black border border-cyan-500/30 rounded-md flex items-center justify-center shadow-lg shadow-cyan-500/20"
      >
        <div className="font-mono text-2xl font-bold text-cyan-400">{time}</div>
      </motion.div>
    </div>
  )
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section
      id="schedule"
      className="relative py-20 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
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
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Make-a-Thon 6.0 - April 29-30, 2025. A 24-hour innovation challenge hosted by the Department of Electronics
            and Communication Engineering.
          </p>
        </motion.div>

        {/* Event Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-black/50 border-cyan-500/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                  <Calendar className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">Date</h3>
                  <p className="text-gray-300 text-center">April 29-30, 2025</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                  <Clock className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">Time</h3>
                  <p className="text-gray-300 text-center">Starting at 8:45 AM</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                  <Users className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">Venue</h3>
                  <p className="text-gray-300 text-center">Multi Purpose Hall</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300">
                  Organized by Electronics and Communication Engineers Association in association with The Institution
                  of Electronics and Telecommunication Engineers-SF & Robotics and Artificial Intelligence Club
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Schedule Tabs */}
        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-cyan-500/20">
            <TabsTrigger
              value="day1"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Day 1 (April 29)
            </TabsTrigger>
            <TabsTrigger
              value="day2"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Day 2 (April 30)
            </TabsTrigger>
          </TabsList>

          {Object.keys(scheduleData).map((day) => (
            <TabsContent key={day} value={day} className="mt-0">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block"></div>

                {/* Schedule items */}
                <div className="space-y-6">
                  {scheduleData[day].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col md:flex-row gap-4"
                    >
                      <div className="flex items-start">
                        <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-cyan-500 z-10">
                          <Clock className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-cyan-500 mr-3">
                          <Clock className="h-4 w-4 text-cyan-400" />
                        </div>
                        <div className="text-sm font-mono text-cyan-400 mt-2 md:hidden">{item.time}</div>
                      </div>

                      <Card className="flex-1 bg-black/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="hidden md:flex items-center justify-center min-w-[140px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4">
                              <div className="text-sm font-mono text-cyan-400 text-center">{item.time}</div>
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                              </div>
                              <p className="text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Honorary Guest Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-black/50 border-cyan-500/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Honorary Guest</h3>
                <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  <div className="bg-black rounded-full p-4">
                    <Users className="h-16 w-16 text-cyan-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Dr. R. Karthikeyan</h4>
                <p className="text-gray-300">Honorary Secretary</p>
                <p className="text-gray-300">IETE Chennai Center</p>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}
