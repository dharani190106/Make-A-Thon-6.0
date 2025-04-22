"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorVariant, setCursorVariant] = useState("default")
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

    let mouseX = 0
    let mouseY = 0
    let rafId: number | null = null

    // More performant cursor movement using requestAnimationFrame
    const moveCursor = () => {
      if (cursorRef.current) {
        const xTo = mouseX
        const yTo = mouseY

        cursorRef.current.style.transform = `translate3d(${xTo}px, ${yTo}px, 0)`
      }
      rafId = requestAnimationFrame(moveCursor)
    }

    // Start the animation loop
    rafId = requestAnimationFrame(moveCursor)

    // Track mouse position without using state for better performance
    const mouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Track cursor interactions
    const mouseDown = () => setCursorVariant("clicking")
    const mouseUp = () => setCursorVariant("default")

    // Track link/button hovers
    const handleLinkHoverStart = () => setCursorVariant("hover")
    const handleLinkHoverEnd = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart)
      el.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart)
        el.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [isMobile])

  // Don't render cursor on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-50">
        {/* Main cursor */}
        <motion.div
          className="relative"
          animate={cursorVariant}
          variants={{
            default: {
              width: 24,
              height: 24,
              x: -12,
              y: -12,
              opacity: 0.7,
              transition: { duration: 0.1 },
            },
            hover: {
              width: 40,
              height: 40,
              x: -20,
              y: -20,
              opacity: 1,
              transition: { duration: 0.1 },
            },
            clicking: {
              width: 16,
              height: 16,
              x: -8,
              y: -8,
              opacity: 1,
              transition: { duration: 0.1 },
            },
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            animate={cursorVariant}
            variants={{
              default: { scale: 1 },
              hover: { scale: 1, borderColor: "#8b5cf6" },
              clicking: { scale: 0.8 },
            }}
          />

          {/* Inner dot */}
          <motion.div
            className="absolute rounded-full bg-cyan-400"
            animate={cursorVariant}
            variants={{
              default: {
                width: 4,
                height: 4,
                x: 10,
                y: 10,
                backgroundColor: "#06b6d4",
              },
              hover: {
                width: 8,
                height: 8,
                x: 16,
                y: 16,
                backgroundColor: "#8b5cf6",
              },
              clicking: {
                width: 12,
                height: 12,
                x: 2,
                y: 2,
                backgroundColor: "#06b6d4",
              },
            }}
          />
        </motion.div>
      </div>
    </>
  )
}

