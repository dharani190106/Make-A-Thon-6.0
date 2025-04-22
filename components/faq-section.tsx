"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // FAQ items
  const faqs = [
    {
      question: "Who can participate in MAKE-A-THON 6.0 ?",
      answer:
        "Any engineering student, regardless of their year of study or department, are eligible to participate, Students from other engineering colleges are most welcome to join... ",
    },
    {
      question: "What are the requirements to participate?",
      answer:
        <>"To participate, you must: <br />- Register on the website  <br />- Pay the registration fee  <br />- Submit an abstract for evaluation and get shortlisted"</>,
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, there is a nominal registration fee.",
    },
    {
      question: "What kind of projects can we build?",
      answer:
        "You are free to build hardware, software or hybrid projects across any domain mentioned in our problem statements. Creativity and innovation are highly encouraged !! ",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! Exciting cash prizes, certificates & internship opportunities awaits for the top-performing teams.",
    },
    {
      question: "What will be provided during hackathon ?",
      answer:<>"Participants will recieve :  <br />- Participation certificates  <br />- Food and refreshments  <br />- ID/Bands cards for identification  <br />- Workstations with seating arrangements  <br />- WiFi and power sources  <br />- Tech support and mentorship<br/>-Transportation facilities  "</>,
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer:
        "You can start to brainstorm ideas and prepare, but the actual development must happen during the hackathon to ensure fairness.",
    },
    {
      question: "How many members can a team have ?",
      answer:
        "Each team must have a minimum of 4 and a maximum of 6 members. ",
    },
    {
      question: "Can a team have members from different colleges ?",
      answer:
        "No! Teams cannot have members from different colleges, all members must be part of the same college but can be of various departments/year of study. Each member must complete individual registrations. ",
    },
    {
      question: "When and Where will the Hackathon be conducted ?",
      answer:
        "Makeathon 6.0 will commence on 29th April 9am & at 30th April 12pm at the MPH (Multi Purpose Hall) in Sri Venkateswara College of Engineering (SVCE), Sriperumbudur.",
    },
    
  ]

  return (
    <section id="faq" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about MAKE-A-THON 6.0. Can't find the answer you're looking for? Feel free to
            contact us.
          </p>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="max-w-3xl mx-auto bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 shadow-lg shadow-purple-500/10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-purple-500/30">
                  <AccordionTrigger className="text-left text-white hover:text-purple-400 py-4 transition-all">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pl-7">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-purple-500/20 rounded-full blur-[80px] bg-purple-500/10"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-pink-500/20 rounded-full blur-[100px] bg-pink-500/10"></div>

        {/* Circuit lines */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 mt-16 mx-auto max-w-md"
        />
      </div>
    </section>
  )
}

