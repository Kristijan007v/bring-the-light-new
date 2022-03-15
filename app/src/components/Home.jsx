import WalletBalance from "./WalletBalance";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import BringTheLightUA from "../artifacts/contracts/MyNFT.sol/BringTheLightUA.json";
import ArrowUp from "./Buttons/ArrowUp";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import Gallery from "./Gallery";
import MintNFT from "./MintNFT";
import FlagLine from "./FlagLine";

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
      <MintNFT />

      <button className="text-white" onClick={notify}>
        Test notification
      </button>

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

      {/* Required for the notifcations to work*/}
      <Toaster
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
