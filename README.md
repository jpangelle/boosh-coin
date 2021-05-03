# $BOOSH

## Usage

#### Clone the repository

```sh
$ git clone https://github.com/jpangelle/boosh-coin.git
$ cd boosh-coin
```

#### Create .env

Create a `.env` file in the root of your repository (You can use [Infura](https://infura.io) to spin up an endpoint):

```sh
INFURA_ENDPOINT=<infura-network-endpoint>
PRIVATE_KEY=<private-key>
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
