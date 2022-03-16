import React from "react";
import Button from "./Buttons/Button";

export default function Popup({ heading, style, content, test }) {
  return (
    <div
      className={`z-20 fixed bg-gray-800/60 backdrop-blur-xl top-0 right-0 bottom-0 left-0 ${test}`}
    >
      <div className="flex items-center justify-center">
        <Button text={"CLOSE"} style={"m-6"} />
      </div>
      <div
        className={`bg-gray-900 lg:rounded-md p-8 w-full lg:w-2/4 m-auto ${style}`}
      >
        <p className="heading h-center">{heading}</p>
        {/* Insert desired content */}
        <div className="p-4 mt-2">{content}</div>
      </div>
    </div>
  );
}
