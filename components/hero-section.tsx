"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";

export default function HeroSection() {
  const handleScroll = (section: string) => {
    const aboutSection = document.getElementById(section);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <motion.div className="min-h-screen w-full sm:mb-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.125 }}
      >
        {/* line height (leading) is used for setting the y boundaries of text */}
        <h1 className="font-custom text-[18vw] md:text-[20vh] text-[#F2BBE1] leading-none"> 
          COLORES
        </h1>
        <h2 className="text-[#F2BBE1]
        text-[1.7vw] tracking-[3vw] translate-x-[3vw]
        sm:text-[1.8vw] sm:tracking-[3.5vw] sm:translate-x-[3.5vw]
        md:text-[2.5vh] md:tracking-[3.5vh] md:translate-x-[3.7vh] font-bold">
          COFFEE ROASTERS
        </h2>
        <button className="bg-white text-black font-semibold text-lg rounded-3xl tracking-wider p-2 px-8 mt-[3vh]
        shadow-lg focus:scale-110 hover:scale-[1.2] active:scale-105 hover:bg-gray-300  cursor-pointer transition duration-[250ms] z-10
        "
        onClick={() => handleScroll("products")}
        >
            ORDER
        </button>
        <motion.div className="text-[4vh] text-white h-full w-full flex flex-col justify-end items-center absolute pb-10"
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.25 }}
        >
          <span
            onClick={() => handleScroll("about")}
            className="hover:scale-[1.5] inline-block cursor-pointer duration-[250ms]"
          >
            <HiOutlineArrowDown className="text-[4vh]" />
          </span>
        </motion.div>
      </motion.div>
  );
}
