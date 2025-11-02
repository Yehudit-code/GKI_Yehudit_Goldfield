"use client";
import { useCartStore } from "@/store/cartStore";
import { FaHeart } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const favorites = useCartStore((state) => state.favorites);
  const removeFromFavorites = useCartStore((state) => state.removeFromFavorites);

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[13vh]">
      <h1 className="col-span-full text-3xl font-bold flex items-center gap-2 mb-6">
        <FaHeart color="crimson" />
        Wishlist
      </h1>

      {favorites.length === 0 ? (
        <p className="col-span-full text-gray-500">No items in your wishlist.</p>
      ) : (
        favorites.map((product) => (
          <div key={product.id} className="relative border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-semibold line-clamp-1">{product.title}</h2>
            <p className="text-sm font-semibold mb-2">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <p className="text-gray-600 mb-2">${product.price}</p>

            {/* כפתור הסרה מהמועדפים */}
            <button
              onClick={() => removeFromFavorites(product.id)}
              className="absolute top-2 right-2 text-xl text-red-500 hover:text-red-600 transition"
            >
              <FaHeart />
            </button>

            {/* <ProductCard product={product} /> */}
          </div>
        ))
      )}
    </main>
  );
}