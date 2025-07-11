import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import CartSidebar from "@/components/CartSidebar"
import { CartProvider } from "@/contexts/CartContext"
import CheckoutModal from "@/components/CheckoutModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechStore - Premium Electronics & Gadgets",
  description:
    "Discover amazing products at unbeatable prices. Shop electronics, gadgets, and more with fast shipping.",
  keywords: "electronics, gadgets, shopping, ecommerce, tech store",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen relative">
            {/* Animated background shapes */}
            <div className="bg-shapes"></div>

            {/* Additional floating elements */}
            <div className="fixed top-20 left-10 w-16 h-16 bg-white/10 rounded-full floating-animation z-0"></div>
            <div className="fixed top-40 right-20 w-12 h-12 bg-white/10 rounded-full floating-animation-delayed z-0"></div>
            <div className="fixed bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full floating-animation z-0"></div>
            <div className="fixed bottom-20 right-1/3 w-8 h-8 bg-white/10 rounded-full floating-animation-delayed z-0"></div>

            <Navbar />
            <div className="relative z-10">{children}</div>
            <CartSidebar />
            <CheckoutModal />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
