import React from "react";
import NFTCard from "./NFTCard";
import TextBox from "./TextBox";

export default function MintNFT({ id, style }) {
  return (
    <div
      id={id}
      className={`m-auto h-auto w-full lg:h-screen lg:w-4/6 ${style}`}
    >
      <p className="heading h-center">Mint to Help</p>
      <TextBox
        type={"info"}
        text={"Ovdje idu upute za Mintanje."}
        style={"mt-12 mb-12 items-center"}
      />
      <main className="m-6 grid grid-cols-1 content-center gap-6 lg:grid-cols-3">
        <NFTCard name={"BASIC"} price={"10"} style={"bg-basic-image"} />
        <NFTCard
          name={"RARE"}
          price={"500"}
          highlight={"yes"}
          highlightText={"BEST BUY"}
        />
        <NFTCard name={"SPECIAL"} price={"5000"} style={"bg-special-image"} />
      </main>
      <TextBox
        type={"warning"}
        text={
          "In order to be able to mint please connect your Metamask Wallet."
        }
        style={"mt-12 mb-12 items-center"}
      />
    </div>
  );
}
