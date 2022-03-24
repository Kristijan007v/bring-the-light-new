import React from "react";

export default function TextBox({
  heading,
  text,
  bg,
  textColor,
  style,
  type,
  headingStyle,
  components,
  specialHover,
}) {
  return (
    <div
      className={`m-2 rounded-md ${
        specialHover == "yes" &&
        "textbox-hover cursor-pointer hover:bg-gray-800"
      } ${type == "special" ? bg : "bg-gray-800"} p-6 ${style} ${
        type == "info" && "flex gap-4"
      } ${type == "question" && "flex gap-4"} ${
        type == "warning" && "flex gap-4 bg-red-500"
      }`}
    >
      {type == "info" && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      )}
      {type == "question" && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      )}
      {type == "warning" && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      )}
      <p
        className={` ${
          bg == "bg-white" ? "heading-2-gray" : "heading-2"
        } mb-2 ${textColor} ${headingStyle}`}
      >
        {heading}
      </p>
      <p className={` ${bg == "bg-white" ? "p-gray" : "p-basic"} ${textColor}`}>
        {text}
      </p>
      {components}
    </div>
  );
}
