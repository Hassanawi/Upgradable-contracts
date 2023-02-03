// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Box2 {
    uint256 private number;

    event valueChanged(uint256 number);

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function increment() public {
        number++;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}
