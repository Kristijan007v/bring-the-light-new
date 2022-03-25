import React from "react";
import header from "../img/header.jpg";
import About from "./About";
import Button from "./Buttons/Button";
import NavBar from "./NavBar";
import TextBox from "./TextBox";

export default function Header() {
  return (
    <>
      <div className="h-screen w-full bg-opacity-10 bg-header-mobile-image bg-cover bg-fixed bg-center lg:bg-header-image">
        <div className="m-auto grid h-screen w-full grid-cols-1 content-center  gap-6 bg-gradient-to-r from-blue-600/60 to-yellow-500/60 p-6 text-white backdrop-blur-sm">
          <h1 className="h-center text-4xl font-bold lg:text-6xl">
            Volim svoju Moni !
          </h1>
          <div className="h-center rounded-md border-2 bg-gray-600/60 p-6 backdrop-blur-md">
            <p>
              Stunning NFT collection of Ukraine motives whose main goal is to
              help the people of Ukraine by donating money from Minted NFTs.
            </p>
          </div>
          <div class="scroll-down cursor-pointer">
            <a
              class="highlight flex justify-center text-base hover:no-underline lg:text-lg"
              href="#about"
              aria-label="Scroll down to find out more"
            >
              Scroll down to find out more
            </a>
            <a class="highlight" href="#about" aria-label="About me section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="m-auto mt-4 h-6 w-6 animate-bounce lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}
