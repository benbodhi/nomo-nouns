/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockArt,
  MockArtInterface,
} from "../../../contracts/mock/MockArt";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "backgrounds",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bgs",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051808201909152600681526564356437653160d01b602080830191909152600080805290527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5906100659082610161565b5060408051808201909152600681526565316437643560d01b6020808301919091526001600090815290527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d906100bc9082610161565b50610220565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806100ec57607f821691505b60208210810361010c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561015c57600081815260208120601f850160051c810160208610156101395750805b601f850160051c820191505b8181101561015857828155600101610145565b5050505b505050565b81516001600160401b0381111561017a5761017a6100c2565b61018e8161018884546100d8565b84610112565b602080601f8311600181146101c357600084156101ab5750858301515b600019600386901b1c1916600185901b178555610158565b600085815260208120601f198616915b828110156101f2578886015182559484019460019091019084016101d3565b50858210156102105787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6102c88061022f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806304bde4dd1461003b5780638cdde8aa14610064575b600080fd5b61004e6100493660046101b3565b610077565b60405161005b91906101cc565b60405180910390f35b61004e6100723660046101b3565b610119565b60008181526020819052604090208054606091906100949061023f565b80601f01602080910402602001604051908101604052809291908181526020018280546100c09061023f565b801561010d5780601f106100e25761010080835404028352916020019161010d565b820191906000526020600020905b8154815290600101906020018083116100f057829003601f168201915b50505050509050919050565b600060208190529081526040902080546101329061023f565b80601f016020809104026020016040519081016040528092919081815260200182805461015e9061023f565b80156101ab5780601f10610180576101008083540402835291602001916101ab565b820191906000526020600020905b81548152906001019060200180831161018e57829003601f168201915b505050505081565b6000602082840312156101c557600080fd5b5035919050565b600060208083528351808285015260005b818110156101f9578581018301518582016040015282016101dd565b8181111561020b576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c9082168061025357607f821691505b60208210810361028c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220b17e371f8e35b8e4c1c96fe3505cf2d460248ddb27fb7d2b19aa1187763e8d9f64736f6c634300080f0033";

type MockArtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockArtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockArt__factory extends ContractFactory {
  constructor(...args: MockArtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockArt> {
    return super.deploy(overrides || {}) as Promise<MockArt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockArt {
    return super.attach(address) as MockArt;
  }
  override connect(signer: Signer): MockArt__factory {
    return super.connect(signer) as MockArt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockArtInterface {
    return new utils.Interface(_abi) as MockArtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockArt {
    return new Contract(address, _abi, signerOrProvider) as MockArt;
  }
}
