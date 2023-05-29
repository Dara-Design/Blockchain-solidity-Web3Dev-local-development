const ethers = require('ethers');
const fs = require("fs-extra");

async function  main(){
//compile them in our code
//1.compile them seperately -we choose this //RUN  -yarn compile- in terminal

/* 
after we compile we get two different files in our folder .abi and .bin
in order to deppoy our contract we gonna need tha abi and bin -binary compiled code -
-for reading that two files we gonna need fs-extra
*/
//2. we need to connect our code to blockchain(blockchain node)
//this is ganash server adress(blockchain node) -rpc url :  https://127.0.0.1:7545

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545")//obezbedjujemo url chain-a,kacimo se na blockchain
//wallet requires two parameters - private key and provider *this is  a ganesh private key; NIKADA NE OBJAVLJUJ SVOJ PRAVI PRIVATNI KLJUC NA GITHUB-U

//3.we gonna need abi and bin
const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi","utf8");
const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8");

/*4.contract factory
in ethers contract factory is just an object that you can use to deploy contracts
we pass it 3 parameters :
abi- so it knows how to interact with contract
bin-this is the main compiled code 
 wallet -so we can use private key to sign this contract
*/
const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
console.log("Deploying, please wait...");
const contract = await contractFactory.deploy(); //STOP HERE, WAIT FOR CONTTRACT TO DEPLOY!//this returns contract object
console.log(contract);
//5.type node deploy.js in terminal

}

main()
 .then(() => process.exit(0))
 .catch((error)=>{
    console.error(error);
    process.exit(1);
 });