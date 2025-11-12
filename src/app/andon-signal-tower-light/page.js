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
        icon: "/icons/MANUFACTURING-FACILITIES.png",
        title: "MANUFACTRUING PLANTS",
        description: "Enhance production efficiency by indicating machine status, maintenance alerts, and production targets."
      },
      {
        icon: "/icons/WAREHOUSES.png",
        title: "WAREHOUSES ",
        description: "Streamline order fulfillment processes by signaling picking status, inventory levels, and order prioritization."
      },
      {
        icon: "/icons/ASSEMBLY-LINES.png",
        title: "ASSEMBLY LINES ",
        description: "Facilitate smooth coordination among workers by signaling assembly progress, quality control checks, and part shortages"
      },
      {
        icon: "/icons/LOGISTICS-AND-DISTRIBUTION-CENTERS.png",
        title: "lOGISITICS AND DISTRIBUTIVE CENTERS",
        description: "Optimize loading and unloading processes by indicating dock availability, shipment statuses, and safety warnings."
      },
      {
        icon: "/icons/EMERGENCY-RESPONSE.png",
        title: "EMERGENCY RESPONSE",
        description: "Serve as visual indicators for emergency situations, guiding employees toward exits or safe zones during evacuations."
      },
      {
        icon: "/icons/QUALITY-CONTROL.png",
        title: "QUALITY CONTROLS ",
        description: "Signal quality inspection results, ensuring defective products are identified and addressed promptly."
      },
      
    ];
  return (
   <>
    <div className="bg-gray-50">

        {/* Hero Section - Responsive */}
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-8 lg:px-15 py-12 lg:py-20'
      >
         <motion.div className='flex-1 mt-6 lg:mt-10'
           initial={{opacity:0 , x:-50}}
             animate={{opacity:1 , x:0}}
             transition={{duration:1}}>
           <h1 className='font-bold tracking-tighter text-[#444444] text-3xl sm:text-4xl lg:text-5xl max-w-full lg:w-[600px] uppercase'>
             Industrial Parameter Display Solutions by Robato Systems
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 max-w-full lg:w-[600px]'>
             The Andon Tower Light is a state-of-the-art signaling device designed to enhance operational efficiency and safety in various industrial settings. Its sleek and durable design makes it an ideal choice for manufacturing environments where clear visual communication is paramount
           </p>
         </motion.div>

         <motion.div className='w-full lg:w-auto flex justify-center'
          initial={{opacity:0 , x:50}}
             animate={{opacity:1 , x:0}}
             transition={{duration:1}}
             >
           <Image
             className='w-full max-w-[400px] lg:max-w-[500px] filter '
            
             src="/images/ANDON-TOWER-LIGHT.png"
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
            src: "/icons/MULTI-COLOR-SIGNALING.png",
            title: "MULTI-COLOR SIGNALING ",
            desc: "Equipped with multiple colors, the Andon Tower Light provides distinct visual cues for different events or statuses.",
          },
          {
            src: "/icons/CUSTOMIZABLE-ALERTS.png",
            title: "CUSTOMIZABLE ALARMS",
            desc: "Users can configure specific alarms for different colors, ensuring tailored notifications for various situations.",
          },
          {
            src: "/icons/LED-TECHNOLOGY.png",
            title: "LED TECHNOLOGY",
            desc: "Energy-efficient LED lights ensure bright and long-lasting signals, reducing energy consumption and maintenance costs",
          },
          {
            src: "/icons/DURABLE-CONSTRUCTION.png",
            title: "DURABLE CONSTRUCTION",
            desc: "Built with high-quality materials, the tower light is resistant to dust, water, and vibrations, ensuring reliable performance in challenging conditions.",
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
            src: "/icons/DURABLE-CONSTRUCTION.png",
            title: "EASY INSTALLATION",
            desc: "Simple installation process allows for quick setup on machines, workstations, or assembly lines.",
          },
          {
            src: "/icons/MODULAR-DESIGN.png",
            title: "MODULAR DESIGN",
            desc: "The tower light is modular, allowing users to customize the number of light segments and colors according to their specific requirements.",
          },
          {
            src: "/icons/REMOTE-CONTROL.png",
            title: "REMOTE CONTROL",
            desc: "Some models come with remote control options, enabling users to change settings or acknowledge alarms from a distance.",
          },
          {
            src: "/icons/AUDIBLE-SIGNALS.png",
            title: "AUDIBLE SIGNALS ",
            desc: "In addition to visual cues, the Andon Tower Light can be equipped with audible alarms for enhanced notification capabilities.  ",
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
        BOOK A FREE TRAIL
      </button>
      <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="w-full sm:w-auto bg-transparent border text-purple-950 hover:bg-purple-950 hover:text-white px-6 py-3 transition-colors">
        CALL NOW 
      </button>
    </div>

{/**  TECH SPECIFICATIONS - Responsive */}
<div className="py-16 lg:py-30 px-4 sm:px-8" style={{backgroundImage: "url('/images/bgmai.png')"}}>

       <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-12 lg:py-30'>
        <div className='w-full lg:flex-1'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl lg:pl-20 tracking-tighter text-center mt-6 lg:mt-10 text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>
            TECHNICAL SPECIFICATIONS
          </h1>
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
            transition={{duration:1.5}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/POWER.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>POWER SUPPLY </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            110-240V AC, 50/60Hz
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/job-icon.svg" alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>
            LIGHT COLORS
          </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Red, Yellow, Green, Blue, White
          </p>
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/mountain-display-icon.svg" alt="" />
          <h2 className='text-lg lg:text-xl font-bold hover:text-purple-950 mt-2 text-[#444444]'>IP RATING </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            IP65 (Dust-tight and water-resistant)</p>
        </div>
      </motion.div>

      {/**tech specification icons for the second row - Responsive */}
      <motion.div
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.5}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/OPERATING-TEMPERATURE.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>OPERATING TEMPERATURE</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            -20°C to 50°C (-4°F to 122°F)
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src="/icons/MATERIALS.png"  alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>MATERIALS</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Polycarbonate or industrial-grade plastic
          </p>  
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <Image className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} height={80} src= "/icons/MOUNTING.png" alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>MOUNTING</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
             Wall or pole mountable
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
                USE CASES OF ANDON SIGNAL TOWER LIGHT 
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
                      width={80}
                      height={80} 
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
