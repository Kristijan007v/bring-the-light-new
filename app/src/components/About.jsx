import React from "react";
import header from "../img/header.jpg";
import Button from "./Buttons/Button";
import NavBar from "./NavBar";
import TextBox from "./TextBox";

export default function About() {
  return (
    <div className="h-auto w-full bg-opacity-10 bg-header-mobile-image bg-cover bg-fixed bg-center lg:h-screen lg:bg-header-image">
      <div className="m-auto grid h-auto w-full grid-cols-1 content-center  bg-gradient-to-r from-blue-600/60 to-yellow-500/60 p-6 text-white backdrop-blur-sm lg:h-screen">
        <h1 className="h-center heading-special">What you need to know</h1>
        <div className="m-auto mt-10 mb-10 block w-full gap-0 lg:grid lg:w-2/4 lg:grid-cols-3">
          <TextBox
            heading={"About project"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
            style={"m-2 col-span-1 lg:col-span-2 bg-white"}
            textColor={"text-gray-800"}
            specialHover="yes"
            type={"special"}
            bg={"bg-blur"}
            components={
              <Button
                link={"true"}
                href="#gallery"
                text={"Find out more"}
                center="yes"
                style={"mt-4"}
              />
            }
          />
          <TextBox
            heading={"Collection"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            style={"m-2 rotate-3"}
            components={
              <Button
                link={"true"}
                href="#gallery"
                text={"Gallery"}
                center="yes"
                style={"mt-4"}
              />
            }
            specialHover="yes"
            type={"special"}
            bg={"bg-blur"}
          />
          <TextBox
            specialHover="yes"
            heading={"How to mint?"}
            text={"Ovo je test."}
            style={"m-2 col-span-3"}
            type={"special"}
            bg={"bg-flag"}
          />
          {/* <TextBox
              heading={"Mint options"}
              text={"Lorem ipsum."}
              style={"m-2 col-span-2"}
              specialHover="yes"
            /> */}
        </div>
        <div className="flex items-center justify-center">
          <Button
            style={""}
            text={"MINT NOW"}
            link={"true"}
            href={"#mint-nfts"}
          />
        </div>
      </div>
    </div>
  );
}
