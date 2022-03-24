import React from "react";

export default function MenuButton({ openMenu, style }) {
  return (
    <button
      className={`${style} p-2 hover:rounded-full hover:bg-white hover:text-gray-900`}
      onClick={openMenu}
      aria-label="Open Menu Button"
    >
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
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
  );
}
