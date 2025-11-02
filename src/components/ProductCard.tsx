// "use client";
// import Link from "next/link";
// import { Product } from "@/utils/api";
// import { useCartStore } from "@/store/cartStore"; // ✅ חיבור לזוסטנד
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useState } from "react";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const addToCart = useCartStore((state) => state.addToCart);
//   const [isFav, setIsFav] = useState(false);

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   return (
//     <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-48 object-contain mb-4"
//       />
//       <h2 className="font-semibold line-clamp-1">{product.title}</h2>
//       <p className="text-sm font-semibold mb-6">
//         {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
//       </p>
//       <p className="text-gray-600">${product.price}</p>

//       <Link
//         href={`/products/${product.id}`}
//         className="text-blue-600 text-sm font-medium"
//       >
//         View Details →
//       </Link>

//       <br />
//       <button
//         onClick={handleAddToCart}
//         className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 mt-2"
//       >
//         Add to Cart
//       </button>
//       <button
//       onClick={() => setIsFav(!isFav)}
//       className="text-xl transition-colors duration-300 pd-2 ml-4"
//     >
//       {isFav ? (
//         <FaHeart className="text-red-500" />
//       ) : (
//         <FaRegHeart className="text-gray-400 hover:text-yellow-400" />
//       )}
//     </button>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { Product } from "@/utils/api";
import { useCartStore } from "@/store/cartStore"; // ✅ חיבור לזוסטנד
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  // ✅ משתנים ופונקציות למועדפים
  const favorites = useCartStore((state) => state.favorites);
  const addToFavorites = useCartStore((state) => state.addToFavorites);
  const removeFromFavorites = useCartStore((state) => state.removeFromFavorites);

  // ✅ בדיקה אם המוצר כבר במועדפים
  const isFav = favorites.some((p) => p.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleFav = () => {
    if (isFav) removeFromFavorites(product.id);
    else addToFavorites(product);
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="font-semibold line-clamp-1">{product.title}</h2>
      <p className="text-sm font-semibold mb-6">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>
      <p className="text-gray-600">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="text-blue-600 text-sm font-medium"
      >
        View Details →
      </Link>

      <div className="flex items-center mt-2 gap-2">
        <button
          onClick={handleAddToCart}
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
        >
          Add to Cart
        </button>

        {/* ✅ כפתור מועדפים */}
        <button
          onClick={handleFav}
          className="text-xl transition-colors duration-300"
        >
          {isFav ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-yellow-400" />
          )}
        </button>
      </div>
    </div>
  );
}
