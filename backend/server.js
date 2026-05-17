require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Setup provider + wallet
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// ERC20 transfer ABI
const abi = [
  "function transfer(address to, uint amount) public returns (bool)"
];

// Contract instance
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  wallet
);

// Reward function
async function sendReward(to, amount) {
  const tx = await contract.transfer(
    to,
    ethers.parseUnits(amount.toString(), 18)
  );
  await tx.wait();
  console.log("Reward sent:", tx.hash);
}

// API route
app.post("/reward", async (req, res) => {
  try {
    const { address, amount } = req.body;

    // Basic validation
    if (!address || !amount) {
      return res.status(400).json({ error: "Missing address or amount" });
    }

    await sendReward(address, amount);

    res.json({ message: "Reward sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Transaction failed" });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});