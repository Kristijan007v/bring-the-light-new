import React from "react";
import exampleImage1 from "../img/header.jpg";
import exampleImage2 from "../img/example03.jpg";
import exampleImage3 from "../img/example04.jpg";
import exampleImage4 from "../img/example05.jpg";
import exampleImage5 from "../img/example06.jpg";
import exampleImage6 from "../img/example10.jpg";

export default function Gallery() {
  return (
    <div class="relative rounded-xl scrollbar-hide overflow-auto">
      <p className="heading">Gallery</p>
      <div class="flex ml-[50%] items-end justify-start pt-10 mb-6">
        {/* <div class="ml-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">
          snap point
        </div> */}
        {/* <div class="absolute top-0 bottom-0 left-1/2 border-l border-indigo-500"></div> */}
      </div>
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scrollbar-hide">
        <div class="snap-center shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage1}
          />
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage2}
          />
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage3}
          />
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage4}
          />
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage5}
          />
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <img
            class="shrink-0 w-80 h-40 object-cover rounded-lg shadow-xl bg-white"
            src={exampleImage6}
          />
        </div>
        <div class="snap-center shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>
    </div>
  );
}
