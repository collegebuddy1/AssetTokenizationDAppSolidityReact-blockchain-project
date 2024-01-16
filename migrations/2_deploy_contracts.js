var MyToken = artifacts.require("./MyToken.sol");

module.exports = function (deployer) {
  deployer.deploy(MyToken, "1000000000000000000000000000000"); // 1_000_000_000_000.000_000_000_000_000_00;
};
