// Import necessary libraries
const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const ContractName = await hre.ethers.getContractFactory("YourContract");
  
  // Deploy the contract
  const contract = await ContractName.deploy();

  // Wait for deployment to finish
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

// Run the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
