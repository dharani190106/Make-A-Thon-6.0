"use client"
import { motion } from "framer-motion"
import {
  Brain,
  Cpu,
  Globe,
  ArrowRight,
  Zap,
  Smartphone,
  BotIcon as Robot,
  Server,
  Wrench,
  Shield,
  Workflow,
  Blocks,
  Radio,
  ImageIcon,
  Lightbulb,
  Cog,
  Factory,
  Puzzle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ThemeSection = () => {
  // Theme categories with icons
  const themes = [
    {
      icon: <Zap className="h-10 w-10 text-cyan-400" />,
      title: "Energy and Power",
      description: "Develop sustainable energy solutions and efficient power transmission systems.",
      route: "/problems/energy-and-power",
    },
    {
      icon: <Brain className="h-10 w-10 text-purple-400" />,
      title: "Artificial Intelligence",
      description: "Harness the power of AI to solve complex problems and create innovative solutions.",
      route: "/problems/ai",
    },
    {
      icon: <Globe className="h-10 w-10 text-cyan-400" />,
      title: "Internet of Things",
      description: "Connect the physical and digital worlds to create smarter environments.",
      route: "/problems/iot",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      title: "Application Development",
      description: "Create user-centric applications that solve real-world problems and enhance experiences.",
      route: "/problems/application-development",
    },
    {
      icon: <Cpu className="h-10 w-10 text-cyan-400" />,
      title: "Embedded and Communication",
      description: "Design specialized computing systems for dedicated functions within larger systems.",
      route: "/problems/embedded",
    },
    {
      icon: <Robot className="h-10 w-10 text-purple-400" />,
      title: "Robotics",
      description: "Build intelligent machines capable of carrying out complex tasks autonomously.",
      route: "/problems/robotics",
    },
    {
      icon: <Server className="h-10 w-10 text-cyan-400" />,
      title: "Edge AI",
      description: "Implement AI capabilities directly on edge devices for real-time processing and analysis.",
      route: "/problems/edge-ai",
    },
    {
      icon: <Wrench className="h-10 w-10 text-purple-400" />,
      title: "Electronics",
      description: "Develop innovative electronic systems and components for various applications.",
      route: "/problems/electronics",
    },
    {
      icon: <Cog className="h-10 w-10 text-cyan-400" />,
      title: "Mechanical",
      description: "Design mechanical systems and solutions for engineering challenges.",
      route: "/problems/mechanical",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      title: "Cybersecurity",
      description: "Develop cutting-edge security solutions to protect digital assets and privacy.",
      route: "/problems/cybersecurity",
    },
    {
      icon: <Workflow className="h-10 w-10 text-cyan-400" />,
      title: "Automation",
      description: "Create systems that operate with minimal human intervention to improve efficiency.",
      route: "/problems/automation",
    },
    {
      icon: <Blocks className="h-10 w-10 text-purple-400" />,
      title: "Blockchain",
      description: "Build decentralized applications that revolutionize trust and transparency.",
      route: "/problems/blockchain",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-purple-400" />,
      title: "Image Processing",
      description: "Create solutions that analyze and manipulate visual data for various applications.",
      route: "/problems/image-processing",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-cyan-400" />,
      title: "Miscellaneous",
      description: "Explore innovative solutions across various domains and interdisciplinary fields.",
      route: "/problems/misc",
    },
    {
      icon: <Factory className="h-10 w-10 text-cyan-400" />,
      title: "Industry Statements",
      description: "Phase 2: Real Time Problem Statements from Industry",
      route: "/problems/Industry",
    },
    {
      icon: <Puzzle className="h-10 w-10 text-cyan-400" />,
      title: "Open Innovation",
      description: "Phase 2: Open Innovation",
      route: "/problems/open",
    },
  ]

  return (
    <section id="theme" className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Explore Problem Statement Themes
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
            >
              <div className="flex flex-col items-start gap-4 mb-4">
                <div className="p-3 bg-black/70 rounded-lg border border-cyan-500/30">{theme.icon}</div>
                <h3 className="text-xl font-bold text-white">{theme.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 h-16 overflow">{theme.description} <br></br></p>

              <br></br>

              {/* Animated circuit lines */}
              <div className="relative h-1 w-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full overflow-hidden mb-4">
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-cyan-400 to-purple-400"
                />
              </div>

              {/* Add button for each theme */}
              <Link href={theme.route}>
              
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none shadow-lg shadow-cyan-500/20 group">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mt-16 mx-auto max-w-md"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Zap className="h-5 w-5 text-cyan-400" />
            <p className="text-gray-400">Choose a theme to explore detailed problem statements</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThemeSection
