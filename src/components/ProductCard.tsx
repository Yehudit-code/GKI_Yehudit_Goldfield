"use client"
import Link from "next/link";
import { Product } from "@/utils/api";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = () => {
    console.log(`Added product ${product.id} to cart.`);
  }
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="font-semibold line-clamp-1">{product.title}</h2>
      <p className="text-sm font-semibold mb-6 ">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
      <p className="text-gray-600">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="text-blue-600 text-sm font-medium"
      >
      View Details →
      </Link>
      <br></br>
      <button onClick={addToCart} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
