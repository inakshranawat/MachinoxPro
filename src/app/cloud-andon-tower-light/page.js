'use client'

import React, { useState } from "react";
import {AnimatePresence, motion}  from "framer-motion"
import { useAppContext } from "@/context/useContext";
import Image from "next/image";
import SwiperBlogs from "@/components/SwiperBlogs";

function Page() {

    
const [activeImage, setActiveImage] = useState(0)
const {setDemoOpen} = useAppContext()

   // Framer Motion variants for slide animation
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
  }

  const TechSpecsimages = ["/images/downtime-laptop.png","/images/oee-report-laptop.png","/images/efficiency-report-laptop.png"]

  // Animation variants for bottom icons
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
        icon: "/icons/lighning-fast.svg",
        title: "MANUFACTURING",
        description: "Ideal for assembly lines to indicate production status, quality checks, or machine malfunctions."
      },
      {
        icon: "/icons/WAREHOUSES.png",
        title: "WAREHOUSES ",
        description: "Enhances inventory management by signaling low stock, order fulfillment, and shipping alerts."
      },
      {
        icon:"/icons/PLANNING.png",
        title: "LOGISTICS",
        description: "Improves logistics and supply chain efficiency by signaling loading/unloading status and delivery schedules."
      },
      {
        icon: "/icons/immediate-value.svg",
        title: "HEALTH AND SAFETY",
        description: "Provides visual warnings during emergencies or safety protocol breaches, ensuring a swift response from personnel"
      },
      {
        icon: "/icons/smarter-data.svg",
        title: "CUSTOMIZABLE APPLICATIONS",
        description: "Can be tailored for various industries such as automotive, electronics, food processing, and more, meeting specific operational needs."
      },
      
      
    ];

  return (
    <>
      <div className="bg-gray-50">

        {/* Hero Section - Responsive */}
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-8 lg:px-15 py-12 lg:py-20'>
         <div className='flex-1 mt-6 lg:mt-10'>
           <motion.h1
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            
           className='font-bold text-depth tracking-tighter text-[#444444] text-3xl sm:text-4xl lg:text-5xl max-w-full lg:w-[600px] uppercase'>
             Cloud Andon Tower Light Services by Robato Systems
           </motion.h1>
           <motion.p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 max-w-full lg:w-[600px]'
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}}
            
           >
             The Cloud Andon Tower Light is a cutting-edge visual signaling device designed to enhance communication and efficiency in industrial environments. It utilizes cloud technology to offer real-time status updates and customizable visual alerts, ensuring seamless coordination in manufacturing facilities.
           </motion.p>
         </div>

         <motion.div className='w-full  flex justify-center'
          initial={{opacity:0 , x:50}}
             animate={{opacity:1 , x:0}}
             transition={{duration:1}}
             >
           <Image
             className='w-full shadow-2xl max-w-[400px] lg:max-w-[500px] filter '
            
             src="/images/cloud-andon.png"
             alt="" 
             width={800}
             height={800}
           />
         </motion.div>
       </div>

       
{/** icons in the flex - Responsive Grid */}

    <div className="mb-10 px-4 sm:px-8">
        {/* --- Bottom Icons (Row 1) --- */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 lg:gap-10 mt-12 lg:mt-30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: "/icons/CONNECTIVITY.png",
            title: "WIRELESS CONNECTIVITY",
            desc: "Seamlessly connects to your existing network, enabling instant communication.",
          },
          {
            src: "/icons/dot-icon.svg",
            title: "MULTI-COLOR LED LIGHT",
            desc: "offers a vibrant range of colors for clear and intuitive visual cues.",
          },
          {
            src: "/icons/CUSTOMIZABLE-ALERTS.png",
            title: "CUSTOMIZABLE ALARMS",
            desc: "Program specific lights and sounds for various situations, ensuring prompt responses`",
          },
          {
            src: "/icons/DURABLE-CONSTRUCTION.png",
            title: "DURABLE CONSTRUCTION",
            desc: "Built to withstand challenging industrial conditions, ensuring longevity and reliability.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="max-w-sm mx-auto w-full text-center lg:text-left"
          >
            <Image className="w-16 lg:w-20 mx-auto lg:mx-0 lg:ml-10" width={100} height={100} src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-lg lg:text-xl mt-4 lg:mt-5 lg:ml-10">
              {item.title}
            </h2>
            <p className="font-semibold text-sm lg:text-base mt-2 lg:ml-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/** Icons of the second row - Responsive Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-8 lg:mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: "/icons/home-icon.svg",
            title: "REMOTE CONTROL",
            desc: "Simple installation process allows for quick setup on machines, workstations, or assembly lines.",
          },
          {
            src: "/icons/MODULAR-DESIGN.png",
            title: "MODULAR DESIGN",
            desc: "Manage the tower light remotely for effortless customization and monitoring.",
          },
          {
            src: "/icons/EASY-INSTALLATION.png",
            title: "EASY INSTALLATION",
            desc: "Hassle-free setup with versatile mounting options for different workplace layouts.",
          },
          {
            src: "/icons/ENERGY-EFFICIENT.png",
            title: "ENERGY-EFFICIENT",
            desc: "LED technology ensures low power consumption, reducing operational costs.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="max-w-sm mx-auto w-full text-center lg:text-left"
          >
            <Image className="w-14 lg:w-15 mx-auto lg:mx-0 lg:ml-10" width={100} height={100} src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-lg lg:text-xl mt-4 lg:mt-5 lg:ml-10">
              {item.title}
            </h2>
            <p className="font-semibold text-sm lg:text-base mt-2 lg:ml-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

 {/**  BUTTONS - Responsive */}
    <div className="flex flex-col sm:flex-row items-center justify-center py-12 lg:py-20 gap-4 lg:gap-5 px-4">
      <button onClick={()=> setDemoOpen(true)} className="w-full sm:w-auto text-white px-6 py-3 bg-purple-950 hover:bg-gray-600 hover:text-black transition-colors">
        BOOK A FREE TRIAL
      </button>
      <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="w-full sm:w-auto bg-transparent border text-purple-950 hover:bg-purple-950 hover:text-white px-6 py-3 transition-colors">
        CALL NOW
      </button>
    </div>

{/**  TECH SPECIFICATIONS - Responsive */}
<div className="py-16 lg:py-30 px-4 sm:px-8" style={{backgroundImage: "url('/images/bgmai.png')"}}>

       <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-12 lg:py-30'>
        <div className='w-full lg:flex-1'>
          <motion.h1
           initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className='text-3xl text-depth sm:text-4xl lg:text-5xl lg:pl-20 tracking-tighter text-center mt-6 lg:mt-10 text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>
            TECHNICAL SPECIFICATIONS
          </motion.h1>
        </div>

        {/* Fixed Animated Image Container - Responsive */}
        <motion.div className="w-full max-w-[400px] lg:w-[500px] h-[300px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0"
        variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={TechSpecsimages[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              width={800}
              height={800}
              
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Tech Specs Grid - Responsive */}
      <motion.div 
        initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/POWER.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>POWER  </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            110-240V 
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/CONNECTIVITY.png" alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>
            COMMUNCATION
          </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Wireless (Wi-Fi, Bluetooth)
          </p>
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/MULTICOLOR-LEDS.png" alt="" />
          <h2 className='text-lg lg:text-xl font-bold hover:text-purple-950 mt-2 text-[#444444]'>LED COLORS</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Red, Green, Blue, Yellow, White</p>
        </div>
      </motion.div>

      {/**tech specification icons for the second row - Responsive */}
      <motion.div
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/OPERATING-TEMPERATURE.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>OPERATING TEMPERATURE</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            -20°C to 60°C
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src= "/icons/IP-RATING.png" alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>IP RATING</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
              IP65 (Dust tight and protected against water jets)
          </p>  
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/DIMENSIONS.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>DIMESIONS</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
             Height: 1.5 meters, Base Diameter: 30 cm
          </p>
        </div>
      </motion.div>
 </div>

{/** USE CASES OF ANDON SIGNAL TOWER LIGHT  - Fully Responsive */}
     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
            {/* Diagonal Section - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block relative h-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900"
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 0 20%)',
                  width: '125%',
                  height: '200%'
                }}
              ></div>
            </div>
    
            {/* Content Section - Fully Responsive */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 py-8 lg:py-0">
              {/* Main Heading - Responsive text */}
              <motion.h1 
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center lg:text-left mb-8 lg:mb-10 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                USE CASES OF CLOUD ANDON SIGNAL TOWER LIGHT 
              </motion.h1>
    
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  {/* Icon - Responsive sizing */}
                  <motion.div
                    className="min-w-[50px] sm:min-w-[60px] h-[50px] sm:h-[60px] bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:scale-110 cursor-pointer flex-shrink-0"
                  >
                    <Image 
                      src={useCase.icon} 
                      alt={useCase.title} 
                      className="w-8 sm:w-10 h-8 sm:h-10 object-contain" 
                      width={100}
                      height={100}
                    />
                  </motion.div>
    
                  {/* Text - Responsive sizing */}
                  <motion.div
                    className="flex-1 pt-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-white font-black text-base sm:text-lg lg:text-xl mb-2 tracking-wide">
                      {useCase.title}
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {useCase.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

{/** SWIPER BLOGS SECTION */}
     <div>
       <SwiperBlogs/>
     </div>

  </div>
    </>
  )
}

export default Page
