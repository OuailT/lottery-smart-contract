pragma solidity ^0.4.17;


contract Inbox {
    // Storage variable / it will stored forever on the etherum blockchain
    string public message;

    // Constructor function is called Once the contract is deployed on etherum netwrok
    function Inbox(string initalMessage) public {
        message = initalMessage;
    }

    // This function called once the contrcat is disployed
    // we are modifying the the data 
    function setMessage(string newMessage) public {
        message = newMessage; 
    }

}