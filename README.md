# TechStore

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

## Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammad-ishtiaque/TechStore.git
   cd TechStore
   ```

2. **Install pnpm globally** (if not already installed)
   ```bash
   npm install -g pnpm
   ```

3. **Install project dependencies**
   ```bash
   pnpm install
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
pnpm build
pnpm start
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking
```

