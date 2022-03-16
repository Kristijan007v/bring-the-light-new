import { ethers } from "ethers";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BringTheLightUA from "../artifacts/contracts/MyNFT.sol/BringTheLightUA.json";
import ArrowUp from "./Buttons/ArrowUp";
import Button from "./Buttons/Button";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import MintNFT from "./MintNFT";
import NavBar from "./NavBar";
import Popup from "./Popup";
import Share from "./Social/Share";
import WalletBalance from "./WalletBalance";

const notify = () => toast.success("Here is your toast.");

const MetamaskNotifyConnected = () =>
  toast.success("Metamask Wallet connected.");
const MetamaskNotifyError = () => toast.error("Metamask Wallet not detected.");

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(
  contractAddress,
  BringTheLightUA.abi,
  signer
);

function NFTImage({ tokenId, getCount }) {
  const contentId = "QmXKkJJ24CHUVH2D3XgaT8ynD5CLVAZ3kFuhT8axaL3M4L";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (
    <div className="hidden">
      <img
        src={
          isMinted
            ? imageURI
            : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
        }
      ></img>
      <h5>ID #{tokenId}</h5>
      {!isMinted ? (
        <button onClick={mintToken}>Mint</button>
      ) : (
        <button onClick={getURI}>Taken! Show URI</button>
      )}
    </div>
  );
}

function Home() {
  /* Check if the user has Metamask installed */
  useEffect(() => {
    if (window.ethereum) {
      console.log("Check for Metamask.");
      MetamaskNotifyConnected();
    } else {
      MetamaskNotifyError();
    }
  });

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      {/* Go up */}
      <div id="up"></div>
      <NavBar />

      {/* Header */}
      <Header />

      <Gallery />

      {/* Main */}
      <MintNFT id={"mint-nfts"} />

      {/* <button className="text-white" onClick={notify}>
        Test notification
      </button> */}

      {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <NFTImage tokenId={i} getCount={getCount} />
          </div>
        ))}

      {/* Footer */}
      <Footer />
      {/* Fixed buttons */}
      <ArrowUp />

      {/* Pop ups */}
      <Popup
        test={"hidden"}
        heading={"Contact us"}
        content={
          <form
            className="flex flex-col gap-4"
            action="http://localhost:8080/send-email"
            method="post"
            enctype="application/x-www-form-urlencoded"
          >
            <label className="heading-2" htmlFor="Name">
              Name:{" "}
            </label>
            <input className="input-text" type="text" name="name" id="name" />
            <label className="heading-2" htmlFor="email">
              E-mail:
            </label>
            <input className="input-text" type="text" name="email" id="email" />
            <label className="heading-2" htmlFor="message">
              Message:{" "}
            </label>
            <textarea
              className="input-text"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <Button text={"SEND"} type={"submit"} />
          </form>
        }
      />

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
