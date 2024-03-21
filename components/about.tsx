"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="bg-gray-50 bg-opacity-95 rounded-[2rem] mx-10 mb-28 sm:mb-40 scroll-mt-24"
      id="about"
    >
      <motion.section
        className="max-w-[45rem] mx-7 md:mx-10 mb-8 text-center md:leading-8 leading-6 text-black font-medium text-sm md:text-base"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading>About us</SectionHeading>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum tellus eget odio tincidunt, ac ullamcorper elit tincidunt.
          Quisque tempus ipsum eget ipsum sollicitudin, vel malesuada quam
          sagittis. Maecenas feugiat leo non mauris dapibus, eget interdum
          ligula fermentum. Nulla facilisi. Duis lacinia arcu vel felis pharetra
          ullamcorper. Cras eget nunc sit amet augue posuere suscipit. Sed
          fermentum nunc vitae purus mattis ultrices.
        </p>

        <p>
          Donec efficitur sapien sed ante tristique, at finibus quam eleifend.
          Nulla facilisi. Duis convallis dapibus odio, sit amet rhoncus nunc
          molestie id. Nam consectetur, justo vel ullamcorper tincidunt, nisi
          sapien condimentum leo, non facilisis metus felis a enim. In hac
          habitasse platea dictumst. Fusce accumsan ultricies erat, ac commodo
          nulla ultricies id. Vestibulum a purus in metus vestibulum
          ullamcorper. Integer interdum, ante vitae cursus tempus, mi odio
          ullamcorper risus, a consequat ligula magna id odio. Maecenas
          tincidunt sodales orci, non venenatis libero rutrum quis.
        </p>
      </motion.section>
    </div>
  );
}
