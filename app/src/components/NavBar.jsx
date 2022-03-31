import { AnimatePresence, motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import MenuButton from "./Buttons/MenuButton";

export default function NavBar({ openContact, openMenu }) {
  const [showNavbar, setshowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setshowNavbar(false);
      } else {
        // if scroll up showNavbar the navbar
        setshowNavbar(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {showNavbar && (
        <AnimatePresence>
          <motion.nav
            className={`sticky top-0 z-10 m-auto flex items-center justify-between bg-gray-800/80 p-4 text-white shadow-lg backdrop-blur-xl lg:p-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a className="" href="/">
              BringTheLight
            </a>
            <ul className="hidden space-x-6 lg:flex">
              <li>
                <a className="link-underline" href="#mint-nfts">
                  Mint
                </a>
              </li>
              <li>
                <a className="link-underline" href="#">
                  Roadmap
                </a>
              </li>
              <li>
                <a className="link-underline" href="#">
                  About
                </a>
              </li>
              <button className="link-underline" onClick={openContact}>
                Contact us
              </button>
            </ul>
            <button className="special-hover hidden rounded-md bg-white p-2 font-bold text-black lg:block">
              Connect Wallet
            </button>
            <MenuButton openMenu={openMenu} style={"block lg:hidden"} />
          </motion.nav>
        </AnimatePresence>
      )}
    </>
  );
}
