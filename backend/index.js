const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(express.json());

/* 🔗 BLOCKCHAIN SETUP */
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const abi = [
  "function transfer(address to, uint amount) public returns (bool)"
];

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  wallet
);

/* 🔧 FUNCTION TO SEND TOKENS */
async function sendReward(to, amount) {
  const tx = await contract.transfer(
    to,
    ethers.parseUnits(amount.toString(), 18)
  );
  await tx.wait();
  console.log("Transaction hash:", tx.hash);
}

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* 🔥 MAIN REWARD API */
app.post("/reward", async (req, res) => {
  try {
    const { address, amount, username } = req.body;

    if (!address || !amount) {
      return res.status(400).json({ message: "Missing data" });
    }

    await sendReward(address, amount);

    console.log(`${username} received ${amount} RWT`);

    res.json({
      message: `${username} received ${amount} RWT`
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Transaction failed"
    });
  }
});

/* 🚀 START SERVER */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});