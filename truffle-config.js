const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const { TEST_ENDPOINT, WALLET_MNEMONIC } = process.env;

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
          providerOrUrl: TEST_ENDPOINT,
        }),
      network_id: 3,
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
