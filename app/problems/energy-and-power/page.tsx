"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnergyPowerPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 1,
      title: "Automatic Energy Saving System",
      description:
        "Develop an automated system to detect faults in street lighting, such as non-functioning lights or current leakage, and address them promptly to enhance energy efficiency and public safety.",
      difficulty: "Medium",
      tags: ["IoT", "Energy Efficiency", "Public Safety"],
      sdg: "SDG 7: Affordable and Clean Energy",
      fullDescription:
        "Street lighting is essential for public safety and urban infrastructure, but inefficiencies such as non-functioning lights, current leakage, and energy wastage are common issues in traditional systems. These problems not only increase energy consumption but also compromise safety and maintenance efforts. To address this, there is a need for an Automatic Energy Saving System that leverages IoT sensors, real-time monitoring, and AI-based fault detection algorithms. The system will continuously monitor streetlights to identify faults like malfunctioning bulbs, power irregularities, or current leakage. Upon detection, it will automatically alert maintenance teams or trigger corrective actions, such as rerouting power or isolating faulty units. By ensuring prompt fault resolution and optimizing energy usage, this system will enhance energy efficiency, reduce operational costs, and improve public safety. The solution will also provide data analytics for predictive maintenance, further reducing downtime and resource wastage.",
    },
    {
      id: 8,
      title: "Design/Development of an efficient Energy Storage System (ESS)",
      description:
        "Integrate intermittent Renewable Energy sources and support/stabilize the grid with an efficient Energy Storage System.",
      difficulty: "Hard",
      tags: ["Renewable Energy", "Grid Stability", "Energy Storage"],
      sdg: "SDG 7: Affordable and Clean Energy",
      fullDescription:
        "The increasing reliance on renewable energy sources such as solar and wind presents challenges due to their intermittent nature, leading to fluctuations in power generation and grid instability. Traditional energy storage solutions often suffer from inefficiencies, high costs, and limited scalability, making it difficult to integrate renewables effectively and ensure a stable power supply. To address these challenges, the development of an efficient Energy Storage System (ESS) is needed. This system will store excess renewable energy, provide backup during low generation periods, and support grid stabilization, enabling a more reliable, sustainable, and resilient energy infrastructure.",
    },
    {
      id: 15,
      title: "Integrated Smart Metering Solution",
      description:
        "Design and develop an integrated smart metering solution where an electricity smart meter acts as the central hub to connect and manage multiple utility meters along with controlling home appliances.",
      difficulty: "Medium",
      tags: ["Smart Home", "Energy Management", "IoT"],
      sdg: "SDG 7: Affordable and Clean Energy",
      fullDescription:
        "The solution should be capable of real-time monitoring, data collection, and optimization of resource usage to enhance efficiency and achieve cost savings. It should enable seamless integration and management of different utilities through a single platform. Additionally, the system should demonstrate at least three use cases, including but not limited to: Energy consumption management, Appliance control, Utility bill optimization. This smart metering solution aims to provide users with better visibility and control over their resource consumption, promoting energy efficiency and reducing operational costs.",
    },
    {
      id: 43,
      title: "Solar-Powered Smart Water Purifier",
      description:
        "Develop a solar-powered smart water purifier for rural and disaster-prone areas with unreliable electricity and infrastructure.",
      difficulty: "Hard",
      tags: ["Solar Power", "Water Purification", "Rural Development"],
      sdg: "SDG 6: Clean Water and Sanitation",
      fullDescription:
        "Access to clean drinking water remains a challenge in rural areas and disaster-stricken regions where electricity and infrastructure are unreliable. Traditional water purification systems require consistent power supply and maintenance, making them unsuitable for such locations. There is a need for a solar-powered smart water purifier that uses advanced filtration (such as graphene-based membranes or UV-C purification) and IoT-enabled water quality monitoring to ensure safe drinking water. The system will autonomously analyze contaminants, adjust filtration mechanisms, and provide real-time water quality updates via a mobile app or local display. This will ensure sustainable, off-grid access to clean water while reducing dependence on chemical treatments and plastic bottled water.",
    },
  ]

  // Software problems
  const softwareProblems = [
    {
      id: 30,
      title: "Solar Power Estimation Portal",
      description:
        "Develop a geospatial web-based portal for estimating the power that can be generated using solar energy based on the size of civilian housing rooftops.",
      difficulty: "Medium",
      tags: ["Geospatial", "Solar Energy", "Web Development"],
      sdg: "SDG 7: Affordable and Clean Energy",
      fullDescription:
        "Develop a geospatial web based portal for estimating the power that can be generated using solar energy based on the size of civilian housing rooftops. The system should have the facility to let the user choose an area and based on this, determine how much solar energy can be generated at building level using existing solar radiation related satellite data and some assumptions on the power related configuration of solar cells use Dataset.",
    },
  ]

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
              <Zap className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Energy and Power Transmission
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore innovative solutions in energy generation, transmission, and storage. These problem statements focus
            on creating sustainable, efficient, and accessible energy systems for a greener future.
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

