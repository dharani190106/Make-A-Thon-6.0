"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IoTProblemsPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 5,
      title: "Empowering the Delivery Workforce",
      description:
        "Design products that support the physical and mental health of delivery workers, such as ergonomic gear to reduce strain.",
      difficulty: "Medium",
      tags: ["Wearables", "Health Monitoring", "Ergonomics"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Delivery workers face significant physical and mental health challenges due to long working hours, strenuous tasks, and high-pressure environments. Prolonged riding, lifting, and repetitive movements lead to musculoskeletal strain, while job-related stress, irregular schedules, and job insecurity impact mental well-being. Existing solutions often fail to provide holistic support tailored to their unique needs. To address these issues, innovative products are needed, such as ergonomic gear to reduce physical strain, fitness trackers to monitor health, and mental health apps offering stress management and emotional support. This solution will enhance the well-being, productivity, and overall quality of life for delivery workers.",
    },
    {
      id: 6,
      title: "Smart Receptionist with Smart Lock System",
      description:
        "Design a system that integrates a virtual receptionist with a smart lock, allowing homeowners to remotely manage visitor access.",
      difficulty: "Medium",
      tags: ["Home Security", "Smart Home", "Authentication"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "Traditional home security systems and visitor management methods often lack efficiency, convenience, and real-time control. Homeowners face challenges in managing visitor access, especially when they are away, leading to security concerns and missed deliveries or appointments. Conventional lock-and-key systems are vulnerable to unauthorized access, while physical receptionists or intercom-based solutions can be inconvenient. To address these issues, a smart receptionist with an integrated smart lock system is needed. This solution will enable homeowners to authenticate visitors, schedule access remotely, and enhance security through AI-driven verification and real-time monitoring, ensuring both safety and convenience.",
    },
    {
      id: 12,
      title: "Edge Computing for Disaster Response Networks",
      description:
        "Create a robust edge-computing network leveraging IoT devices for disaster-stricken areas with damaged communication infrastructure.",
      difficulty: "Hard",
      tags: ["Disaster Response", "Edge Computing", "Emergency Services"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "In disaster-stricken areas, communication infrastructure is often severely damaged, making it challenging to coordinate rescue operations and assess damage in real-time. Traditional centralized systems fail in such environments due to unpredictable terrains, intermittent connectivity, and the need for immediate decision-making. A robust edge-computing network leveraging IoT devices and a simulated drone-like data source is required to enable localized data processing and real-time analysis. The system must operate effectively without relying on external networks, assessing damage, detecting hazards, and monitoring environmental factors.",
    },
    {
      id: 14,
      title: "Real-Time Edge AI for Smart Wearables in Post-Surgery Rehabilitation",
      description:
        "Design an Edge AI-powered wearable system that continuously tracks patient rehabilitation progress with real-time feedback.",
      difficulty: "Hard",
      tags: ["Healthcare", "Wearables", "Rehabilitation"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Design an Edge AI-powered wearable system that continuously tracks patient rehabilitation progress. The device should analyze movement, posture, and vital signs in real-time to provide corrective feedback and prevent complications.",
    },
    {
      id: 24,
      title: "AI-Powered Water Quality Monitoring",
      description:
        "Develop an AI solution that analyzes water quality data from various sources to predict contamination levels or risks.",
      difficulty: "Medium",
      tags: ["Environmental Monitoring", "Water Quality", "Predictive Analytics"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Develop an AI solution that analyzes water quality data from various sources, such as sensors, satellite imagery, and lab reports, to predict contamination levels or risks. The system should use machine learning models to identify patterns, detect anomalies, and forecast potential contamination events. It should provide real-time alerts and recommendations for corrective actions. The solution can be deployed as a mobile or web-based platform with data visualization and reporting features.",
    },
    {
      id: 25,
      title: "Smart Helmet for Emergency Alerts",
      description:
        "Create a helmet equipped with sensors to detect accidents and automatically send alerts with the rider's real-time location.",
      difficulty: "Medium",
      tags: ["Safety", "Wearables", "Emergency Response"],
      sdg: "SDG 3: Good Health and Well-being",
      fullDescription:
        "Road accidents involving two-wheeler riders often lead to severe injuries or fatalities due to delayed emergency response. In many cases, riders are unable to call for help immediately after an accident, making timely medical assistance difficult. Additionally, the lack of real-time health monitoring and emergency alert systems increases the risk of critical situations going unnoticed. There is a need for a solution that can automatically detect accidents, alert emergency contacts with real-time location updates, and provide essential safety features to enhance rider protection.",
    },
    {
      id: 28,
      title: "Wearable Device for Elderly Fall Detection",
      description:
        "Develop a wearable device equipped with motion sensors and AI algorithms to detect falls in elderly individuals.",
      difficulty: "Medium",
      tags: ["Elderly Care", "Health Monitoring", "Safety"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Develop a wearable device that enhances safety for elderly individuals by detecting falls and enabling rapid emergency response. In the event of a fall, immediate alerts with real-time location updates can ensure timely assistance from caregivers or emergency services. Continuous monitoring of vital signs can provide valuable health insights, allowing for proactive care and early intervention. Designed for comfort and ease of use, the device should prioritize long battery life and seamless integration into daily life, offering both security and peace of mind for users and their families.",
    },
    {
      id: 34,
      title: "Data Insights and Strategic Unit (DISU) for DoP",
      description:
        "Establish a Data Insights and Strategic Unit at the divisional level to serve as the nerve center for postal network administration.",
      difficulty: "Hard",
      tags: ["Data Analytics", "Postal Services", "Strategic Planning"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Establish a Data Insights and Strategic Unit (DISU) at the divisional level to serve as the nerve center for administration, governance, and control over the national postal network. The unit should leverage digitization and data-driven governance to monitor key performance indicators (KPIs), analyze operational data, and provide real-time insights. It should feature advanced data visualization tools, predictive analytics for resource allocation, and automated feedback mechanisms to improve decision-making and service efficiency. The solution should integrate with existing postal systems and provide a secure, centralized dashboard for strategic planning.",
    },
    {
      id: 35,
      title: "IoT-Based Adaptive Traffic Signal System",
      description:
        "Develop an IoT-based adaptive traffic signal system that dynamically adjusts signal timings based on real-time traffic conditions.",
      difficulty: "Medium",
      tags: ["Smart City", "Traffic Management", "Urban Mobility"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "Fixed-timer traffic signals worsen urban congestion, leading to delays, excess fuel consumption, and pollution. An IoT-based adaptive traffic signal system can leverage real-time sensor data to dynamically adjust signal timings based on traffic density, vehicle speeds, and pedestrian flow. Integrating AI-driven analytics can further optimize traffic patterns and prevent bottlenecks. Developing this system will enhance mobility, reduce emissions, and create a more efficient urban transport network.",
    },
    {
      id: 36,
      title: "IoT System for Search and Rescue Missions",
      description:
        "Design an IoT system that uses drones, wearable devices, and sensors to improve search and rescue missions in challenging environments.",
      difficulty: "Hard",
      tags: ["Drones", "Emergency Response", "Search and Rescue"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "Search and rescue (SAR) missions in challenging environments, such as forests, mountains, or disaster-stricken areas, often face difficulties in locating and assisting victims quickly and efficiently. Traditional methods rely heavily on manual labor, which can be time-consuming, dangerous, and inefficient. There is a need to design an IoT-based system that integrates drones, wearable devices, and sensors to enhance the efficiency and effectiveness of SAR operations. The system should allow drones to cover large areas rapidly, providing real-time aerial views, while wearable devices worn by rescuers or victims can transmit health data, location, and vital signs. Sensors placed in strategic locations can monitor environmental conditions, detect movement, and identify hazards, ensuring more accurate and timely responses. This integrated IoT system can provide better coordination, faster victim identification, and safer operations, ultimately saving lives in high-risk search and rescue missions.",
    },
    // {
    //   id: 38,
    //   title: "IoT-Based System for Early Detection of Wildfires",
    //   description:
    //     "Develop an IoT-based system that leverages sensors to continuously monitor environmental conditions and detect early signs of wildfires.",
    //   difficulty: "Hard",
    //   tags: ["Environmental Monitoring", "Disaster Prevention", "Early Warning"],
    //   sdg: "SDG 11: Sustainable Cities and Communities",
    //   fullDescription:
    //     "Wildfires pose a severe risk to the environment, property, and human lives, often spreading rapidly before effective containment measures can be deployed. Traditional wildfire detection methods rely on manual observations, satellite imagery, or delayed sensor data, which may not provide real-time insights. An IoT-based early detection system can leverage a network of sensors to continuously monitor temperature, humidity, wind speed, and smoke levels. Using AI-driven predictive modeling, the system can detect early warning signs and provide real-time alerts to emergency responders, enabling faster intervention and reducing the devastating impact of wildfires.",
    // },
    {
      id: 39,
      title: "IoT-Powered System for Manufacturing Defect Detection",
      description:
        "Develop an IoT-powered system with AI-driven computer vision for real-time defect detection and predictive maintenance in manufacturing.",
      difficulty: "Hard",
      tags: ["Manufacturing", "Quality Control", "Predictive Maintenance"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "In industrial manufacturing, undetected defects, unexpected equipment failures, and inefficiencies in production processes contribute to significant financial losses and reduced productivity. Traditional quality control methods and maintenance schedules often fail to prevent machine breakdowns or detect defects early enough to avoid costly rework. An AI-powered IoT system can integrate machine vision, real-time sensor analytics, and predictive maintenance algorithms to monitor production lines continuously. By identifying anomalies, predicting failures before they occur, and optimizing machine performance, this system can enhance operational efficiency, reduce downtime, and minimize waste in smart factories.",
    },
    {
      id: 40,
      title: "IoT-Based System for Early Detection and Mitigation of Wildfires",
      description:
        "Wildfires pose a significant threat to ecosystems, property, and human lives. Early detection and rapid response are crucial for effective wildfire management.",
      difficulty: "Medium",
      tags: ["Early Detection", "Disaster Management", "Prevention"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "Wildfires pose a severe risk to the environment, property, and human lives, often spreading rapidly before effective containment measures can be deployed. Traditional wildfire detection methods rely on manual observations, satellite imagery, or delayed  sensor data, which may not provide real-time insights. An IoT-based early detection system can leverage a network of sensors to continuously monitor temperature, humidity, wind speed, and smoke levels. Using AI-driven predictive modeling, the system can detect early warning signs and provide real-time alerts to emergency responders, enabling faster intervention and reducing the devastating impact of wildfires."
    },
    {
      id: 41,
      title: "Develop a Smart Wearable for Fetal Health Monitoring",
      description:
        "An IoT-enabled wearable for pregnant women that continuously monitors fetal health, including heart rate, movement, and oxygen levels. Powered by AI, it provides real-time insights and alerts healthcare providers for timely intervention in case of anomalies.",
      difficulty: "Medium",
      tags: ["Health Care", "Safety", "Fetal Monitoring"],
      sdg: "SDG 3: Good Health and Wellbeing",
      fullDescription:
        "Develop a non-invasive, IoT-enabled wearable device for pregnant women that continuously monitors fetal health parameters such as heart rate, movement, and oxygen levels. The device should use AI-driven analytics to detect anomalies, provide real-time insights via a mobile app, and send automated alerts to healthcare providers in case of potential complications, ensuring timely medical intervention."
    },
  ]

  // Software problems
  const softwareProblems = []

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
              <Wifi className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Internet of Things (IoT)
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore innovative IoT solutions that connect devices, collect data, and create smarter environments. These
            problem statements focus on developing connected systems that improve efficiency, safety, and quality of
            life.
          </motion.p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-900/50">
              Hardware Solutions
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-900/50">
              Software Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
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
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            {softwareProblems.length > 0 ? (
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
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">No software problems available in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

