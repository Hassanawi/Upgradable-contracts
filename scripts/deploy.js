// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() { 
  const box = await ethers.getContractFactory("Box");
  console.log("Deploying Contract");
  const upgradeBox = await upgrades.deployProxy(box);
  await upgradeBox.deployed()
  console.log("Box deployed to:", upgradeBox.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
