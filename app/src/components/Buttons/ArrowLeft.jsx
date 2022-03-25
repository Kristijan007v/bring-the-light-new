import React from "react";

export default function ArrowLeft({ onclick, disabled }) {
  return (
    <button
      onClick={onclick}
      className="special-hover cursor-pointer rounded-full bg-white p-4"
      aria-label="Gallery Arrow Left"
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width={4}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
