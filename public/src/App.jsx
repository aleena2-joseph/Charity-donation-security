import { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "./contracts/CharityDonationTracking";

function App() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("MetaMask not detected! Please install MetaMask.");
    }
  };

  const handleDonate = async () => {
    if (!account) {
      alert("Please connect to MetaMask first.");
      return;
    }

    const contract = await getContract();
    const tx = await contract.donate(
      receiver,
      ethers.utils.parseEther(amount),
      { value: ethers.utils.parseEther(amount) }
    );
    await tx.wait();
    alert("Donation Successful!");
  };

  return (
    <div
      id="don"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#e8f5e9",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#4caf50",
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Charity Donation Tracking
      </h1>

      {/* MetaMask Connection */}
      {!isConnected ? (
        <button
          onClick={connectWallet}
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#388e3c")
          } // Darker green on hover
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4caf50")
          }
        >
          Connect to MetaMask
        </button>
      ) : (
        <p style={{ color: "#388e3c" }}>Connected: {account}</p>
      )}

      {/* Form to enter receiver and amount */}
      <input
        placeholder="Donor ID"
        onChange={(e) => setReceiver(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #4caf50",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
      <input
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #4caf50",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleDonate}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#388e3c")} // Darker green on hover
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
      >
        Donate
      </button>

      {/* Display form details */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#4caf50" }}>Form Details</h2>
        <p>
          <strong>Donor ID:</strong> {receiver}
        </p>
        <p>
          <strong>Amount to Donate (in ETH):</strong> {amount}
        </p>
      </div>
    </div>
  );
}

export default App;
