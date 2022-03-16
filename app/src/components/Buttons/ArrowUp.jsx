import React from "react";

export default function ArrowUp() {
  return (
    <div>
      <a
        href="#up"
        className="special-hover fixed bottom-8 right-6 cursor-pointer rounded-full bg-white p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  );
}
