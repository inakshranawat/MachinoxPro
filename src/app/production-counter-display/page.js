'use client'

import {motion} from 'framer-motion'
import React from 'react'
import BenefitProduction from '@/components/BenefitProduction'
import Image from 'next/image'
import KeyFeatures from '@/components/KeyFeatures'
import UseCases from '@/components/UseCases'
import TechSpecsSection from '@/components/TechSpecsSection '
import SwiperBlogs from '@/components/SwiperBlogs'



function Page() {
  return (
    <>
     <div className='bg-gray-50'>
       {/* First Section */}
       <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-16 lg:py-20'>
         <motion.div className='flex-1 mt-6 lg:mt-10 w-full'
         initial={{opacity:0, x:-50}}
             animate={{opacity:1, x:0}}
             transition={{duration:1}}>
           <h1 className='font-bold tracking-tighter text-3xl sm:text-4xl lg:text-5xl w-full max-w-[750px] uppercase'>
             optimize your <span className='text-indigo-900'>operations</span> with production counter displays
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 w-full max-w-[600px]'>
             In the competitive world of manufacturing, staying on top of production metrics is crucial for maintaining efficiency and meeting targets. Our Production Counter Displays are designed to provide real-time tracking and visibility into your production processes. Whether you need LED Counter Display Boards or Digital Production Counters, our high-quality solutions ensure you stay informed and in control.
           </p>
         </motion.div>
         <motion.div className='w-full lg:w-auto flex justify-center'
          initial={{opacity:0, x:50}}
             animate={{opacity:1, x:0}}
             transition={{duration:1}}
             >
           <Image 
             className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]'
            
             src="/images/production-counter-display.png"
             alt="Time Counter Display" 
             width={800}
             height={800}
           />
         </motion.div>
       </div>

       {/* Second Section */}
       <div className='flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-16 lg:py-20 mt-6 lg:mt-10'>
         <motion.div className='w-full lg:w-auto flex justify-center order-2 lg:order-1'
          initial={{opacity:0, x:-50}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:1}}
             viewport={{once: true}}>
           <Image
             className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]'
            
             src="/images/ProductionCounterDisplay.webp" 
             alt="Production Counter Display" 
             width={800}
             height={800}
           />
         </motion.div>
         <div className='flex-1 w-full order-1 lg:order-2'>
           <h1 className='font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl w-full max-w-[600px] uppercase'>
             What is a <span className='text-indigo-900'>Production Counter Display?</span>
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 w-full max-w-[600px]'>
             In the competitive world of manufacturing, staying on top of production metrics is crucial for maintaining efficiency and meeting targets. Our Production Counter Displays are designed to provide real-time tracking and visibility into your production processes. Whether you need LED Counter Display Boards or Digital Production Counters, our high-quality solutions ensure you stay informed and in control.
           </p>
         </div>
       </div>
       
       <BenefitProduction/>
       <KeyFeatures/>
       <TechSpecsSection/>
       <UseCases/> 
       <SwiperBlogs/>     
       
    </div>
    
    </>
  )
}

export default Page
