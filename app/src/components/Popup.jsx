import { disableBodyScroll } from "body-scroll-lock";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Backdrop from "./Backdrop";
import Button from "./Buttons/Button";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Popup({ heading, style, content, closePopup }) {
  useEffect(() => {
    disableBodyScroll(document);
  });

  return (
    <Backdrop onClick={closePopup}>
      <div className="flex h-screen items-center justify-center">
        <Button text={"CLOSE"} style={"m-6"} onclick={closePopup} />
        {/* <button onClick={closePopup}>Close</button> */}
      </div>
      <motion.div
        className={`m-auto h-screen w-full bg-gray-900 p-8 lg:w-2/4 lg:rounded-md ${style}`}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="heading h-center">{heading}</p>
        {/* Insert desired content */}
        <div className="mt-4 p-0 lg:p-4">{content}</div>
      </motion.div>
    </Backdrop>
  );
}
