import React, { useState } from "react";
import GalleryControl from "./GalleryControl";
import GalleryImage from "./GalleryImage";
import gallery from "../utilities/gallery";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import TextBox from "./TextBox";
import Button from "./Buttons/Button";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default function Gallery() {
  const images = [
    { src: "/example03.webp", id: 1 },
    { src: "/example04.webp", id: 2 },
    { src: "/example05.webp", id: 3 },
    { src: "/example06.webp", id: 4 },
  ];

  const desktopImages = [
    { src: "/header1.jpg", id: 1 },
    { src: "/header2.jpg", id: 2 },
    { src: "/header3.jpg", id: 3 },
    { src: "/header4.jpg", id: 4 },
  ];

  const CollectionSize = desktopImages.length;
  const [index, setActiveStep] = React.useState(1);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [imageDesc, setImageDesc] = useState(false);

  imageDesc ? disableBodyScroll(document) : enableBodyScroll(document);
  return (
    <div
      id="gallery"
      class="relative m-auto h-auto w-full content-center overflow-auto rounded-xl scrollbar-hide lg:h-screen lg:w-4/6"
    >
      <p className="heading mb-10 mt-10 text-center lg:text-left">Gallery</p>

      <div class="relative flex w-full snap-x snap-mandatory gap-8 overflow-x-auto rounded-md pb-14 scrollbar-hide lg:hidden">
        <div class="shrink-0 snap-center">
          <div class="w-4 shrink-0 sm:w-48"></div>
        </div>
        {/* Mobile only */}
        {images &&
          images.map(({ src, id }) => {
            return (
              <GalleryImage
                key={id}
                onclick={() => {
                  setImageDesc(!imageDesc);
                }}
                style={"w-80 h-full"}
                src={src}
                alt={"Slika 1"}
              />
            );
          })}

        <div class="shrink-0 snap-center">
          <div class="w-4 shrink-0 sm:w-48"></div>
        </div>
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden lg:block">
        <GalleryImage
          key={desktopImages.id}
          onclick={() => {
            setImageDesc(!imageDesc);
          }}
          onmouse={() => {
            setImageDesc(!imageDesc);
          }}
          style={"w-full h-full"}
          src={`/header${index}.jpg`}
          alt={"Slika 1"}
        />
        <GalleryControl
          next={goToNextPicture}
          previous={goToPreviousPicture}
          disabled={index === CollectionSize - 1}
        />
      </div>
      {/* Gallery INFO POPUP */}
      {imageDesc && (
        <div className="cover flex flex-col items-center">
          <div className="mt-12">
            <GalleryImage
              style={"w-80 h-full"}
              src={`/example03.webp`}
              alt={"Slika 1"}
            />
          </div>
          <div className="rounded-m d w-5/6 p-6 text-center text-white">
            <p>This is an image description. This is a very beautiful image.</p>
          </div>
          <Button
            text={"CLOSE"}
            onclick={() => {
              setImageDesc(!imageDesc);
            }}
          />
          {/* <TextBox type={"info"} text={"This is an image description."} /> */}
        </div>
      )}
    </div>
  );
}
