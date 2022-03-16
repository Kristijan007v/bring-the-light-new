import React from "react";
import header from "../img/header.jpg";
import Button from "./Buttons/Button";
import TextBox from "./TextBox";

export default function Header() {
  return (
    <div className="w-full lg:w-4/6 m-auto">
      <header className="text-white p-6">
        <h1 className="text-center heading h-center">
          Bring the light to Ukraine!
        </h1>
        <div className="flex flex-col lg:flex lg:flex-row gap-6 m-6 items-center justify-center">
          <img
            className="rounded-md shadow-xl w-full lg:w-80 h-auto"
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
