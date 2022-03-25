import React, { useEffect } from "react";
import Button from "./Buttons/Button";
import CloseButton from "./Buttons/CloseButton";
import { AnimatePresence, motion } from "framer-motion";
import { disableBodyScroll } from "body-scroll-lock";

export default function MenuMobile({ style, state, closeMenu, openContact }) {
  useEffect(() => {
    disableBodyScroll(document);
  });
  return (
    <AnimatePresence>
      <motion.div
        className={`cover flex flex-col items-center justify-center ${style} ${state}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Button text={"Connect Wallet"} style={"mb-8"} />
        <ul className="text-center">
          <li className="menu__item link-underline">
            <a href="">Mint</a>
          </li>
          <li className="menu__item link-underline">
            <a href="">Roadmap</a>
          </li>
          <li className="menu__item link-underline">
            <a href="">About</a>
          </li>
        </ul>
        <button className="menu__item link-underline" onClick={openContact}>
          Contact us
        </button>
        <CloseButton style={"mt-8"} closeMenu={closeMenu} />
      </motion.div>
    </AnimatePresence>
  );
}
