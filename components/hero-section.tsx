"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  Box,
  Stars,
} from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"


// Inline styling for the cool result button (inspired by your Uiverse example)
const customStyles = `
  .btn-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .btn-content {
    display: flex;
    align-items: center;
    padding: 10px 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
    background: linear-gradient(to right, #06b6d4, #3b82f6);
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-content:hover {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    transform: translateY(-2px);
  }

  .icon-arrow {
    margin-left: 15px;
    transform: scale(0.6);
    transition: all 0.3s ease;
  }

  .btn-content:hover .icon-arrow {
    margin-left: 25px;
  }

  #arrow-icon-one,
  #arrow-icon-two {
    transform: translateX(-30%);
    transition: 0.5s;
  }

  .btn-content:hover #arrow-icon-one,
  .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
  }

  .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  @keyframes color_anim {
    0%, 100% { fill: white; }
    50% { fill: #06b6d4; }
  }
`;

// Digital Grid Floor
function DigitalGrid() {
  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <planeGeometry args={[100, 100, 100, 100]} />
        <meshStandardMaterial color="#000000" wireframe emissive="#00ffff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  )
}

// Enhanced 3D scene with floating elements
function EnhancedScene() {
  // Create floating holographic elements
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />

      {/* Digital grid floor */}
      <DigitalGrid />

      {/* Floating holographic elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={[Math.sin((i / 8) * Math.PI * 2) * 5, Math.random() * 2 - 1, Math.cos((i / 8) * Math.PI * 2) * 5]}
        >
          <Sphere args={[0.5 + Math.random() * 0.5, 16, 16]}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#00ffff" : "#ff00ff"}
              attach="material"
              distort={0.3}
              speed={2}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>
      ))}

      {/* Floating data cubes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Float
          key={`cube-${i}`}
          speed={3}
          rotationIntensity={2}
          floatIntensity={1}
          position={[Math.sin((i / 12) * Math.PI * 2) * 8, Math.random() * 4 - 2, Math.cos((i / 12) * Math.PI * 2) * 8]}
        >
          <Box args={[0.3, 0.3, 0.3]}>
            <MeshWobbleMaterial
              color={i % 2 === 0 ? "#ff00ff" : "#00ffff"}
              factor={0.4}
              speed={2}
              transparent
              opacity={0.7}
            />
          </Box>
        </Float>
      ))}

      {/* Central holographic sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <Sphere args={[2, 32, 32]} position={[0, 1, 0]}>
          <MeshDistortMaterial color="#00ffff" attach="material" distort={0.4} speed={1.5} transparent opacity={0.2} />
        </Sphere>
      </Float>

      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Environment and controls */}
      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

// Glitchy text effect component
function GlitchyText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState("")
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    let currentText = ""
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex]
        setDisplayText(currentText)
        currentIndex++

        // Random glitch effect
        if (Math.random() > 0.7) {
          setGlitching(true)
          setTimeout(() => setGlitching(false), 100)
        }
      } else {
        clearInterval(interval)

        // Occasional glitch after completion
        const glitchInterval = setInterval(() => {
          setGlitching(true)
          setTimeout(() => setGlitching(false), 100)
        }, 900)

        return () => clearInterval(glitchInterval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text])

  return (
    <div className={`font-mono ${className} ${glitching ? "text-red-500" : ""}`}>
      {displayText}
      {glitching && (
        <span className="inline-block ml-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="opacity-70">
              {String.fromCharCode(Math.floor(Math.random() * 26) + 97)}
            </span>
          ))}
        </span>
      )}
    </div>
  )
}

// Enhanced countdown timer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Target date - March 15, 2025
  const targetDate = new Date("2025-04-29T09:00:00").getTime()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        // If we're past the target date
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center max-w-md mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <div className="relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>

            {/* Timer value */}
            <div className="relative text-2xl sm:text-4xl font-bold bg-black/70 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center justify-center min-h-[60px] sm:min-h-[80px]">
              {value.toString().padStart(2, "0")}

              {/* Animated pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg animate-pulse"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border border-cyan-500/30 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-xs uppercase mt-2 text-gray-300">{unit}</div>
        </div>
      ))}
    </div>
  )
}

// Floating particles background
function ParticlesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -1000],
            opacity: [0, 0.5, 0],
            scale: [0, Math.random() * 2 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with layered effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating particles */}
      <ParticlesBackground />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <EnhancedScene />
        </Canvas>
      </div>

      {/* Content overlay with improved visibility */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/50 shadow-lg shadow-cyan-500/20 max-w-3xl mx-auto">
            <GlitchyText text=">> INITIALIZING MAKE-A-THON 6.0" className="text-xl md:text-2xl text-cyan-400 mb-2" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,255,255,0.5)]">
              MAKE-A-THON 6.0
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Innovate · Elevate · Collaborate
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.5 }}
  className="flex flex-col items-center gap-4"
>
  {/* First Line: RESULTS Button */}
  <Link href="/top-teams" className="w-full md:w-auto">
  <Button
      variant="outline"
      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-6 text-white border-none w-full mt-4s"
    >
      
        Results
      
      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  </Link>

  {/* Second Line: Register + Learn More */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
    <Button
      variant="outline"
      className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg shadow-lg shadow-cyan-500/20"
    >
      <a href="https://forms.gle/oW4ycK2F98gr4dVK6" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        Register Now
      </a>
    </Button>

    <Button
      variant="outline"
      className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg shadow-lg shadow-cyan-500/20"
    >
      <a href="#about" className="cursor-pointer">
        Learn More
      </a>
    </Button>
  </div>
</motion.div>





        </div>

<br></br><br></br>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="cursor-pointer">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
         </a>
        </motion.div>
      

      {/* Enhanced animated floating circuits */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  )
}

