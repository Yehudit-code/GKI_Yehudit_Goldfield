"use client";
import React from "react";

export default function PaymentConfirmation() {
  // כאן ניתן להציג פרטים סטטיים בלבד
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4 text-left">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <p><span className="font-medium">Order ID:</span> 12345</p>
          <p><span className="font-medium">Items:</span> 3</p>
          <p><span className="font-medium">Total:</span> $99.99</p>
          <p><span className="font-medium">Payment Method:</span> Credit Card</p>
        </div>

        <a href="/" className="inline-block mt-2 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Back to Shop
        </a>
      </div>
    </div>
  );
}