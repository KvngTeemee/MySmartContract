/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.INFURA_API_URL, 
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};
