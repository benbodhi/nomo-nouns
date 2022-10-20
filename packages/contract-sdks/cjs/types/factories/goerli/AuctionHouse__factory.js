"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionHouse__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "auction",
        outputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "bidder",
                type: "address",
            },
            {
                internalType: "bool",
                name: "settled",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "settled",
                type: "bool",
            },
        ],
        name: "createAuction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class AuctionHouse__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AuctionHouse__factory = AuctionHouse__factory;
AuctionHouse__factory.abi = _abi;