"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Calendar, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react";


export default function FooterSection() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Cyber wave effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            fill="#0099ff"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Make-A-Thon 6.0
              </span>
            </div>
            <p className="text-gray-400 mb-6">
            The ultimate innovation-driven hackathon where developers, designers, and tech enthusiasts unite to build groundbreaking hardware and software solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ecea-svce-2b49062b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYprFH8OrRC6A1QCgnttg6Q%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/eceasvce?igsh=eXB1aTR6eWZldGht" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <br></br>
{/* Top Make a Thon 6.0 - Left Aligned */}
<div className="w-fit rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
  <img
    src="/new MAKEATHON LOGO.png"
    alt="Make A Thon 6.0"
    className="rounded-lg border-4 border-white"
  />
</div>

          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Theme", href: "#theme" },
              { name: "Schedule", href: "#schedule" },
              { name: "Updates", href: "#updates" },
              { name: "Sponsors", href: "#sponsors" },
              { name: "Achievements", href: "#achievements" },
              { name: "FAQ", href: "#faq" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">ecea@svce.ac.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-11 w-11 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">SVCE,Pennalur Village Chennai - Bangaluru High Road Sriperumbudur Tk, Tamil Nadu 602117</span>
              </li>
              {/*}
              <li className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">April 16-17, 2025</span>
              </li>
              */}
              <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
              <span className="text-gray-400">
                    Ramanathan M<br />
                      Secretary, ECEA.<br />+91 77086 30410</span>
              </li>
              <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
              <span className="text-gray-400"> Yaaminy S K <br />
              Secretary, IETE-SF.<br />+91 63809 89594</span>
              </li>
              <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
              <span className="text-gray-400"> Haresh Krishna G S <br />
              Secretary, RAIC.<br />+91 98846 68770</span>
              </li>
            
            </ul>
          </div>

{/* Location Map Section */}
<div className="md:col-span-1">
  <h3 className="text-white font-bold mb-6">Our Location</h3>
  <p className="text-gray-400 mb-4">Find us on the map below.</p>
  <div className="w-full h-64 rounded-md overflow-hidden">
    <iframe
      className="w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.732642346902!2d79.96767497580335!3d12.988944514496236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1694347794223!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


        </div>

        {/* QR Codes */}
        {/*<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {[
            { label: "Event Details", url: "#event" },
            { label: "Registration", url: "#register" },
            { label: "Venue Map", url: "#map" },
            { label: "Discord Server", url: "#discord" },
          ].map((qr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white p-2 rounded-md relative overflow-hidden">
                {/* Simulated QR code */}
                {/*<div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80')] bg-no-repeat bg-center"></div>

                {/* Glitch effect */}
                {/*<motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    y: [0, 80],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="absolute inset-0 bg-cyan-500/30"
                ></motion.div>
              </div>
              <span className="text-sm text-gray-400 mt-2">{qr.label}</span>
            </motion.div>
          ))}
        </div>*/}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20 text-center"
        >
          <p className="text-gray-500 text-sm">© 2025 Make-A-Thon 6.0. All rights reserved.</p>
          {/*<div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Code of Conduct
            </a>
          </div>*/}

          {/* Glitchy thank you message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-lg font-mono"
          >

<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex flex-wrap gap-3 justify-center items-center text-center">
  <span>Developed by</span>
  
  <a
    href="https://www.linkedin.com/in/akshay-g-5a625a255"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-cyan-300"
  >
    Akshay G,
  </a>

  <a
    href="https://www.linkedin.com/in/balaji-santhanam-7165102a5"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-cyan-300"
  >
    Balaji S,
  </a>

  <a
    href="https://www.linkedin.com/in/bawadharani-sree-ramakrishnan-97a638218"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-cyan-300"
  >
    Bawadharani Sree R.
  </a>
</span>


<br></br>


            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {"<Thank_You_For_Visiting/>"}
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}