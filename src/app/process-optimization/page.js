'use client'


import React from "react";
import  { useState } from 'react'
import {useRouter} from 'next/navigation'
import { useAppContext } from '../../context/useContext'
import {motion, AnimatePresence } from 'framer-motion'


import { processOptimiztionQuestion } from "@/Assets/assets";
import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import SwiperBlogs from "@/components/SwiperBlogs";

function Page() {

    
  const router = useRouter()
  const {setDemoOpen} = useAppContext()
  const [activeImage, setActiveImage] = useState(0)
    const [hoverIndex, setHoverIndex] = useState(null);
  

   // Framer Motion variants for slide animation
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
  }

  const  Beginsimages = ["/images/plug.png","/images/operatortablet.png","/images/automationtablet.png"]

  const RobustImages = ["/images/cycletimelaptop.png","/images/downtime-laptop.png","/images/quality-report-laptop.png"]

  const ImproveProcessImages  = ["/images/lathe-tablet.png","/images/operatortablet.png","/images/production-laptop.png"]


const useCases = [
    {
      icon: "/icons/lighning-fast.svg",
      title: "QUICK TO DEPLOY",
      description: "Plug-and-play, simple to use, and easy to scale."
    },
    {
      icon: "/icons/easily-connect.svg",
      title: "DATA IS INSTANTLY USABLE",
      description: "Eliminates time-consuming data tag mapping."
    },
    {
      icon: "/icons/hit-the-ground.svg",
      title: "DRIVE IMMEDIATE VALUE",
      description: "Out-of-the-box apps with no initial development required."
    },
    {
      icon: "/icons/immediate-value.svg",
      title: "CONNECTS TO EVERYTHING",
      description: "Easily integrates machine data across your digital factory"
    },
    {
      icon: "/icons/smarter-data.svg",
      title: "DEEP MANUFACTURING VERTICAL EXPERTISE",
      description: "Provides necessary context to enable data actionability"
    },
   
  ];
  return (
    <>
      <div className='flex flex-col lg:flex-row py-10 md:py-20 lg:py-50 px-4 md:px-8 lg:px-0 gap-8 lg:gap-0'>
                     <div className='flex-1'>
                       <motion.h1 
                        initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            
                       
                       className='text-2xl md:text-3xl lg:text-4xl px-4 md:px-8 lg:pl-20 text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[700px]'>Transforming Business Excellence:Process Optimizationby Robato Systems</motion.h1>
                       <motion.p
                       
                       initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 ,delay:0.3}}
            
                       className='px-4 md:px-8 lg:pl-20 max-w-full lg:w-[500px] mt-5 text-[#444444] text-base md:text-lg'>Our robust, user-friendly, and adaptable production and process optimization applications are guided by analytics, ensuring your team is well-informed about what actions to take, their timing, and ways to enhance their performance.</motion.p>
                       
                     </div>
                     <motion.div className='flex-1 flex justify-center lg:justify-end px-4'
                     initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1 ,delay:0.3}}>
                       <Image className='w-full max-w-[500px] h-auto' width={700} height={700} src="/images/alert.png" alt="" 
                        initial={{opacity:0,x:80}} animate={{opacity:1,x:0}}  transition={{duration:0.8}}
                       />
                     </motion.div>
                 </div>
        
                 <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-20 mb-10 px-4 md:px-8'>
                     <motion.div
                        initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
                     
                     className='flex-1 max-w-[300px] mx-auto md:mx-0'>
                       <Image  className='w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={100} height={100} src= "/icons/speaker-icon.svg" alt="" />
                       <h2 className='text-lg md:text-xl font-bold mt-3 text-[#444444] text-center md:text-left'>Data Gathering</h2>
                       <ul className='list-disc pl-5'>
                         <li className='text-sm w-full'>Establish connections and gather data.</li>
                         <li className='text-sm w-full'>Collect real-time insights from equipment, systems, and workers.</li>
                         <li className='text-sm w-full'>Visualise and analyse this information on the shop floor.</li>
                       </ul>
                     </motion.div>
        
                     <motion.div
                     
                       initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
                     className='flex-1 max-w-[300px] mx-auto md:mx-0'>
                       <Image className='w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={100} height={100} src="/icons/bottleneck-icon.svg" alt="" />
                       <h2 className='font-bold text-lg md:text-xl mt-3 text-[#444444] text-center md:text-left'>Bottleneck Assessment</h2>
                       <ul className='list-disc pl-5'>
                         <li className='text-sm w-full'>Scrutinize machining and process data.</li>
                         <li className='text-sm w-full'>Identify inefficiencies impacting productivity and profitability.</li>
                         
                       </ul>
                     </motion.div>
        
                     <motion.div
                        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
                     className='flex-1 max-w-[300px] mx-auto md:mx-0'>
                       <Image className='w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={100} height={100} src= "/icons/transform-icon.svg" alt="" />
                       <h2 className='text-lg md:text-xl mt-3 font-bold text-[#444444] text-center md:text-left'>Enhance Processes</h2>
                       <ul className='list-disc pl-5'>
                         <li className='text-sm w-full'>Create sequential workflows.</li>
                         <li className='text-sm w-full'>Optimise processes gradually.</li>
                         <li className='text-sm w-full'>Deliver instructions and apps to factory workers at the opportune moments.</li>
                       </ul>   
                     </motion.div>
        </div>

        {/**buttons */}

      <div className='flex flex-col sm:flex-row items-center justify-center mt-10 py-10 md:py-20 gap-5 px-4'>
        <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className='w-full sm:w-auto px-6 py-3 bg-purple-950 text-white hover:bg-gray-600 hover:text-black'>CALL NOW</button>
        <button onClick={()=> setDemoOpen(true)} className='w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-purple-950 hover:text-white text-purple-950 border'>BOOK A FREE TRIAL</button>
      </div>

      
      {/**INEFFECTIVE PROCESS RESULT IN PERIODS OF DOWNTIME */}

      <div className='flex flex-col lg:flex-row justify-around bg-center bg-cover py-10 md:py-16 lg:py-20 px-4 md:px-8 gap-8 lg:gap-0'
        style={{backgroundImage:  "url('/images/factory-blur.png')"}}
      >
            <div className='flex-1 max-w-full lg:max-w-[500px]'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl tracking-tighter text-white font-extrabold uppercase py-8 md:py-12 lg:py-20'>Ineffective processes result in periods of downtime</h1>
            </div>

            <div className='flex-1 max-w-full lg:max-w-[500px]'>
              <h2 className='text-white mt-0 md:mt-10 lg:mt-30 text-2xl md:text-3xl font-bold'>THE ISSUE</h2>
              <ul className="list-disc mt-5 pl-5 md:pl-10 text-white space-y-2 text-sm md:text-base">
            <li>Lack of data-driven operations.</li>
            <li>Results in process inefficiencies.</li>
            <li>Impairs decision-making.</li>
            <li>Affects all aspects of a company&apos;s operation.</li>
            <li>Consequences include significant downtime and production losses.</li>
          </ul>
              
            </div>
        </div>

         <div className='flex flex-col lg:flex-row justify-around bg-[#430099] py-10 md:py-16 lg:py-20 px-4 md:px-8 gap-8 lg:gap-0'>

            <div className='flex-1 max-w-full lg:max-w-[500px]'>
              <h2 className='text-white mt-0 md:mt-10 lg:mt-30 text-2xl md:text-3xl font-bold'>THE SOLUTION</h2>
              <ul className='list-disc text-white pl-5 md:pl-10 mt-5 space-y-2 text-sm md:text-base'>
                 <li>Exploit the potential of data.</li>
                 <li>Infuse human context into machine data.</li>
                 <li>Scrutinise and pinpoint process bottlenecks.</li>
                 <li>Introduce improved processes to factory workers promptly and strategically.</li>
              </ul>
            </div>
            
            <div className='flex-1 max-w-full lg:max-w-[500px]'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl tracking-tighter text-white font-extrabold uppercase py-8 md:py-12 lg:py-20'>Leverage real-time condition data for optimization purposes</h1>
            </div>

          </div>


          {/**It All Begins with Data */}

      <div className='flex flex-col lg:flex-row py-10 md:py-20 lg:py-30 px-4 md:px-8 gap-8 lg:gap-0'>
        <div className='flex-1'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl px-4 md:px-8 lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>It All Begins with Data</h1>
          <p className='font-bold text-[#444444] px-4 md:px-8 lg:pl-20 mt-10 text-xl md:text-2xl'>Industrial IoT Platform for Machines</p>
          <ul className='max-w-full lg:w-[500px] list-disc text-[#444444] px-8 md:px-12 lg:pl-25 text-lg md:text-xl tracking-tighter mt-4'>
                 <li>Enhance factory floor production efficiency.</li>
                 <li>Collect and measure all production-related processes.</li>
                 <li>Analyse machine performance, availability, operator productivity, and quality.</li>
                  
           </ul>
        </div>

        {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden px-4 lg:px-0"
        variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={Beginsimages[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              width={900}
              height={900}
              
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <div className='flex flex-col md:flex-row justify-around px-4 md:px-8 lg:pl-20 gap-8 md:gap-5 mb-10'>
        <motion.div
        
         initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(0)} className="cursor-pointer flex-1 max-w-full md:max-w-[300px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/speaker-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>MACHINE DATA COLLECTION</h2>
          <ul className='text-sm list-disc text-[#444444] pl-5 md:pl-10 mt-2'>
                 <li>Employ extensive alarm analytics to detect issues.</li>
                 <li>Receive proactive, AI-powered predictive notifications for diagnosis.</li>
                 <li>Enhance issue detection and address problems preemptively.</li>

          </ul>
        </motion.div>

        <motion.div
         initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(1)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/feedback-icon.svg" alt="" />
          <h2 className='font-bold text-lg md:text-xl mt-5 text-[#444444] text-center md:text-left'>Operator Input</h2>
          <ul className='text-sm list-disc text-[#444444] pl-5 md:pl-10 mt-2'>
                 <li>Track machine utilisation at various time intervals: hourly, by shift, daily, weekly, and monthly.</li>
                 <li>Analyse utilisation trends to pinpoint areas for improvement.</li>
                 <li>Identify opportunities to enhance efficiency and productivity.</li>
                 
              </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(2)} className="cursor-pointer flex-1 max-w-full md:max-w-[300px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/workflow-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>Workflow Designer</h2>
           <ul className='text-sm list-disc text-[#444444] pl-5 md:pl-10 mt-2'>
                 <li>Enhance equipment uptime.</li>
                 <li>Boost service productivity.</li>
                 <li>Prevent unexpected downtime.</li>
                 
              </ul>
        </motion.div>
      </div>


      {/** Robust Analytics for Detecting Process Bottlenecks*/}
        

    <div className='flex flex-col lg:flex-row px-4 md:px-8 lg:pl-25 py-10 md:py-20 lg:py-30 gap-8 lg:gap-0'>

          {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden"
        variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={RobustImages[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              width={900}
              height={900}
              
            />
          </AnimatePresence>
        </motion.div>


        <div className='flex-1'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl px-4 md:px-8 lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>Robust Analytics for Detecting Process Bottlenecks</h1>
         
          <ul className='list-disc max-w-full lg:w-[500px] mt-10 text-[#444444] px-8 md:px-12 lg:pl-25 text-lg md:text-xl tracking-tighter'>
                 <li>Gain insight into processes through real-time data visualisation.</li>
                 <li>Utilise cloud-based machine monitoring and OEE software.</li>
                 <li>Access automated visualisations of manufacturing production data in real-time..</li>
                 <li>Enhance processes with this technology.</li>  
                
           </ul>
        </div>
        
    </div>


    <div className='flex flex-col md:flex-row justify-center px-4 md:px-8 lg:pl-20 gap-8 md:gap-5 mb-10'>
        <motion.div
        
         initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(0)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/cycle-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>Cycle Time Analysis</h2>
          <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                 <li>Track spindle load or any analog metric during a part cycle.</li>
                 <li>Overlay data from multiple cycles, regardless of the time point.</li>
                 <li>Analyse discrepancies or variations over time</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(1)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/bottleneck-icon.svg" alt="" />
          <h2 className='font-bold text-lg md:text-xl mt-5 text-[#444444] text-center md:text-left'>Production Bottleneck Analysis</h2>
          <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                 <li>Monitor processes with operator feedback.</li>
                 <li>Identify bottlenecks responsible for significant downtime.</li>
                 <li>Optimise and refine processes to enhance efficiency and reduce downtime.</li>
                 
              </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(2)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src= "/icons/quality-alert-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>Quality Assessment Analytics</h2>
           <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                 <li>Recognize deficiencies in the production process through operator input.</li>
                 <li>Utilise quality data and feedback from operators.</li>
                 <li>Develop alert systems based on this analysis to notify employees when issues arise.  </li>
                
              </ul>
        </motion.div>
      </div>
      

      {/**Create Workflows for Improved Processes */}


       <div className='flex flex-col lg:flex-row py-10 md:py-20 lg:py-30 px-4 md:px-8 gap-8 lg:gap-0'>

        <div className='flex-1'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl px-4 md:px-8 lg:pl-20 tracking-tighter text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>Create Workflows for Improved Processes</h1>
         
          <ul className='list-disc max-w-full lg:w-[500px] mt-10 text-[#444444] px-8 md:px-12 lg:pl-25 text-lg md:text-xl tracking-tighter'>
                 <li>Predict equipment failures and offer solutions.</li>
                 <li>Provide step-by-step instructions to boost factory worker efficiency.</li>
                 <li>Tailor notifications and workflow systems for precise information delivery to the appropriate individuals when needed.</li>
  
           </ul>
        </div>

        {/* Fixed Animated Image Container */}
        <motion.div className="w-full lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden"
         variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
          <AnimatePresence mode="wait">
            <Image
              key={activeImage}
              src={ImproveProcessImages[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              width={900}
              height={900}
             
            />
          </AnimatePresence>
        </motion.div>
        
    </div>


    <div className='flex flex-col md:flex-row justify-center px-4 md:px-8 lg:pl-15 gap-8 md:gap-5 mb-10'>
        <motion.div
          initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(0)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' src="/icons/optimize-icon.svg" width={150} height={150} alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>Enhance Setup Times</h2>
          <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                    <li>Initiate, halt, and monitor setup times to pinpoint areas requiring enhancement.</li>
                 <li>Present setup stages and instructions to motivate operators to complete them punctually.</li>
                
          </ul>
        </motion.div>

        <motion.div
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        
        onClick={() => setActiveImage(1)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/changeover-icon.svg" alt="" />
          <h2 className='font-bold text-lg md:text-xl mt-5 text-[#444444] text-center md:text-left'>Minimise Changeover Times</h2>
          <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                 <li>Monitor the performance of each changeover and utilise operator analytics for insights.</li>
                 <li>Calculate average changeover times by shift.</li>
                 <li>Establish more efficient systems to minimise downtime based on this data.</li>
                 
              </ul>
        </motion.div>

        <motion.div
        
          initial={{opacity:0 ,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
        onClick={() => setActiveImage(2)} className="cursor-pointer flex-1 max-w-full md:max-w-[400px]">
          <Image className='hover:scale-115 transition-all duration-500 w-20 md:w-24 lg:w-[100px] mx-auto md:mx-0' width={150} height={150} src="/icons/scheduling-icon.svg" alt="" />
          <h2 className='text-lg md:text-xl font-bold mt-5 text-[#444444] text-center md:text-left'>Enhance Scheduling</h2>
           <ul className='list-disc text-[#444444] pl-5 md:pl-10 text-sm mt-2'>
                 <li>Develop workflows that seamlessly integrate with your ERP system.</li>
                 <li>Utilise real-time production data to trigger workflow parameters.</li>
                 <li>Automatically reschedule and reorganise jobs as needed based on these triggers.</li>
              </ul>
        </motion.div>
      </div>


      {/**THE MachinoX Pro DIFFERENCE.*/}


      <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
              {/* Diagonal Section */}
              <div className="relative h-[300px] md:h-[400px] lg:h-full lg:min-h-[600px] xl:min-h-[700px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900"
                  style={{
                    clipPath: 'polygon(0 0, 80% 0, 0 20%)',
                    width: '125%',
                    height: '200%'
                  }}
                ></div>
              </div>
      
              {/* Content Section */}
              <div className="space-y-6 md:space-y-8 lg:space-y-12 py-8 md:py-12 lg:py-0 px-4 md:px-6">
                {/* Main Heading */}
                <motion.h1 
                  className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide text-center lg:text-left mb-6 md:mb-8 lg:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                   The MachinoX Pro Difference
                </motion.h1>
      
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4 md:gap-6">
                    {/* Icon - animate from left */}
                    <motion.div
                      className="min-w-[50px] h-[50px] md:min-w-[60px] md:h-[60px] bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:scale-110 cursor-pointer shrink-0"
                    
                    >
                      <Image
                        src={useCase.icon} 
                        alt={useCase.title} 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                        width={150}
                        height={150}
                      />
                    </motion.div>
      
                    {/* Text - animate from right */}
                    <motion.div
                      className="flex-1 pt-1"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-white font-black text-base md:text-lg lg:text-xl mb-2 tracking-wide">
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


     {/** WE SAVED $ 1.5MM! */}

    
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl w-full">
        {/* Decorative Quote Marks */}
        <div className="flex justify-end mb-4 mr-4 md:mr-8 lg:mr-12">
          <div className="flex gap-2 md:gap-4">
            <div className="w-8 h-12 md:w-10 md:h-16 lg:w-12 lg:h-20 bg-purple-400/30 rounded"></div>
            <div className="w-8 h-12 md:w-10 md:h-16 lg:w-12 lg:h-20 bg-purple-400/30 rounded"></div>
          </div>
        </div>

        {/* Main Quote */}
        <div className="text-center mb-6 md:mb-8 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight md:leading-tighter">
            &quot;WE SAVED $ 1.5 MM!&quot;
          </h1>
        </div>

        {/* Attribution */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            <span className="font-bold">Gary Bruner</span>, <span className="font-light italic">President of Carolina Precision Manufacturing</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Case Study Image/Document */}
          

          {/* Description and CTA */}
          <div className="flex-1 px-4 md:px-8 lg:px-20">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 font-light">
              Learn how MachinoX Pro helped Carolina Precision Manufacturing save over $1.5 million in their first year of machine monitoring.
            </p>

            <button onClick={()=> router.push('/contact-us')} className="border-2 border-white text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded hover:bg-white hover:text-purple-900 transition-all duration-300 uppercase tracking-wider w-full md:w-auto">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
     

     {/**frequently asked questions */}

      <div className='py-10 md:py-16 lg:py-20 px-4 md:px-8'>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {processOptimiztionQuestion .map((item, index) => (
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


      {/** READY TO CONNECT TO THE SHOOP FLOOR */}

      <div className='relative w-full py-10 md:py-16 lg:py-20 bg-center bg-cover'
           style={{backgroundImage:  "url('/images/shoopfloor.jpg')"}}
      >
            <div className="absolute inset-0 bg-black/50"></div>
          <div className='px-4 md:px-8 lg:pl-50 relative z-10 py-10 md:py-16 lg:py-20'>
            <motion.h1
              initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            className='text-white tracking-[-0.01em] text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-[-10px] md:mb-[-15px] lg:mb-[-20px] font-bold'>READY TO CONNECT</motion.h1>
            <motion.h1
              initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            className='text-white font-bold mt-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>YOUR SHOP FLOOR </motion.h1>
          </div>

          <div className='px-4 md:px-8 lg:pl-50 relative z-10 mt-[-30px] md:mt-[-40px] lg:mt-[-50px]'>
          <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className='bg-white text-indigo-950 px-6 py-3 md:py-4 hover:bg-purple-950 hover:text-white w-full md:w-auto'>CALL NOW</button>
          </div>
          <p  className='px-4 md:px-8 lg:pl-50 relative text-white mt-3 text-sm md:text-base'>Want to see MachinoX Pro in action first? <span className='underline cursor-pointer' onClick={()=> setDemoOpen(true)}>BOOK A FREE TRIAL</span> </p>
       </div>
    </>
  )
}

export default Page
