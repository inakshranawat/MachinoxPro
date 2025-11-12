'use client'


import React, { useState } from "react";
import {useRouter} from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion";


import { ChevronDown } from "lucide-react";
import { andonTowerLightQuestion } from "@/Assets/assets";

import Image from "next/image";
import SwiperBlogs from "@/components/SwiperBlogs";

function Page() {

    const router = useRouter()

  const [activeImage, setActiveImage] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const EnvisionImage = [
     "/images/WIRELESS-ANDON-TOWER-LIGHT.png",
     "/images/CNC-tablet.png",
     "/images/mobile.png",
  ];

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
      title: "ANDON SIGNAL",
      subtitle: "Enhance Workplace Efficiency with Andon Signal Tower Lights",
      items: [
        "Instant Visual Status Indication",
        "Real-time Production Monitoring",
        "Quick Issue Identification",
        "Efficient Team Communication",
        "Customizable Color-coded Alerts",
        "Enhances Workplace Safety",
        "Minimizes Downtime",
        "Promotes Lean Manufacturing Principles",
        "User-friendly Interface",
        "Versatile Applications in Various Industries",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline
            points="12 6 12 12 16 14"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "WIRELESS ANDON",
      subtitle:
        "Wireless Andon Tower Light Solutions for Efficient Industrial Operations",
      items: [
        "Enhances real-time visibility of production status",
        "Minimizes downtime through instant issue notification",
        "Customizable color-coded alerts for various situations",
        "Wirelessly syncs with existing industrial automation systems",
        "Improves team communication and collaboration",
        "Quick and easy installation for seamless integration",
        "Long-lasting and energy-efficient LED technology",
        "Robust and durable design for industrial environments",
        "Remote control and monitoring capabilities for convenience",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3v18h18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <polyline
            points="7 16 12 8 17 12 21 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "CLOUD ANDON",
      subtitle: "Transformative Cloud Andon Tower Light Solutions",
      items: [
        "Real-time Production Status Updates",
        "Remote Monitoring and Control",
        "Cloud-Based Data Analysis and Reporting",
        "Seamless Integration with IoT Devices",
        "Enhanced Workflow Efficiency with Cloud Automation",
        "Data-driven decision-making support",
        "Streamlined communication across manufacturing teams",
      ],
    },
  ];
  return (
    <>
       {/* HERO SECTION */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider mb-6 md:mb-8 uppercase leading-relaxed">
            Illuminating Your Workspace with Cutting-Edge Signaling Solutions
          </p>

          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-white font-black leading-tight">
              {[
                "REVOLUTIONIIZE",
                "YOUR WORKFLOW",
                "WITH ROBATO",
                "SYSTEMS' ANDON",
                "TOWER LIGHT",
              ].map((line, i) => (
                <div
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-0.5 sm:mb-1"
                >
                  {line}
                </div>
              ))}
            </h1>
          </div>

          <div className="mt-8 md:mt-12 max-w-4xl mx-auto px-2">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              A revolutionary visual management tool designed to enhance
              efficiency and communication in any workplace environment.
            </p>
          </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-gray-400 py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex justify-center mb-8 sm:mb-12">
          <svg
            className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-gray-800 font-black text-lg sm:text-xl text-center mb-2 sm:mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4 sm:mb-6">
                {feature.subtitle}
              </p>
              <div className="border-b border-gray-300 mb-4 sm:mb-6"></div>

              <ul className="space-y-2 sm:space-y-3 text-left">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div
                onClick={() => router.push("/andon-board-display")}
                className="mt-6 sm:mt-8 text-center"
              >
                <button className="text-center px-6 sm:px-8 py-2 text-purple-950 bg-transparent hover:bg-purple-950 hover:text-white border font-medium text-sm sm:text-base">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white mt-10 text-center max-w-4xl mx-auto text-sm sm:text-base px-4">
          Every package offers dedicated customer assistance, limitless remote
          tech support, seamless onboarding, comprehensive product training, and
          a dedicated support contact.
        </p>
      </div>

      {/* QUOTE SECTION */}
      <div className="bg-purple-950 mt-10 w-full px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl py-8 sm:py-10 leading-tight uppercase text-white font-bold text-center max-w-4xl mx-auto">
          &quot;Happy employees lead to happy customers, which leads to more
          profits.&quot; – Vaughn Aust
        </h1>
        <div className="text-center py-6 sm:py-10">
          <button className="border px-4 sm:px-6 md:px-8 font-bold py-2 sm:py-3 hover:underline bg-white text-black text-center text-xs sm:text-sm md:text-base">
            CALL NOW (+61 478 251 187)
          </button>
        </div>
      </div>

      {/* PRODUCTION COUNTER SECTION */}
      <div className="flex flex-col lg:flex-row py-10 md:py-20 px-4 sm:px-6 lg:px-12 items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#444444] font-bold uppercase"
          >
            ANDON SIGNAL TOWER LIGHT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg mt-5 max-w-xl mx-auto lg:mx-0 text-[#444444]"
          >
            The Andon Tower Light is a state-of-the-art signaling device
            designed to enhance operational efficiency and safety in various
            industrial settings. Its sleek and durable design makes it an ideal
            choice for manufacturing environments where clear visual
            communication is paramount.
          </motion.p>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
          <Image

            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            src="/images/ANDON-TOWER-LIGHT.png"
            alt="Production Display"
            width={800}
            height={800}
          />
        </motion.div>
      </div>

      {/* ICON ROW */}
      <div className="flex flex-wrap justify-center sm:justify-around gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-20 mb-10 px-4">
        {[
          { img: "/icons/MULTI-COLOR-SIGNALING.png", title: "MULTI-COLOR SIGNALING" },
          { img: "/icons/CUSTOMIZABLE ALERTS.png", title: "CUSTOMIZABLE ALARMS" },
          { img: "/icons/LED-TECHNOLOGY.png", title: "LED TECHNOLOGY" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center w-[100px] sm:w-[120px] md:w-[150px]"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={800}
              height={800}
              className="mx-auto hover:scale-110 transition-all duration-500 w-12 sm:w-16 md:w-20"
            />
            <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-3 text-[#444444]">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/** WIRELESS ANDON SECTION */}
      <div className="flex flex-col lg:flex-row py-10 md:py-20 px-4 sm:px-6 lg:px-12 items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#444444] font-bold uppercase"
          >
            WIRELESS ANDON TOWER LIGHT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg mt-5 max-w-xl mx-auto lg:mx-0 text-[#444444]"
          >
            Introducing the Wireless Andon Tower Light – your ultimate solution
            for efficient communication and visual management in industrial
            environments. This cutting-edge device revolutionizes how teams
            coordinate, respond, and stay informed, enhancing productivity and
            safety across the board.
          </motion.p>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center"
         initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
          <Image
           
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            src="/images/WIRELESS-ANDON-TOWER-LIGHT.png"
            alt="Production Display"
            width={800}
            height={800}
          />
        </motion.div>
      </div>

      {/* ICON ROW */}
      <div className="flex flex-wrap justify-center sm:justify-around gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-20 mb-10 px-4">
        {[
          { img: "/icons/CONNECTIVITY.png", title: "WIRELESS CONNECTIVITY" },
          { img: "/icons/MULTI-COLOR-SIGNALING.png", title: "MULTI-COLOR LED LIGHTS" },
          { img: "/icons/alert-icon.svg", title: "Customizable Alarms" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center w-[100px] sm:w-[120px] md:w-[150px]"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="mx-auto hover:scale-110 transition-all duration-500 w-12 sm:w-16 md:w-20"
              width={800}
              height={800}
            />
            <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-3 text-[#444444]">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 py-10 px-4">
        <button
          onClick={() => router.push("/andon-board-display")}
          className="border px-6 py-2 text-purple-950 bg-transparent w-full sm:w-auto text-sm sm:text-base"
        >
          READ MORE
        </button>
        <button
          onClick={() => router.push("/contact-us")}
          className="border px-6 py-2 text-white bg-purple-950 w-full sm:w-auto text-sm sm:text-base"
        >
          TRY NOW
        </button>
      </div>

      {/**CLOUD ANDON SECTION */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 lg:py-30 gap-8 lg:gap-20 items-center">
        {/* Fixed Animated Image Container */}
        <motion.div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0"
            variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={EnvisionImage[activeImage]}
              alt=""
              className="w-full h-full object-contain absolute top-0 left-0"
              width={800}
              height={800}
            />
          </AnimatePresence>
        </motion.div>

        <div className="w-full lg:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-[#444444] text-depth font-bold uppercase max-w-full lg:max-w-[800px]">
            CLOUD ANDON TOWER LIGHT
          </h1>
          <p className="font-bold text-[#444444] max-w-full lg:max-w-[800px] mt-5 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
            The Cloud Andon Tower Light is a cutting-edge visual signaling
            device designed to enhance communication and efficiency in
            industrial environments. It utilizes cloud technology to offer
            real-time status updates and customizable visual alerts, ensuring
            seamless coordination in manufacturing facilities.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-20 px-4 sm:px-6 lg:px-10">
        <div
          onClick={() => setActiveImage(0)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <Image
            className="hover:scale-110 transition-all duration-500 mx-auto md:mx-0"
            width={100}
            height={100}
            src="/icons/CLOUD-BASED.png"
            alt=""
          />
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            CLOUD CONNECTIVITY
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Connects to the cloud, enabling remote monitoring and control via
            smartphones, tablets, or computers.
          </p>
        </div>

        <div
          onClick={() => setActiveImage(1)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <Image
            className="hover:scale-110 transition-all duration-500 mx-auto md:mx-0"
            width={100}
            height={100}
            src="/icons/MULTICOLOR-LEDS.png"
            alt=""
          />
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            MULTICOLOR LEDS
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Equipped with vibrant multicolor LEDs for clear and customizable
            visual signals.
          </p>
        </div>

        <div
          onClick={() => setActiveImage(2)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <Image
            className="hover:scale-110 transition-all duration-500 mx-auto md:mx-0"
            width={100}
            height={100}
            src="/icons/alert-icon.svg"
            alt=""
          />
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            CUSOTMIZABLE ALERTS
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Easily programmable to display various colors and patterns to
            indicate different statuses or issues.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 py-10 px-4">
        <button
          onClick={() => router.push("/andon-board-display")}
          className="border px-6 py-2 text-purple-950 bg-transparent w-full sm:w-auto text-sm sm:text-base"
        >
          READ MORE
        </button>
        <button
          onClick={() => router.push("/contact-us")}
          className="border px-6 py-2 text-white bg-purple-950 w-full sm:w-auto text-sm sm:text-base"
        >
          TRY NOW
        </button>
      </div>

      {/**FAQ SECTION */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 md:py-20">
        {/* Heading */}
        <h1 className="font-bold text-[#444444] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase">
          Frequently Asked Questions
        </h1>

        {/* Accordion */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] pr-1 sm:pr-2">
          {andonTowerLightQuestion.map((item, index) => (
            <div
              key={index}
              className="mb-4 sm:mb-5 md:mb-6 select-none transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Accordion Title */}
              <div
                className={`flex items-center justify-between uppercase cursor-pointer p-3 sm:p-4 transition-all duration-300 relative rounded-md ${
                  hoverIndex === index
                    ? "bg-indigo-100 text-indigo-900 shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                <h2
                  className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 pr-2 ${
                    hoverIndex === index ? "text-indigo-900" : "text-zinc-700"
                  }`}
                >
                  {item.title}
                </h2>

                {/* Rotating arrow icon */}
                <motion.div
                  animate={{ rotate: hoverIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-700 shrink-0"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </motion.div>

                {/* Bottom border */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-500 opacity-50 rounded-full"></span>
              </div>

              {/* Accordion Content on Hover */}
              <AnimatePresence>
                {hoverIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-2 bg-white text-gray-700 rounded-b-md pl-3 sm:pl-4 pr-2 text-xs sm:text-sm md:text-base shadow-sm"
                  >
                    {Array.isArray(item.description) ? (
                      item.description.map((block, i) =>
                        typeof block === "string" ? (
                          <p key={i} className="mb-1">
                            {block}
                          </p>
                        ) : block.type === "list" ? (
                          <ul key={i} className="list-disc pl-4 sm:pl-6 mb-2">
                            {block.items.map((li, idx) => (
                              <li key={idx}>{li}</li>
                            ))}
                          </ul>
                        ) : null
                      )
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <SwiperBlogs/>
      </div>

    </>
  )
}

export default Page
