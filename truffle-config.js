const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const { INFURA_ENDPOINT, PRIVATE_KEY } = process.env;

module.exports = {
  contracts_build_directory: './build/contracts',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5777,
    },
    testnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: INFURA_ENDPOINT,
        }),
      network_id: 3,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: INFURA_ENDPOINT,
        }),
      network_id: 1,
      // based on gas used on the ropsten deployment plus some extra in case
      // https://ropsten.etherscan.io/tx/0x035611d8613416a8861a0ff8503a9925190b80d0e486fd6f210d9e0d137664bc
      gas: 2_000_000,
      gasPrice: 20_000_000_000, // 20 Gwei
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
