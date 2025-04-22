"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OpenInnovationPage() {
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
              <Lightbulb className="h-12 w-12 text-yellow-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Open Innovation
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Welcome to Open Innovation! This is a space where teams can bring their own ideas to life. If you have an 
            innovative solution to a real-world problem, this is your opportunity to explore, design, and build something groundbreaking.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 bg-black/50 backdrop-blur-md border border-yellow-500/30 rounded-lg shadow-lg shadow-yellow-500/10"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">How It Works?</h2>
          <ul className="text-gray-300 space-y-2 list-disc pl-5">
            <li>Come up with an innovative idea in any domain.</li>
            <li>Define the problem you want to solve and its impact.</li>
            <li>Plan your solution, including technology, feasibility, and execution.</li>
            <li>Build and refine your prototype with creativity and innovation.</li>
            <li>Submit your idea and get feedback from experts.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-8 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 text-center"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Ready to innovate?</h3>
          <p className="text-gray-300 mb-6">
            Start brainstorming and develop your unique idea today!
          </p>
          {/*<Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-md">
            Submit Your Idea
          </Button>*/} 
        </motion.div>
      </div>
    </div>
  )
}
