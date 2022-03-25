import React from "react";
import MyErrorBoundary from "../MyErrorBoundary";

export default function ArrowUp() {
  function GoUp() {
    window.scrollTo(0, 0);
  }

  return (
    <button
      onClick={GoUp}
      className="special-hover fixed bottom-4 right-2 cursor-pointer rounded-full bg-white p-3 lg:right-6 lg:bottom-6 lg:p-4"
      aria-label="Go to the top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={4}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
