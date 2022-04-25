import { motion } from "framer-motion";
import React from "react";
import { disableBodyScroll } from "body-scroll-lock";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 left-0 z-20 flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-xl hover:cursor-pointer md:flex-row lg:flex-row xl:flex-col"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
