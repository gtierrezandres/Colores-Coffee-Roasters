import React, { ComponentType } from 'react'
import { CardProps, Descriptions } from '@/components/product-card'
import { coffee_types } from '@/lib/data'

type ComponentProp = {
    Component: ComponentType<CardProps>
}

export default function SectionGroup({Component} : ComponentProp) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 bg-opacity-95 rounded-[2rem] h-[85vh] mx-10 mb-28 sm:mb-40 scroll-mt-24"
    id="products">
      {coffee_types.map((coffee) => (
        <Component
          key={coffee.title}
          title={coffee.title}
          image={coffee.image}
          price={coffee.price}
          description={coffee.description}
        />
      ))}
    </div>
  )
}
