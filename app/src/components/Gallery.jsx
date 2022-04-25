import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import Button from "./Buttons/Button";
import GalleryControl from "./GalleryControl";
import GalleryImage from "./GalleryImage";
import NewGallery from "./NewGallery";

export default function Gallery() {
  /* IMAGE ASSETS */
  const images = [
    { id: 1, src: "/example03.webp", description: "This is a first image." },
    { id: 2, src: "/example04.webp", description: "This is a second image." },
    {
      id: 3,
      src: "/example05.webp",
      description:
        "This is a third image. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm. Lorem ipsummmmmmmmmmmmmmmmmm.",
    },
    { id: 4, src: "/example06.webp", description: "This is a fifth image." },
  ];

  /* SHUFFLE GALLERY */
  function randomImages() {
    return Math.random() - 0.5;
  }

  /* ANIMATIONS */
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  /* USE STATES */
  const [index, setActiveStep] = React.useState(1);
  const [imageModal, setImageModal] = useState(false);
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(true);
  const [imageId, setImageId] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [imageDesc, setImageDesc] = useState("");

  /* IMAGE CONTROL */
  /* const CollectionSize = desktopImages.length;
  const goToNextPicture = () => {
    checkButton();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPreviousPicture = () => {
    checkButton();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }; */

  const disableLeftButton = () => {
    if (index === CollectionSize + 1) {
      setLeftButton(false);
    } else {
      setLeftButton(true);
    }
  };

  const disableRightButton = () => {
    if (index === CollectionSize - 1) {
      setRightButton(false);
    } else {
      setRightButton(true);
    }
  };

  const checkButton = () => {
    disableRightButton();
    disableLeftButton();
  };

  const openImageModal = ({ id, src, description }) => {
    setImageId(id);
    setImageSrc(src);
    setImageDesc(description);
    setImageModal(true);
  };

  const closeImageModal = () => {
    setImageModal(false);
  };

  /* LOCK BODY SCROLL ON IMAGE DESC OPEN */
  imageModal ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    /* IMAGE GALLERY */
    <>
      <div
        id="gallery"
        class="relative m-auto block h-auto w-full content-center overflow-auto rounded-xl scrollbar-hide lg:hidden lg:h-screen lg:w-4/6"
      >
        <p className="heading mb-10 mt-10 text-center lg:text-left">Gallery</p>

        <div class="relative flex w-full snap-x snap-mandatory space-x-8 overflow-x-auto rounded-md pb-14 scrollbar-hide lg:hidden">
          <div class="shrink-0 snap-center">
            <div class="w-4 shrink-0 sm:w-48"></div>
          </div>

          {/* Mobile only */}
          {images &&
            images
              /* .sort(() => randomImages()) */
              .map(({ id, src, description }) => {
                return (
                  <GalleryImage
                    key={id}
                    onclick={() => openImageModal({ id, src, description })}
                    style={"w-80 h-full"}
                    src={src}
                    alt={description}
                  />
                );
              })}

          <div class="shrink-0 snap-center">
            <div class="w-4 shrink-0 sm:w-48"></div>
          </div>
        </div>
      </div>
      {/* DESKTOP ONLY */}
      <div className="m-auto hidden lg:block">
        <p className="heading mt-10 text-center lg:text-left">Gallery</p>
        <NewGallery />
      </div>
      {/* Gallery INFO POPUP */}
      <AnimatePresence>
        {imageModal && (
          <Backdrop onClick={closeImageModal}>
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="m-6"
            >
              <GalleryImage
                key={imageId}
                src={imageSrc}
                style={"w-80 h-full"}
                alt={imageDesc}
              />
            </motion.div>
            <div className="p-6">
              <p className="max-h-fit overflow-y-auto text-center text-white">
                {imageDesc}
              </p>
            </div>

            <Button text={"CLOSE"} onclick={closeImageModal} style={"m-4"} />
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}
