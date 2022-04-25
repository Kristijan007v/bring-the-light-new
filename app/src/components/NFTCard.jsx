import React from "react";
import Button from "./Buttons/Button";

export default function NFTCard({
  name,
  price,
  highlight,
  highlightText,
  style,
}) {
  return (
    <div className="">
      {highlight == "yes" && (
        <p className="mb-4 text-center text-2xl font-bold text-blue-600">
          {highlightText}
        </p>
      )}
      <div
        className={`h-full rounded-md bg-contain bg-center text-center ${style}`}
      >
        <div
          className={`flex h-full w-full flex-col gap-10 rounded-md border-2 bg-gray-700/50 pt-12 pb-12 text-3xl font-bold text-white backdrop-blur-md ${
            highlight ? "border-4 border-blue-600" : "mt-12"
          }`}
        >
          <p className="m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 fill-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
          <p>{name}</p>
          <p>{price} $</p>
        </div>
      </div>
      <Button style={"mt-4 w-full"} text={"Mint now"} />
    </div>
  );
}
