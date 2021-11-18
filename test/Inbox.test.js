// Install Modules => mocha ganache-cli web3
// to compare to variables 
const assert = require("assert");

// For local testing network
const ganache = require("ganache-cli");

/*TO have access to the smart contract deployed on the blackChain
 we use web3 library*/
// NB: we create a web3 with a Uppercase variables because
// we Gonna create an instance from it
 const Web3 = require("web3");

 // Instance of Web3 using a "new" keyword 
 const web3 = new Web3(ganache.provider());

 // we should import The byteCode and Interface from the compiler 
const { interface, bytecode} = require("../compile");

let accounts;
let inbox;

beforeEach(async()=> {
    // Ganache offers 10 unlocked contract for the seek of testing
    accounts = await web3.eth.getAccounts();

    // Use one these account to deploy the contract
    // 29 => teaches web3 about what methods our contract has
    // 31 => tells web3 that we want to deploy a new copy of this contract
   // 33 => instruct web3 to send out a transaction to the network to create this contract
   // the inbox is javascript presentation of the contract on the blockchain
    inbox =  await new web3.eth.Contract(JSON.parse(interface))
            .deploy({data : bytecode, arguments : ["Hi There"]})
            .send({ from : accounts[0], gas : "1000000"})
});


describe("Inbox", ()=> {
    // check if the contract is deployed
    it("The contract has been deployed", ()=> {
        // console.log(inbox);
        assert.ok(inbox.options.address)
    });

    // Check if whenever we deployed a contract we got a default message
    it("Hello from the contract", async ()=> {
        // Inbox.methods it the way to change the data and to get it back from the contract
        const message = await inbox.methods.message().call();
        assert.equal(message, "Hi There")
    });

    // To modify the message inside the contract
    it("the message has been deployed", async ()=> {
        // this line will return the hash of the transaction
        await inbox.methods.setMessage("cecilia").send({ from: accounts[0]})
        // get the message to test if the message got changed
        const message = await inbox.methods.message().call();
        // test
        assert.equal(message, "cecilia")
    })
});



/* By using ganache accounts it for testing, it useful to not create
each time an accounts when we want to test a contract.
- We can deploy contracts, send money, call function 
*/
























// test with mocha example with a Car class
// class Car {
//     park() {
//         return "parked";
//     }

//     drive() {
//         return "vroom";
//     }
// }

// to test with mocha we change our test file in the package.json to mocha
// describe function it to group the it function


// let car; => so it going to be access by all the functions

// let car;

// we use beforeEach to not repeat the same code inside it
// Execute some general code
// beforeEach(()=> {
//     car = new Car;
// });


// describe("Car", ()=> {
//     it('can park', ()=> {
//         /* const car = new Car; instance of an object */ 
//         assert.equal(car.park(), "parked")
//     });

//     it("can drive", ()=> {
//         assert.equal(car.drive(), "vroom")
//     });
// });





