import React from "react";
import { MobileView } from "react-device-detect";
import NFTCard from "./NFTCard";
import TextBox from "./TextBox";

export default function MintNFT({ id, style }) {
  return (
    <div
      id={id}
      className={`m-auto w-full lg:h-screen lg:w-4/6 ${style} hidden lg:block`}
    >
      <p className="heading h-center">Mint to Help</p>
      <TextBox
        type={"info"}
        text={"Ovdje idu upute za Mintanje."}
        style={"mt-12 mb-12 items-center"}
      />
      <div className="sm:snap-main m-6 grid grid-cols-1 content-center gap-6 lg:grid-cols-3">
        <NFTCard name={"BASIC"} price={"10"} style={"bg-basic-image"} />
        <NFTCard
          name={"RARE"}
          price={"500"}
          highlight={"yes"}
          highlightText={"BEST BUY"}
          style={"bg-rare-image"}
        />
        <NFTCard name={"SPECIAL"} price={"5000"} style={"bg-special-image"} />
        <MobileView>
          <div class="shrink-0 snap-center">
            <div class="w-4 shrink-0 sm:w-48"></div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
