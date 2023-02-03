// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const box2 = await ethers.getContractFactory("Box2");
    console.log("Deploying Contract");
    const upgradeBox = await upgrades.upgradeProxy('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',box2)
    console.log("Box deployed to:", upgradeBox.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
