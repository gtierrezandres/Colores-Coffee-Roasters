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
      <div className="my-[4vh] mx-14 
      w-72 h-[31.5rem] 
      transform overflow-hidden rounded-[24px]
      bg-white dark:bg-slate-900 shadow-xl duration-300 hover:scale-105">
        <Image
          className="w-full h-96 rounded-2xl"
          src={CardProps.image}
          height="384"
          width="384"
          alt="Picture of coffee product"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {CardProps.title}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            Product description goes here.
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {CardProps.price}
            </p>
          </div>
        </div>
      </div>
  );
}
