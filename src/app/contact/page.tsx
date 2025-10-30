"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
       <> {console.log("Rendering Contact Page")}</>
      <main style={{ padding: 24 }}>
      <h1 style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <FaHeart color="crimson" />
        Contact
      </h1>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
      <p>This is the contact page. </p>
    </main>
  </>
 );
}
