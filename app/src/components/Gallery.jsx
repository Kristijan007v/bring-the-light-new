import React from "react";
import exampleImage2 from "../img/example03.jpg";
import exampleImage3 from "../img/example04.jpg";
import exampleImage4 from "../img/example05.jpg";
import exampleImage5 from "../img/example06.jpg";
import exampleImage1 from "../img/header.jpg";
import GalleryControl from "./GalleryControl";
import GalleryImage from "./GalleryImage";

export default function Gallery() {
  return (
    <div class="relative m-auto h-auto w-full content-center overflow-auto rounded-xl scrollbar-hide lg:h-screen lg:w-4/6">
      <p className="heading mb-10 mt-10 text-center lg:text-left">Gallery</p>

      <div class="relative flex w-full snap-x snap-mandatory gap-8 overflow-x-auto rounded-md pb-14 scrollbar-hide">
        <div class="shrink-0 snap-center">
          <div class="w-4 shrink-0 sm:w-48"></div>
        </div>
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage2}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto border-4 border-blue-600"}
          src={exampleImage3}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage4}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage5}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />
        <GalleryImage
          style={"w-80 h-auto"}
          src={exampleImage1}
          alt={"Slika 1"}
        />

        <div class="shrink-0 snap-center">
          <div class="w-4 shrink-0 sm:w-48"></div>
        </div>
      </div>
      <GalleryControl />
    </div>
  );
}
