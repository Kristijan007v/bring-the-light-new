import React from "react";

export default function GalleryImage({ src, alt, style }) {
  return (
    <div class="z-4 snap-always snap-center shrink-0 first:pl-8 last:pr-8 focus:border-4 focus:border-blue-600">
      <img
        className={`${style} shrink-0 object-cover rounded-lg shadow-xl bg-white hover:cursor-pointer`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
