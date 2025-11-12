import React from "react";
import { motion } from "framer-motion";
import { industry_auto_icon, industry_mach_icon, industry_med_icon, industry_oil_icon, industry_solutions_icon } from "@/Assets/assets";
import Image from "next/image";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: "/icons/industry-oil.svg",
      title: "PETROLEUM AND NATURAL GAS",
      points: [
        "The global oil and gas equipment and services sector is projected to achieve nearly 4% annual growth up to 2026.",
        "Manufacturers in this industry must leverage every available advantage to maintian the competetive edge .",
        "Staying ahead in the market requires constant innovation and strategic planning ",
        "Adapting to evolving market market dynamics is crucial for sustained growth and success in the oil and gap equipment and services sector"
      ]
    },
    {
      icon: "/icons/industry-auto.svg",
      title: "AUTOMOBILE INDUSTRY OR VEHICLES",
      points: [
        "Automotive suppliers should develop an IoT strategy that harnesses the existing expertise within their factory.",
        "An empowered IoT platform is essential for automotive suppliers to effectively utilize their machine data",
        "The time has come to unlock the potential of machine data within automotive manufacturing ",
        "Leaveraging the machine can lead to improved efficiency and innvotion in the automative supply chain"
      ]
    },
    
    {
      icon: "/icons/industry-mach.svg",
      title: "LARGE-SCALE EQUIPMENT",
      points: [
        "Heavy equipment manufacturers face challenges such as shrinking profit margins and tighter production schedules.",
        "Real-time production data can be a valuable resource to address these challenges ",
        "We offer support and solution to help heavy equipment manufactures navigate these industry pressures .",
        "Count on us to provide the tools and expertise needed to thrive in the evolving heavy equipment manufacturing landscape  "
      ]
    },
      {
      icon: "/icons/industry-med.svg",
      title: "HEALTHCARE EQUIPEMENT OR MEDICAL",
      points: [
        "Escalating competition and pricing pressures emphasize the Urgency for MedicaL Device manufacturers to excel in product development ",
        "Delivering to top-quality medical devices swiftly has become paramaount objective in this competetive landscape ",
        "Manufacturers must prioritize efficiency and innovation to maintain a competetive edge in the medical device industry",
        "Meeting the demand in fast-paced market is critical for success in the medical device sector amidst and heightened competition and price constraints.  "
      ]
    }
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="w-full bg-gray-300 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
        initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
             <Image
          src="/icons/industry-solutions.svg"
          alt="Industry Icon"
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mr-3"
          width={800}
          height={800}
          
        />

        </motion.div>
       
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          INDUSTRY SOLUTIONS
        </motion.h1>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-gray-600 rounded-xl p-6"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {/* Icon */}
            <motion.div
              className="mb-6"
              variants={iconVariants}
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
            >
              <Image
                src={industry.icon}
                alt={industry.title}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                width={800}
                height={800}
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 px-2"
              variants={textVariants}
            >
              {industry.title}
            </motion.h2>

            {/* Points */}
            <div className="space-y-4 text-left">
              {industry.points.map((point, pointIndex) => (
                <motion.div
                  key={pointIndex}
                  className="flex gap-3"
                  custom={pointIndex}
                  variants={pointVariants}
                >
                  <span className="text-purple-400 font-bold text-xl mt-1 shrink-0">
                    •
                  </span>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IndustrySolutions;
