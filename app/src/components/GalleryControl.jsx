import React from "react";
import ArrowLeft from "./Buttons/ArrowLeft";
import ArrowRight from "./Buttons/ArrowRight";

export default function GalleryControl({
  disabledLeft,
  disabledRight,
  nextImage,
  previousImage,
}) {
  return (
    <div className="mt-6 flex justify-center gap-6">
      {disabledLeft && <ArrowLeft onclick={previousImage} />}
      {disabledRight && <ArrowRight onclick={nextImage} />}
    </div>
  );
}
