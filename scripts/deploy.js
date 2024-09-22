const hre = require("hardhat");

async function main() {
  const CharityDonationTracking = await hre.ethers.getContractFactory(
    "CharityDonationTracking"
  );
  const charityDonationTracking = await CharityDonationTracking.deploy();

  await charityDonationTracking.deployed();
  console.log(
    "CharityDonationTracking deployed to:",
    charityDonationTracking.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
