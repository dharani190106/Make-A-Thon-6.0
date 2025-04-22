"use client"

import { motion } from "framer-motion"
import { ArrowLeft, BotIcon as Robot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoboticsPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 9,
      title: "Highly Adaptive Robotic System with Advanced Perception",
      description:
        "Develop a robotic system with state-of-the-art perception algorithms that integrate deep learning and multi-sensor fusion.",
      difficulty: "Hard",
      tags: ["Perception", "Deep Learning", "Navigation"],
      sdg: "Uncategorized",
      fullDescription:
        "The robot should intelligently learn and adapt to real-time obstacles with robust decision-making capabilities, seamlessly navigating complex and unpredictable environments while enhancing mapping accuracy and environmental awareness.",
    },
    {
      id: 10,
      title: "Teleoperation Robot with Haptic Feedback",
      description:
        "Design a precision-engineered robotic arm capable of remote manipulation with advanced haptic feedback.",
      difficulty: "Hard",
      tags: ["Haptics", "Remote Operation", "Precision Engineering"],
      sdg: "Uncategorized",
      fullDescription:
        "Design a precision-engineered robotic arm capable of remote manipulation. The system must include advanced haptic feedback to simulate intricate touch sensations, enabling highly sensitive operations in hazardous or inaccessible environments.",
    },
    {
      id: 26,
      title: "Self-Adjusting Prosthetics",
      description:
        "Build a prosthetic limb that uses sensors and actuators to adapt its grip or movement based on the user's activity.",
      difficulty: "Hard",
      tags: ["Prosthetics", "Adaptive Systems", "Assistive Technology"],
      sdg: "SDG 3: Good Health and Well-being",
      fullDescription:
        "Build a prosthetic limb equipped with sensors and actuators that automatically adjust its grip or movement based on the user's activity. The prosthetic should use AI to analyze muscle signals, pressure, and motion data to adapt to different tasks such as gripping objects, walking, or running. It should provide real-time feedback to enhance comfort and precision. The solution can include a companion app for calibration, activity tracking, and customization.",
    },
    {
      id: 27,
      title: "Firefighting Robot",
      description:
        "Create a robot equipped with thermal imaging cameras and water cannons to assist in extinguishing fires in hazardous areas.",
      difficulty: "Hard",
      tags: ["Fire Safety", "Autonomous Systems", "Emergency Response"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "Create a robot equipped with thermal imaging cameras and water cannons to assist in extinguishing fires in hazardous areas. The robot should use AI-based navigation to detect fire sources, avoid obstacles, and determine the most effective firefighting strategy. It should autonomously adjust water pressure and targeting based on fire intensity and location. The solution can include remote control functionality and real-time monitoring through a mobile or web-based interface.",
    },
  ]

  // Software problems
  const softwareProblems = []

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/#theme">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Themes
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-4 bg-black/70 rounded-lg border border-cyan-500/30">
              <Robot className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Robotics
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore cutting-edge robotics challenges that focus on creating intelligent machines capable of performing
            complex tasks autonomously. These problem statements aim to push the boundaries of robotic perception,
            manipulation, and interaction.
          </motion.p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-900/50">
              Hardware Solutions
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-900/50">
              Software Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {hardwareProblems.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                    {problem.sdg && problem.sdg.startsWith("SDG") ? (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.sdg.includes("1:")
                            ? "bg-red-600/20 text-red-300"
                            : problem.sdg.includes("2:")
                              ? "bg-yellow-600/20 text-yellow-300"
                              : problem.sdg.includes("3:")
                                ? "bg-green-600/20 text-green-300"
                                : problem.sdg.includes("4:")
                                  ? "bg-red-700/20 text-red-300"
                                  : problem.sdg.includes("5:")
                                    ? "bg-orange-600/20 text-orange-300"
                                    : problem.sdg.includes("6:")
                                      ? "bg-blue-500/20 text-blue-300"
                                      : problem.sdg.includes("7:")
                                        ? "bg-yellow-500/20 text-yellow-300"
                                        : problem.sdg.includes("8:")
                                          ? "bg-purple-700/20 text-purple-300"
                                          : problem.sdg.includes("9:")
                                            ? "bg-orange-500/20 text-orange-300"
                                            : problem.sdg.includes("10:")
                                              ? "bg-pink-600/20 text-pink-300"
                                              : problem.sdg.includes("11:")
                                                ? "bg-amber-500/20 text-amber-300"
                                                : problem.sdg.includes("12:")
                                                  ? "bg-amber-700/20 text-amber-300"
                                                  : problem.sdg.includes("13:")
                                                    ? "bg-green-700/20 text-green-300"
                                                    : problem.sdg.includes("14:")
                                                      ? "bg-blue-600/20 text-blue-300"
                                                      : problem.sdg.includes("15:")
                                                        ? "bg-green-500/20 text-green-300"
                                                        : problem.sdg.includes("16:")
                                                          ? "bg-blue-700/20 text-blue-300"
                                                          : "bg-blue-800/20 text-blue-300"
                        }`}
                      >
                        {problem.sdg.split(":")[0]}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">
                        Uncategorized
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{problem.description}</p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                    <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {problem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-cyan-500/20">
                    {problem.sdg && problem.sdg.startsWith("SDG") ? (
                      <span className="text-xs text-cyan-300">{problem.sdg}</span>
                    ) : (
                      <span className="text-xs text-gray-400">Uncategorized</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            {softwareProblems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {softwareProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                      {problem.sdg && problem.sdg.startsWith("SDG") ? (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.sdg.includes("1:")
                              ? "bg-red-600/20 text-red-300"
                              : problem.sdg.includes("2:")
                                ? "bg-yellow-600/20 text-yellow-300"
                                : problem.sdg.includes("3:")
                                  ? "bg-green-600/20 text-green-300"
                                  : problem.sdg.includes("4:")
                                    ? "bg-red-700/20 text-red-300"
                                    : problem.sdg.includes("5:")
                                      ? "bg-orange-600/20 text-orange-300"
                                      : problem.sdg.includes("6:")
                                        ? "bg-blue-500/20 text-blue-300"
                                        : problem.sdg.includes("7:")
                                          ? "bg-yellow-500/20 text-yellow-300"
                                          : problem.sdg.includes("8:")
                                            ? "bg-purple-700/20 text-purple-300"
                                            : problem.sdg.includes("9:")
                                              ? "bg-orange-500/20 text-orange-300"
                                              : problem.sdg.includes("10:")
                                                ? "bg-pink-600/20 text-pink-300"
                                                : problem.sdg.includes("11:")
                                                  ? "bg-amber-500/20 text-amber-300"
                                                  : problem.sdg.includes("12:")
                                                    ? "bg-amber-700/20 text-amber-300"
                                                    : problem.sdg.includes("13:")
                                                      ? "bg-green-700/20 text-green-300"
                                                      : problem.sdg.includes("14:")
                                                        ? "bg-blue-600/20 text-blue-300"
                                                        : problem.sdg.includes("15:")
                                                          ? "bg-green-500/20 text-green-300"
                                                          : problem.sdg.includes("16:")
                                                            ? "bg-blue-700/20 text-blue-300"
                                                            : "bg-blue-800/20 text-blue-300"
                          }`}
                        >
                          {problem.sdg.split(":")[0]}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">
                          Uncategorized
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4">{problem.description}</p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                      <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {problem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-cyan-500/20">
                      {problem.sdg && problem.sdg.startsWith("SDG") ? (
                        <span className="text-xs text-cyan-300">{problem.sdg}</span>
                      ) : (
                        <span className="text-xs text-gray-400">Uncategorized</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">No software problems available in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

