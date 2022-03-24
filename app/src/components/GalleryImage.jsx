import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryImage({ src, alt, style, onclick, onmouse }) {
  return (
    <div class="z-4 shrink-0 snap-center snap-always first:pl-8 last:pr-8 focus:border-4 focus:border-blue-600">
      <img
        className={`${style} shrink-0 rounded-lg bg-white object-cover shadow-xl hover:cursor-pointer`}
        src={src}
        alt={alt}
        loading={"lazy"}
        onClick={onclick}
      />
    </div>
  );
}
