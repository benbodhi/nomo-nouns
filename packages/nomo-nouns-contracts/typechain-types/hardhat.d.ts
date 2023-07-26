/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "INomoNounsDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INomoNounsDescriptor__factory>;
    getContractFactory(
      name: "INomoNounsSeeder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INomoNounsSeeder__factory>;
    getContractFactory(
      name: "INomoToNounMapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INomoToNounMapper__factory>;
    getContractFactory(
      name: "INounsAuctionHouseExtra",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsAuctionHouseExtra__factory>;
    getContractFactory(
      name: "MockArt",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockArt__factory>;
    getContractFactory(
      name: "MockAuctionHouse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAuctionHouse__factory>;
    getContractFactory(
      name: "MockDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockDescriptor__factory>;
    getContractFactory(
      name: "TestAuctionHouse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestAuctionHouse__factory>;
    getContractFactory(
      name: "NomoNFTDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NomoNFTDescriptor__factory>;
    getContractFactory(
      name: "NomoNounsDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NomoNounsDescriptor__factory>;
    getContractFactory(
      name: "NomoNounsDescriptorV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NomoNounsDescriptorV2__factory>;
    getContractFactory(
      name: "NomoNounsSeeder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NomoNounsSeeder__factory>;
    getContractFactory(
      name: "NomoNounsToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NomoNounsToken__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "ERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;
    getContractFactory(
      name: "INounsAuctionHouse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsAuctionHouse__factory>;
    getContractFactory(
      name: "IInflator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInflator__factory>;
    getContractFactory(
      name: "INounsArt",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsArt__factory>;
    getContractFactory(
      name: "INounsDescriptorMinimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsDescriptorMinimal__factory>;
    getContractFactory(
      name: "INounsDescriptorV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsDescriptorV2__factory>;
    getContractFactory(
      name: "INounsSeeder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INounsSeeder__factory>;
    getContractFactory(
      name: "ISVGRenderer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISVGRenderer__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC5267",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "EIP712",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "ShortStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "INomoNounsDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INomoNounsDescriptor>;
    getContractAt(
      name: "INomoNounsSeeder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INomoNounsSeeder>;
    getContractAt(
      name: "INomoToNounMapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INomoToNounMapper>;
    getContractAt(
      name: "INounsAuctionHouseExtra",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsAuctionHouseExtra>;
    getContractAt(
      name: "MockArt",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockArt>;
    getContractAt(
      name: "MockAuctionHouse",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAuctionHouse>;
    getContractAt(
      name: "MockDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockDescriptor>;
    getContractAt(
      name: "TestAuctionHouse",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestAuctionHouse>;
    getContractAt(
      name: "NomoNFTDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NomoNFTDescriptor>;
    getContractAt(
      name: "NomoNounsDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NomoNounsDescriptor>;
    getContractAt(
      name: "NomoNounsDescriptorV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NomoNounsDescriptorV2>;
    getContractAt(
      name: "NomoNounsSeeder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NomoNounsSeeder>;
    getContractAt(
      name: "NomoNounsToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NomoNounsToken>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "ERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryable>;
    getContractAt(
      name: "IERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AQueryable>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;
    getContractAt(
      name: "INounsAuctionHouse",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsAuctionHouse>;
    getContractAt(
      name: "IInflator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInflator>;
    getContractAt(
      name: "INounsArt",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsArt>;
    getContractAt(
      name: "INounsDescriptorMinimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsDescriptorMinimal>;
    getContractAt(
      name: "INounsDescriptorV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsDescriptorV2>;
    getContractAt(
      name: "INounsSeeder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INounsSeeder>;
    getContractAt(
      name: "ISVGRenderer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISVGRenderer>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
