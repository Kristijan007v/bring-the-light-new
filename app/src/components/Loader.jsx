import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Backdrop from "./Backdrop";
import { disableBodyScroll } from "body-scroll-lock";

export default function Loader() {
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState(45);
  const [type, setType] = useState("default");

  useEffect(() => {
    disableBodyScroll(document);
  });

  if (type === "default") {
    return (
      <div className="flex items-center justify-center p-4">
        <Backdrop>
          <ClipLoader color={color} size={size} />
        </Backdrop>
      </div>
    );
  } else if (type === "custom") {
    return (
      <div className="flex items-center justify-center p-4">
        <ClipLoader color={color} size={size} />
      </div>
    );
  }
}
