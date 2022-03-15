const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mint NFTs", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const Greeter = await ethers.getContractFactory("BringTheLightUA");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    const recipient = "0xbda5747bfd65f08deb54cb465eb87d40e51b197e";
    const metadataURI = "cid/test.jpg";

    let balance = await greeter.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await greeter.payToMint(recipient, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await newlyMintedToken.wait();

    balance = await greeter.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await greeter.isContentOwned(metadataURI)).to.equal(true);
  });
});
