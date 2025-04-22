"use client"

import { motion } from "framer-motion"
import { Clock, BellRing, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function StayTunedSection() {
  const [dots, setDots] = useState(".")

  // Animation for the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div id="staytuned" className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            className="relative w-24 h-24 md:w-32 md:h-32 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Clock className="h-10 w-10 md:h-14 md:w-14 text-cyan-400" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Schedule Coming Soon
          </motion.h2>

          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-center text-gray-300">Event schedule will be announced shortly{dots}</p>
          </motion.div>

          <motion.div
            className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg max-w-md w-full"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BellRing className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-medium text-white">Stay Updated!</h3>
            </div>
<p className="text-gray-300 mb-4">Follow our Instagram page for the latest updates and announcements.</p>
<a 
  href="https://www.instagram.com/eceasvce?igsh=eXB1aTR6eWZldGht" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-400 hover:text-cyan-400 transition-colors"
>
  <Instagram className="h-5 w-5" />
</a>
            
            {/* 
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-black/70 border border-cyan-500/30 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                Notify Me
              </Button>
            </div>
*/}

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
