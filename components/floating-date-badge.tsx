"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function FloatingDateBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-lg shadow-lg shadow-cyan-500/30"
      >
        <div className="bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <span className="text-white font-bold text-sm">MAKE-A-THON 6.0</span>
          </div>
          <div className="text-purple-300 text-xs font-medium mb-1">Event Date Changed !!!</div>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
{/*             <Clock className="h-3 w-3" /> */}
            <span>April 29-30, 2025</span>
          </div>

          {/* Animated pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(124, 58, 237, 0)",
                "0 0 0 4px rgba(124, 58, 237, 0.3)",
                "0 0 0 0 rgba(124, 58, 237, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
