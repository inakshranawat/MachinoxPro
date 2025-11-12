'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { electronicMessageQuestion } from "@/Assets/assets";
 import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import {useRouter} from 'next/navigation'
import SwiperBlogs from "@/components/SwiperBlogs";




function Page() {
    const router = useRouter()

    const [activeImage, setActiveImage] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);


 

  const EnvisionImage = [
        "/images/CNC-dashboard.png",
        "/images/CNC-tablet.png",
        "/images/mobile.png"
    
  ];

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
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
      title: "OEE DETAILS DISPLAY",
      subtitle: "Real-time Operational Efficiency Insights at Your Fingertips",
      items: [
        "Real-time Production Data Tracking",
        "Machine Downtime Analysis",
        "Overall Equipment Efficiency Calculation",
        "Production Efficiency Metrics Visualisation",
        "Root Cause Analysis Tools",
        "Customizable Dashboard Interface",
        "Performance Trend Monitoring",
        "Operator Productivity Insights",
        "Quality Control Integration",
        "Downtime Reduction Strategies",
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
      title: "TARGET | REMAINING | ACTUAL",
      subtitle: "Strategic Insights for Goal Achievement",
      items: [
        "Real-time Performance Analysis",
        "Strategic Goal Alignment",
        "Pending Tasks",
        "Data-Driven Decision Making",
        "Measurable Key Performance Indicators",
        "Actionable Insights Implementation",
        "Resource Utilization",
        "Projected Timeline",
        "Key Deliverables",
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
      title: "PRODUCTION DOWNTIME MONITORING",
      subtitle: "Key Aspects of Production Downtime Monitoring",
      items: [
        "Real-time equipment status tracking",
        "Automated fault detection and alerting",
        "Root cause analysis for rapid resolution",
        "Predictive maintenance insights for proactive measures",
        "Minimising unplanned downtime, maximising productivity",
        "Enhances equipment maintenance planning",
        "Enables proactive issue resolution",
      ],
    },
  ];

  const iconPlaceholder = (color) => (
    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg ${color} flex items-center justify-center`}>
      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  );
  return (
    <>
      
      {/* HERO SECTION */}
      <div className="relative min-h-screen bg-linear-to-br from-gray-600 via-gray-500 to-gray-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider mb-6 md:mb-8 uppercase leading-relaxed">
            Your one-stop shop for high-quality factory and industry <br className="hidden sm:block" />
            products [for designed to grow line]
          </p>

          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-white font-black leading-tight">
              {[
                "TRANSFORM",
                "COMMUNICATION",
                "WITH ROBATO",
                "SYSTEMS'",
                "ELECTRONIC",
                "MESSAGE",
                "DISPLAYS",
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
              The OEE Details Display is a cutting-edge industrial tool designed
              to optimise operational efficiency, enhance productivity, and
              streamline manufacturing processes. It provides real-time insights
              into Overall Equipment Effectiveness (OEE) metrics, enabling
              businesses to make data-driven decisions that improve equipment
              performance and ultimately their bottom line.
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
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 shrink-0 mt-0.5"
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
                <button className="text-center px-6 sm:px-8 py-2 text-purple-950 bg-transparent hover:bg-purple-950 hover:text-white border font-medium text-sm sm:text-base transition-colors cursor-pointer">
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
          <button className="border px-4 sm:px-6 md:px-8 font-bold py-2 sm:py-3 hover:underline bg-white text-black text-center text-xs sm:text-sm md:text-base transition-all cursor-pointer">
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
            Production Counter Display
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg mt-5 max-w-xl mx-auto lg:mx-0 text-[#444444]"
          >
            The OEE Details Display is a cutting-edge industrial tool designed
            to optimise operational efficiency, enhance productivity, and
            streamline manufacturing processes. It provides real-time insights
            into OEE metrics, enabling businesses to make data-driven decisions,
            reduce downtime, and maximise production output.
          </motion.p>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
          <Image
            
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            src="/images/CNC-dashboard.png"
            alt="Production Display"
            width={800}
            height={800}
          />
        </motion.div>
      </div>

      {/* ICON ROW */}
      <div className="flex flex-wrap justify-center sm:justify-around gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-20 mb-10 px-4">
        {[
          { icon: "/icons/health-monitor-icon.svg", title: "Real-Time OEE Monitoring" },
          { icon: "/icons/INTUITIVE%20DASHBOARD.png", title: "Intuitive Dashboard" },
          { icon: "/icons/CUSTOMIZABLE%20ALERTS.png", title: "Customizable Alerts" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center w-[100px] sm:w-[120px] md:w-[150px]"
          >
            <div className="mx-auto hover:scale-110 transition-all duration-500">
               <Image src={item.icon} width={150} height={150} alt="" />
            </div>
            <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-3 text-[#444444]">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/** TARGET REMAINING ACTUAL */}
      <div className="flex flex-col lg:flex-row py-10 md:py-20 px-4 sm:px-6 lg:px-12 items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#444444] font-bold uppercase"
          >
            target remaining actual
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg mt-5 max-w-xl mx-auto lg:mx-0 text-[#444444]"
          >
            Introducing our Production Counter Displays – the ultimate solution for efficient production tracking and management. Designed for industrial environments, these displays provide real-time production data at a glance, ensuring your operations run smoothly and effectively.
          </motion.p>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
          <Image
          
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            src="/images/Target-Actual.png"
            alt="Production Display"
            width={800}
            height={800}
          />
        </motion.div>
      </div>

      {/* ICON ROW */}
      <div className="flex flex-wrap justify-center sm:justify-around gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-20 mb-10 px-4">
        {[
          { icon: "/icons/managment-icon.svg", title: "Real-Time OEE Monitoring" },
          { icon: "/icons/USER%20FRIENDLY%20INTERFACE.png", title: "User Friendly Interface" },
          { icon: "/icons/CUSTOMIZABLE%20ALERTS.png", title: "Customizable Alerts" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center w-[100px] sm:w-[120px] md:w-[150px]"
          >
            <div className="mx-auto hover:scale-110 transition-all duration-500">
                <Image src={item.icon} alt="" width={150} height={150} />
            </div>
            <h2 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-3 text-[#444444]">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 py-10 px-4">
        <button
          onClick={() => router.push("/andon-board-display")}
          className="border px-6 py-2 text-purple-950 bg-transparent hover:bg-purple-950 hover:text-white transition-colors w-full sm:w-auto text-sm sm:text-base cursor-pointer"
        >
          READ MORE
        </button>
        <button
          onClick={() => router.push("/contact-us")}
          className="border px-6 py-2 text-white bg-purple-950 hover:bg-purple-900 transition-colors w-full sm:w-auto text-sm sm:text-base cursor-pointer"
        >
          TRY NOW
        </button>
      </div>

      {/**PRODUCTION DOWNTIME MONITORING */}
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
              alt="Production Monitoring"
              className="w-full h-full object-contain absolute top-0 left-0"
              width={800}
              height={800}
              
            />
          </AnimatePresence>
        </motion.div>

        <div className="w-full lg:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-[#444444] text-depth font-bold uppercase max-w-full lg:max-w-[800px]">
            Production Downtime Monitoring
          </h1>
          <p className="font-bold text-[#444444] max-w-full lg:max-w-[800px] mt-5 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
            Production Downtime Monitoring is a cutting-edge solution designed to optimize manufacturing processes by minimizing downtime, ensuring maximum productivity, and boosting overall efficiency. This innovative system offers real-time insights into production line disruptions, allowing businesses to make informed decisions and maintain seamless operations.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-20 px-4 sm:px-6 lg:px-10">
        <div
          onClick={() => setActiveImage(0)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <div className="mx-auto md:mx-0 hover:scale-110 transition-all duration-500 ">
             <Image width={150} height={150} className="w-30" src="/icons/dashboard-icon.svg" alt="" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            Real-time Monitoring
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Track production downtime in real-time, enabling instant response to issues.
          </p>
        </div>

        <div
          onClick={() => setActiveImage(1)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <div className="mx-auto md:mx-0 hover:scale-110 transition-all duration-500 ">
             <Image className="w-30" width={150} height={150} src="/icons/view-icon.svg" alt="" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            Comprehensive Reporting
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Generate detailed reports and analytics to identify patterns and trends in downtime.
          </p>
        </div>

        <div
          onClick={() => setActiveImage(2)}
          className="cursor-pointer text-center md:text-left max-w-full md:max-w-[280px] lg:max-w-[300px]"
        >
          <div className="mx-auto md:mx-0 hover:scale-110 transition-all duration-500 ">
              <Image width={150} height={150} className="w-30" src="/icons/alert-icon.svg" alt="" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-5 text-[#444444]">
            Alert System
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Receive instant notifications via email or mobile alerts when downtime events occur.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 py-10 px-4">
        <button
          onClick={() => router.push("/andon-board-display")}
          className="border px-6 py-2 text-purple-950 bg-transparent hover:bg-purple-950 hover:text-white transition-colors w-full sm:w-auto text-sm sm:text-base cursor-pointer"
        >
          READ MORE
        </button>
        <button
          onClick={() => router.push("/contact-us")}
          className="border px-6 py-2 text-white bg-purple-950 hover:bg-purple-900 transition-colors w-full sm:w-auto text-sm sm:text-base cursor-pointer"
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
          {electronicMessageQuestion.map((item, index) => (
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
                <span className="absolute bottom-0 left-0 right-0 h-0.5   bg-zinc-500 opacity-50 rounded-full"></span>
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
