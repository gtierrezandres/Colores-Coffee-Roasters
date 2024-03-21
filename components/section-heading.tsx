import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl md:text-4xl font-medium capitalize mt-8 mb-2 md:my-8 text-center text-black">
      {children}
    </h2>
  );
}
