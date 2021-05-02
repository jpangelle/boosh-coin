const BOOSHToken = artifacts.require('BOOSHToken');

module.exports = function (deployer) {
  deployer.deploy(BOOSHToken);
};
