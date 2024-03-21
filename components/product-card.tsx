import React from "react";
import Image from "next/image";

export type Descriptions = {
  notes: string;
  process: string;
  variety: string;
  roast: string;
  region: string;
  altitude: string;
  weight: string;
};

export interface CardProps {
  image: string;
  title: string;
  price: string;
  description: Descriptions;
}

export default function ProductCard(CardProps: {
  image: string;
  title: string;
  description: Descriptions;
  price: string;
}) {
  return (
    <div
      className="my-[4vh] mx-10 max-w-[45rem]
    sm:w-[16rem] sm:h-[30rem]
    md:w-[18rem] md:h-[35rem]
    transform overflow-hidden rounded-[24px]
    bg-white dark:bg-slate-900 shadow-xl duration-300 hover:scale-105"
    >
      <Image
        className="w-full h-[67%] object-cover rounded-t-2xl"
        priority
        src={CardProps.image}
        height="384"
        width="384"
        alt="Picture of coffee product"
      />
      <div className="p-4">
        <h2 className="mb-2 
        text-md sm:text-lg md:text-xl
        font-semibold dark:text-white text-gray-900">
          {CardProps.title}
        </h2>
        <p className="mb-4 text-sm dark:text-gray-300 text-gray-700">
          Product description goes here.
        </p>
        <p className="text-base font-semibold text-gray-900 dark:text-white">
          {CardProps.price}
        </p>
      </div>
    </div>
  );
}
