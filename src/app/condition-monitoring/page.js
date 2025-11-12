'use client'

import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { conditionQuestion } from '@/Assets/assets';

import { sensor_icon } from '@/Assets/assets';
import { useAppContext } from '@/context/useContext';
import Image from 'next/image';
import SwiperBlogs from '@/components/SwiperBlogs';

function Page() {

     const [activeImage, setActiveImage] = useState(0);
  const {setDemoOpen} = useAppContext()
    const [hoverIndex, setHoverIndex] = useState(null);
  


  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } },
  };

  const images = ["/images/plug.png", "/images/brother-laptop.png", "/images/oee-report-laptop.png"];

  const SophisticatedImages = ["/images/cycletimelaptop.png", "/images/tsugami.png", "/images/lathe-tablet.png"];

  const PredictiveSectionImages = [
    "/images/alarmlaptop.png",
    "/images/automationlaptop.png",
    "/images/mobile.png",
  ];

  const features = [
    {
      icon: "/icons/lighning-fast.svg",
      title: "Rapid Deployment",
      points: [
        "Plug-and-play simplicity",
        "Scalability made easy",
        "Seamless connections",
      ],
    },
    {
      icon: "/icons/easily-connect.svg",
      title: "Instantly Usable Data",
      points: [
        "No need for time-consuming data tag mapping",
        "Immediate data utilisation.",
        "Immediate Value and quick ROI",
      ],
    },
    {
      icon: "icons/hit-the-ground.svg",
      title: "Universal Integration",
      points: [
        "Connects effortlessly with various machine data sources",
        "Enhances data intelligence.",
        "Out-of-the-box apps, no initial development necessary",
      ],
    },
    {
      icon: "icons/immediate-value.svg",
      title: "Expertise in Manufacturing",
      points: [
        "Provides essential context for actionable data",
        "Industry-specific knowledge for optimization",
      ],
    },
  ];

  return (
    <>
      <div className="max-w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row py-12 lg:py-50 px-4 lg:px-0">
        <div className="w-full lg:w-auto">
          <motion.h1 className="text-3xl lg:pl-20 text-[#444444] text-depth font-bold uppercase w-full lg:w-[800px]"
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            
          >  
            Unlock Peak Performancewith Robato Systems Condition Monitoring
            Services
          </motion.h1>
          <motion.div
             initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1, delay:0.5}}
            
          >

          <p className="lg:pl-20 mt-5 text-[#444444] text-lg font-bold">
            Revolutionize Maintenance
          </p>
          <ul className="pl-6 lg:pl-25 list-disc">
            <li>Implement real-time machine condition monitoring</li>
            <li>Deploy it within minutes.</li>
          </ul>
          <p className="lg:pl-20 mt-5 text-[#444444] text-lg font-bold">
            Leverage Machine Data
          </p>
          <ul className="pl-6 lg:pl-25 list-disc">
            <li>Utilize machine data to extend equipment longevity.</li>
            <li>Ensure healthier equipment operation.</li>
          </ul>
          </motion.div>
        </div>
        <motion.div className="w-full lg:w-auto mt-8 lg:mt-0 flex justify-center"
         initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            >
          <Image
           
          className="w-full max-w-[800px]" width={800} height={800} src="/images/brother-laptop.png" alt="" />
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-15 mb-10 px-6 lg:px-0">
        <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
           className="w-full lg:w-auto">
          <div className="w-[100px] h-[100px] ">
            <Image className="hover:scale-115 transition-all duration-500" width={100} height={100} src="/icons/home-icon.svg" alt="" />
          </div>
          <h2 className="text-xl font-bold mt-3 text-[#444444]">
            Easily establish connections with any machine
          </h2>
          <ul className="list-disc">
            <li className="text-sm w-full lg:w-[300px]">
              Establish connections.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Gather machine condition data.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Visualise data from any factory floor equipment.
            </li>
          </ul>
        </motion.div>

        <motion.div className="w-full lg:w-auto"
           initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        >
          <div className="w-[100px] h-[100px] ">
            <Image className="hover:scale-115 transition-all duration-500" width={100} height={100} src="/icons/mountain-display-icon.svg" alt="" />
          </div>
          <h2 className="font-bold text-xl mt-3 text-[#444444]">
            Track and assess well-being
          </h2>
          <ul className="list-disc">
            <li className="text-sm w-full lg:w-[300px]">
              Diagnose problems and Analyze PMC and diagnostic control data.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Utilise real-time visualisations.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Leverage analytics for machine health assessment.
            </li>
          </ul>
        </motion.div>

        <motion.div className="w-full lg:w-auto"
           initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        >
          <div className="w-[100px] h-[100px] ">
            <Image className="hover:scale-115 transition-all duration-500" width={100} height={100} src="/icons/solution_icon.svg" alt="" />
          </div>
          <h2 className="text-xl mt-3 font-bold text-[#444444]">
            Machine conditions in real-time
          </h2>
          <ul className="list-disc">
            <li className="text-sm w-full lg:w-[300px]">
              Ensure machine uptime and Respond to machine alarms.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Receive optimised maintenance alerts.
            </li>
            <li className="text-sm w-full lg:w-[300px]">
              Alerts triggered by critical KPIs and monitors condition
              thresholds.
            </li>
          </ul>
        </motion.div>
      </div>

      {/**buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 py-20 gap-5 px-4">
        <motion.button
        onClick={() => (window.location.href = "tel:+61 478 251 187")}
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        className="px-6 py-3 bg-purple-950 text-white hover:bg-gray-600 hover:text-black w-full sm:w-auto">
          CALL NOW
        </motion.button>
        <motion.button

            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            onClick={() => setDemoOpen(true)}
          className="px-6 py-3 bg-transparent hover:bg-purple-950 hover:text-white text-purple-950 border w-full sm:w-auto"
        >
          BOOK A FREE TRIAL
        </motion.button>
      </div>

      {/**INADEQUATE MACHINES HEALTH DATA */}
      <div
        className="flex flex-col lg:flex-row justify-around bg-center bg-cover py-20  px-4 lg:px-0"
        style={{backgroundImage: "url('/images/factory-blur.png')" }}
      >
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h1 className="text-5xl tracking-tighter w-full lg:w-[500px] text-white font-extrabold uppercase py-8 lg:py-20">
            Inadequate machine health data results in suboptimal operation
          </h1>
        </div>

        <div className="w-full lg:w-[500px]">
          <h2 className="text-white mt-8 lg:mt-30 text-3xl font-bold">
            THE ISSUE
          </h2>
          <p className="text-xl text-white">
            Reliance on calendar-based preventive maintenance plans proves
            inefficient and frequently results in either excessive, costly
            maintenance or insufficient maintenance that leads to machine
            failures and downtime.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around bg-[#430099] py-12 lg:py-0 px-4 lg:px-0">
        <div className="w-full lg:w-[500px] mb-8 lg:mb-0">
          <h2 className="text-white mt-8 lg:mt-30 text-3xl font-bold">
            THE SOLUTION
          </h2>
          <ul className="list-disc text-white pl-10">
            <li>Monitor real-time machine diagnostics.</li>
            <li>Monitor machine conditions</li>
            <li>Schedule maintenance at the ideal moment.</li>
            <li>Prevent unforeseen downtime and machine failures</li>
          </ul>
        </div>

        <div className="w-full lg:w-auto">
          <h1 className="text-5xl tracking-tighter w-full lg:w-[500px] text-white font-extrabold uppercase py-8 lg:py-20">
            Leverage real-time condition data for optimization purposes
          </h1>
        </div>
      </div>

      {/**READY TO USE */}
      <div className="flex flex-col lg:flex-row py-12 lg:py-30 px-4 lg:px-0">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h1 className="text-5xl lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase w-full lg:w-[800px]">
            Ready-to-Use
          </h1>
          <p className="font-bold text-[#444444] lg:pl-20 mt-10 text-2xl">
            Industrial IoT Platform for Machines
          </p>
          <ul className="list-disc text-[#444444] pl-6 lg:pl-25 text-xl tracking-tighter">
            <li>Establish connections with any asset.</li>
            <li>
              Connect via the Andon Edge, linked to the control and/or sensors
              Ethernet port.
            </li>
            <li>Real-time data processing at the edge.</li>
            <li>Securely stream machine data to the Andon cloud</li>
          </ul>
        </div>

        {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[400px] relative overflow-hidden"
        variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={images[activeImage]}
              alt=""
              className="w-full h-full object-contain absolute top-0 left-0"
              width={800}
              height={800}
              
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:pl-20 gap-5 mb-10 px-4 lg:px-0">
        <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(0)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/speaker-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Gather PLC data
          </h2>
          <ul className="list-disc text-[#444444] pl-10">
            <li>Monitor real-time machine diagnostics.</li>
            <li>Monitor machine conditions</li>
            <li>Schedule maintenance at the ideal moment.</li>
            <li>Prevent unforeseen downtime and machine failures</li>
          </ul>
        </motion.div>

        <motion.div
           initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(1)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/sensor-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="font-bold text-xl mt-5 text-[#444444]">
            Effortlessly link sensors
          </h2>
          <ul className="list-disc text-[#444444] pl-10">
            <li>Monitor real-time machine diagnostics.</li>
            <li>Monitor machine conditions</li>
            <li>Schedule maintenance at the ideal moment.</li>
            <li>Prevent unforeseen downtime and machine failures</li>
          </ul>
        </motion.div>

        <motion.div
           initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(2)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/transform-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Instantly convert data
          </h2>
          <ul className="list-disc text-[#444444] pl-10">
            <li>Monitor real-time machine diagnostics.</li>
            <li>Monitor machine conditions</li>
            <li>Schedule maintenance at the ideal moment.</li>
            <li>Prevent unforeseen downtime and machine failures</li>
          </ul>
        </motion.div>
      </div>

      {/** SOPHISTICATED MACHINE ANALYTICS */}
      <div className="flex flex-col lg:flex-row pl-4 lg:pl-25 py-12 lg:py-30">
        {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[400px] relative overflow-hidden mb-8 lg:mb-0"
          variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={SophisticatedImages[activeImage]}
              alt=""
              className="w-full h-full object-contain absolute top-0 left-0"
              width={800}
              height={800}
            
            />
          </AnimatePresence>
        </motion.div>

        <div className="w-full lg:w-auto">
          <h1 className="text-4xl lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase w-full lg:w-[800px]">
            Sophisticated Machine Analytics
          </h1>
          <ul className="list-disc w-full lg:w-[500px] mt-10 text-[#444444] pl-6 lg:pl-25 text-xl tracking-tighter">
            <li>Diagnose issues using real-time insights.</li>
            <li>Analyse machine control and sensor data</li>
            <li>Prevent unplanned downtime.</li>
            <li>
              Visualise previously hidden machine condition aspects in
              real-time.
            </li>
            <li>
              Access and export real-time machine data and alarms as time-series
              data and charts.
            </li>
            <li>Aid in problem diagnosis and resolution.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:pl-20 gap-5 mb-10 px-4 lg:px-0">
        <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(0)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/health-monitor-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Monitoring Equipment Health
          </h2>
          <ul className="list-disc text-[#444444] pl-10">
            <li>Monitor the status and health of machine assets.</li>
            <li>
              Export real-time machine data and alarms as time-series data and
              charts.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(1)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/assistance-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="font-bold text-xl mt-5 text-[#444444]">
            Distant Assistance
          </h2>
          <ul className="list-disc text-[#444444] pl-10">
            <li>Share machine data instantly with your service provider.</li>
            <li>Enable remote service for faster machine recovery</li>
            <li>Expedite the process of getting your machines back online.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(2)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/alert-icon.svg" alt="" width={130} height={130} />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Notifications and Alerts
          </h2>
          <ul className="list-disc w-full lg:w-[500px] text-[#444444] pl-10">
            <li>
              Timely alerts to the appropriate personnel and comprehensive audit
              trail for tracking purposes.
            </li>
            <li>Incident tracking within a structured workflow.</li>
            <li>Capability for reassignment and Resolution management.</li>
          </ul>
        </motion.div>
      </div>

      {/**Promote Predictive & Preventive Maintenance */}
      <div className="flex flex-col lg:flex-row py-12 lg:py-30 px-4 lg:px-0">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h1 className="text-5xl lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase w-full lg:w-[800px]">
            Promote Predictive & Preventive Maintenance
          </h1>
          <ul className="list-disc w-full lg:w-[500px] mt-10 text-[#444444] pl-6 lg:pl-25 text-xl tracking-tighter">
            <li>
              Anticipate equipment failures and offer solutions proactively.
            </li>
            <li>
              Customise preventive maintenance schedules to match operational
              demands.
            </li>
            <li>
              Gather and assess the essential data for diagnostic and predictive
              maintenance.
            </li>
          </ul>
        </div>

        {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[400px] relative overflow-hidden"
         variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={PredictiveSectionImages[activeImage]}
              alt=""
              className="w-full h-full object-contain absolute top-0 left-0"
              width={800}
              height={800}
             
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:pl-15 gap-5 mb-10 px-4 lg:px-0">
        <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(0)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image width={100} height={100} src="/icons/analytical-icon.svg" alt="" />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Analytics for Alarms
          </h2>
          <ul className="list-disc w-full lg:w-[400px] text-[#444444] pl-10">
            <li>Identify alarms responsible for significant downtime.</li>
            <li>
              Access comprehensive alarm histories for individual machines
            </li>
            <li>
              Obtain a summarized overview of alarms spanning your entire shop
              floor.
            </li>
          </ul>
        </motion.div>

        <motion.div
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}

          onClick={() => setActiveImage(1)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/feedback-icon.svg" alt="" width={80} height={80} />
          </div>
          <h2 className="font-bold text-xl mt-5 text-[#444444]">
            Maintenance for Prevention
          </h2>
          <ul className="list-disc w-full lg:w-[400px] text-[#444444] pl-10">
            <li>
              Establish workflows to trigger preventive maintenance events.
            </li>
            <li>
              Connect these workflows to your Computerised Maintenance
              Management System (CMMS).
            </li>
            <li>
              Initiate maintenance based on calendar time, usage time, or
              predefined machine condition limits.
            </li>
          </ul>
        </motion.div>

        <motion.div
           initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          onClick={() => setActiveImage(2)}
          className="cursor-pointer w-full lg:w-auto"
        >
          <div className="w-[100px] h-[100px]  hover:scale-115 transition-all duration-500">
            <Image src="/icons/assistance-icon.svg" alt=""width={80} height={80} />
          </div>
          <h2 className="text-xl font-bold mt-5 text-[#444444]">
            Anticipatory Maintenance
          </h2>
          <ul className="list-disc w-full lg:w-[400px] text-[#444444] pl-10">
            <li>
              Enhance predictive analytics with high-frequency machine data.
            </li>
            <li>
              Utilise this data to diagnose and predict a wide range of
              equipment failures.
            </li>
            <li>
              Prevent various types of breakdowns in your manufacturing
              equipment.
            </li>
          </ul>
        </motion.div>
      </div>

      {/**The Unique Andon Advantage */}
      <section className="min-h-screen bg-gray-600 relative overflow-hidden flex items-start md:items-center py-10 md:py-0">
        <div
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-br from-purple-300 via-purple-800 to-purple-700"
          style={{
            width: "40%",
            clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)",
            transform: "translateX(-5%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              THE UNIQUE ANDON
              <br />
              ADVANTAGE
            </h1>
          </div>

          <div className="space-y-8 md:space-y-12 pl-0 md:pl-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:gap-8 gap-4"
              >
                <Image
                  className="shrink-0 w-12 h-12 md:w-auto md:h-auto"
                  src={feature.icon}
                  alt=""
                  width={800}
                  height={800}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <ul className="space-y-1">
                    {feature.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-white text-base md:text-xl flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**20% IMPROVEMENT IN OEE */}
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          {/* Decorative Quote Marks */}
          <div className="flex justify-end mb-4 mr-4 lg:mr-12">
            <div className="flex gap-4">
              <div className="w-12 h-20 bg-purple-400/30 rounded"></div>
              <div className="w-12 h-20 bg-purple-400/30 rounded"></div>
            </div>
          </div>

          {/* Main Quote */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-black text-white leading-tighter">
              <span className="inline-block">&quot;20% IMPROVEMENT</span>
              <br />
              <span className="inline-block">IN OEE&quot;</span>
            </h1>
          </div>

          {/* Attribution */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl text-white">
              <span className="font-bold">Mike Tamasi</span>,{" "}
              <span className="font-light italic">President of AccuRounds</span>
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Case Study Image/Document */}
            <div className="shrink-0">
              <div className="w-52 h-72">
                <Image src="/images/shopfloor-communication.png" alt="" width={300} height={300} />
              </div>
            </div>

            {/* Description and CTA */}
            <div className="flex-1">
              <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light">
                After quickly connecting twenty-three machines, AccuRounds was
                immediately driving process improvements with MachinoX Pro. The
                numbers speak for themselves.
              </p>

              <button className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded hover:bg-white hover:text-purple-900 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto">
                Download the Case Study
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**frequently asked questions */}
      <div className="px-4 sm:px-6 md:px-10 py-20 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {conditionQuestion  .map((item, index) => (
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
                className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
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
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  className="mt-2 bg-white text-gray-700 rounded-b-md pl-3 sm:pl-4 pr-2 text-sm sm:text-base shadow-sm"
                >
                  {Array.isArray(item.description) ? (
                    item.description.map((block, i) =>
                      typeof block === "string" ? (
                        <p key={i} className="mb-1">{block}</p>
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
    </div>

    {/**swiper blogs  */}
    <SwiperBlogs/>
    
    

      {/** READY TO CONNECT TO THE SHOP FLOOR */}
        {/* FINAL CTA: keep desktop sizes, mobile stacked and centered */}
              <section
                className="relative w-full py-12 md:py-20 bg-center  bg-cover"
                style={{ backgroundImage: "url('/images/shoopfloor.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 px-4 md:px-20 text-center md:text-left">
                  <motion.h1
                    initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                  className="text-3xl md:text-8xl font-bold text-white leading-tight">READY TO CONNECT</motion.h1>
                  <motion.h1
                  
                    initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                  className="text-3xl md:text-8xl font-bold text-white mt-0">YOUR SHOP FLOOR</motion.h1>
        
                  <div className="mt-6">
                    <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-white text-indigo-950 px-6 py-3 md:px-6 md:py-4 hover:bg-purple-950 hover:text-white rounded">
                      CALL NOW
                    </button>
                  </div>
        
                  <p className="text-white mt-4">
                    Want to see MachinoX Pro in action first?{" "}
                    <span className="underline cursor-pointer" onClick={() => setDemoOpen(true)}>
                      BOOK A FREE TRIAL
                    </span>
                  </p>
                </div>
              </section>
    </div>
    </>
  )
}

export default Page
