import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-medium capitalize my-8 text-center text-black">
      {children}
    </h2>
  );
}
