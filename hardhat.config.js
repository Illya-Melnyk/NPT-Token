require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "Ac1y9l_DuhpWKozsjWW8Ot0U9NwpOGjw";
const GOERLI_PRIVATE_KEY = "727465cc4405b0e2d96a12e3d3812a2fde61328025d926496a9aa6e81c2d73c2";

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
