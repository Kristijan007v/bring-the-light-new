import React from "react";
import ArrowLeft from "./Buttons/ArrowLeft";
import ArrowRight from "./Buttons/ArrowRight";

export default function GalleryControl({ onclick, disabled, next, previous }) {
  return (
    <div className="flex justify-center gap-6">
      <ArrowLeft onclick={previous} disabled={disabled} />
      <ArrowRight onclick={next} disabled={disabled} />
    </div>
  );
}
