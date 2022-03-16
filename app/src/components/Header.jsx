import React from "react";
import header from "../img/header.jpg";
import Button from "./Buttons/Button";

export default function Header() {
  return (
    <div className="m-auto w-full lg:w-4/6">
      <header className="p-6 text-white">
        <h1 className="heading h-center text-center">
          Bring the light to Ukraine!
        </h1>
        <div className="m-6 flex flex-col items-center justify-center gap-6 lg:flex lg:flex-row">
          <img
            className="h-auto w-full rounded-md shadow-xl lg:w-80"
            src={header}
            alt="Header image"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius
            laboriosam atque optio amet natus aut ipsa sed ex labore, dolorum
            voluptates assumenda enim nobis quod maxime. Voluptas, eos nobis.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button style={""} text={"MINT NOW"} />
        </div>
      </header>
    </div>
  );
}
