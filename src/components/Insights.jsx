'use client'
import React from 'react'
import { useAppContext } from '@/context/useContext';
import {motion , useMotionValue, useTransform,  useAnimation } from "framer-motion"
import { useRef , useEffect } from "react";
import Image from 'next/image';


const Insights = () => { 
    
    const {setDemoOpen} = useAppContext()

    const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const controls = useAnimation();

  // Rotation + Scale
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);
  const scale = useTransform(x, [0, 1], [1, 1.05]);

  // Dynamic shadow
  const boxShadow = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `${(latestX - 0.5) * 60}px ${(latestY - 0.5) * 60}px 40px rgba(0,0,0,0.8)`
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;
    x.set(posX);
    y.set(posY);

    // Stop idle animation while interacting
    controls.stop();
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    startIdleAnimation(); // Restart idle animation
  };

  // Idle motion effect
  const startIdleAnimation = () => {
    controls.start({
      rotateX: [6, -8, 6],
      rotateY: [-6, 8, -6],
      scale: [1, 1.03, 1],
      transition: {
        rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      },
    });
  };

  // Start idle animation initially
  useEffect(() => {
    startIdleAnimation();
  },[] );
  return (
     <>
       <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="py-8 sm:py-12 lg:py-16">
             <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-zinc-700 tracking-tight font-bold max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center mx-auto px-4'>
                THE ANALYTICS PLATFORM THAT EMPOWERS MANUFACTURERS TO ACHIEVE THE EXTRAORDINARY
             </h2>
          </div>

          {/* Image Section */}
          <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="w-full max-w-6xl mx-auto mb-8 sm:mb-12"
    >
        <motion.div  style={{
          rotateX,
          rotateY,
          scale,
          boxShadow,
        }}
        animate={controls}
        transition={{ type: "spring", stiffness: 100, damping: 12 }} >
             <Image
        src="/images/ANALYTICS-PLATFORM-that-empowers-manufacturers.png"
        alt="Analytics Platform"
        className="w-full h-auto rounded-2xl cursor-pointer"
        width={1600}
        height={1600}
       
      />

        </motion.div>
     
    </div>

          {/* Buttons Section */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16 lg:mb-20 px-4'>
              <button 
                onClick={()=> setDemoOpen(true)} 
                className='w-full sm:w-auto cursor-pointer text-purple-950 border border-purple-950 px-6 sm:px-8 py-3 hover:text-white hover:bg-purple-950 bg-transparent transition-colors duration-300 font-medium'
              >
                BOOK A FREE TRIAL
              </button>
              <button 
                  onClick={() => (window.location.href = "tel:+61 478 251 187")}
                className='w-full sm:w-auto border border-purple-950 px-6 sm:px-8 py-3 text-white hover:bg-gray-500 hover:text-black bg-purple-950 transition-colors duration-300 font-medium'
              >
                CALL NOW
              </button>
          </div>

          {/* Testimonial Section */}
          <div className='w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-20 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 bg-indigo-900 mt-12 sm:mt-16 lg:mt-20'>
             {/* Text Content */}
             <div className='flex-1 flex flex-col justify-center'>
                <h1 className='tracking-tight text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl max-w-full lg:max-w-lg'>
                  &quot;WE DOUBLED OUR CAPACITY WITH NO ADDITIONAL MACHINES.&quot;
                </h1>
                <motion.p 
                  className='text-white text-sm sm:text-base max-w-full lg:max-w-lg mt-4 sm:mt-6'
                  initial={{opacity:0 , x:-70}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{duration:1,delay:0.3}}
                >
                  <span className='font-bold'>MATT TOWNSEND</span>, DIRECTOR OF OPERATIONAL EXCELLENCE, PARAGON MEDICAL
                </motion.p>
             </div>

             {/* Image */}
             <motion.div className='flex-1 flex items-center justify-center lg:justify-end'
             
             initial={{opacity:0 , x:70}}
                 whileInView={{opacity:1, x:0}}
                 viewport={{once:true}}
                 transition={{duration:1,delay:0.2}}>
               <Image
                 className='w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg'
                 
                 src="/images/additional-machines.jpg" 
                 alt="additionalMachineImg" 
                 width={800}
                 height={800}
               />
             </motion.div>
          </div>
       </div>
     </>
  )
}

export default Insights