const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const { INFURA_ENDPOINT, PRIVATE_KEY } = process.env;

const gasPrice = 20 * 1_000_000_000; // Gwei
const gasLimit = 2_000_000;

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
      gasPrice,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: INFURA_ENDPOINT,
        }),
      network_id: 1,
      gas: gasLimit,
      gasPrice,
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
