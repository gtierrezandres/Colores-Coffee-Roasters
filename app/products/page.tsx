import React from 'react'
import ProductCard from '@/components/product-card'
import { coffee_types } from '@/lib/data'

export default function ProductsHome() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-start w-full">
        {
            coffee_types.map(coffee => <ProductCard key={coffee.title}
            title={coffee.title}
            image={coffee.image}
            price={coffee.price}
            description={coffee.description}
            />)
        }
    </div>
  )
}