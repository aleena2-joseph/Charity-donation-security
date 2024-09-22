import { ethers } from "ethers";
import CharityDonationTrackingABI from "./CharityDonationTrackingABI.json"; // You will need to create this ABI file

const contractAddress = "0xCa534B5982931aAf2cd24FDa89f60e975527Eaeb"; // Replace with your deployed contract address

export const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    CharityDonationTrackingABI,
    signer
  );
  return contract;
};
