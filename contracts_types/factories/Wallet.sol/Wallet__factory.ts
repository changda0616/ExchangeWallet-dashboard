/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wallet, WalletInterface } from "../../Wallet.sol/Wallet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "OwnerRecovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryAddressAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryAddressConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryAddressRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "RecoveryStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "addRecoveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isRecoveryAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recoveryAddress",
        type: "address",
      },
    ],
    name: "removeRecoveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5061001d61002a565b61002561002a565b6100e9565b600054610100900460ff16156100965760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100e7576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b608051611229610120600039600081816103be015281816103fe0152818161049d015281816104dd015261057001526112296000f3fe6080604052600436106100e15760003560e01c80637e3bfa1d1161007f578063923689e411610059578063923689e41461026f578063a630890914610284578063c71daccb146102a4578063f2fde38b146102b757600080fd5b80637e3bfa1d146102125780638129fc1c146102325780638da5cb5b1461024757600080fd5b806352d1902d116100bb57806352d1902d1461018c57806363332f53146101af578063715018a6146101e857806372229ee0146101fd57600080fd5b80632e1a7d4d146101225780633659cfe6146101575780634f1ef2861461017957600080fd5b3661011d5760405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2005b600080fd5b34801561012e57600080fd5b5061014261013d366004610f23565b6102d7565b60405190151581526020015b60405180910390f35b34801561016357600080fd5b50610177610172366004610f53565b6103b4565b005b610177610187366004610f84565b610493565b34801561019857600080fd5b506101a1610563565b60405190815260200161014e565b3480156101bb57600080fd5b506101426101ca366004610f53565b6001600160a01b0316600090815260cc602052604090205460ff1690565b3480156101f457600080fd5b50610177610616565b34801561020957600080fd5b5061017761062a565b34801561021e57600080fd5b5061017761022d366004610f53565b610789565b34801561023e57600080fd5b506101776107da565b34801561025357600080fd5b506033546040516001600160a01b03909116815260200161014e565b34801561027b57600080fd5b506101776108eb565b34801561029057600080fd5b5061017761029f366004610f53565b6109dd565b3480156102b057600080fd5b50476101a1565b3480156102c357600080fd5b506101776102d2366004610f53565b610a31565b60006102e1610aa7565b8147101561032b5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b60448201526064015b60405180910390fd5b604051600090339084908381818185875af1925050503d806000811461036d576040519150601f19603f3d011682016040523d82523d6000602084013e610372565b606091505b505060405184815290915033907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a290505b919050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036103fc5760405162461bcd60e51b815260040161032290611046565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166104456000805160206111ad833981519152546001600160a01b031690565b6001600160a01b03161461046b5760405162461bcd60e51b815260040161032290611092565b61047481610b01565b6040805160008082526020820190925261049091839190610b09565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036104db5760405162461bcd60e51b815260040161032290611046565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166105246000805160206111ad833981519152546001600160a01b031690565b6001600160a01b03161461054a5760405162461bcd60e51b815260040161032290611092565b61055382610b01565b61055f82826001610b09565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106035760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610322565b506000805160206111ad83398151915290565b61061e610aa7565b6106286000610c79565b565b33600090815260cc602052604090205460ff166106825760405162461bcd60e51b81526020600482015260166024820152754e6f742061207265636f76657279206164647265737360501b6044820152606401610322565b6201518060ca5461069391906110f4565b4211156106e25760405162461bcd60e51b815260206004820152601960248201527f5265636f7665727920706572696f642068617320656e646564000000000000006044820152606401610322565b60c980549060006106f283611107565b909155505060405133907fa7a3df619a03c4b5742f0bb0ef23271d374c9327e13ca72d609328b5ec4f3d7890600090a2600260c954106106285760006107406033546001600160a01b031690565b905061074b33610c79565b600060c981905560405133916001600160a01b038416917f658a0f6969d7663ef009b782e098ec752cdf0beed99b9a188dd1d77d539a1a3e9190a350565b610791610aa7565b6001600160a01b038116600081815260cc6020526040808220805460ff19169055517f250546491931526473f4670f0964714a4f7272548fa2040f447d653f5cffbbb79190a250565b600054610100900460ff16158080156107fa5750600054600160ff909116105b806108145750303b158015610814575060005460ff166001145b6108775760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610322565b6000805460ff19166001179055801561089a576000805461ff0019166101001790555b6108a333610c79565b8015610490576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b33600090815260cc602052604090205460ff166109435760405162461bcd60e51b81526020600482015260166024820152754e6f742061207265636f76657279206164647265737360501b6044820152606401610322565b60cb5442116109945760405162461bcd60e51b815260206004820152601760248201527f5265636f7665727920697320696e20636f6f6c646f776e0000000000000000006044820152606401610322565b4260ca8190556109a8906203f480906110f4565b60cb55600160c95560405133907fcd4e9df2b0a742bc5628c20baf55859f839c034aa76a32f600d6b085c4de482990600090a2565b6109e5610aa7565b6001600160a01b038116600081815260cc6020526040808220805460ff19166001179055517fb5e3e4cd19e074ee95bbd1f4d13e94edb122e9abf12b57d96d2c4aea9b5dc5eb9190a250565b610a39610aa7565b6001600160a01b038116610a9e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610322565b61049081610c79565b6033546001600160a01b031633146106285760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610322565b610490610aa7565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610b4157610b3c83610ccb565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610b9b575060408051601f3d908101601f19168201909252610b9891810190611120565b60015b610bfe5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610322565b6000805160206111ad8339815191528114610c6d5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610322565b50610b3c838383610d67565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381163b610d385760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610322565b6000805160206111ad83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b610d7083610d92565b600082511180610d7d5750805b15610b3c57610d8c8383610dd2565b50505050565b610d9b81610ccb565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610df783836040518060600160405280602781526020016111cd60279139610e00565b90505b92915050565b6060600080856001600160a01b031685604051610e1d919061115d565b600060405180830381855af49150503d8060008114610e58576040519150601f19603f3d011682016040523d82523d6000602084013e610e5d565b606091505b5091509150610e6e86838387610e78565b9695505050505050565b60608315610ee7578251600003610ee0576001600160a01b0385163b610ee05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610322565b5081610ef1565b610ef18383610ef9565b949350505050565b815115610f095781518083602001fd5b8060405162461bcd60e51b81526004016103229190611179565b600060208284031215610f3557600080fd5b5035919050565b80356001600160a01b03811681146103af57600080fd5b600060208284031215610f6557600080fd5b610df782610f3c565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610f9757600080fd5b610fa083610f3c565b9150602083013567ffffffffffffffff80821115610fbd57600080fd5b818501915085601f830112610fd157600080fd5b813581811115610fe357610fe3610f6e565b604051601f8201601f19908116603f0116810190838211818310171561100b5761100b610f6e565b8160405282815288602084870101111561102457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b80820180821115610dfa57610dfa6110de565b600060018201611119576111196110de565b5060010190565b60006020828403121561113257600080fd5b5051919050565b60005b8381101561115457818101518382015260200161113c565b50506000910152565b6000825161116f818460208701611139565b9190910192915050565b6020815260008251806020840152611198816040850160208701611139565b601f01601f1916919091016040019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c841620f87a9c0b2910e0c8926426f8e282481579bb19d8952999e3b2a94ff6664736f6c63430008130033";

type WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wallet__factory extends ContractFactory {
  constructor(...args: WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Wallet> {
    return super.deploy(overrides || {}) as Promise<Wallet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  override connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}
