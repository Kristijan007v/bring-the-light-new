import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ArrowUp from "./Buttons/ArrowUp";
import Button from "./Buttons/Button";
import MyErrorBoundary from "./MyErrorBoundary";
import FAQ from "./FAQ";
import Footer from "./Footer";
const Gallery = React.lazy(() => import("./Gallery"));
import Header from "./Header";
const MenuMobile = React.lazy(() => import("./MenuMobile"));
import MintNFT from "./MintNFT";
import NavBar from "./NavBar";
const Popup = React.lazy(() => import("./Popup"));
import TextBox from "./TextBox";

function Home() {
  /* Clear all body locks on page load */
  useEffect(() => {
    clearAllBodyScrollLocks(document);
  }, []);

  const [showMenu, setshowMenu] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [showPrivacy, setShowPrivacy] = useState(false);

  const [showTerms, setShowTerms] = useState(false);

  const close = () => {
    setModalOpen(false);
    enableBodyScroll(document);
  };
  const open = () => {
    setModalOpen(true);
    disableBodyScroll(document);
  };

  const closePrivacy = () => {
    setShowPrivacy(false);
    disableBodyScroll(document);
  };

  const openPrivacy = () => {
    setShowPrivacy(true);
    enableBodyScroll(document);
  };

  const closeTerms = () => {
    setShowTerms(false);
    disableBodyScroll(document);
  };

  const openTerms = () => {
    setShowTerms(true);
    enableBodyScroll(document);
  };

  modalOpen ? enableBodyScroll(document) : disableBodyScroll(document);

  return (
    <div>
      <MyErrorBoundary component={"Navigation"}>
        <NavBar
          openContact={open}
          openMenu={() => {
            setshowMenu(!showMenu);
          }}
        />
      </MyErrorBoundary>

      {/* Mobile Menu */}
      <MyErrorBoundary component={"Mobile navigation"}>
        <Suspense fallback={<div>Loading...</div>}>
          {showMenu && (
            <MenuMobile
              closeMenu={() => {
                setshowMenu(!showMenu);
              }}
              openContact={open}
            />
          )}
        </Suspense>
      </MyErrorBoundary>

      {/* Header */}
      <MyErrorBoundary component={"Header"}>
        <Header />
      </MyErrorBoundary>

      {/* Gallery */}
      <MyErrorBoundary component={"Gallery"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
      </MyErrorBoundary>

      {/* MintNFTs */}
      <MyErrorBoundary component={"MintNFT"}>
        <MintNFT id={"mint-nfts"} style={"mt-10"} />
      </MyErrorBoundary>

      {/* FAQ */}
      <MyErrorBoundary component={"FAQ"}>
        <section className="mt-10 mb-10">
          <h2 className="heading h-center">FAQ</h2>
          <div className="m-auto mt-12 grid w-5/6 grid-cols-1 gap-4 lg:w-3/5 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <FAQ text={"How are these images made?"} />
              <FAQ text={"How are these images made?"} />
              <FAQ text={"How are these images made?"} />
            </div>
            <div className="flex flex-col gap-4">
              <FAQ text={"How are these images made?"} />
              <FAQ text={"How are these images made?"} />
              <FAQ text={"How are these images made?"} />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <TextBox style={"w-5/6 lg:w-3/5"} type={"info"}>
              If you have any further question feel free to ask using the{" "}
              <a className="cursor-pointer hover:underline" onClick={open}>
                contact form.
              </a>
            </TextBox>
          </div>
        </section>
      </MyErrorBoundary>

      {/* Footer */}
      <MyErrorBoundary component={"Footer"}>
        <Footer openPrivacy={openPrivacy} openTerms={openTerms} />
      </MyErrorBoundary>

      {/* Fixed buttons */}
      <MyErrorBoundary component={"ArrowUp"}>
        <ArrowUp />
      </MyErrorBoundary>

      {/* Pop ups */}
      <MyErrorBoundary component={"Contact Us"}>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </MyErrorBoundary>

      <MyErrorBoundary component={"Privacy policy"}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence>
            {/* PRIVACY POLICY */}
            {showPrivacy && (
              <Popup
                closePopup={closePrivacy}
                heading={"Privacy policy"}
                content={
                  <>
                    <TextBox scroll={"True"}>
                      Here goes the privacy policy text. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Ullam, adipisci
                      possimus reprehenderit quae odio provident obcaecati at
                      totam odit nostrum sint nesciunt ducimus, quia aperiam
                      quas delectus voluptate ratione qui? Doloribus impedit
                      optio dolorem dignissimos, eveniet quae officia velit
                      odio? Rem sed doloremque ratione. Blanditiis, iusto dolore
                      ea illum numquam doloribus quidem. Corporis facilis neque
                      eos saepe adipisci iure fuga ut quod, hic rem, libero
                      molestiae dicta reiciendis enim id et aperiam optio
                      voluptas corrupti consectetur sit vitae nulla, quidem
                      odit. Reiciendis doloribus exercitationem voluptatibus
                      odit, esse perferendis dolores neque corrupti nemo facere
                      consectetur iure doloremque voluptates. Adipisci, debitis
                      non. Ullam, tempore totam? Perferendis maxime quod veniam
                      unde laudantium sunt tempora assumenda itaque ipsam.
                    </TextBox>
                  </>
                }
              />
            )}
          </AnimatePresence>
        </Suspense>
      </MyErrorBoundary>

      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence>
            {/* TERMS & CONDITION */}
            {showTerms && (
              <Popup
                closePopup={closeTerms}
                heading={"Terms & condition"}
                content={
                  <>
                    <TextBox>
                      <div className="overflow-auto">
                        Here goes the Terms & condition text. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Ullam, adipisci
                        possimus reprehenderit quae odio provident obcaecati at
                        totam odit nostrum sint nesciunt ducimus, quia aperiam
                        quas delectus voluptate ratione qui? Doloribus impedit
                        optio dolorem dignissimos, eveniet quae officia velit
                        odio? Rem sed doloremque ratione. Blanditiis, iusto
                        dolore ea illum numquam doloribus quidem. Corporis
                        facilis neque eos saepe adipisci iure fuga ut quod, hic
                        rem, libero molestiae dicta reiciendis enim id et
                        aperiam optio voluptas corrupti consectetur sit vitae
                        nulla, quidem odit. Reiciendis doloribus exercitationem
                        voluptatibus odit, esse perferendis dolores neque
                        corrupti nemo facere consectetur iure doloremque
                        voluptates. Adipisci, debitis non. Ullam, tempore totam?
                        Perferendis maxime quod veniam unde laudantium sunt
                        tempora assumenda itaque ipsam.
                      </div>
                    </TextBox>
                  </>
                }
              />
            )}
          </AnimatePresence>
        </Suspense>
      </MyErrorBoundary>

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
