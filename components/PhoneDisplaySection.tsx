"use client";

import Image from "next/image";

export default function PhoneDisplaySection() {
  return (
    <section className="relative w-screen h-[130vh] overflow-hidden bg-[#fafafe]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/phone.png"
          alt="Interlink Phone Showcase"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Optional: Add a subtle gradient overlay or decorative elements if needed for "professional" look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#fafafe]/20" />
    </section>
  );
}
