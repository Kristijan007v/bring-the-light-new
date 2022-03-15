import React from "react";

export default function Button({ text, style }) {
  return <button className={`btn ${style}`}>{text}</button>;
}
