import React from "react";
import FlagLine from "./FlagLine";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import MenuButton from "./Buttons/MenuButton";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-gray-800/60 backdrop-blur-xl p-6 text-white flex justify-between">
        <span>BringTheLight 💡</span>
        <BrowserView>
          <ul className="flex gap-6">
            <li>
              <a className="link" href="#mint-nfts">
                Mint
              </a>
            </li>
            <li>
              <a className="link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </BrowserView>
        <MobileView>
          <MenuButton />
        </MobileView>
      </nav>
      <FlagLine />
    </div>
  );
}
