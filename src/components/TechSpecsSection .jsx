import { motion } from "framer-motion";
import Image from "next/image";


const TechSpecsSection = () => {
  // Animation variants for bottom icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-8 md:p-16"
      style={{
        backgroundImage:
          "url('/images/bgmai.png')"
      }}
    >
      {/* Top Row: Text + Laptop */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 whitespace-nowrap">
            TECHNICAL SPECIFICATIONS
          </h2>
        </div>

        {/* Laptop opens when scrolled into view */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          style={{ perspective: 1400 }}
        >
            <motion.div
             initial={{ rotateX: -90, scaleY: 0.2, opacity: 0 }}
            whileInView={{ rotateX: 0, scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}>

            </motion.div>
          <Image
            src="/images/downtime-laptop.png"
            alt="Laptop"
            className="w-[500px] h-[450px] object-contain origin-bottom rounded-lg"
            width={800}
            height={800}
           
          />
        </motion.div>
      </div>

      {/* --- Bottom Icons (Row 1) --- */}
      <motion.div
        className="flex items-center gap-8 justify-between mt-30 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: "/icons/downtime-icon.svg",
            title: "DISPLAY",
            desc: "High-resolution LED screen for clear visibility in various lighting conditions",
          },
          {
            src: "/icons/CONNECTIVITY.png",
            title: "CONNECTIVITY",
            desc: "Ethernet, Wi-Fi, and Bluetooth connectivity options for versatile network integration.",
          },
          {
            src: "/icons/COMPATIBILITY.png",
            title: "COMPATIBILITY",
            desc: "Compatible with various industrial protocols, ensuring interoperability with diverse equipment.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center max-w-sm"
          >
            <Image className="w-15 mx-auto" width={100} height={100} src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-2xl mt-5">
              {item.title}
            </h2>
            <p className="font-semibold">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Bottom Icons (Row 2) --- */}
      <motion.div
        className="flex items-center mt-10 gap-8 justify-between flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: "/icons/COMPATIBILITY.png",
            title: "POWER",
            desc: "High-resolution LED screen for clear visibility in various lighting conditions",
          },
          {
            src: "/icons/OPERATING-ENVIRONMENT.png",
            title: "OPERATING ENVIRONMENT",
            desc: "Ethernet, Wi-Fi, and Bluetooth connectivity options for versatile network integration.",
          },
          {
            src: "/icons/DATA-SECURITY.png",
            title: "DATA SECURITY",
            desc: "Compatible with various industrial protocols, ensuring interoperability with diverse equipment.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center max-w-sm"
          >
            <Image className="w-15 mx-auto" width={100} height={100} src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-2xl mt-5">
              {item.title}
            </h2>
            <p className="font-semibold">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSpecsSection;
