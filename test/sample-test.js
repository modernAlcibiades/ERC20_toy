const { expect } = require("chai");

describe("TBD", function () {
  it("ERC20 token", async function () {
    const factory = await ethers.getContractFactory("TBDToken");

    const contract = await factory.deploy(ethers.utils.parseEther('1000'));

    await contract.deployed();

    console.log(ethers.utils.formatEther(await contract.totalSupply()));
  });
});
