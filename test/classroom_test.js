const { assert } = require("chai");

describe("TBD", function () {
    const initialSupply = ethers.utils.parseEther("1000");
    let token;
    beforeEach(async () => {
        const Token = await ethers.getContractFactory("TBDToken");
        token = await Token.deploy(initialSupply);
        await token.deployed();
    });

    it("should be able to find the initial supply in the owners balance", async () => {
        const [addr1] = await ethers.provider.listAccounts();
        const balance = await token.balanceOf(addr1);

        assert.equal(initialSupply.toString(), balance.toString());
    });
});