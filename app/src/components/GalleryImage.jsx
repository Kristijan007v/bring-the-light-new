import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GalleryImage({ src, alt, style, onclick }) {
  const [isLoading, setIsLoading] = useState(true);

  const [image] = useState(false);

  return (
    <>
      <AnimatePresence>
        <motion.div
          class="z-4 shrink-0 snap-center snap-always first:pl-8 last:pr-8 focus:border-4 focus:border-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            className={`${style} shrink-0 rounded-lg bg-white object-cover shadow-xl hover:cursor-pointer`}
            src={src}
            alt={alt}
            loading={"lazy"}
            onClick={onclick}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
