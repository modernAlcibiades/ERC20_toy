const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TBDToken");
  const token = await Token.deploy(ethers.utils.parseEther('420'));

  console.log("Token address:", token.address);
  const sender = '0xCEb16910d27EBc5f987364ce88980127490e0b1E';

  const airdrop = [//addresses]
  for (let i = 0; i < airdrop.length; i++) {
    token.transferFrom(sender, airdrop[i], ethers.utils.parseEther('4.2'));
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
