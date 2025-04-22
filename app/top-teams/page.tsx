"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Trophy, Users, Lightbulb, Code, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TopTeamsPage() {
  // Sample top 40 teams data
  const teams = [
    {
      id: 1,
      name: "Quantum Coders",
      members: ["Alex Johnson", "Priya Patel", "Marcus Chen", "Sophia Rodriguez", "Raj Sharma", "David Kim"],
      project: "AI-Powered Medical Diagnosis Assistant",
      category: "Artificial Intelligence",
      highlight: "Best Technical Implementation",
    },
    {
      id: 2,
      name: "Blockchain Wizards",
      members: ["Emma Wilson", "Raj Sharma", "David Kim", "Olivia Martinez", "Aisha Mohammed", "Lucas Garcia"],
      project: "Decentralized Voting Platform",
      category: "Blockchain",
      highlight: "Most Innovative Solution",
    },
    {
      id: 3,
      name: "Secure Nexus",
      members: ["James Taylor", "Aisha Mohammed", "Lucas Garcia", "Zoe Wong", "Priya Patel", "Marcus Chen"],
      project: "Zero-Knowledge Authentication System",
      category: "Cybersecurity",
      highlight: "Best Security Solution",
    },
    {
      id: 4,
      name: "IoT Innovators",
      members: ["Noah Brown", "Fatima Ali", "Ethan Park", "Isabella Nguyen", "Aisha Mohammed", "Lucas Garcia"],
      project: "Smart City Traffic Management",
      category: "Internet of Things",
      highlight: "Most Practical Application",
    },
    {
      id: 5,
      name: "Neural Network",
      members: ["Liam Wilson", "Amara Okafor", "Daniel Lee", "Maya Patel", "Aisha Mohammed", "Lucas Garcia"],
      project: "Real-time Language Translation",
      category: "Artificial Intelligence",
      highlight: "Best User Experience",
    },
    {
      id: 6,
      name: "Crypto Pioneers",
      members: ["Ava Johnson", "Omar Hassan", "Sophia Chen", "Jackson Moore", "Aisha Mohammed", "Lucas Garcia"],
      project: "NFT Marketplace for Digital Artists",
      category: "Blockchain",
      highlight: "Most Creative Solution",
    },
    // Add more teams to reach 40 total
    // This is a sample of 6, but you can expand it to 40 with more varied data
  ]

  // Duplicate teams to reach 40 for demo purposes
  const allTeams = Array(7)
    .fill(teams)
    .flat()
    .slice(0, 40)
    .map((team, index) => ({
      ...team,
      id: index + 1,
      name: `${team.name} ${Math.floor(index / 6) + 1}`,
    }))

  // Categories for filtering
  const categories = ["Artificial Intelligence", "Blockchain", "Cybersecurity", "Internet of Things"]

  // Stats about the finalists
  const stats = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />,
      value: "40",
      label: "Teams",
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400"  />,
      value: "240+",
      label: "Participants",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400"  />,
      value: "4",
      label: "Categories",
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      value: "10",
      label: "Colleges",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8">
          <Link href="/#timeline">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Timeline
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 md:p-4 bg-black/70 rounded-lg border border-purple-500/30">
              <Trophy className="h-8 w-8 md:h-12 md:w-12 text-yellow-400" />
            </div>
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Top 40 Selected Teams
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delayopacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Congratulations to the top 40 teams selected for the MAKE-A-THON 6.0 finals! These teams were chosen from
            hundreds of applicants based on their innovative ideas, technical skills, and potential impact.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg flex items-center gap-4"
            >
              <div className="p-3 bg-black/70 rounded-lg border border-purple-500/30">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allTeams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 10) }}
              className="p-4 bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all shadow-lg shadow-purple-500/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-bold text-white">{team.name}</h2>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">{team.category}</span>
              </div>

              <p className="text-gray-300 text-sm mb-3">{team.project}</p>

              <div className="mb-3">
                <h3 className="text-xs text-gray-400 mb-1">Team Members:</h3>
                <div className="flex flex-wrap gap-1">
                  {team.members.map((member, i) => (
                    <span key={i} className="text-xs bg-black/70 px-2 py-1 rounded-md text-cyan-300">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {team.highlight && <div className="text-purple-400 text-xs font-medium mt-2">✨ {team.highlight}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

