import React from "react";
import header from "../img/header.jpg";
import Button from "./Buttons/Button";

export default function Header() {
  return (
    <div>
      <header className="text-white p-6">
        <h1 className="text-center heading h-center">
          Bring the light to Ukraine!
        </h1>
        <div className="flex flex-col lg:flex lg:flex-row gap-6 m-6">
          <img
            className="rounded-md shadow-xl w-2/4"
            src={header}
            alt="Header image"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius
            laboriosam atque optio amet natus aut ipsa sed ex labore, dolorum
            voluptates assumenda enim nobis quod maxime. Voluptas, eos nobis.
          </p>
        </div>
        <Button style={""} text={"MINT NOW"} />
      </header>
    </div>
  );
}
