# $BOOSH

## Usage

#### Clone the repository

```sh
$ git clone git@github.com:jpangelle/boosh-coin.git
```

#### Create .env

Create a `.env` file in the root of your repository (You can use [Infura](https://infura.io) to spin up an endpoint):

```sh
INFURA_ENDPOINT=<endpoint>
WALLET_INDEX=<wallet-index>
WALLET_MNEMONIC=<wallet-mnemonic>
```

#### Install dependencies

```sh
$ yarn
```

#### Compile contracts

```sh
$ yarn compile
```

#### Deploy contract to Ropsten testnet

```sh
$ yarn migrate:testnet
```

#### Deploy contract to mainnet

```sh
$ yarn migrate:mainnet
```
