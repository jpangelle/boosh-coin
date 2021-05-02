const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const { INFURA_ENDPOINT, WALLET_INDEX, WALLET_MNEMONIC } = process.env;

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
          mnemonic: WALLET_MNEMONIC,
          providerOrUrl: INFURA_ENDPOINT,
          addressIndex: WALLET_INDEX,
        }),
      network_id: 3,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: WALLET_MNEMONIC,
          providerOrUrl: INFURA_ENDPOINT,
          addressIndex: WALLET_INDEX,
        }),
      network_id: 1,
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
