// products.js
// Professional product data for e-commerce website
// Categories: men's clothing, women's clothing, electronics, jewelery

const products = [
  {
    id: 1,
    title: "Classic Cotton Casual Shirt",
    price: 39.99,
    description: "Soft, breathable cotton fabric, ideal for both office and casual outings. Available in multiple sizes and colors.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 134 }
  },
  {
    id: 2,
    title: "Slim Fit Stretch Jeans",
    price: 59.99,
    description: "Modern slim fit jeans with stretch comfort, durable denim, and a stylish look that pairs well with any top.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
    rating: { rate: 4.2, count: 210 }
  },
  {
    id: 3,
    title: "Lightweight Sports Jacket",
    price: 79.99,
    description: "Versatile sports jacket with water-resistant finish, breathable mesh lining, perfect for outdoor activities and travel.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 89 }
  },
  {
    id: 4,
    title: "Men's Fleece Hoodie",
    price: 49.99,
    description: "Cozy hoodie with soft fleece interior, adjustable drawstring hood, and kangaroo pocket for everyday comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 176 }
  },
  {
    id: 5,
    title: "Tailored Formal Trousers",
    price: 69.99,
    description: "Tailored-fit trousers with wrinkle-free fabric, hook-and-bar closure, and side pockets for a polished office look.",
    category: "men's clothing",
    image: "https://plus.unsplash.com/premium_photo-1689977493146-ed929d07d97e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1721742731158-72e78eaa5df8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.1, count: 65 }
  },
  // Home & Kitchen (IDs 6-10) – replaces women's clothing
  {
    id: 6,
    title: "Long Floral Maxi Dress",
    price: 59.99,
    description: "Full‑length floral maxi dress with long sleeves and modest neckline.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1612029126596-f6fa7f1dde83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.6, count: 245 }
  },
  {
    id: 7,
    title: "Long Sleeve Silk Blouse",
    price: 44.99,
    description: "Elegant silk‑blend blouse with high neckline and long cuffed sleeves.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1718278868740-9351177c5768?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.4, count: 128 }
  },
  {
    id: 8,
    title: "Classic Long Denim Jacket",
    price: 74.99,
    description: "Longline denim jacket with full coverage, button‑up front, and chest pockets.",
    category: "women's clothing",
    image: "https://plus.unsplash.com/premium_photo-1739801197686-0a0e3684f1f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.5, count: 201 }
  },
  {
    id: 9,
    title: "High‑Waist Midi Skirt",
    price: 36.99,
    description: "Elegant midi skirt with high waist and modest below‑knee length.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1754639544919-ea4d1cff7dce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.2, count: 78 }
  },
  {
    id: 10,
    title: "Oversized Cable Knit Sweater",
    price: 58.99,
    description: "Cozy oversized sweater that falls below the hip, offering full coverage and warmth.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1687275168955-aacd8bba29cf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.3, count: 112 }
  },
  // sliderImage: "https://images.unsplash.com/photo-1434389676690-9c47d1d14a33?w=1200&h=600&fit=crop",
  {
    id: 11,
    title: "Noise Cancelling Wireless Headphones",
    price: 129.99,
    description: "Over-ear headphones with active noise cancellation, 30-hour battery life, and plush ear cushions for immersive sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    sliderImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
    rating: { rate: 4.8, count: 392 }
  },
  {
    id: 12,
    title: "Smartwatch Fitness Tracker",
    price: 199.99,
    description: "Water-resistant smartwatch with heart rate monitor, GPS, customizable watch faces, and smartphone notifications.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 287 }
  },
  {
    id: 13,
    title: "Ultrabook Laptop",
    price: 899.99,
    description: "Lightweight high-performance laptop featuring 16GB RAM, 512GB SSD, 14-inch Full HD display, and all-day battery.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    sliderImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=600&fit=crop",
    rating: { rate: 4.9, count: 143 }
  },
  {
    id: 14,
    title: "True Wireless Earbuds",
    price: 79.99,
    description: "Compact earbuds with charging case, Bluetooth 5.2, touch controls, and crystal clear sound with deep bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    sliderImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&h=600&fit=crop",
    rating: { rate: 4.4, count: 534 }
  },
  {
    id: 15,
    title: "5G Unlocked Smartphone",
    price: 699.99,
    description: "Latest model smartphone with triple camera system, 128GB storage, 6.5-inch edge-to-edge display, and all-day battery.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 224 }
  },
  {
    id: 16,
    title: "Solitaire Diamond Ring",
    price: 299.99,
    description: "Elegant 0.5 carat diamond solitaire ring set in 14k white gold, with a classic prong setting and brilliant sparkle.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
    rating: { rate: 4.9, count: 62 }
  },
  {
    id: 17,
    title: "Gold Pendant Necklace",
    price: 189.99,
    description: "18k gold plated necklace with a delicate pendant, featuring a sparkling cubic zirconia stone, perfect for gifting.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 98 }
  },
  {
    id: 18,
    title: "Sterling Silver Hoop Earrings",
    price: 49.99,
    description: "Hypoallergenic sterling silver hoop earrings with a polished finish, lightweight and comfortable for daily wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 157 }
  },
  {
    id: 19,
    title: "Freshwater Pearl Bracelet",
    price: 89.99,
    description: "Handcrafted bracelet with genuine freshwater pearls, adjustable clasp, adding a touch of elegance to any outfit.",
    category: "jewelery",
    image: "https://plus.unsplash.com/premium_photo-1681276170008-76db5a27dee9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.4, count: 83 }
  },
  {
    id: 20,
    title: "Men's Chronograph Watch",
    price: 149.99,
    description: "Stainless steel case and bracelet, analog quartz movement with date display, stopwatch function, and water resistance.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 111 }
  }
];

// For Node.js / CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}

// For ES6 modules (import/export)
export default products;