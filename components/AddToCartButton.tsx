"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
  size?: "sm" | "lg"
}

export default function AddToCartButton({ product, size = "sm" }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const buttonClasses = size === "lg" ? "w-full py-3 px-6 text-lg" : "w-full py-2 px-4 text-sm"

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`${buttonClasses} bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:from-green-500 disabled:to-green-600 transform hover:scale-105 shadow-lg`}
    >
      {isAdded ? (
        <>
          <Check className="w-5 h-5" />
          <span>Added!</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  )
}
