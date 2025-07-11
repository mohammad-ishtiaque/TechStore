import ProductGrid from "@/components/ProductGrid"
import { products } from "@/lib/data"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Welcome to TechStore</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Discover our amazing collection of premium products at unbeatable prices
        </p>
        <div className="mt-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
        </div>
      </div>
      <ProductGrid products={products} />
    </main>
  )
}
