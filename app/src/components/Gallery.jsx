import React from "react";
import exampleImage1 from "../img/header.jpg";
import exampleImage2 from "../img/example03.jpg";
import exampleImage3 from "../img/example04.jpg";
import exampleImage4 from "../img/example05.jpg";
import exampleImage5 from "../img/example06.jpg";
import exampleImage6 from "../img/example10.jpg";
import GalleryImage from "./GalleryImage";

export default function Gallery() {
  return (
    <div class="relative rounded-xl scrollbar-hide overflow-auto w-full lg:w-4/6 m-auto">
      <p className="heading text-center lg:text-left mb-10">Gallery</p>

      <div class="relative w-full flex gap-8 snap-x snap-mandatory overflow-x-auto pb-14 scrollbar-hide rounded-md">
        <div class="snap-center shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
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

        <div class="snap-center shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>
    </div>
  );
}
