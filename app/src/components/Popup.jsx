import React from "react";
import Button from "./Buttons/Button";

export default function Popup({ heading, style, content, test }) {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-20 bg-gray-800/60 backdrop-blur-xl ${test}`}
    >
      <div className="flex items-center justify-center">
        <Button text={"CLOSE"} style={"m-6"} />
      </div>
      <div
        className={`m-auto w-full bg-gray-900 p-8 lg:w-2/4 lg:rounded-md ${style}`}
      >
        <p className="heading h-center">{heading}</p>
        {/* Insert desired content */}
        <div className="mt-2 p-4">{content}</div>
      </div>
    </div>
  );
}
