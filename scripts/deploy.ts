import { ethers, upgrades } from "hardhat";

async function main() {
  const ScenebluePoetry = await ethers.getContractFactory("ScenebluePoetry");
  const poetry = await upgrades.deployProxy(ScenebluePoetry, ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'])

  await poetry.deployed();

  console.log("Sceneblue poetry contract deployed to:", poetry.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
