'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from '@/context/useContext'
import {useRouter} from 'next/navigation'


import { productionQuestion } from '@/Assets/assets'
import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import SwiperBlogs from '@/components/SwiperBlogs'

function Page() {
     const {setDemoOpen} = useAppContext()
 const router = useRouter()
   const [hoverIndex, setHoverIndex] = useState(null);
 

 const features = [
    {
      icon: "/icons/lighning-fast.svg",
      title: "QUICK TO DEPLOY",
      points: [
        "Plug-and-play, simple to use, and easy to scale.",
        "Easily connects"
      ]
    },
    {
      icon: "/icons/easily-connect.svg",
      title: "DATA IS AUTONOMOUSLY COLLECTED",
      points: [
        "Collects production data without operator input.",
        "Hits the ground running."
      ]
    },
    {
      icon: "icons/hit-the-ground.svg",
      title: "DRIVE IMMEDIATE VALUE",
      points: [
        "Out-of-the-box apps with no initial development required.",
        "Immediate value."
      ]
    },
    {
      icon: "icons/immediate-value.svg",
      title: "CONNECTS TO EVERYTHING",
      points: [
        "Easily captures data from modern and legacy assets.",
        "Smarter data"
      ]
    },
    {
      icon: "icons/smarter-data.svg",
      title: "Deep Manufacturing Vertical Expertise",
      points: [
        "Provides necessary context for actionable data.",
        "Predictive optimization tool."
      ]
    },
      
  ];

  const images = [
    "/images/plug.png",
    "/images/laptop2.png",
    "/images/brother-laptop.png"
  ]

  const EnvisionImage = [
     "/images/CNC-dashboard.png",
    "/images/CNC-tablet.png",
    "/images/alert-mobile-tilt.png"
  ]



  const [activeImage, setActiveImage] = useState(0)

  // Framer Motion variants for slide animation
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
  }
  return (
    <>
      
    <div className="overflow-x-hidden">
        <div className='flex flex-col lg:flex-row py-10 md:py-30 lg:py-50 px-4 lg:px-0'>
             <div className="w-full lg:w-auto">
               <motion.h1 
                initial={{opacity:0 , x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
                
               className='text-2xl md:text-3xl lg:text-4xl pl-4 md:pl-10 lg:pl-20 text-[#444444] text-depth font-bold uppercase w-full md:w-[600px] lg:w-[800px]'>Revolutionize Your  </motion.h1>
               <motion.h1  
                 initial={{opacity:0 , x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:1 ,delay:0.5}}
                               
               className='text-2xl md:text-3xl lg:text-4xl pl-4 md:pl-10 lg:pl-20 text-[#444444] text-depth font-bold uppercase w-full md:w-[600px] lg:w-[800px]' >Operations with Robato Systems</motion.h1>
               <motion.h1
                 initial={{opacity:0 , x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:1 ,delay:0.9}}
                
               className='text-2xl md:text-3xl lg:text-4xl pl-4 md:pl-10 lg:pl-20 text-[#444444] text-depth font-bold uppercase w-full md:w-[600px] lg:w-[800px]' >Production Monitoring Services</motion.h1>
                 
               <motion.p 
               initial={{opacity:0 , x:-100}}
                animate={{opacity:1,x:0}}
                transition={{duration:1 ,delay:1}}
               
               
               className='pl-4 md:pl-10 lg:pl-20 text-base md:text-lg lg:text-xl mt-5 w-full md:w-[500px] lg:w-[700px]'>MachinoX Pro monitors OEE, machine utilization, and downtime for maximum production efficiency and deep operational insights. No manual data entry required.</motion.p>
             </div>
             <motion.div className="w-full lg:w-auto mt-8 lg:mt-0 flex justify-center lg:justify-start"
             initial={{opacity:0 , x:100}}
                animate={{opacity:1,x:0}}
                transition={{duration:1 ,delay:0.6}}
                >
               <Image
               
               className='w-full max-w-[300px] md:max-w-[400px] lg:w-[800px]' src="/images/CNC-dashboard.png" alt="" width={800} height={800} />
             </motion.div>
         </div>

         <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 lg:gap-15 mb-10 px-4 lg:px-0'>
             <motion.div
              initial={{opacity:0 , x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1 ,delay:0.3}}
                viewport={{once:true}}
             >
               <Image className='hover:scale-115 transition-all duration-600' width={130} height={130} src="/icons/home-icon.svg" alt="" />
               <h2 className='text-lg md:text-xl font-bold mt-3 text-[#444444]'>Monitoring of production: Automated</h2>
               <ul className='list-disc pl-5'>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Access and oversee the status of your machine assets remotely.</li>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Seamlessly expand to cover all equipment, whether they are modern or legacy assets.</li>
               </ul>
             </motion.div>

             <motion.div
              initial={{opacity:0 , y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1 ,delay:0.3}}
              viewport={{once:true}}
              >
               <Image width={130} height={130} className='hover:scale-115 transition-all duration-500'   src="/icons/dot-icon.svg" alt="" />
               <h2 className='font-bold text-lg md:text-xl mt-3 text-[#444444] '>Tracking machine usage</h2>
               <ul className='list-disc pl-5'>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Visualize machine utilization by hour, by shift, by day, by week, by month.</li>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Analyze trends and discover hidden capacity on the shop floor.</li>
               </ul>
             </motion.div>

             <motion.div
               initial={{opacity:0 , x:100}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:1 ,delay:0.3}}
               viewport={{once:true}}
               >
               <Image className='hover:scale-115 transition-all duration-500' width={130} height={130} src="/icons/solution_icon.svg" alt="" />
               <h2 className='text-lg md:text-xl mt-3 font-bold text-[#444444]'>Machine conditions in real-time</h2>
               <ul className='list-disc pl-5'>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Implement a condition-based maintenance program with real-time machine diagnostics and automatically generates work orders from the data.</li>
                 <li className='text-sm w-full md:w-[280px] lg:w-[300px]'>Transfer the data into a Computerised Maintenance Management System (CMMS).</li>
               </ul>
             </motion.div>
         </div>


         <div className='flex flex-col sm:flex-row items-center justify-center pb-10 md:pb-20 gap-5 px-4'>
           <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className='w-full sm:w-auto hover:bg-gray-500 hover:text-black bg-purple-950 text-white px-6 py-3'>CALL NOW</button>
           <button onClick={()=> setDemoOpen(true)} className='w-full sm:w-auto hover:bg-purple-950 hover:text-white bg-transparent text-purple-950 border px-6 py-3'>BOOK A FREE TRIAL</button>
         </div>

         {/**lack of the visibility */}
         <div className='flex flex-col lg:flex-row justify-around bg-center bg-cover py-10 md:py-20 lg:py-30 px-4 lg:px-0 '   style={{backgroundImage: "url('/images/factory-blur.png')"}}>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl tracking-tighter w-full md:w-[400px] lg:w-[500px] text-white font-extrabold py-10 lg:py-20'>LACK OF VISIBILITY</h1>
            </div>

            <div className='w-full md:w-[450px] lg:w-[500px]'>
              <h2 className='text-white text-2xl md:text-3xl font-bold'>THE PROBLEM</h2>
              <p className='text-base md:text-lg lg:text-xl mt-5 text-white'>Unlocking accurate, real-time production data is really hard. Most manufacturers manually collect data from their shop floors and enter it into management systems. This is time-intensive and leads to delayed, inaccurate production data that is not actionable.</p>
              <p className='text-base md:text-lg lg:text-xl mt-4 text-white'>This results in massive inefficiencies, from an inability to drive process improvements or justify capital expenditures, to unexpected machine downtime and production losses.</p>
            </div>
         </div>

         <div className='flex flex-col lg:flex-row-reverse justify-around bg-center bg-cover py-10 md:py-20 px-4 lg:px-0 bg-[#434190]'>
            <div className='w-full md:w-[450px] lg:w-[500px]'>
              <h2 className='text-white text-2xl md:text-3xl font-bold'>THE SOLUTION</h2>
              <p className='text-base md:text-lg lg:text-xl mt-5 text-white'>Continuous improvement in manufacturing starts with capturing data from your operations - specifically your machine assets. MachinoX Pro has automated machine data collection to deliver data-driven insights in a matter of minutes.</p>
              <p className='text-base md:text-lg lg:text-xl mt-4 text-white'>The data captured from equipment drives immediate insights for both people and systems, enabling them to make better, faster decisions as well as drive automation.</p>
            </div>

            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl tracking-tighter w-full md:w-[400px] lg:w-[500px] pl-0 md:pl-15 lg:pl-30 text-white font-extrabold py-10 lg:py-20'>REAL-TIME VISIBILITY</h1>
            </div>
         </div>




      {/* PLUG AND PLAY SECTION - FIXED */}
      <div className='flex flex-col lg:flex-row py-10 md:py-30 lg:py-50 px-4 lg:px-0'>
        <div className="w-full lg:w-auto">
          <h1 className='text-3xl md:text-5xl lg:text-6xl pl-0 md:pl-10 lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase w-full md:w-[600px] lg:w-[800px]'>PLUG-AND-PLAY</h1>
          <p className='font-bold text-[#444444] pl-0 md:pl-10 lg:pl-20 mt-5 md:mt-10 text-xl md:text-2xl'>PRODUCTION MONITORING PLATFORM</p>
          <p className='pl-0 md:pl-10 lg:pl-20 text-base md:text-lg lg:text-xl mt-2 w-full md:w-[500px] lg:w-[700px]'>Collect data from any machine by connecting the MachinoX Pro Edge to the ethernet port of the control. Software on the edge processes data from the machine in real-time and streams the data securely to the</p>
          <p className='cursor-pointer text-indigo-950 pl-0 md:pl-10 lg:pl-20 text-xl md:text-2xl mt-2 hover:underline'>MachinoX Pro Cloud</p>
        </div>

        {/* Fixed Animated Image Container */}
        <div className="w-full max-w-[300px] md:max-w-[400px] lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0 mt-8 lg:mt-0">
          <motion.div
           variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
                <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={images[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              width={800}
              height={800}
             
            />
          </AnimatePresence>

          </motion.div>
          
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center pl-5 md:pl-10 lg:pl-20 gap-5 md:gap-5 lg:gap-5 mb-10 px-4 lg:px-0'>
        <motion.div 
         initial={{opacity:0 , x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1 }}
                viewport={{once:true}}
        onClick={() => setActiveImage(0)} className="cursor-pointer">
          <Image className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/managment-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444]'>Identify and Resolve Downtime</h2>
          <p className='w-full md:w-[350px] lg:w-[400px] text-sm md:text-base'>View and manage the status of your machine assets from anywhere. Easily scale across all equipment.</p>
        </motion.div>

        <motion.div
         initial={{opacity:0 , y:-100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1 }}
                viewport={{once:true}}
        onClick={() => setActiveImage(1)} className="cursor-pointer">
          <Image className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/utilization-icon.svg" alt="" />
          <h2 className='font-bold text-lg md:text-xl mt-5 text-[#444444]'>MACHINE UTILIZATION MONITORING</h2>
          <p className='w-full md:w-[350px] lg:w-[400px] text-sm'>Visualize machine utilization by hour, shift, day, week, and month to analyze trends and uncover hidden capacity across the shop floor.</p>
        </motion.div>

        <motion.div 
         initial={{opacity:0 , x:100}}
         whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                viewport={{once:true}}
        onClick={() => setActiveImage(2)} className="cursor-pointer">
          <Image className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/condition-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444]'>REAL-TIME MACHINE CONDITIONS</h2>
          <p className='w-full md:w-[350px] lg:w-[400px] text-sm'>Drive a condition-based maintenance program using real-time machine diagnostics. Push the data into a CMMS to automatically create work orders.</p>
        </motion.div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center mt-10 py-10 md:py-20 gap-5 px-4'>
        <motion.button
         initial={{opacity:0 , x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1 }}
                viewport={{once:true}}
        onClick={()=> setDemoOpen(true)} className='w-full sm:w-auto px-6 py-3 bg-purple-950 text-white hover:bg-gray-600 hover:text-black'>GET A QUOTE</motion.button>
        <motion.button
        onClick={() => (window.location.href = "tel:+61 478 251 187")}
         initial={{opacity:0 , x:100}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:1}}
         viewport={{once:true}}
        className='w-full sm:w-auto px-6 py-3 bg-transparent text-purple-950 border'>CALL NOW</motion.button>
      </div>
      




      {/* ENVISION SECTION - FIXED */}
      <div className='flex flex-col lg:flex-row pl-0 md:pl-10 lg:pl-20 py-10 md:py-30 lg:py-50 px-4 lg:px-0'>
        {/* Fixed Animated Image Container */}
        <div className="w-full max-w-[300px] md:max-w-[400px] lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0 mb-8 lg:mb-0">
          <motion.div
          variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
                 <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={EnvisionImage[activeImage]}
              alt=""
              width={800}
              height={800}
              className='w-full h-full object-contain absolute top-0 left-0'
              
            />
          </AnimatePresence>

          </motion.div>
         
        </div>

        <div className="w-full lg:w-auto">
          <h1 className='text-3xl md:text-5xl lg:text-6xl pl-3 md:pl-10 lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase w-full md:w-[600px] lg:w-[800px]'>Envision the production process</h1>
          <p className='font-bold text-[#444444] pl-3 md:pl-10 lg:pl-20 mt-5 md:mt-10 text-xl md:text-2xl'>Streamline production monitoring through automation</p>
          <p className='pl-3 md:pl-10 lg:pl-20 text-base md:text-lg lg:text-xl mt-2 w-full md:w-[500px] lg:w-[700px]'>Enable operators to achieve production targets by providing real-time insights into performance and promptly identifying production challenges.</p>
          <p className='cursor-pointer text-indigo-950 pl-3 md:pl-10 lg:pl-20 text-xl md:text-2xl mt-2 hover:underline'>MachinoX Pro Cloud</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center ml-0 md:ml-5 lg:ml-10 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-20 px-4 lg:px-0'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer">
          <Image className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/dashboard-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl w-full md:w-[280px] lg:w-[300px] font-bold mt-5 text-[#444444]'>Key Performance Indicator Dashboards</h2>
           <ul className='list-disc pl-5 w-full md:w-[350px] lg:w-[400px]'>
             <li className='text-sm'>Gain real-time insights into machine status and production efficiency.</li>
             <li className='text-sm'>Utilize dashboards featuring easily understandable color-coded tiles for visualization.</li>
           </ul>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer">
          <Image  className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/view-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444]'>Identify and Resolve Downtime</h2>
          <ul className='list-disc pl-5 w-full md:w-[350px] lg:w-[400px]'>
             <li className='text-sm'>Effortlessly gather production data from equipment.</li>
             <li className='text-sm'>No need for manual input from operators.</li>
           </ul>
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer">
          <Image  className='hover:scale-115 transition-all duration-500' width={80} height={80} src="/icons/alert-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444]'>Identify and Resolve Downtime</h2>
           <ul className='list-disc pl-5 w-full md:w-[350px] lg:w-[400px]'>
             <li className='text-sm'>Ensure timely alerts to the appropriate individuals when action is necessary and maintains a comprehensive audit trail for tracking purposes.</li>
             <li className='text-sm'>Manage incidents through structured workflows, including reassignment and resolution.</li>
           </ul>
        </div>
      </div>





      {/** Tech specification section */}
     <div className='bg-center bg-cover ' style={{
        backgroundImage:
          "url('/images/bgmai.png')"
      }}>

      <div className='flex flex-col lg:flex-row items-center justify-around bg-center py-10 px-4 lg:px-0'>
         <div className='w-full lg:w-auto'>
           <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#444444]'>ROBUST ANALYTICS</h1>
            <h2 className='font-bold mt-5 md:mt-10 text-xl md:text-2xl tracking-tighter text-[#444444] uppercase w-full md:w-[450px] lg:w-[500px]' >Make informed choices using up-to-the-minute data</h2>
            <ul className='text-base md:text-lg lg:text-xl text-[#444444] w-full md:w-[450px] lg:w-[500px] list-disc pl-6 md:pl-10'>
               <li>Gain comprehensive insights into shop floor activities, including individual parts and work orders, with Andon</li>
               <li>Create precise standards for improved planning, quoting, and scheduling efficiency.</li>
            </ul>
         </div>

         <div className="w-full lg:w-auto mt-8 lg:mt-0 flex justify-center">
          <Image className='w-full max-w-[300px] md:max-w-[400px] lg:w-[500px]' width={800} height={800} src="/images/downtime-laptop.png" alt="" />
         </div>

         
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center pl-3 md:pl-5 lg:pl-10 gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-20 py-10 md:py-20 px-4 lg:px-0'>
            <div>
              <Image className='w-20 md:w-[100px]' src= "/icons/downtime-icon.svg" width={130} height={130} alt="" />
               <h1 className='text-lg md:text-xl font-bold text-[#444444] mt-3'>Downtime & Performance</h1>
               <ul className='list-disc pl-5 mt-3 md:mt-5 text-sm w-full md:w-[280px] lg:w-[300px]' >
                 <li>Create reports detailing downtime events and quality issues.</li>
                 <li>Utilize Pareto charts to highlight the most common sources of inefficiency.</li>
                 <li>Improve decision-making by focusing efforts on the primary causes.</li>
               </ul>
            
            </div>

             <div>
              <Image className='w-20 md:w-[100px]' width={130} height={130} src="/icons/job-icon.svg" alt="" />
               <h1 className='text-lg md:text-xl font-bold mt-3 md:mt-5 text-[#444444]'>Task & Operator Documentation</h1>
               <ul className='list-disc pl-5 mt-3 text-sm w-full md:w-[280px] lg:w-[300px]'>
                 <li>Monitor performance for each production run.</li>
                 <li>Compare it to historical data.</li>
                 <li>Analyse performance at various levels: Shift, Cell, Machine and Operator.</li>
               </ul>
            
            </div>

             <div>
              <Image className='w-20 md:w-[100px]' width={130} height={130}  src="/icons/mountain-display-icon.svg" alt="" />
               <h1 className='text-lg md:text-xl w-full md:w-[400px] lg:w-[500px] font-bold text-[#444444] mt-3'>Operational Equipment Efficiency (OEE) Performance</h1>
               <ul className='list-disc pl-5 text-sm mt-3 md:mt-5 w-full md:w-[280px] lg:w-[300px]'>
                 <li>Visualise actual cycle times.</li>
                 <li>Analyse performance, machine availability, and quality metrics.</li>
                 <li>Monitor and enhance Overall Equipment Efficiency (OEE).</li>
               </ul>
            
            </div>
         </div>

     </div>
     




     {/**Andon advantages  */}

   <div className="min-h-screen bg-gray-600 relative overflow-hidden flex items-center">
      {/* Diagonal Purple Shape */}
      <div 
        className="hidden lg:block absolute left-0 top-0 bottom-0 bg-linear-to-br from-purple-300 via-purple-800 to-purple-700"
        style={{
          width: '40%',
          clipPath: 'polygon(0 0, 100% 0, 45% 100%, 0 100%)',
          transform: 'translateX(-5%)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Main Title */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            THE DISTINCTIVE ANDON<br />ADVANTAGE
          </h1>
        </div>

        {/* Features List */}
        <div className="space-y-8 md:space-y-12 pl-0 md:pl-10 lg:pl-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-4 md:gap-8">
              {/* Icon */}
              <Image className='  shrink-0 w-[60px] md:w-20' width={80} height={80} src={feature.icon} alt="" />

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <ul className="space-y-1">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-white text-base md:text-lg lg:text-xl flex items-start">
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
    </div>


    
    <div className='py-10 md:py-20 lg:py-30 mt-10'>
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {productionQuestion.map((item, index) => (
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
    </div>

    

    <SwiperBlogs/>
   
   {/**Ready to connect  your  shop  floor */}

      <div className='relative w-full py-10 md:py-20 bg-center bg-cover  '
         style={{ 
    backgroundImage: "url('/images/shoopfloor.jpg')"
  }}
      >
            <div className="absolute inset-0 bg-black/50"></div>
          <div className='pl-4 md:pl-30 lg:pl-50 relative z-10 py-10 md:py-20'>
            <h1 className='text-white tracking-[-0.01em] text-4xl md:text-6xl lg:text-8xl -mb-2.5 md:-mb-5 font-bold'>READY TO CONNECT</h1>
            <h1 className='text-white font-bold mt-0 text-4xl md:text-6xl lg:text-8xl'>YOUR SHOP FLOOR </h1>
          </div>

          <div className='px-4 md:pl-30 lg:pl-50 relative z-10 mt-[-30px] md:mt-[-50px]'>
          <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className='w-full sm:w-auto bg-white text-indigo-950 px-6 py-4 hover:bg-purple-950 hover:text-white'>CALL NOW </button>
          </div>
          <p className='pl-4 md:pl-30 lg:pl-50 relative text-white mt-3 text-sm md:text-base'>Want to see MachinoX Pro in action first? <span className='underline cursor-pointer' onClick={()=> setDemoOpen(true) }>BOOK A FREE TRIAL</span> </p>
       </div>

    </div>
    </>
  )
}

export default Page
