// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Box {

    uint private number;

    function setNumber(uint _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint){
        return number;
    }
}
