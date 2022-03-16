import React from "react";

export default function Button({ text, style, type, onclick }) {
  return (
    <button className={`btn ${style}`} onClick={onclick} type={type}>
      {text}
    </button>
  );
}
