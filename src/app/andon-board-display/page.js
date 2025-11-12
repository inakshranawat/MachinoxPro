"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useAppContext } from "@/context/useContext";
import Image from "next/image";
import SwiperBlogs from "@/components/SwiperBlogs";

export default function Page() {
  const [activeImage, setActiveImage] = useState(0);
  const [clipStyle, setClipStyle] = useState({});

  const { setDemoOpen } = useAppContext();

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } },
  };

  const TechSpecsimages = [
    "/images/downtime-laptop.png",
    "/images/oee-report-laptop.png",
    "/images/efficiency-report-laptop.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const useCases = [
    {
      icon: "/icons/MANUFACTURING-PLANTS.png",
      title: "MANUFACTURING PLANTS",
      description:
        "Monitor production lines, ensuring timely output and identifying bottlenecks for process optimization.",
    },
    {
      icon: "/icons/WAREHOUSES.png",
      title: "WAREHOUSES",
      description:
        "Keep track of inventory movement, aiding inventory management and restocking decisions.",
    },
    {
      icon: "/icons/ASSEMBLY-LINES.png",
      title: "ASSEMBLY LINES",
      description:
        "Ensure accurate assembly counts, preventing errors and enhancing product quality.",
    },
    {
      icon: "/icons/PACKAGING-FACILITIES.png",
      title: "PACKAGING FACILITIES",
      description:
        "Monitor packaging lines, minimizing downtime and maximizing packaging efficiency.",
    },
    {
      icon: "/icons/RETAIL.png",
      title: "RETAIL",
      description:
        "Track sales in real-time, aiding inventory planning and preventing stockouts.",
    },
    {
      icon: "/icons/FOOD-INDUSTRY.png",
      title: "FOOD INDUSTRY",
      description:
        "Count production units in food processing, assisting in quality control and compliance monitoring.",
    },
    {
      icon: "/icons/AUTOMOTIVE.png",
      title: "AUTOMOTIVE",
      description:
        "Monitor production of automotive parts, optimizing supply chain operations and production schedules.",
    },
  ];

  // Safely read window dimensions only on client
  useEffect(() => {
    const applyClipStyle = () => {
      if (typeof window === "undefined") return;
      const isDesktop = window.innerWidth >= 1024;
      setClipStyle({
        clipPath: isDesktop
          ? "polygon(0 0, 80% 0, 0 20%)"
          : "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
        width: isDesktop ? "125%" : "100%",
        height: isDesktop ? "200%" : "100%",
      });
    };

    // Apply initially and on resize
    applyClipStyle();
    window.addEventListener("resize", applyClipStyle);
    return () => window.removeEventListener("resize", applyClipStyle);
  }, []);

  const handleCall = () => {
    // safe to use window here because this runs in the browser
    window.location.href = "tel:+61 478 251 187";
  };

  return (
    <>
      <div className="bg-gray-50">
        {/* Hero Section - Fully Responsive */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-12 lg:py-20">
          <motion.div className="flex-1 mt-6 lg:mt-10 text-center lg:text-left"
          
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>

            <h1 className="font-bold tracking-tighter text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full lg:w-[600px] uppercase mx-auto lg:mx-0">
              Revolutionize Your Workflow with Andon Board Displays
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 max-w-full lg:w-[600px] mx-auto lg:mx-0">
              In today&apos;s fast-paced industrial environment, having an efficient communication system is crucial for maintaining productivity and quality. Our Andon Display Boards are designed to meet this need by providing real-time information that helps streamline operations and improve decision-making processes.
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-auto flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            
          >
            <Image
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]"
              src="/images/Andon-Board-Displays.webp"
              alt="Andon Board Display"
              width={800}
              height={800}
            />
          </motion.div>
        </div>

        {/* What is Andon Display Board - Responsive */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-12 lg:py-20">
          <motion.div
            className="w-full lg:w-auto flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]"
              src="/images/what-andon-board-display.webp"
              alt="What is Andon Board"
              width={800}
              height={800}
            />
          </motion.div>

          <div className="flex-1 mt-6 lg:mt-10 text-center lg:text-left">
            <h1 className="font-bold tracking-tighter text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full lg:w-[600px] uppercase mx-auto lg:mx-0">
              What is the Andon Display Board?
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 max-w-full lg:w-[600px] mx-auto lg:mx-0">
              In today&apos;s fast-paced industrial environment, having an efficient communication system is crucial for maintaining productivity and quality. Our Andon Display Boards are designed to meet this need by providing real-time information that helps streamline operations and improve decision-making processes.
            </p>
          </div>
        </div>

        {/* Key Features Section - Responsive */}
        <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1100px] mx-auto rounded-2xl mt-6 lg:mt-10 shadow-2xl mb-6 lg:mb-10 py-6 lg:py-10 bg-[#ffffff]">
          <div className="px-4 sm:px-6 lg:px-0">
            <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2">
              Key Features of Our LED Counter Display Boards
            </h1>
            <div className="border-b w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[900px] mt-4 lg:mt-5 mx-auto"></div>

            <Image
              className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1000px] mx-auto mt-6 lg:mt-10 object-contain"
              src="/images/key-feature-andon-display-board.webp"
              alt="Key Features"
              width={800}
              height={800}
            />

            <p className="mt-6 lg:mt-10 mx-4 sm:mx-6 lg:mx-10 text-sm sm:text-base">
              Our LED Counter Display Boards are designed with cutting-edge technology to provide clear, accurate, and visible production metrics. Key features include:
            </p>

            {[
              {
                title: "Real-time Data Display:",
                description:
                  "Our Andon displays provide up-to-the-minute information on production status, allowing for quick and informed decision-making.",
                delay: 0,
              },
              {
                title: "Customizable Alerts:",
                description:
                  "Configure alerts to notify staff of various conditions, such as equipment malfunctions, material shortages, or quality control issues.",
                delay: 0.2,
              },
              {
                title: "Portable and Versatile:",
                description:
                  "We offer Portable display boards that can be easily moved and set up in different locations as needed.",
                delay: 0.4,
              },
              {
                title: "Easy Integration:",
                description:
                  "Our Andon Display Boards seamlessly integrate with existing systems, making it easy to incorporate them into your current workflow.",
                delay: 0.6,
              },
              {
                title: "Durable and Reliable:",
                description:
                  "Built to withstand the demands of industrial environments, our displays are both robust and dependable.",
                delay: 0.8,
              },
            ].map((feature, index) => (
              <div key={index} className="mx-4 sm:mx-6 lg:mx-10 mt-6 lg:mt-10">
                <div className="flex gap-2 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: feature.delay }}
                    viewport={{ once: true }}
                    className="shrink-0"
                  >
                    <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />
                  </motion.div>
                  <h3 className="font-bold text-[#444444] text-lg sm:text-xl lg:text-2xl">{feature.title}</h3>
                </div>
                <p className="px-0 sm:pl-8 lg:pl-10 mt-2 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Icons - Responsive Grid */}
        <div className="mb-10 px-4 sm:px-6 lg:px-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-30"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { src: "/icons/real-time-oee-monitoring.png", title: "REAL-TIME MONITORING", desc: "Instantly track production numbers, helping you stay updated on output metrics." },
              { src: "/icons/USER-FRIENDLY-INTERFACE.png", title: "User-Friendly Interface", desc: "Intuitive displays make it easy for employees to read and comprehend production data." },
              { src: "/icons/CUSTOMIZABLE-ALERTS.png", title: "Customizable Alerts", desc: "Set thresholds and receive notifications when production goals are met or if there are deviations." },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="max-w-sm mx-auto w-full text-center lg:text-left">
                <Image className="w-16 sm:w-20 mx-auto lg:ml-10" src={item.src} alt={item.title} width={100} height={100} />
                <h2 className="hover:text-[#430099] font-bold lg:ml-10 text-lg sm:text-xl mt-4 lg:mt-5">{item.title}</h2>
                <p className="font-semibold lg:ml-10 text-sm sm:text-base mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { src: "/icons/DURABLE-BUILD.png", title: "Durable Build", desc: "Robust construction ensures longevity, even in challenging industrial settings." },
              { src: "/icons/VERSATILE-MOUNTING.png", title: "Versatile Mounting", desc: "Suitable for various mounting options, allowing seamless integration into your workspace." },
              { src: "/icons/ENERGY-EFFICIENT.png", title: "ENERGY EFFICIENT", desc: "Low-power consumption design keeps operational costs in check." },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="max-w-sm mx-auto w-full text-center lg:text-left">
                <Image className="w-16 sm:w-20 mx-auto lg:ml-10" src={item.src} width={100} height={100} alt={item.title} />
                <h2 className="hover:text-[#430099] font-bold text-lg sm:text-xl lg:ml-10 mt-4 lg:mt-5">{item.title}</h2>
                <p className="font-semibold lg:ml-10 text-sm sm:text-base mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons - Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-center py-10 sm:py-12 lg:py-20 gap-4 sm:gap-5 px-4">
          <button onClick={() => setDemoOpen(true)} className="w-full sm:w-auto text-white px-6 py-3 bg-purple-950 hover:bg-gray-600 hover:text-black transition-all text-sm sm:text-base">
            BOOK A FREE TRIAL
          </button>
          <button onClick={handleCall} className="w-full sm:w-auto bg-transparent border text-purple-950 hover:bg-purple-950 hover:text-white px-6 py-3 transition-all text-sm sm:text-base">
            CALL NOW
          </button>
        </div>

        {/* Tech Specifications - Responsive */}
        <div className="py-10 sm:py-20 lg:py-30" style={{ backgroundImage: "url('/images/bgmai.png')" }}>
          <div className="flex flex-col lg:flex-row py-6 lg:py-30 items-center gap-6 lg:gap-0 px-4 sm:px-6 lg:px-0">
            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:pl-20 tracking-tighter text-center lg:text-left mt-6 lg:mt-10 text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px] mx-auto lg:mx-0">
                TECH SPECIFICATIONS
              </h1>
            </div>

            <motion.div
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-[250px] sm:h-[300px] lg:h-[400px] relative overflow-hidden mx-auto"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AnimatePresence mode="wait">
                <Image
                  key={activeImage}
                  src={TechSpecsimages[activeImage]}
                  alt="Tech Specs"
                  className="w-full h-full object-contain absolute top-0 left-0"
                  width={800}
                  height={800}
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Tech Spec Icons - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-20 mb-6 lg:mb-10"
          >
            {[
              { icon: "/icons/downtime-icon.svg", title: "DISPLAY TYPE", index: 0 },
              { icon: "/icons/RESOLUTION.png", title: "RESOLUTION", index: 1 },
              { icon: "/icons/CONNECTIVITY.png", title: "CONNECTIVITY", index: 2 },
            ].map((item, idx) => (
              <div key={idx} onClick={() => setActiveImage(item.index)} className="cursor-pointer text-center">
                <Image className="hover:scale-120 transition-all duration-500 w-16 sm:w-20 lg:w-[100px] mx-auto" src={item.icon} width={100} height={100} alt={item.title} />
                <h2 className="text-sm sm:text-base lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]">{item.title}</h2>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-20 mb-6 lg:mb-10"
          >
            {[
              { icon: "/icons/POWER.png", title: "POWER INPUT", index: 0 },
              { icon: "/icons/OPERATING-TEMPERATURE.png", title: "OPERATING TEMPERATURE", index: 1 },
              { icon: "/icons/PROTECTION.png", title: "PROTECTION", index: 2 },
            ].map((item, idx) => (
              <div key={idx} onClick={() => setActiveImage(item.index)} className="cursor-pointer text-center">
                <Image className="hover:scale-120 transition-all duration-500 w-16 sm:w-20 lg:w-[100px] mx-auto" src={item.icon} width={100} height={100} alt={item.title} />
                <h2 className="text-sm sm:text-base lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]">{item.title}</h2>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Use Cases Section - Fully Responsive */}
        <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="relative h-[200px] sm:h-[300px] lg:h-full lg:min-h-[600px] xl:min-h-[700px] overflow-hidden">
              <div
                className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900"
                style={clipStyle}
              ></div>
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-12 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
              <motion.h1
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center lg:text-left mb-6 sm:mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                USE CASES OF ANDON BOARD DISPLAY
              </motion.h1>

              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  <motion.div
                    className="min-w-[50px] h-[50px] sm:min-w-[60px] sm:h-[60px] bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:scale-110 cursor-pointer flex-shrink-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={useCase.icon}
                      alt={useCase.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      width={100}
                      height={100}
                    />
                  </motion.div>

                  <motion.div
                    className="flex-1 pt-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-white font-black text-base sm:text-lg lg:text-xl mb-2 tracking-wide">{useCase.title}</h2>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{useCase.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swiper Blogs Section */}
        <div><SwiperBlogs/></div>
      </div>
    </>
  );
}
