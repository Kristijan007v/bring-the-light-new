import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import GalleryImage from "./GalleryImage";

const desktopImages = [
  { id: 1, src: "/header1.jpg", description: "This is a first image." },
  { id: 1, src: "/header2.jpg", description: "This is a second image." },
  { id: 1, src: "/header3.jpg", description: "This is a third image." },
  { id: 1, src: "/header4.jpg", description: "This is a fifth image." },
];

export default function NewGallery() {
  return (
    <div className="m-6">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {desktopImages.map((image) => (
          <SwiperSlide key={image.id}>
            <GalleryImage
              src={image.src}
              alt={image.description}
              onclick={() => openImageModal({ id, src, description })}
              style={"m-10"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
