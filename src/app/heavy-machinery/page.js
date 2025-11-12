
"use client"

import React, { useState } from 'react';
import { efficiencyReportLaptopImg, heavyMachineryBgImg, heavyMachineryQuestion, latheTabletImg } from '@/Assets/assets';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import {useRouter} from 'next/navigation'
import { useAppContext } from '@/context/useContext.jsx';




import IndustrySolutions from '../../components/IndustrySolutions';
import MachinoxProApplication from '../../components/MachinoxProApplication';
import ShopFloor from '../../components/ShopFloor';
import Image from 'next/image';
import SwiperBlogs from '@/components/SwiperBlogs';

function Page() {
    const router = useRouter()
    const { setDemoOpen } = useAppContext();
    const [hoverIndex, setHoverIndex] = useState(null);
    
    
    return (
    <>
      {/* Hero Section */}
<div className="relative w-full py-20 px-6 md:px-20 lg:px-32 overflow-hidden">
  {/* Background Image using Next.js Image */}
  <Image
    src="/images/Heavy-machinery-bg.jpg"
    alt="Heavy Machinery Background"
    fill
    priority
    className="object-cover -z-10"
    quality={90}
  />

  {/* Optional: Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40 -z-10" />

  <motion.h1
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
  >
    LANDING THE FUTURE <br /> IN HEAVY MACHINERY <br/>MANUFACTURING  
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 0.3 }}
    className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
  >
    Build more with real-time data. Put analytics to work and start driving more reliable, efficient operations for your heavy machinery manufacturing units.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.6 }}
    className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
  >
    <button  
      onClick={() => (window.location.href = "tel:+61478251187")} 
      className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3 transition-colors"
    >
      CALL NOW
    </button>
    <button 
      onClick={() => setDemoOpen(true)} 
      className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900 transition-colors"
    >
      BOOK A FREE TRIAL
    </button>
  </motion.div>
</div>

      
{/**  Optimize your capacity through performance analytics*/}

      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        

        <div className="flex flex-col lg:flex-row items-center gap-10">

            <motion.div
             initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}>
                <Image
           
            className="w-full sm:w-[400px] md:w-[900px]"
            src="/images/efficiency-report-laptop.png"
            alt=""
            width={800}
            height={800}
          />

            </motion.div>
          

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Optimize your capacity through performance analytics
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Address challenges such as shrinking operation margins, intricate global supply chains, and shorter production deadlines by leveraging real-time production data.Address challenges such as shrinking operation margins, intricate global supply chains, and shorter production deadlines by leveraging real-time production data.</li>
               <li className='mt-3'>Enhance production precision to align with elevated international quality standards.</li>
               <li className='mt-3'>Implement and deploy solutions rapidly, reducing the time and cost involved (days instead of months).</li>
                <li>Enhance job estimations to optimize inventory management strategies</li>                
             
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> setDemoOpen(true)} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
        </div>
      </div>

{/** Enhance efficiency through the application of AI and machine learning */}
   
   <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
      
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Enhance efficiency through the application of AI and machine learning
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Detect and rectify production bottlenecks instantly as they occur</li>
               <li className='mt-3'>Notify workers immediately when critical alarms arise, which could potentially result in production losses</li>
               <li className='mt-3'>Highlight alterations in part production, enabling operators to proactively address and rectify issues on their own.</li>
               
               
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> setDemoOpen(true)} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
           <motion.div
             initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
           >

            <Image
          
            className="w-full sm:w-[400px] md:w-[900px]"
            src="/images/lathe-tablet.png"
            alt=""
            width={800}
            height={800}
          />

           </motion.div>
              
        </div>
      </div>



{/** MACHINOX PRO APPLICATIONS*/}
      
      <MachinoxProApplication/>


{/**WE LET OUR RESULTS SPEAK FOR THEMSELVES. */}
<div className="bg-[#F8F8F8] px-5 md:px-10 lg:px-20 py-16">
      {/* Heading */}
      <motion.h1
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#444444] text-center md:text-left mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WE LET OUR RESULTS SPEAK FOR THEMSELVES.
      </motion.h1>

      {/* Container */}
      <motion.div
        className="bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{once:true}}
      >
        {/* Left Text */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#444444] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{once:true}}
        >
          THE DIGITAL  <br />TRANSFORMATION  <br/> OF HEAVY <br/> EQUIPMENT <br/>MANUFACTURERS
        </motion.h1>

        {/* Right Content */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{once:true}}
        >
          <p className="text-sm md:text-base text-[#444444]">
            Learn how Heavy Equipment Manufacturers can solve their largest challenges with Industrial IoT and discover practical solutions for rolling out successful IIoT implementations.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-5">
            <motion.button
              className="bg-purple-950 text-white px-8 py-2 hover:bg-gray-600 hover:text-black rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              READ THE BOOK
            </motion.button>
            
          </div>
        </motion.div>
      </motion.div>
    </div>

{/**industry solutions */}

      <IndustrySolutions/>
      
      <div className='py-20'>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {heavyMachineryQuestion.map((item, index) => (
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
      <ShopFloor/>
      
    </>
  )
}

export default Page
