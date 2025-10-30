"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function WishlistPage() {
  return (
    <>
       <> {console.log("Rendering Wishlist Page")}</>
      <main style={{ padding: 24 }}>
      <h1 style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <FaHeart color="crimson" />
        Wishlist
      </h1>
      <p>This is the wishlist page. </p>
      <p>This is the wishlist page. </p>
      <p>This is the wishlist page. </p>
      <p>This is the wishlist page. </p>
      <p>This is the wishlist page. </p>
    </main>
  </>
 );
}
