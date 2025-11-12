'use client'
import React, { useState } from "react";
import { DataDriven, accordianimg1, companydashboardImg, machineoverviewImg, data, Organisation, ShopFloor, datadrvienImg } from "@/Assets/assets";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Accodian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleMouseEnter = (index, section) => {
    setOpenIndex(index);
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
    setActiveSection(null);
  };

  return (
    <>
      {/* Section 1 */}
      <div className="mt-6 sm:mt-20 px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-800 font-bold text-center mx-auto max-w-5xl leading-tight"
        >
          UNLOCK THE FULL POTENTIAL OF YOUR MANUFACTURING OPERATIONS
        </motion.h1>

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-16 lg:mt-20 gap-6 sm:gap-8 lg:gap-10">
          {/* Accordion List */}
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 h-[500px] overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="select-none"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(index, "section1")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between cursor-pointer bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-indigo-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 group">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-700 group-hover:text-indigo-900 transition-colors pr-3">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{
                      rotate:
                        activeSection === "section1" && openIndex === index
                          ? 45
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700 group-hover:text-indigo-700 shrink-0"
                  >
                    {activeSection === "section1" && openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSection === "section1" && openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-base text-gray-600 pl-4 pr-2 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center items-start mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full max-w-md lg:max-w-full h-auto shadow-[0_10px_40px_rgba(0,0,0,0.6)] rounded-xl"
              src="/images/accordion-image_outcomes_01.jpg"
              alt="Manufacturing Operations"
              width={1200}
              height={1200}
            />
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-800 font-bold text-center mx-auto max-w-5xl leading-tight"
        >
          COMPREHENSIVE PERSPECTIVE OF THE ENTIRE ORGANISATION
        </motion.h1>

        <div className="flex flex-col lg:flex-row-reverse mt-10 sm:mt-16 lg:mt-20 gap-6 sm:gap-8 lg:gap-10">
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 h-[500px] overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
            {Organisation.map((item, index) => (
              <motion.div
                key={index}
                className="select-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(index, "section2")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between uppercase cursor-pointer bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-indigo-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 group">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-zinc-700 group-hover:text-indigo-900 transition-colors pr-3">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{
                      rotate:
                        activeSection === "section2" && openIndex === index
                          ? 45
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700 group-hover:text-indigo-700 flex-shrink-0"
                  >
                    {activeSection === "section2" && openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSection === "section2" && openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-base text-gray-600 pl-4 pr-2 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 flex justify-center items-start mt-6 lg:mt-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full max-w-md lg:max-w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              src="/images/company_dashboard_image_default.jpg"
              alt="Organisation Dashboard"
              width={1200}
              height={1200}
            />
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-32 px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-800 font-bold text-center mx-auto max-w-5xl leading-tight"
        >
          ENHANCED PRODUCTION INSIGHTS - PERSONALIZED TO YOUR SHOP FLOOR
        </motion.h1>

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-16 lg:mt-20 gap-6 sm:gap-8 lg:gap-10">
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 h-[500px] overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
            {ShopFloor.map((item, index) => (
              <motion.div
                key={index}
                className="select-none"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(index, "section3")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center uppercase justify-between cursor-pointer bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-indigo-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 group">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-zinc-700 group-hover:text-indigo-900 transition-colors pr-3">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{
                      rotate:
                        activeSection === "section3" && openIndex === index
                          ? 45
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700 group-hover:text-indigo-700 shrink-0"
                  >
                    {activeSection === "section3" && openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSection === "section3" && openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-base text-gray-600 pl-4 pr-2 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 flex justify-center items-start mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full max-w-md lg:max-w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              src="/images/machine_overview_image_default.png"
              alt="Shop Floor Overview"
              width={1200}
              height={1200}
            />
          </motion.div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-zinc-800 font-bold text-center mx-auto max-w-5xl leading-tight"
        >
          A Modern Platform to Empower Your data-driven Business
        </motion.h1>

        <div className="flex flex-col lg:flex-row-reverse mt-10 sm:mt-16 lg:mt-20 gap-6 sm:gap-8 lg:gap-10">
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 h-[500px] overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
            {DataDriven.map((item, index) => (
              <motion.div
                key={index}
                className="select-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(index, "section4")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between uppercase cursor-pointer bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-indigo-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 group">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-zinc-700 group-hover:text-indigo-900 transition-colors pr-3">
                    {item.title}
                  </h2>
                  <motion.div
                    animate={{
                      rotate:
                        activeSection === "section4" && openIndex === index
                          ? 45
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-700 group-hover:text-indigo-700 shrink-0"
                  >
                    {activeSection === "section4" && openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeSection === "section4" && openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-base text-gray-600 pl-4 pr-2 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex-1 flex justify-center items-start mt-6 lg:mt-0"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full max-w-md lg:max-w-full h-auto shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl"
              src="/images/A%20MODERN%20PLATFORM%20TO%20EMPOWER%20YOUR%20DATA-DRIVEN%20BUSINESS.png"
              alt="Data-Driven Platform"
              width={1200}
              height={1200}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Accodian;
