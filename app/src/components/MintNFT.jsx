import React from "react";
import NFTCard from "./NFTCard";

export default function MintNFT({ id }) {
  return (
    <div id={id} className="w-full lg:w-4/6 m-auto">
      <p className="heading h-center">Mint to Help</p>
      <main className="grid grid-cols-1 lg:grid-cols-3 m-6 gap-6">
        <NFTCard name={"BASIC"} price={"10"} />
        <NFTCard
          name={"RARE"}
          price={"500"}
          highlight={"yes"}
          highlightText={"BEST BUY"}
        />
        <NFTCard name={"SPECIAL"} price={"5000"} />
      </main>
    </div>
  );
}
