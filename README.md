# Charity-Donor-tracking-security-system


## Overview

The Charity Donation Security System addresses the transparency issues currently plaguing charity and donation processes. Due to inadequate record-keeping and the presence of dishonest individuals, many donors have lost trust in organizations dedicated to social causes. This system empowers social organizations to manage various projects transparently, eliminating the need for third-party involvement.

## Key Features

- *Transparent Transactions:* Utilizing smart contracts, the system ensures that all transactions are recorded and verifiable, restoring donor confidence in charitable organizations.
  
- *Real-time Tracking:* Donors can easily track an organization’s transactions, gaining insights into how their contributions are utilized.
  
- *Cost Efficiency:* The system reduces administrative expenses while enhancing the speed and efficiency of fund distribution.
  
- *Trust Building:* By ensuring that donations reach the intended recipients, the platform fosters confidence among both donors and recipients involved in the charitable process.

This project aims to create a more reliable and accountable charity ecosystem, helping to reclaim trust in organizations working towards social betterment.


## Technology Stack

- *Blockchain*: Ethereum
- *Smart Contracts*: Solidity
- *Frontend*: React with Vite
- *Web3 Library*: Ethers.js

## Project Structure


CharityDonationTracking/
├── contracts/
│   └── CharityDonationTracking.sol
├── scripts/
│   └── deploy.js
├── frontend/
│   ├── src/
│   │   ├── contracts/
│   │   │   ├── CharityDonationTracking.js
│   │   │   └── CharityDonationTrackingABI.json
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
├── hardhat.config.js
└── package.json


## Getting Started

### Prerequisites

- Node.js
- npm
- MetaMask (for interacting with the DApp)

### Setup Instructions

1. *Clone the repository*:
   bash
   git clone https://github.com/yourusername/CharityDonationTracking.git
   cd CharityDonationTracking
   

2. *Install Hardhat*:
   bash
   npm install --save-dev hardhat
   

3. *Run Hardhat*:
   bash
   npx hardhat
   

4. *Install Frontend Dependencies*:
   Navigate to the frontend directory and install dependencies:
   bash
   cd frontend
   npm install
   

5. *Deploy the Smart Contract*:
   From the root of your project:
   bash
   npx hardhat run scripts/deploy.js --network localhost
   

6. *Start the Frontend*:
   In the frontend directory, run:
   bash
   npm run dev
   

7. *Open the Application*:
   Visit http://localhost:3000 in your web browser to interact with the DApp.

## Usage

- *Register a Receiver*: Receivers can register their details and required amounts.
- *Make a Donation*: Donors can input the receiver's address and the amount they wish to donate.


## Acknowledgments

- Inspired by the need for transparency in charitable donations.
- Special thanks to the Ethereum and React communities for their valuable resources.
