import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../gallery.css";

// import required modules
import { Navigation } from "swiper";

export default function NewGallery() {
  /* IMAGE ASSETS */
  const images = [
    { id: 1, src: "/header1.jpg", description: "This is a first image." },
    { id: 2, src: "/header2.jpg", description: "This is a second image." },
    {
      id: 3,
      src: "/header3.jpg",
      description:
        "This is a third image. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm.",
    },
    { id: 4, src: "/header4.jpg", description: "This is a fifth image." },
  ];

  /* SHUFFLE GALLERY */
  function randomImages() {
    return Math.random() - 0.5;
  }
  return (
    <div className="m-auto mt-8 mb-8 w-full lg:w-4/6">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-md"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={image.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
