import React from "react";

export default function ArrowRight() {
  return (
    <span className="special-hover cursor-pointer rounded-full bg-white p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width={4}
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}
