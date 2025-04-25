"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Trophy, Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TopTeamsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Real team data from the PDF
  const teams = [
    {
      id: "MAT001",
      name: "VisionEdge",
      leadName: "VIKAASH B G S",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT002",
      name: "TEAM AURA",
      leadName: "DHANUSH BT",
      college: "SRI SAIRAM ENGINEERING COLLEGE",
      domain: "Hardware",
    },
    {
      id: "MAT003",
      name: "Spectronauts-X",
      leadName: "Vijai Saravanan R G",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT004",
      name: "Inklude",
      leadName: "Hemanth Kalaiyappan",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT005",
      name: "TEAM INVINCIBLE",
      leadName: "LOHITH ASHWA S",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT006",
      name: "Electrochampz",
      leadName: "Vinayagamurthi E",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT007",
      name: "Team Artificial",
      leadName: "Anton Jacob",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT008",
      name: "Team 7",
      leadName: "Rekashwin G P",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT009",
      name: "404 Orbit Not Found",
      leadName: "Nivetha Harshini J",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT010",
      name: "Walter Wire",
      leadName: "Shakthivel. R",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT011",
      name: "Wildfirewonders",
      leadName: "Archana A",
      college: "Ck college of engineering and technology",
      domain: "Hardware",
    },
    {
      id: "MAT012",
      name: "HYDRO SPARK",
      leadName: "SRIVATSAN S P",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT013",
      name: "Team_BLAZE",
      leadName: "S TAMIL NILAVAN",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT014",
      name: "BlueCurrent",
      leadName: "M.GURUPRASAATH",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT015",
      name: "Sinister six",
      leadName: "Rajiv natraj. S",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT016",
      name: "L.E",
      leadName: "Iyyappan S",
      college: "Meenakshi Sundararajan engineering college",
      domain: "Hardware",
    },
    {
      id: "MAT017",
      name: "Colossal Coders",
      leadName: "Tamizhselvan R D",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT018",
      name: "VoteChain",
      leadName: "Naresh M",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT019",
      name: "WhiteHatWizards",
      leadName: "Meghavarshini S",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT020",
      name: "CipherSentinel",
      leadName: "Guruprasath P",
      college: "Rajalakshmi Engineering College",
      domain: "Software",
    },
    {
      id: "MAT021",
      name: "Netrunners",
      leadName: "K.Srihare Vignesh",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT022",
      name: "SKYWALKERS",
      leadName: "DINESH S",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT023",
      name: "Red Dragon",
      leadName: "Sneka P",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT024",
      name: "Zephyr Nova",
      leadName: "Koushik Kumar M",
      college: "SRM Institute of Science and Technology, Trichy",
      domain: "Software",
    },
    {
      id: "MAT025",
      name: "ByteBash",
      leadName: "Harshinivarsa S.K",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT026",
      name: "VitalSync",
      leadName: "Preethi.R",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT027",
      name: "HackSmiths",
      leadName: "Swathi A",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT028",
      name: "Nex",
      leadName: "Mythili S",
      college: "KCG College Of Technology",
      domain: "Software",
    },
    {
      id: "MAT029",
      name: "HACK-X",
      leadName: "Prabakaran R",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT030",
      name: "femtronix",
      leadName: "M. Akshaya",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT031",
      name: "NEURONAUTS",
      leadName: "Monigha Rajam K L",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT032",
      name: "SDG7 INNOVATORS",
      leadName: "Bala Subramanian M",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT033",
      name: "Fusion",
      leadName: "Chandrakanth P",
      college: "SRM Institute of Science and Technology",
      domain: "Software",
    },
    {
      id: "MAT034",
      name: "Code Pulse",
      leadName: "Aravind V.",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT035",
      name: "CYBER GUARDIANS",
      leadName: "BHAVITHA TV",
      college: "VELAMMAL INSTITUTE OF TECHNOLOGY",
      domain: "Software",
    },
    {
      id: "MAT036",
      name: "Bluest Flame",
      leadName: "Vanjinathan A",
      college: "SVCE",
      domain: "Software",
    },
    {
      id: "MAT037",
      name: "QUINTET",
      leadName: "BALAJI S",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT038",
      name: "The Wave Shifters",
      leadName: "Ashvatha R",
      college: "SVCE",
      domain: "Hardware",
    },
    {
      id: "MAT039",
      name: "Techora",
      leadName: "Anuradha S",
      college: "Sri Sai Ram Engineering College, Chennai.",
      domain: "Hardware",
    },
    {
      id: "MAT040",
      name: "BBUMPGUARDS.AI",
      leadName: "VALLETI PAVITHRA",
      college: "VELAMMAL INSTITUTE OF TECHNOLOGGY",
      domain: "Hardware",
    },
  ]

 // Waiting list teams - using real data
 const waitingListTeams = [
  {
    id: "WL001",
    name: "Power Pattalam",
    leadName: "SIVAPURAM DEEKSHITHA",
    college: "SVCE",
    domain: "Hardware",
  },
  {
    id: "WL002",
    name: "Quintet",
    leadName: "N.Yaazhinii",
    college: "SVCE",
    domain: "Hardware",
  },
  {
    id: "WL003",
    name: "Thugs of Task Manager",
    leadName: "Yajnesh Juttu Sundaram",
    college: "SVCE",
    domain: "Hardware",
  },
  {
    id: "WL004",
    name: "Prototypers",
    leadName: "Ramya.V",
    college: "SVCE",
    domain: "Hardware",
  },
  {
    id: "WL005",
    name: "MindBlitz",
    leadName: "Ashwin S",
    college: "SVCE",
    domain: "Hardware",
  },
  {
    id: "WL006",
    name: "NANOVOYAGERS",
    leadName: "M.Sai Shashank",
    college: "Chennai institute of technology",
    domain: "Software",
  },
  {
    id: "WL007",
    name: "CONVOCODERS",
    leadName: "Sindhuja S",
    college: "SVCE",
    domain: "Software",
  },
  {
    id: "WL008",
    name: "TechZ's",
    leadName: "RAHUL B",
    college: "SVCE",
    domain: "Software",
  },
  {
    id: "WL009",
    name: "Debuggers",
    leadName: "Krithika. R",
    college: "SVCE",
    domain: "Software",
  },

]


  // Filter teams based on search term and active tab
  const filterTeams = (teamsList, searchTerm) => {
    return teamsList.filter(
      (team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.domain.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const filteredTeams = filterTeams(teams, searchTerm)
  const filteredWaitingList = filterTeams(waitingListTeams, searchTerm)

  // Get unique domains for the color mapping
  const domains = [...new Set([...teams, ...waitingListTeams].map((team) => team.domain))]

  // Create a color mapping for domains
  const domainColors: Record<string, string> = {}
  const colors = ["bg-purple-500/20 text-purple-300", "bg-cyan-500/20 text-cyan-300"]

  domains.forEach((domain, index) => {
    domainColors[domain] = colors[index % colors.length]
  })

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
          <Link href="/#home">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 md:p-4 bg-black/70 rounded-lg border border-purple-500/30">
                <Trophy className="h-8 w-8 md:h-10 md:w-10 text-yellow-400" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                MAKE-A-THON 6.0 Teams
              </h1>
            </div>

            <div className="relative w-full md:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search teams..."
                className="pl-10 bg-black/50 border-purple-500/30 focus:border-purple-500/50 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mb-8"
          >
            Congratulations to the top 40 teams selected for the MAKE-A-THON 6.0 finals! These teams were chosen from
            hundreds of applicants based on their innovative ideas, technical skills, and potential impact.
          </motion.p>
        </div>

        <Tabs defaultValue="selected" className="mb-8">
          <TabsList className="bg-black/50 border border-purple-500/30">
            <TabsTrigger value="selected" className="data-[state=active]:bg-purple-500/20">
              <Trophy className="h-4 w-4 mr-2" />
              Selected Teams
            </TabsTrigger>
            <TabsTrigger value="waiting" className="data-[state=active]:bg-purple-500/20">
              <Clock className="h-4 w-4 mr-2" />
              Waiting List
            </TabsTrigger>
          </TabsList>

          <TabsContent value="selected" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h2 className="text-xl font-bold text-purple-300 mb-2">Top 40 Selected Teams</h2>
              <p className="text-gray-400">
                These teams have been selected to participate in the MAKE-A-THON 6.0 finals.
              </p>
            </motion.div>

            {/* Teams Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * Math.min(index, 10) }}
                  className="relative overflow-hidden rounded-xl border border-purple-500/30 bg-black/50 backdrop-blur-md p-5 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Team ID Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/30">
                      {team.id}
                    </span>
                  </div>

                  {/* Team Name */}
                  <h3 className="text-lg font-bold text-white mb-3 pr-16">{team.name}</h3>

                  {/* Team Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="w-24 text-gray-400">Team Lead:</span>
                      <span className="text-white font-medium">{team.leadName}</span>
                    </div>

                    <div className="flex items-start">
                      <span className="w-24 text-gray-400">College:</span>
                      <span className="text-gray-300">{team.college}</span>
                    </div>

                    <div className="flex items-start mt-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          team.domain === "Hardware" ? domainColors["Hardware"] : domainColors["Software"]
                        }`}
                      >
                        {team.domain}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No results message */}
            {filteredTeams.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No teams found matching your search criteria.</p>
                <Button variant="ghost" className="mt-4 text-purple-400" onClick={() => setSearchTerm("")}>
                  Clear search
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="waiting" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h2 className="text-xl font-bold text-purple-300 mb-2">Waiting List (10 Teams)</h2>
              <p className="text-gray-400">
                These teams are on the waiting list and may be invited to participate if any selected team withdraws.
              </p>
            </motion.div>

            {/* Waiting List Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredWaitingList.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * Math.min(index, 10) }}
                  className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-black/50 backdrop-blur-md p-5 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-600/0 to-blue-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Team ID Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/30">
                      {team.id}
                    </span>
                  </div>

                  {/* Team Name */}
                  <h3 className="text-lg font-bold text-white mb-3 pr-16">{team.name}</h3>

                  {/* Team Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="w-24 text-gray-400">Team Lead:</span>
                      <span className="text-white font-medium">{team.leadName}</span>
                    </div>

                    <div className="flex items-start">
                      <span className="w-24 text-gray-400">College:</span>
                      <span className="text-gray-300">{team.college}</span>
                    </div>

                    <div className="flex items-start mt-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          team.domain === "Hardware" ? domainColors["Hardware"] : domainColors["Software"]
                        }`}
                      >
                        {team.domain}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No results message */}
            {filteredWaitingList.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No waiting list teams found matching your search criteria.</p>
                <Button variant="ghost" className="mt-4 text-purple-400" onClick={() => setSearchTerm("")}>
                  Clear search
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Domain Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-purple-500/30 bg-black/50 backdrop-blur-md"
        >
          <h2 className="text-xl font-bold text-purple-300 mb-4">Team Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/30">
              <h3 className="text-lg font-medium text-purple-300 mb-2">Selected Teams</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Hardware Teams</p>
                  <p className="text-2xl font-bold text-white">{teams.filter((t) => t.domain === "Hardware").length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Software Teams</p>
                  <p className="text-2xl font-bold text-white">{teams.filter((t) => t.domain === "Software").length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="text-2xl font-bold text-white">{teams.length}</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-cyan-900/20 border border-cyan-500/30">
              <h3 className="text-lg font-medium text-cyan-300 mb-2">Waiting List</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Hardware Teams</p>
                  <p className="text-2xl font-bold text-white">
                    {waitingListTeams.filter((t) => t.domain === "Hardware").length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Software Teams</p>
                  <p className="text-2xl font-bold text-white">
                    {waitingListTeams.filter((t) => t.domain === "Software").length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="text-2xl font-bold text-white">{waitingListTeams.length}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
