# Blockchain Reward System

## Overview

This project is a blockchain-based reward system built using Ethereum Sepolia testnet. Users can receive ERC-20 reward tokens (RWT) through a backend API integrated with a simple frontend interface.

The project demonstrates:

* ERC-20 token usage
* Blockchain transactions using ethers.js
* MetaMask integration
* Node.js backend API
* Automated reward distribution

---

## Technologies Used

* Ethereum Sepolia Testnet
* ERC-20 Token
* Node.js
* Express.js
* Ethers.js
* MetaMask
* HTML/CSS/JavaScript
* Thirdweb

---

## Project Structure

```
reward-system/
│
├── backend/
│   ├── index.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── index.html
```

---

## Features

* Send blockchain rewards using RWT token
* Select predefined users from frontend
* Custom reward amount
* MetaMask wallet integration
* Automated token transfer through backend API

---

## How It Works

1. User selects a predefined wallet.
2. User enters reward amount.
3. Frontend sends request to backend API.
4. Backend connects to Ethereum Sepolia using ethers.js.
5. Smart contract transfers RWT tokens.
6. Tokens appear in MetaMask wallet.

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd reward-system
```

### Install Dependencies

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PRIVATE_KEY=your_private_key
RPC_URL=your_rpc_url
CONTRACT_ADDRESS=your_contract_address
```

---

## Run Backend

```bash
node server.js
```

Backend runs on:

```text
http://localhost:3000
```

---

## Frontend

Open `index.html` in browser.

---

## Sample API Request

```json
{
  "address": "wallet_address",
  "amount": 10,
  "username": "User1"
}
```

---

## Future Improvements

* Wallet authentication
* Leaderboard system
* NFT rewards
* Database integration
* React frontend
* Cloud deployment

---

## Author

Yashas Gatty
