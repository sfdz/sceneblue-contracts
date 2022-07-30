import { ethers, upgrades } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();
  const admin = signers[0]; // 0xfd13953436CDbEb4232eF6FC4b7f069C7c70B1FA
  const ScenebluePoetry = await ethers.getContractFactory("ScenebluePoetry", admin);
  // Let the admin also be the mint authority
  const poetry = await upgrades.deployProxy(ScenebluePoetry, [admin.address])

  await poetry.deployed();

  console.log("Sceneblue poetry contract deployed to:", poetry.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
