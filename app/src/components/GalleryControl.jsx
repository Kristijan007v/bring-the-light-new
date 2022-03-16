import React from "react";
import ArrowLeft from "./Buttons/ArrowLeft";
import ArrowRight from "./Buttons/ArrowRight";

export default function GalleryControl() {
  return (
    <div className="flex justify-center gap-6">
      <ArrowLeft />
      <ArrowRight />
    </div>
  );
}
