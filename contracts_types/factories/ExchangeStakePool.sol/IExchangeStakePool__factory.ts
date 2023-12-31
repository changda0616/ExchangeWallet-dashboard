/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IExchangeStakePool,
  IExchangeStakePoolInterface,
} from "../../ExchangeStakePool.sol/IExchangeStakePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeManage",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IExchangeStakePool__factory {
  static readonly abi = _abi;
  static createInterface(): IExchangeStakePoolInterface {
    return new utils.Interface(_abi) as IExchangeStakePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchangeStakePool {
    return new Contract(address, _abi, signerOrProvider) as IExchangeStakePool;
  }
}
