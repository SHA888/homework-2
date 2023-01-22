async function main() {
    // Grab the contract factory
    const MyCoolNFT = await ethers.getContractFactory("MyCoolNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myCoolNFT = await MyCoolNFT.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", myCoolNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });