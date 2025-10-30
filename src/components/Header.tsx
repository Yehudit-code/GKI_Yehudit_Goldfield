// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi"; // אייקון בורגר

// export default function Header() {
//   const [cartCount, setCartCount] = useState(3);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useCartStore } from "../store/cartStore"; // ✅ חיבור לזוסטנד

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ שליפה מה־Zustand Store
  const cartCount = useCartStore((state) => state.getTotalItems());

  const categories = [
    { name: "Home", href: "/" },
    { name: "Mens", href: "/category/men's clothing" },
    { name: "Womens", href: "/category/women's clothing" },
    { name: "Jewelry", href: "/category/jewelery" },
    { name: "Electronics", href: "/category/electronics" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/shop_logo.png" alt="Logo" className="w-40 h-15" />
        </Link>

        <nav className="hidden md:flex gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`font-medium ${
                cat.name === "Home"
                  ? "text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/contact" className="font-medium text-gray-700 hover:text-yellow-500">
            Contact Us
          </Link>
        </nav>

        {/* עגלת קניות */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-gray-700 hover:text-yellow-500 font-medium"
          >
            Cart ({cartCount})
          </Link>

          {/* בורגר מובייל */}
          <button
            className="md:hidden text-gray-700 hover:text-yellow-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`font-medium ${
                cat.name === "Home"
                  ? "text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
