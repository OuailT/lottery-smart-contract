/* 1- "Path" is Standard module that will help us to generate a path
to Reach the inbox.sol it to guarantee that we always have a valid path
 across window or linux */
const path = require("path");
const fs = require("fs")

// 2- create my path // __dirname goes to all the top of current file (inbox)
const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");

// 3- file system module to read the path
const source = fs.readFileSync(inboxPath, "utf8")

/* We need to call the solidity compiler solc to compile the smart contract 
into Bytecode to deployed it on the ethereum blockchain  */
const solc = require("solc");

// 1 represent how many contract we wanna compile
/* 2 in order to make the object returned from compiler accessible in our project
     we going to use exports and target the property Inbox */
module.exports = solc.compile(source, 1).contracts[":Inbox"];
// => this will return a value as object
/* the property contract + the name of the contract (Inbox) 
    inside the inbox object we have two properties that we care about
    1- Bytecode : it is the code of our contract that will be executed and stored on the ethereum blockchain network.
    2- Interface : that represents the ABI contract that presents the layer of
    the solidity world and js world
    ** ABI Stands for Application Binary Interface it is the standard of interacting with The
    Ethereum Ecosystem
*/




