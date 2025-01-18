"use client";

import React, { useState } from "react";
import { ethers } from "ethers";

const PLATFORM_ADDRESS = "0xF7800D3cae5Db40e084f5deD7013c0E6D1bc76E5"; // Developer or platform wallet address

const DynamicStableToken = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState("0.0");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  // Connect to MetaMask
  const connectMetaMask = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        alert("MetaMask not found! Please install MetaMask.");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      setWalletConnected(true);
      alert("MetaMask successfully connected!");
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  // Deposit BNB to the platform wallet
  const depositBNB = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        alert("MetaMask not found! Please install MetaMask.");
        return;
      }
      if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Send BNB to the platform wallet
      const tx = await signer.sendTransaction({
        to: PLATFORM_ADDRESS, // Platform address
        value: ethers.utils.parseEther(amount),
      });

      setTransactionHash(tx.hash);
      await tx.wait();

      alert(`Deposit of ${amount} BNB sent to the platform!`);
      // Simulate updating the balance on the platform
      const updatedBalance = parseFloat(balance) + parseFloat(amount);
      setBalance(updatedBalance.toFixed(4)); // Store balance locally
    } catch (error) {
      console.error("Error depositing BNB:", error);
    }
  };

  // Check the user's balance
  const getBalance = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        alert("MetaMask not found! Please install MetaMask.");
        return;
      }

      alert(`Your current platform balance is: ${balance} BNB`);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Dynamic Stable Token</h2>

      <button
        className={`form-button ${walletConnected ? "connected-button" : ""}`}
        onClick={connectMetaMask}
        disabled={walletConnected}
      >
        {walletConnected ? "Wallet Connected" : "Connect to MetaMask"}
      </button>

      <input
        className="form-input"
        type="text"
        placeholder="BNB Quantity"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="form-button" onClick={depositBNB}>
        Deposit BNB
      </button>

      <div style={{ marginTop: "20px" }}>
        <button className="form-button" onClick={getBalance}>
          Check Balance
        </button>
      </div>

      {transactionHash && (
        <p className="info-text">Transaction confirmed: {transactionHash}</p>
      )}

      {balance && <p className="info-text">Your balance: {balance} BNB</p>}
    </div>
  );
};

export default DynamicStableToken;
