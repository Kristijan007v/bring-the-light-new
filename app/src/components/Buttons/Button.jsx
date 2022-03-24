import React from "react";

export default function Button({
  text,
  style,
  type,
  onclick,
  center,
  link,
  href,
  input,
}) {
  if (link === "true") {
    return (
      <a
        href={href}
        className={`btn ${
          center == "yes" && "flex items-center justify-center"
        } ${style}`}
        onClick={onclick}
        type={type}
      >
        {text}
      </a>
    );
  } else if (input === "true") {
    return (
      <input
        className={`btn ${
          center == "yes" && "flex items-center justify-center"
        } ${style}`}
        type="submit"
        value={text}
      />
    );
  } else {
    return (
      <button
        className={`btn ${
          center == "yes" && "flex items-center justify-center"
        } ${style}`}
        onClick={onclick}
        type={type}
      >
        {text}
      </button>
    );
  }
}
