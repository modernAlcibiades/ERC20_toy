const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const contract_addr = '0x53D2617076e465340A3b72cC0B76B8488c161a47';
    const Token = await ethers.getContractFactory("TBDToken");
    const token = await Token.attach(contract_addr);

    console.log("Token address:", token.address);
    //const sender = '0xCEb16910d27EBc5f987364ce88980127490e0b1E';

    const airdrop = ["danchainshot.eth", "yowl.eth", "makeavely.eth", "kdawg.eth", "notyowl.eth", "moon.eth", "cdgmachado.eth", "atuan.eth", "nic.eth", "max.eth", "yourgrandma.eth", "topanga.eth", "jonathanchainshot.eth"];
    //await token.approve(deployer.address, ethers.utils.parseEther('200'));
    for (let i = 0; i < airdrop.length; i++) {
        await token.transferFrom(deployer.address, airdrop[i], ethers.utils.parseEther('4.2'));
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });