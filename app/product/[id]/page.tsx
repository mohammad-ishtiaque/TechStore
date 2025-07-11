import { notFound } from "next/navigation"
import Image from "next/image"
import { products } from "@/lib/data"
import AddToCartButton from "@/components/AddToCartButton"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-white hover:text-blue-200 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square relative glass-effect rounded-xl overflow-hidden border border-white/20">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 glass-effect p-6 rounded-xl border border-white/20">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? "text-yellow-400 fill-current" : "text-white/30"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/70">({product.rating}/5)</span>
            </div>
          </div>

          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-white/90 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-white/80">Category:</span>
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                {product.category}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-white/80">Stock:</span>
              <span className="text-green-400 font-medium">{product.stock} available</span>
            </div>
          </div>

          <AddToCartButton product={product} size="lg" />
        </div>
      </div>
    </main>
  )
}
