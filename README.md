# TechStore - E-commerce Web Application

A modern, responsive e-commerce web application built with Next.js, React, and TypeScript. Features a clean product catalog, shopping cart functionality, and simulated checkout process.

## Features

- **Product Catalog**: Browse through a curated selection of tech products
- **Product Details**: View detailed information for each product
- **Shopping Cart**: Add/remove items with quantity controls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Checkout Process**: Simulated order placement with form validation
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component

## Pages & Features

### Home Page
- Grid layout of product cards
- Product images, names, prices, and ratings
- "Add to Cart" functionality
- Responsive design (1-4 columns based on screen size)

### Product Detail Page
- Full product information and description
- High-quality product images
- Star ratings and stock information
- Category and specifications
- Add to cart functionality

### Cart Sidebar
- Slide-in cart with all added products
- Quantity controls (increase/decrease)
- Remove items functionality
- Real-time total calculation
- Checkout button

### Checkout Modal
- Customer information form (Name, Email, Address)
- Order summary with itemized pricing
- Form validation
- Simulated order processing
- Success confirmation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <https://github.com/mohammad-ishtiaque/TechStore.git>
cd TechStore
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install -g pnpm
\`\`\`

3. Run the development server:
\`\`\`bash
pnpm install
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
pnpm next dev
\`\`\`

