// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DevPunks = await hre.ethers.getContractFactory("DevPunks");
  const devpunks = await DevPunks.deploy();
  var i = 0;
  const address = ""; //paste the address here
  const cid = "QmYSdXXioG6afze1k6NJVaUENJUbqRTwECDJgu5SoTMgdr"; //new cid goes here.
  await devpunks.deployed();
  console.log("deployed to:", "https://rinkeby.etherscan.io/address/"+devpunks.address);
  
  for (i = 0; i < 1337; i++) {
  await devpunks.mint(address,`https://gateway.pinata.cloud/ipfs/${cid}/${i}.json`);
  console.log("minted id:", i);
  // const uri = await devpunks.tokenURI(i);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
