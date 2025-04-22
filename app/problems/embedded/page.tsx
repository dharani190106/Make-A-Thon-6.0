"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmbeddedPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 7,
      title: "Smart Firefighting Helmet with Thermal Imaging",
      description:
        "Create a helmet that provides firefighters with real-time thermal imaging and environmental data in hazardous conditions.",
      difficulty: "Hard",
      tags: ["Safety Equipment", "Thermal Imaging", "Emergency Response"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Firefighters often face extreme environments with poor visibility, high temperatures, and unpredictable hazards, making it difficult to locate victims, navigate safely, and assess fire intensity. Traditional firefighting gear lacks real-time situational awareness tools, increasing the risk of injury and reducing operational efficiency. To address these challenges, a smart firefighting helmet with integrated thermal imaging and environmental sensors is needed. This helmet will provide real-time heat signatures, smoke penetration visibility, and crucial environmental data, enabling firefighters to make informed decisions, improve rescue operations, and enhance overall safety in hazardous conditions.",
    },
    {
      id: 17,
      title: "Writing Pen and Pad for Children with Specific Learning Disability",
      description:
        "Develop a special writing pen and writing pad to help children with specific learning disabilities improve their writing skills.",
      difficulty: "Medium",
      tags: ["Assistive Technology", "Education", "Special Needs"],
      sdg: "SDG 4: Quality Education",
      fullDescription:
        "The goal is to design a special writing pen and writing pad to help children with specific learning disabilities (SLD) improve their writing skills. The pen and pad should be easy to use, comfortable to hold, and help children practice writing letters and numbers correctly. The system can include features like guided tracing, audio feedback, and error correction to make learning more fun and interactive. This tool aims to support children in developing better handwriting, coordination, and confidence in their learning.",
    },
    
    {
      id: 40,
      title: "Smart Backpack with Anti-Theft and Safety Features",
      description:
        "Design a smart backpack equipped with an anti-theft alarm, GPS tracking, and an emergency SOS feature.",
      difficulty: "Medium",
      tags: ["Wearable Technology", "Security", "Personal Safety"],
      sdg: "SDG 9: Industry, Innovation and Infrastructure",
      fullDescription:
        "Design a smart backpack equipped with an anti-theft alarm, GPS tracking, and an emergency SOS feature. The backpack should have sensors to detect unauthorized access attempts (such as forced opening) and trigger an alert via a mobile app. Additionally, it can include a built-in power bank, RFID-blocking compartments for card security, and an LED indicator for visibility in low-light conditions. This solution aims to enhance security and convenience for students, travelers, and professionals.",
    },
    {
      id: 42,
      title: "Smart Wearable Posture Correction Device",
      description:
        "Develop a wearable device that monitors a user's posture using gyroscopic and pressure sensors with real-time feedback.",
      difficulty: "Medium",
      tags: ["Health Tech", "Wearables", "Ergonomics"],
      sdg: "SDG 3: Good Health and Well-being",
      fullDescription:
        "Develop a wearable device that monitors a user's posture using gyroscopic and pressure sensors. The device should provide real-time haptic feedback (vibrations) when poor posture is detected and sync with a mobile app to track posture improvement over time. The system should be lightweight, comfortable, and suitable for long-term use, especially for students and professionals who spend extended hours sitting.",
    },
    {
    id: 50, 
      title: "Extending the Range and Scalability of Zigbee Networks",
      description:
        "Develop methods and technologies to extend the reach of Zigbee networks for larger homes and future device expansion.",
      difficulty: "Medium",
      tags: ["IoT", "Wireless Communication", "Home Automation"],
      sdg: "SDG 4: Quality Education",
      fullDescription:
        "Zigbee is a popular wireless communication protocol for IoT devices due to its low power consumption and reliable performance in short-range communications. However, it has a limited range compared to Wi-Fi, which may pose challenges when used in larger homes or environments requiring coverage over extended areas. To address this limitation and ensure scalability for future device additions, there is a need to develop methods and technologies that can extend the reach of Zigbee networks. This could involve implementing network topology enhancements, such as mesh networking, deploying Zigbee repeaters, or integrating Zigbee with other communication protocols. The solution should ensure that the Zigbee network can maintain its low power consumption while supporting an increasing number of devices and covering larger areas without sacrificing performance.",
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
              <Cpu className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Embedded Systems
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore embedded systems challenges that focus on creating specialized computing solutions for dedicated
            functions. These problem statements aim to develop innovative hardware that integrates seamlessly into
            larger systems.
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

