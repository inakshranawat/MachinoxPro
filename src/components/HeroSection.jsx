'use client'
import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/useContext";

import Image from "next/image";

const HeroSection = () => {
  
  const { setDemoOpen } = useAppContext();

  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-20 px-2 lg:px-10 text-center lg:text-left">
          <motion.h1
            className="text-zinc-800 tracking-tighter font-bold text-4xl sm:text-5xl lg:text-6xl"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.1), 4px 4px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            ROBATO SYSTEMS:
          </motion.h1>

          <motion.h1
            className="text-zinc-800 tracking-tighter font-bold text-4xl sm:text-5xl lg:text-6xl mt-3"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.1), 4px 4px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            whileHover={{ rotateX: 5, rotateY: -5 }}
          >
            <span className="text-purple-950">PIONEERING</span> <br /> INDUSTRY{" "}
            <br /> AUTOMATION <br /> EXCELLENCE
          </motion.h1>

          <motion.p
            className="mt-5 text-lg sm:text-xl md:text-2xl w-full lg:w-[600px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          >
            Introducing the future of manufacturing analytics. Enhance asset
            uptime and boost production capacity.
          </motion.p>

          <motion.div
            className="mt-7 gap-5 flex flex-col sm:flex-row justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
          >
          <button
  onClick={() => {
    console.log("Book a Demo button clicked ✅");
    setDemoOpen(true);
  }}
  className="relative z-50 cursor-pointer text-purple-950 border px-5 py-2 hover:text-white hover:bg-purple-950 bg-transparent w-full sm:w-auto"
>
  BOOK A FREE TRIAL
</button>
            <button
                onClick={() => (window.location.href = "tel:+61 478 251 187")}
              className="border px-5 py-2 text-white hover:bg-gray-500 hover:text-black bg-purple-950 w-full sm:w-auto"
            >
               CALL NOW
            </button>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        >
            
                <Image
            
            
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] rounded-2xl"
            width={1200}
            height={1200}
            src="/images/machinoxpro.png"
            alt="Machino Illustration"
          />

          
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
