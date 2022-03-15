import React from "react";
import NFTCard from "./NFTCard";

export default function MintNFT() {
  return (
    <div>
      <p className="heading h-center">Mint to Help</p>
      <main className="grid grid-cols-1 lg:grid-cols-3 m-6 gap-6">
        <NFTCard name={"BASIC"} price={"10"} />
        <NFTCard name={"RARE"} price={"500"} />
        <NFTCard name={"SPECIAL"} price={"5000"} />
      </main>
    </div>
  );
}
