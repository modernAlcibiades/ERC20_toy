const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const token_addr = '0x53D2617076e465340A3b72cC0B76B8488c161a47';
    const Token = await ethers.getContractFactory("TBDToken");
    const token = await Token.attach(token_addr);

    const game_addr = '0xB3aBD3D2957B7feCaFdF274C7353Bc490deA3F10';
    const Game = await ethers.getContractFactory("Game");
    const game = await Game.attach(game_addr);

    const t1 = await token.approve(game.address, ethers.utils.parseEther('200'));
    console.log(await t1.wait());

    const txn = await game.win(token_addr);
    const receipt = await txn.wait();

    console.log(receipt);
    const event = receipt.events.filter(x => x.event === "Winner");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });