// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract BOOSHToken is ERC20PresetFixedSupply("BooshCoin", "BOOSH", 10**24, msg.sender) {}
