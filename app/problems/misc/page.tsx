"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MiscPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 4,
      title: "Combat Social Isolation and Promote Mental Well-being",
      description:
        "Design products or platforms that combat social isolation and promote mental well-being, such as virtual companionship tools, community engagement platforms, or cognitive stimulation devices.",
      difficulty: "Medium",
      tags: ["Mental Health", "Social Connection", "Assistive Technology"],
      sdg: "SDG 3: Good Health and Well-being",
      fullDescription:
        "Social isolation and loneliness are growing concerns, negatively impacting mental wellbeing and overall quality of life. Many individuals, including the elderly, remote workers, and people with disabilities, struggle to maintain meaningful social connections due to physical distance, limited mobility, or lack of community engagement opportunities. Traditional solutions often fail to provide personalized, interactive, and easily accessible support. To address these challenges, innovative products or platforms are needed to foster social interaction, provide virtual companionship, and enhance mental stimulation. By leveraging AI, digital communities, and interactive tools, these solutions can combat loneliness, improve emotional well-being, and create a sense of belonging."
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
              <Lightbulb className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Miscellaneous
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore diverse problem statements that don't fit neatly into other categories. These challenges span
            multiple domains and offer opportunities for interdisciplinary innovation.
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

