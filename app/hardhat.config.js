require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/S4FFtM5Mqk4US69IkKvemiylRZpEhtuI",
      accounts: [
        "b8d23b941dcbe89ebb04d6d2cf7671f45c0a1527b1dc9ede6787fc36c2ceb1fa",
      ],
    },
  },
};
