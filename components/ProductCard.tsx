import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import AddToCartButton from "./AddToCartButton"
import { Star } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="glass-effect rounded-xl overflow-hidden glow-on-hover border border-white/20">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square relative bg-white/10 cursor-pointer">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Hot
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-white mb-2 hover:text-blue-200 transition-colors cursor-pointer line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-current" : "text-white/30"}`}
              />
            ))}
          </div>
          <span className="text-sm text-white/70 ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
          <span className="text-sm text-white/70 bg-white/10 px-2 py-1 rounded-full">{product.stock} left</span>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
