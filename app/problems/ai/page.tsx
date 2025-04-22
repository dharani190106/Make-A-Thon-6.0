"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIProblemsPage() {
  // Hardware problems
  const hardwareProblems = []

  // Software problems
  const softwareProblems = [
    {
      id: 3,
      title: "Personalized E-Learning Platform",
      description:
        "Develop an AI-driven platform that adapts educational content to individual learning styles and paces, enhancing student engagement and comprehension.",
      difficulty: "Medium",
      tags: ["Education", "Machine Learning", "Personalization"],
      sdg: "SDG 4: Quality Education",
      fullDescription:
        "Traditional e-learning platforms follow a one-size-fits-all approach, which often fails to cater to the diverse learning styles, paces, and needs of individual students. This lack of personalization leads to disengagement, ineffective learning, and knowledge gaps. Additionally, students struggle with varying levels of comprehension, requiring tailored support to optimize their learning experience. To address these challenges, an AI-driven personalized e-learning platform is needed to dynamically adapt content, provide real-time feedback, and offer customized learning pathways. This solution will enhance student engagement, improve comprehension, and ensure an effective, learner-centric educational experience.",
    },
    {
      id: 13,
      title: "AI-Enabled Real-Time Speech Enhancement",
      description:
        "Develop an Edge AI solution for enhancing speech quality on low-cost audio devices with noise reduction and clarity enhancement.",
      difficulty: "Hard",
      tags: ["Edge AI", "Audio Processing", "Speech Recognition"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Develop an Edge AI solution for enhancing speech quality on low-cost audio devices. The system must reduce background noise, enhance clarity, and perform speaker separation efficiently on embedded platforms like Raspberry Pi or ESP32.",
    },
    {
      id: 20,
      title: "AI-Based Defective Exhibit Identification System",
      description:
        "Create a system that automatically detects and identifies defective items or exhibits in manufacturing units and quality inspection areas.",
      difficulty: "Medium",
      tags: ["Computer Vision", "Quality Control", "Manufacturing"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "The AI-Based Defective Exhibit Identification System aims to automatically detect and identify defective items or exhibits in various settings, such as manufacturing units, quality inspection areas, or exhibitions. Using advanced computer vision and AI algorithms, the system will analyze images or video feeds in real-time to spot defects, damages, or irregularities in products or displays. This solution will help reduce human error, speed up the inspection process, and ensure higher accuracy in identifying defects. By providing instant feedback and reports, the system can improve quality control, reduce operational costs, and enhance overall efficiency. It can be integrated into existing workflows and customized for different industries, ensuring versatility and ease of adoption.",
    },
    {
      id: 29,
      title: "Automated AI/ML System for Detecting Online Fraud",
      description:
        "Create an AI/ML-based system that can autonomously analyze and categorize online content, distinguishing between authentic and fake/fraudulent websites.",
      difficulty: "Hard",
      tags: ["Fraud Detection", "NLP", "Web Security"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Create and implement an AI/ML-based system that can autonomously analyze and categorize online content, distinguishing between authentic and fake/fraudulent websites, advertisements, and customer care numbers. The system aims to achieve the following: Website Authentication: Develop algorithms to assess the legitimacy of websites based on domain, SSL certificates, and other authentication indicators. Ad Content Analysis: Implement NLP and image recognition techniques to evaluate the authenticity and accuracy of ad content. Customer Care Number Verification: Establish a database of verified customer care numbers and compare incoming numbers to identify potential scams. Real-time Detection: Enable real-time analysis of online content to prevent users from accessing fake or malicious websites. User Feedback Integration: Incorporate mechanisms for user feedback to enhance the system's accuracy and adapt to evolving fraudulent tactics.",
    },
    {
      id: 31,
      title: "Federated Learning Framework for Healthcare",
      description:
        "Develop a federated learning framework that enables hospitals to collaboratively train AI models on patient data without sharing sensitive information.",
      difficulty: "Hard",
      tags: ["Healthcare", "Privacy", "Machine Learning"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Develop a federated learning framework that enables hospitals to collaboratively train AI models on patient data without sharing sensitive information. The system should use advanced privacy-preserving techniques to ensure data security and comply with regulations like HIPAA. By aggregating insights from multiple hospitals, the framework will provide accurate predictions and valuable insights for disease diagnosis and treatment, ultimately improving patient outcomes while maintaining trust and data confidentiality.",
    },
    {
      id: 32,
      title: "AI-powered Financial Advisor for Rural India",
      description:
        "Create an AI-powered financial empowerment platform designed specifically for rural women with personalized financial education in local languages.",
      difficulty: "Medium",
      tags: ["Financial Inclusion", "Rural Development", "NLP"],
      sdg: "SDG 8: Decent Work and Economic Growth",
      fullDescription:
        "Scenario: Lakshmi, a widow and mother of two in a remote village in Odisha, has always dreamed of starting a small dairy business to secure a better future for her children. However, she lacks formal education and is intimidated by the complexities of financial products. Without access to financial literacy resources or tailored banking services, Lakshmi struggles to navigate the financial landscape and fears making decisions that could jeopardize her family's future. Student's Challenge: Create an AI-powered financial empowerment platform designed specifically for rural women like Lakshmi. The platform should provide AI-driven personalized financial education, accessible in local languages, and tailored to varying levels of literacy. It should also offer micro-investment opportunities, AI-powered budgeting tools, and secure, easy-to-understand banking options. Additionally, the solution could include AI-driven mentorship and community support features that connect users with successful female entrepreneurs and financial advisors, fostering a culture of financial independence and confidence.",
    },
    {
      id: 44,
      title: "AI-Based Sign Language to Speech & Text Converter",
      description:
        "Develop a real-time AI-based sign language recognition system that converts sign gestures into speech and text using computer vision.",
      difficulty: "Hard",
      tags: ["Accessibility", "Computer Vision", "NLP"],
      sdg: "SDG 10: Reduced Inequalities",
      fullDescription:
        "Millions of people with speech and hearing impairments face communication barriers daily, limiting their ability to interact seamlessly in public and professional spaces. Existing solutions for sign language recognition are either expensive, slow, or inaccurate. There is a need for a real-time AI-based sign language recognition system that can convert sign gestures into speech and text using computer vision and deep learning algorithms. The system will work on mobile devices and AR glasses, enabling seamless interaction between the hearing-impaired and non-sign language users in daily life, workplaces, and public services.",
    },
    {
      id: 45,
      title: "AI-Powered Resume Analyzer for Job Seekers",
      description:
        "Create an AI-based web application that helps job seekers optimize their resumes by analyzing structure, content, and keyword relevance.",
      difficulty: "Medium",
      tags: ["Career Development", "NLP", "Web Application"],
      sdg: "SDG 8: Decent Work and Economic Growth",
      fullDescription:
        "Create an AI-based web application that helps job seekers optimize their resumes by analyzing structure, content, and keyword relevance based on job descriptions. The system should provide personalized recommendations for improvements, highlight missing skills, and ensure ATS (Applicant Tracking System) compatibility. Additionally, it should suggest industry-specific templates for better visibility.",
    },
  ]

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
              <Brain className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Artificial Intelligence
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore cutting-edge AI problem statements and harness the power of artificial intelligence to create
            innovative solutions that can transform industries and improve lives.
          </motion.p>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-900/50">
              Hardware Solutions
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-900/50">
              Software Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
            {hardwareProblems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {hardwareProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                      {problem.sdg && problem.sdg.startsWith("SDG") ? (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.sdg.includes("1:")
                              ? "bg-red-600/20 text-red-300"
                              : problem.sdg.includes("2:")
                                ? "bg-yellow-600/20 text-yellow-300"
                                : problem.sdg.includes("3:")
                                  ? "bg-green-600/20 text-green-300"
                                  : problem.sdg.includes("4:")
                                    ? "bg-red-700/20 text-red-300"
                                    : problem.sdg.includes("5:")
                                      ? "bg-orange-600/20 text-orange-300"
                                      : problem.sdg.includes("6:")
                                        ? "bg-blue-500/20 text-blue-300"
                                        : problem.sdg.includes("7:")
                                          ? "bg-yellow-500/20 text-yellow-300"
                                          : problem.sdg.includes("8:")
                                            ? "bg-purple-700/20 text-purple-300"
                                            : problem.sdg.includes("9:")
                                              ? "bg-orange-500/20 text-orange-300"
                                              : problem.sdg.includes("10:")
                                                ? "bg-pink-600/20 text-pink-300"
                                                : problem.sdg.includes("11:")
                                                  ? "bg-amber-500/20 text-amber-300"
                                                  : problem.sdg.includes("12:")
                                                    ? "bg-amber-700/20 text-amber-300"
                                                    : problem.sdg.includes("13:")
                                                      ? "bg-green-700/20 text-green-300"
                                                      : problem.sdg.includes("14:")
                                                        ? "bg-blue-600/20 text-blue-300"
                                                        : problem.sdg.includes("15:")
                                                          ? "bg-green-500/20 text-green-300"
                                                          : problem.sdg.includes("16:")
                                                            ? "bg-blue-700/20 text-blue-300"
                                                            : "bg-blue-800/20 text-blue-300"
                          }`}
                        >
                          {problem.sdg.split(":")[0]}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">
                          Uncategorized
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4">{problem.description}</p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                      <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {problem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-cyan-500/20">
                      {problem.sdg && problem.sdg.startsWith("SDG") ? (
                        <span className="text-xs text-cyan-300">{problem.sdg}</span>
                      ) : (
                        <span className="text-xs text-gray-400">Uncategorized</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">No hardware problems available in this category.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {softwareProblems.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                    {problem.sdg && problem.sdg.startsWith("SDG") ? (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.sdg.includes("1:")
                            ? "bg-red-600/20 text-red-300"
                            : problem.sdg.includes("2:")
                              ? "bg-yellow-600/20 text-yellow-300"
                              : problem.sdg.includes("3:")
                                ? "bg-green-600/20 text-green-300"
                                : problem.sdg.includes("4:")
                                  ? "bg-red-700/20 text-red-300"
                                  : problem.sdg.includes("5:")
                                    ? "bg-orange-600/20 text-orange-300"
                                    : problem.sdg.includes("6:")
                                      ? "bg-blue-500/20 text-blue-300"
                                      : problem.sdg.includes("7:")
                                        ? "bg-yellow-500/20 text-yellow-300"
                                        : problem.sdg.includes("8:")
                                          ? "bg-purple-700/20 text-purple-300"
                                          : problem.sdg.includes("9:")
                                            ? "bg-orange-500/20 text-orange-300"
                                            : problem.sdg.includes("10:")
                                              ? "bg-pink-600/20 text-pink-300"
                                              : problem.sdg.includes("11:")
                                                ? "bg-amber-500/20 text-amber-300"
                                                : problem.sdg.includes("12:")
                                                  ? "bg-amber-700/20 text-amber-300"
                                                  : problem.sdg.includes("13:")
                                                    ? "bg-green-700/20 text-green-300"
                                                    : problem.sdg.includes("14:")
                                                      ? "bg-blue-600/20 text-blue-300"
                                                      : problem.sdg.includes("15:")
                                                        ? "bg-green-500/20 text-green-300"
                                                        : problem.sdg.includes("16:")
                                                          ? "bg-blue-700/20 text-blue-300"
                                                          : "bg-blue-800/20 text-blue-300"
                        }`}
                      >
                        {problem.sdg.split(":")[0]}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">
                        Uncategorized
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{problem.description}</p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                    <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {problem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-cyan-500/20">
                    {problem.sdg && problem.sdg.startsWith("SDG") ? (
                      <span className="text-xs text-cyan-300">{problem.sdg}</span>
                    ) : (
                      <span className="text-xs text-gray-400">Uncategorized</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

