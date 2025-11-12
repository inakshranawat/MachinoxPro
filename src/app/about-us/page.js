'use client'

import React from 'react'
import {useRouter} from "next/navigation"
import { motion } from 'framer-motion'

import { useAppContext } from '@/context/useContext'




import Image from 'next/image'
import ShopFloor from '@/components/ShopFloor'



function Page() {
   const router =  useRouter()
  const { setDemoOpen } = useAppContext();
    return (
    <>
     <div className="relative w-full py-20 px-6 md:px-20 lg:px-32 overflow-hidden">
  {/* Background Image using Next.js Image */}
  <Image
    src="/images/company-about.jpg"
    alt="Company About Background"
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
    UNVEILING THE <br /> ROBATO SYSTEMS STORY
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 0.3 }}
    className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
  >
    Welcome to Robato Systems - Your Premier Destination for Cutting-Edge Machine Monitoring Solutions!
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.6 }}
    className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
  >
    <button 
      onClick={() => router.push('/contact-us')} 
      className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3 transition-colors"
    >
      Contact us
    </button>
    <button 
      onClick={() => (window.location.href = "tel:+61478251187")}  
      className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900 transition-colors"
    >
      Call Now
    </button>
  </motion.div>
</div>

      {/* Who Are We Section */}
      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        <p className="text-base sm:text-lg md:text-xl mb-10">
          At Robato Systems, we are dedicated to revolutionizing the way industries operate by providing state-of-the-art machine monitoring facilities. With a relentless pursuit of innovation and a commitment to excellence, we offer a comprehensive suite of services designed to optimize your production processes, enhance efficiency, and ensure seamless operations.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
             <Image
            
            className="w-full sm:w-[400px] md:w-[700px]"
            src="/images/CNC-tablet.png"
            alt=""
            width={900}
            height={900}
          />
          </motion.div>
          

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#444444] font-bold mt-5 lg:mt-0">
              WHO ARE WE
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              Robato Systems is a leading provider of advanced machine monitoring solutions, specializing in live machine monitoring and faulty machine detection. Founded on the principles of technological advancement and customer satisfaction, our team comprises industry experts, engineers, and visionaries who are passionate about empowering businesses with real-time insights and actionable data.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                Contact us
              </button>
              <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                Call Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="bg-[#F8F8F8] px-6 md:px-20 lg:px-30 py-10 md:py-20 mt-10 md:mt-15"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#444444]">
          WHY CHOOSE US
        </h1>

        <div className="grid gap-10 mt-10 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: "/images/CNC-dashboard-tilt.png",
              title: "INNOVATIVE TECHNOLOGY",
              text: "We harness the power of innovative technology to offer real-time machine monitoring solutions. Our team constantly explores the latest advancements, ensuring you stay ahead in the competitive industrial landscape.",
              link: "/production-monitoring",
            },
            {
              img: "/images/company-laptop-tilt.png",
              title: "CUSTOMIZED SOLUTIONS",
              text: "We understand that every business is unique. That's why we tailor our systems to suit your specific requirements, integrating seamlessly with your setup for a hassle-free experience.",
              link: "/condition-monitoring",
            },
            {
              img: "/images/alert-mobile-tilt.png",
              title: "RELIABLE FAULT DETECTION",
              text: "Our advanced detectors identify issues before escalation. Detecting anomalies in real time prevents costly breakdowns and optimizes maintenance schedules.",
              link: "/predictive-maintenance",
            },
            {
              img: "/images/company-tablet-tilt.png",
              title: "DEDICATED SUPPORT",
              text: "We believe in long-lasting relationships. Our dedicated team is available around the clock to assist with any queries or concerns.",
              link: "/process-optimization",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition-all duration-700 cursor-pointer"
              onClick={() => router.push(item.link)}
            >
              <Image src={item.img} alt="" className="w-full" width={800} height={800} />
              <h3 className="font-bold hover:underline text-lg md:text-xl mt-3">
                {item.title}
              </h3>
              <p className="hover:underline text-sm md:text-base mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Robato */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#444444] py-10 md:py-20 mt-10 md:mt-15">
          WHY CHOOSE ROBATO SYSTEMS?
        </h1>

        <div className="bg-white px-6 md:px-10 py-10 mx-auto shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <Image className="w-full sm:w-[400px] md:w-[500px]" width={800} height={800} src="/images/company-man.jpg" alt="" />
            <div className="flex flex-col">
              {[
                ["Innovation", "We stay ahead by investing in the latest technologies and methodologies, ensuring our clients have access to the most advanced solutions."],
                ["Customization", "Every business is unique; we offer customizable solutions tailored to your goals."],
                ["Reliability", "Dependable monitoring systems that deliver accurate data and insights consistently."],
                ["Expert Support", "Round-the-clock support for technical assistance, training, or guidance."],
                ["Continuous Improvement", "We evolve with industry demands, ensuring your investment is future-ready."],
              ].map(([title, desc], i) => (
                <p key={i} className="mt-5 text-sm sm:text-base md:text-lg max-w-[500px]">
                  <span className="text-lg font-bold text-[#444444]">{title}:</span> {desc}
                </p>
              ))}

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <button onClick={()=> setDemoOpen(true)} className="bg-purple-900 text-white px-6 py-2">
                  GET A QUOTE
                </button>
                <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="bg-purple-900 text-white px-6 py-2">
                  CALL NOW
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

     <ShopFloor/>
    </>
  )
}

export default Page
