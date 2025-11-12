import React from 'react'
import { motion } from 'framer-motion'
import { cncDashboardTiltImg,companyLaptopTiltImg,companyTabletTiltImg,alertmobiletitleImg } from '@/Assets/assets'
import Image from 'next/image'

const MachinoxProApplication = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  // Vibration keyframes for text
  const vibrate = {
    hover: {
      x: [0, -3, 3, -3, 3, 0],
      transition: { duration: 0.4, repeat: 1 },
    },
  }

  return (
    <div className="bg-[#F8F8F8] py-16 px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* Header */}
      <motion.div
        className="mb-12 text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="font-bold text-3xl md:text-4xl text-[#444444] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          MACHINOX PRO APPLICATIONS
        </motion.h1>
        <motion.p
          className="font-bold text-xl md:text-2xl text-[#444444]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          USE CASES
        </motion.p>
      </motion.div>

      {/* Use Cases Grid */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            img: "/images/CNC-dashboard-tilt.png",
            title: 'SUPERVISION OF MANUFACTURING',
            points: [
              'Enhance performance through real-time production visibility.',
              'Utilize the OEE (Overall Equipment Efficiency) for operational efficiency.',
              'Analyze the downtime for improved productivity.',
              'Generate historical reports for data-driven decision-making.',
            ],
          },
          {
            img: "/images/company-laptop-tilt.png",
            title: 'MONITORING THE STATE OR STATUS',
            points: [
              'Enhance maintenance managers and process engineers with real-time monitoring tools.',
              'Support machine continuous operation through real-time monitoring.',
              'Enable proactive maintenance through real-time insights.',
              'Facilitate the machine uptime with real-time monitoring capabilities.',
            ],
          },
          {
            img: "/images/alert-mobile-tilt.png",
            title: 'STREAMLINING PROCESS',
            points: [
              'Diagnose and predict potential failures on manufacturing equipment without the need for sensors.',
              'Proactively identify and mitigate diverse failure types in your production machinery.',
              'Enhance equipment reliability by anticipating and preventing failures.',
              'Achieve failure avoidance through advanced diagnostic and predictive techniques, sensor-free.',
            ],
          },
          {
            img: "/images/company-tablet-tilt.png",
            title: 'PROCESS OPTIMIZATION',
            points: [
              'Provide your workforce with workflows that translate insights into actionable steps for process improvements.',
              'Enable employees to harness insights for driving meaningful process optimizations.',
              'Empower your team to implement actionable changes based on valuable insights.',
              'Transform data-driven insights into practical and effective process enhancements through streamlined workflows.',
            ],
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start cursor-pointer"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
                <Image
              src={card.img}
              alt={card.title}
              className="w-full h-auto mb-4 rounded-md"
              width={800}
              height={800}
              
            />

            </motion.div>
            
            {/* Text vibrates on hover */}
            <motion.h2
              className="font-bold text-xl mb-3 text-[#2d2d2d]"
              variants={vibrate}
              whileHover="hover"
            >
              {card.title}
            </motion.h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mb-4">
              {card.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="text-[#444]"
                  variants={vibrate}
                  whileHover="hover"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <motion.button
             onClick={() => (window.location.href = "tel:+61 478 251 187")}
              whileHover={{ scale: 1.07, backgroundColor: '#4B0082', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-950 text-white px-6 py-2 rounded-md hover:bg-gray-600 hover:text-black"
            >
              CALL NOW
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MachinoxProApplication
