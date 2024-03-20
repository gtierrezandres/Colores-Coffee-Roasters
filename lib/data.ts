import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const coffee_types = [
  {
    image: "/colores_pink.png",
    title: "IPA Pink Bourbon Coffee",
    description: {
      notes: "Rose Water, Blonde Ale, Orange Blossom",
      process: "Washed, IPA Fermented",
      variety: "Pink Bourbon",
      roast: "Light/Medium",
      region: "Calarcá, Quindio, Colombia",
      altitude: "1,500 meters",
      weight: "12 oz"
    },
    price: "$25.00 USD"
  },
  {
    image: "/colores_orange.png",
    title: "Peachy Sunrise Coffee",
    description: {
      notes: "Peach, Mango, Milk Chocolate",
      process: "Washed, Wine Yeast Fermented",
      variety: "Pink Bourbon and Caturra Blend",
      roast: "Medium",
      region: "Calarcá, Quindio, Colombia",
      altitude: "1,500 meters",
      weight: "12 oz"
    },
    price: "$25.00 USD"
  }
]