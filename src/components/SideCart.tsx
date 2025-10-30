"use client";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";

export default function SideCart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart, getTotalItems } = useCartStore();

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="mb-4 font-bold">Close</button>
      <h2 className="text-xl font-bold mb-2">Cart ({getTotalItems()})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
              <div className="flex-1 mx-2">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200">-</button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">X</button>
            </div>
          ))}
          <Link href="/cart">
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Go to Full Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}