import { useState } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

function WalletBalance() {
  const [balance, setBalance] = useState();

  async function isUnlocked() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let unlocked;

    try {
      const accounts = await provider.listAccounts();

      unlocked = accounts.length > 0;
    } catch (e) {
      unlocked = false;
    }

    return unlocked;
  }

  const getBalance = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="text-white">
      <h5 className="text-3xl font-bold underline">Your Balance: {balance}</h5>
      <button onClick={() => getBalance()}>Show My Balance</button>
    </div>
  );
}

export default WalletBalance;
