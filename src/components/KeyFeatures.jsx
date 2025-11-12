'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {Check} from 'lucide-react'
import Image from 'next/image'

const KeyFeatures = () => {
  return (
     <>
       <div className='w-full max-w-[1100px] mx-auto rounded-2xl mt-6 sm:mt-8 lg:mt-10 shadow-2xl mb-6 sm:mb-8 lg:mb-10 py-6 sm:py-8 lg:py-10 bg-[#ffffff] px-4 sm:px-6 lg:px-8'>
          <div>
            <h1 className='text-center font-bold text-2xl sm:text-3xl lg:text-4xl px-4'>
              Key Features of Our LED Counter Display Boards
            </h1>
            <div className='border-b w-full max-w-[900px] mt-4 lg:mt-5 mx-auto'></div>
            
            <Image
              className='w-full max-w-[1000px] bg-center bg-cover mx-auto mt-6 sm:mt-8 lg:mt-10 rounded-lg' 
              src="/images/LEDCounterDisplayBoards.webp" 
              alt="LED Counter Display" 
              width={800}
              height={800}
            />
            
            <p className='mt-6 sm:mt-8 lg:mt-10 mx-4 sm:mx-6 lg:mx-10 text-base sm:text-lg'>
              Our LED Counter Display Boards are designed with cutting-edge technology to provide clear, accurate, and visible production metrics. Key features include:
            </p>
             
            {/* Feature 1 */}
            <div className='mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 lg:mt-10'>
              <div className='flex gap-2 items-start'>
                <motion.div 
                  initial={{opacity:0, x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true}}
                  className='shrink-0'
                >
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />   
                </motion.div>
                <h3 className='font-bold text-xl sm:text-2xl'>Real-time Tracking</h3>
              </div>
              <p className='pl-8 sm:pl-9 lg:pl-10 mt-2 text-sm sm:text-base'>
                Instantly monitor production numbers and status, ensuring you have the most current data at all times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 lg:mt-10'>
              <div className='flex gap-2 items-start'>
                <motion.div 
                  initial={{opacity:0, x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.8, delay:0.2}}
                  viewport={{once:true}}
                  className='shrink-0'
                >
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />   
                </motion.div>
                <h3 className='font-bold text-xl sm:text-2xl'>Bright LED Display</h3>
              </div>
              <p className='pl-8 sm:pl-9 lg:pl-10 mt-2 text-sm sm:text-base'>
                Our LED Counter Display Boards offer high visibility, even from a distance, making them perfect for busy production floors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 lg:mt-10'>
              <div className='flex gap-2 items-start'>
                <motion.div 
                  initial={{opacity:0, x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.8, delay:0.4}}
                  viewport={{once:true}}
                  className='shrink-0'
                >
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />   
                </motion.div>
                <h3 className='font-bold text-xl sm:text-2xl'>Customizable Settings</h3>
              </div>
              <p className='pl-8 sm:pl-9 lg:pl-10 mt-2 text-sm sm:text-base'>
                Tailor the display settings to match your specific production requirements and metrics.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 lg:mt-10'>
              <div className='flex gap-2 items-start'>
                <motion.div 
                  initial={{opacity:0, x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.8, delay:0.6}}
                  viewport={{once:true}}
                  className='shrink-0'
                >
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />   
                </motion.div> 
                <h3 className='font-bold text-xl sm:text-2xl'>Durable and Reliable</h3>
              </div>
              <p className='pl-8 sm:pl-9 lg:pl-10 mt-2 text-sm sm:text-base'>
                Built to withstand harsh industrial environments, our displays ensure long-lasting performance and durability.
              </p>
            </div>

            {/* Feature 5 */}
            <div className='mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 lg:mt-10'>
              <div className='flex gap-2 items-start'>
                <motion.div 
                  initial={{opacity:0, x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.8, delay:0.8}}
                  viewport={{once:true}}
                  className='shrink-0'
                >
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-800" />   
                </motion.div> 
                <h3 className='font-bold text-xl sm:text-2xl'>Easy Integration</h3>
              </div>
              <p className='pl-8 sm:pl-9 lg:pl-10 mt-2 text-sm sm:text-base'>
                Seamlessly integrate our digital production counters with your existing systems for a unified operational overview.
              </p>
            </div>
          </div>
       </div>
     </>
  )
}

export default KeyFeatures