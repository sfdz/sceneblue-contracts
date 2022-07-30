import { infuraAPIKey, mnemonic } from "./secrets.json";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades"

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraAPIKey}`,
      accounts: { mnemonic }
    }
  }
};

export default config;
