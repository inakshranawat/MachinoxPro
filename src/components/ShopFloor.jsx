import React from 'react'
import { useAppContext } from '@/context/useContext'
import {motion} from "framer-motion"

const ShopFloor = () => {
    const {setDemoOpen} =  useAppContext()
  return (
    <>
     
      {/* Ready To Connect Section */}
      <div className="w-full py-16 md:py-20 bg-[#430099] px-6 md:px-20 lg:px-50">
        <div className="py-10">
          <motion.h1
            className="text-white tracking-[-0.01em] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            READY TO CONNECT
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-bold mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            YOUR SHOP FLOOR
          </motion.h1>
        </div>

        <div className="mt-6">
          <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-white text-indigo-950 px-6 py-3 md:py-4">
            CALL NOW
          </button>
        </div>

        <p className="text-white mt-3 text-sm md:text-base">
          Want to see MachinoX Pro in action first?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setDemoOpen(true)}
          >
            BOOK FREE TRIAL
          </span>
        </p>
      </div>
     
    </>
  )
}

export default ShopFloor
