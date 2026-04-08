# NSK Enterprises — E-Commerce Web App

A modern, fully responsive e-commerce web application built with React 19 and Vite. Features a complete shopping experience including product browsing, cart management, checkout flow, user authentication, and a personal dashboard.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v6 |
| State Management | React Context API + useReducer |
| Forms & Validation | React Hook Form + Yup |
| Animations | Framer Motion |
| UI Components | Radix UI, Ant Design, Lucide React |
| Sliders | Swiper, Keen Slider |
| Notifications | Sonner |
| Icons | React Icons |
| Font | Outfit (local), Orbitron, Bebas Neue |

---

## Features

- **Product Catalog** — Browse 20 products across 4 categories: Men's Clothing, Women's Clothing, Electronics, and Jewellery
- **Category Filtering** — Filter products by category on the Shop page
- **Product Detail Page** — Full product info with similar product recommendations
- **Shopping Cart** — Slide-out cart sidebar with add, remove, and quantity controls; persisted to `localStorage`
- **Checkout** — Shipping info form, payment method selection, shipping options, coupon code support, and order summary with grand total calculation
- **Order Confirmation** — Animated confirmation flow with redirect to a Thank You page
- **User Authentication** — Sign up and log in with form validation; sessions persisted to `localStorage`
- **User Dashboard** — Overview, order history, and profile management
- **Dark Mode** — Full dark/light theme toggle using CSS variables and Tailwind's `class` strategy
- **Page Transitions** — Smooth animated page transitions via Framer Motion
- **Skeleton Loaders** — Product card and detail page skeletons for perceived performance
- **Responsive Design** — Mobile-first layout that works across all screen sizes
- **Toast Notifications** — Rich feedback toasts for cart actions, auth events, and errors

---

## Project Structure

```
src/
├── assets/          # Fonts, images, videos
├── components/
│   ├── auth/        # Auth-related components
│   ├── cart/        # Cart sidebar, buttons, reducer
│   ├── common/      # Shared UI (Loader, Skeleton, AnimatedPage, etc.)
│   ├── layout/      # Navbar, Header, Footer, sections
│   ├── product/     # Product card, sliders, detail skeleton
│   └── user dashboard/  # Dashboard sidebar, overview, orders, profile
├── contexts/
│   ├── AppContext.jsx    # Global state: products, filters, loading
│   ├── AuthContext.jsx   # Auth state: login, signup, current user
│   └── CartContext.jsx   # Cart state: items, totals, checkout logic
├── data/
│   └── products.js      # Local product data (20 products)
├── features/
│   ├── about/       # About page sections
│   ├── checkout/    # Checkout reducer
│   ├── contact/     # Contact form and info
│   ├── shop/        # Shop products display
│   └── thankYou/    # Thank you hero section
├── pages/           # Route-level page components
├── routes/
│   └── AppRoutes.jsx    # All route definitions
├── schemas/         # Yup validation schemas
└── styles/          # Component-specific CSS files
```

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/shop` | Shop |
| `/product/:id` | Product Detail |
| `/checkout` | Checkout |
| `/login&SignUp` | Login / Sign Up |
| `/about` | About |
| `/contact` | Contact |
| `/thankYou` | Thank You |
| `/user-dashboard/overview` | Dashboard — Overview |
| `/user-dashboard/orders` | Dashboard — Orders |
| `/user-dashboard/profile` | Dashboard — Profile |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nsk-enterprises.git
cd nsk-enterprises

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Available Coupon Codes

| Code | Discount |
|---|---|
| `SAVE10` | 10% off |
| `SAVE20` | 20% off |

> Orders over $100 automatically qualify for free standard shipping.

---

## Notes

- All data is stored locally — no backend or database is required.
- User accounts, cart state, and order history are persisted in `localStorage`.
- Authentication is client-side only and intended for demonstration purposes.
