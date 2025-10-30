"use client";
import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalItems } = useCartStore();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
              <div className="flex-1 mx-4">
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
          <h2 className="text-xl font-bold mt-4">Total: ${getTotalItems().toFixed(2)}</h2>
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded">Checkout</button>
          <button onClick={clearCart} className="mt-2 w-full bg-gray-500 text-white py-2 rounded">Clear Cart</button>
        </>
      )}
    </div>
  );
}
