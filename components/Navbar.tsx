"use client"

import Link from "next/link"
import { ShoppingCart, Store } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function Navbar() {
  const { items, toggleCart } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="glass-effect sticky top-0 z-40 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Store className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">TechStore</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white/90 hover:text-white font-medium transition-colors">
              Home
            </Link>

            <button
              onClick={toggleCart}
              className="relative flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
