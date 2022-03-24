import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ArrowUp from "./Buttons/ArrowUp";
import Button from "./Buttons/Button";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import MenuMobile from "./MenuMobile";
import MintNFT from "./MintNFT";
import NavBar from "./NavBar";
import Popup from "./Popup";

function Home() {
  const [showMenu, setshowMenu] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
    enableBodyScroll(document);
  };
  const open = () => {
    setModalOpen(true);
    disableBodyScroll(document);
  };

  modalOpen ? enableBodyScroll(document) : disableBodyScroll(document);

  return (
    <div>
      <NavBar
        openContact={open}
        openMenu={() => {
          setshowMenu(!showMenu);
        }}
      />

      {/* Header */}
      <Header />

      {showMenu && (
        <MenuMobile
          closeMenu={() => {
            setshowMenu(!showMenu);
          }}
          openContact={open}
        />
      )}

      <Gallery />

      {/* Main */}
      <MintNFT id={"mint-nfts"} style={"mt-10"} />

      {/* FAQ */}
      <section className="mt-10 mb-10">
        <h2 className="heading-2 mb-10 text-center">FAQ</h2>
        <div className="m-auto grid w-5/6 grid-cols-1 gap-4 lg:w-3/5 lg:grid-cols-2">
          <FAQ text={"How are these images made?"} />
          <FAQ text={"How are these images made?"} />
          <FAQ text={"How are these images made?"} />
          <FAQ text={"How are these images made?"} />
          <FAQ text={"How are these images made?"} />
          <FAQ text={"How are these images made?"} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* Fixed buttons */}
      <ArrowUp />

      {/* Pop ups */}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Popup
            heading={"Contact us"}
            closePopup={close}
            content={
              <form
                className="flex flex-col gap-4"
                action="https://getform.io/f/8d280134-4cfd-45ea-9f5a-b01dce516dff"
                method="POST"
                encType="application/x-www-form-urlencoded"
              >
                <label className="heading-2" htmlFor="Name">
                  Name:{" "}
                </label>
                <input
                  className="input-text"
                  type="text"
                  name="name"
                  id="name"
                />
                <label className="heading-2" htmlFor="email">
                  E-mail:
                </label>
                <input
                  className="input-text"
                  type="text"
                  name="email"
                  id="email"
                />
                <label className="heading-2" htmlFor="message">
                  Message:{" "}
                </label>
                <textarea
                  className="input-text"
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                ></textarea>
                <Button text={"SEND"} type={"submit"} />
              </form>
            }
          />
        )}
      </AnimatePresence>

      {/* Privacy Policy */}
      {/* Mobile menu */}

      {/* Required for the notifcations to work*/}
      <Toaster
        containerStyle={{
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          className: "",
          style: {
            backgroundColor: "rgb(31, 41, 55, 0.6)",
            minWidth: "30%",
            width: "50%",
            padding: "16px",
            color: "#ffffff",
            backdropFilter: "blur(10px)",
          },
        }}
      />
    </div>
  );
}

export default Home;
