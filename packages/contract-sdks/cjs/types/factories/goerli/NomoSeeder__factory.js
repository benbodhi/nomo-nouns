"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomoSeeder__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "contract INomoNounsDescriptor",
                name: "descriptor",
                type: "address",
            },
        ],
        name: "generateSeed",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint40",
                        name: "nounId",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "background",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "body",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "accessory",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "head",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "glasses",
                        type: "uint40",
                    },
                ],
                internalType: "struct INomoNounsSeeder.Seed",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class NomoSeeder__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NomoSeeder__factory = NomoSeeder__factory;
NomoSeeder__factory.abi = _abi;