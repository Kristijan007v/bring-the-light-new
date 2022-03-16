import React from "react";
import Button from "./Buttons/Button";

export default function NFTCard({ name, price, highlight, highlightText }) {
  return (
    <div>
      <div className="text-center">
        {highlight == "yes" && (
          <p className="mb-4 text-2xl font-bold text-blue-600">
            {highlightText}
          </p>
        )}
        <div
          className={`flex flex-col gap-10 rounded-md bg-gray-700 pt-12 pb-12 text-3xl font-bold text-white ${
            highlight ? "border-4 border-blue-600" : "mt-12"
          }`}
        >
          <p className="m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
          <p>{name}</p>
          <p>{price} $</p>
        </div>
        <Button style={"mt-4 w-full"} text={"Mint now"} />
      </div>
    </div>
  );
}
