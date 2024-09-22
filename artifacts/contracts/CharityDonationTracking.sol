// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract CharityDonationTracking {
    struct Donation {
        address donor;
        uint amount;
        uint256 date;
    }

    struct Receiver {
        string name;
        string reason;
        uint neededAmount;
        uint receivedAmount;
    }

    mapping(address => Donation[]) public donations;
    mapping(address => Receiver) public receivers;
    address public charityTrust;

    event DonationMade(address donor, address receiver, uint amount);

    modifier onlyCharityTrust() {
        require(msg.sender == charityTrust, "Not authorized");
        _;
    }

    constructor() {
        charityTrust = msg.sender;  // Charity trust is the contract deployer
    }

    function donate(address _receiver, uint _amount) public payable {
        require(msg.value == _amount, "Incorrect amount sent");

        donations[msg.sender].push(Donation(msg.sender, _amount, block.timestamp));
        receivers[_receiver].receivedAmount += _amount;
        emit DonationMade(msg.sender, _receiver, _amount);
    }

    function registerReceiver(string memory _name, string memory _reason, uint _neededAmount) public {
        receivers[msg.sender] = Receiver(_name, _reason, _neededAmount, 0);
    }

    function getReceiverDetails(address _receiver) public view returns (string memory, string memory, uint, uint) {
        Receiver memory receiver = receivers[_receiver];
        return (receiver.name, receiver.reason, receiver.neededAmount, receiver.receivedAmount);
    }

    function getDonations(address _donor) public view returns (Donation[] memory) {
        return donations[_donor];
    }
}
