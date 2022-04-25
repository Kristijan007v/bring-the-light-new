import React from "react";
import About from "./About";
import Button from "./Buttons/Button";
import TextBox from "./TextBox";

export default function Header() {
  return (
    <div className="m-auto w-full xl:pt-16 xl:pb-16">
      <div className="grid grid-cols-none items-center justify-center gap-0 xl:grid-cols-2 xl:gap-8">
        <div className="m-0 flex  flex-col items-center justify-center lg:m-6">
          <h1 className="mt-8 hidden text-left text-3xl font-bold text-white lg:block lg:text-center">
            Bring The Light to Ukraine!
          </h1>
          <img
            className="mt-0 w-full rounded-none lg:mt-6 lg:rounded-xl"
            src="/header1.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="p-6 xl:p-0">
          <h1 className="mt-8 mb-8 block text-left text-3xl font-bold text-white lg:hidden lg:text-center">
            Bring The Light to Ukraine!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextBox
              heading={"About Project"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              button={"yes"}
              buttonText={"Roadmap"}
            />
            <TextBox
              heading={"Collection"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              button={"yes"}
              buttonText={"Gallery"}
            />
            <TextBox
              style={"md:col-span-2"}
              heading={"How to mint?"}
              text="Ovo je test."
              button={"yes"}
              buttonText={"Mint now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
