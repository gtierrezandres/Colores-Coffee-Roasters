"use client";

import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

export default function SectionDivider() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div className="text-[4vh] text-[#F2BBE1] h-full w-full flex flex-col justify-end items-center absolute pb-10"
    initial={{ opacity: 0, y: -100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.25 }}
    >
      <span
        onClick={handleScroll}
        className="hover:scale-125 inline-block cursor-pointer duration-[250ms]"
      >
        <HiOutlineArrowDown className="text-[4vh]" />
      </span>
    </motion.div>
  );
}
