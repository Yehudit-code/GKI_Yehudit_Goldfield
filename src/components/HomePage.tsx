"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full relative h-[60vh] md:h-[80vh] lg:h-[90vh]">
      <Image
        src="/images/Homepage.jpg"
        alt="Jerusalem view"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-b-3xl shadow-lg"
        priority 
      />
    </div>
  );
}
