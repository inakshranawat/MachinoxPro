import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UseCases() {
  const useCases = [
    {
      icon: "/icons/MANUFACTURING-FACILITIES.png",
      title: "MANUFACTURING FACILITIES ",
      description: "Monitor and optimize OEE metrics in real-time, enabling efficient production scheduling and resource allocation"
    },
    {
      icon: "/icons/QUALITY-CONTROL.png",
      title: "QUALITY CONTROL",
      description: "Identify and rectify quality issues promptly, reducing defects and enhancing overall product quality."
    },
    {
      icon: "/icons/downtime-icon.svg",
      title: "DOWNTIME ANALYSIS",
      description: "Analyze downtime causes to implement preventive maintenance measures, minimizing production disruptions."
    },
    {
      icon: "/icons/immediate-value.svg",
      title: "PERFORMANCE",
      description: "Evaluate the performance of individual machines or entire production lines, enabling data-driven decision-making for process improvements."
    },
    {
      icon: "/icons/smarter-data.svg",
      title: "PRODUCTION PLANNING",
      description: "Utilize historical OEE data to forecast production trends and plan future manufacturing activities effectively."
    },
    {
      icon: "/icons/predictive-icon.svg",
      title: "CONTINUOUS IMPROVEMENT",
      description: "Facilitate continuous improvement initiatives by providing actionable insights based on OEE data analysis, driving operational excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
        {/* Diagonal Section */}
        <div className="relative h-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
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
        <div className="space-y-8 lg:space-y-12 py-12 lg:py-0">
          {/* Main Heading */}
          <motion.h1 
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center lg:text-left mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            USE CASES OF THE PRODUCTION COUNTER DISPLAY
          </motion.h1>

          {useCases.map((useCase, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Icon - animate from left */}
              <motion.div
                className="min-w-[60px] h-[60px] bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:scale-110 cursor-pointer flex-shrink-0"
              
              >
                <Image
                  src={useCase.icon} 
                  alt={useCase.title} 
                  className="w-10 h-10 object-contain" 
                  width={100}
                  height={100}
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
                <h2 className="text-white font-black text-lg lg:text-xl mb-2 tracking-wide">
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
  );
}
