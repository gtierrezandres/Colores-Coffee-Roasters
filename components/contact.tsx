"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  //   const { ref } = useSectionInView("Contact");

  return (
    <div className="bg-gray-50 bg-opacity-95 rounded-[2rem] mx-10 mb-28 sm:mb-40 scroll-mt-24">
      <motion.section
        id="contact"
        //   ref={ref}
        className="mb-8 max-w-[45rem] text-center leading-7 mx-10"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Contact us</SectionHeading>

        <p className="text-gray-700">
          Please contact us directly at{" "}
          <a className="underline" href="mailto:aeloguti@gmail.com">
            hello@colores.co
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col justify-center"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg border-black transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg border-black p-4 transition-all"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}
