/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ExchangeManageAbiInterface extends utils.Interface {
  functions: {
    "addExchange(string,address,address[])": FunctionFragment;
    "addSupportedAsset(address)": FunctionFragment;
    "exchanges(address)": FunctionFragment;
    "getExchangeDetails(address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "isAssetSupported(address,address)": FunctionFragment;
    "isExchangeExists(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "removeExchange(address)": FunctionFragment;
    "removeSupportedAsset(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addExchange"
      | "addSupportedAsset"
      | "exchanges"
      | "getExchangeDetails"
      | "initialize"
      | "isAssetSupported"
      | "isExchangeExists"
      | "owner"
      | "proxiableUUID"
      | "removeExchange"
      | "removeSupportedAsset"
      | "renounceOwnership"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addExchange",
    values: [string, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addSupportedAsset",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "exchanges", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getExchangeDetails",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAssetSupported",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isExchangeExists",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeExchange",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSupportedAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSupportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exchanges", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExchangeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAssetSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExchangeExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSupportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "ExchangeAdded(address,address[])": EventFragment;
    "ExchangeRemoved(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SupportedAssetAdded(address,address)": EventFragment;
    "SupportedAssetRemoved(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExchangeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExchangeRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupportedAssetAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupportedAssetRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface ExchangeAddedEventObject {
  wallet: string;
  assets: string[];
}
export type ExchangeAddedEvent = TypedEvent<
  [string, string[]],
  ExchangeAddedEventObject
>;

export type ExchangeAddedEventFilter = TypedEventFilter<ExchangeAddedEvent>;

export interface ExchangeRemovedEventObject {
  wallet: string;
}
export type ExchangeRemovedEvent = TypedEvent<
  [string],
  ExchangeRemovedEventObject
>;

export type ExchangeRemovedEventFilter = TypedEventFilter<ExchangeRemovedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SupportedAssetAddedEventObject {
  wallet: string;
  asset: string;
}
export type SupportedAssetAddedEvent = TypedEvent<
  [string, string],
  SupportedAssetAddedEventObject
>;

export type SupportedAssetAddedEventFilter =
  TypedEventFilter<SupportedAssetAddedEvent>;

export interface SupportedAssetRemovedEventObject {
  wallet: string;
  asset: string;
}
export type SupportedAssetRemovedEvent = TypedEvent<
  [string, string],
  SupportedAssetRemovedEventObject
>;

export type SupportedAssetRemovedEventFilter =
  TypedEventFilter<SupportedAssetRemovedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ExchangeManageAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeManageAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addExchange(
      name: string,
      wallet: string,
      assets: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    exchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; wallet: string }>;

    getExchangeDetails(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; walletAddress: string }>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isAssetSupported(
      wallet: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isExchangeExists(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    removeExchange(
      wallet: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  addExchange(
    name: string,
    wallet: string,
    assets: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addSupportedAsset(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  exchanges(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { name: string; wallet: string }>;

  getExchangeDetails(
    wallet: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { name: string; walletAddress: string }>;

  initialize(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isAssetSupported(
    wallet: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isExchangeExists(wallet: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  removeExchange(
    wallet: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeSupportedAsset(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    addExchange(
      name: string,
      wallet: string,
      assets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addSupportedAsset(asset: string, overrides?: CallOverrides): Promise<void>;

    exchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; wallet: string }>;

    getExchangeDetails(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; walletAddress: string }>;

    initialize(overrides?: CallOverrides): Promise<void>;

    isAssetSupported(
      wallet: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isExchangeExists(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    removeExchange(wallet: string, overrides?: CallOverrides): Promise<void>;

    removeSupportedAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "ExchangeAdded(address,address[])"(
      wallet?: string | null,
      assets?: string[] | null
    ): ExchangeAddedEventFilter;
    ExchangeAdded(
      wallet?: string | null,
      assets?: string[] | null
    ): ExchangeAddedEventFilter;

    "ExchangeRemoved(address)"(
      wallet?: string | null
    ): ExchangeRemovedEventFilter;
    ExchangeRemoved(wallet?: string | null): ExchangeRemovedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SupportedAssetAdded(address,address)"(
      wallet?: string | null,
      asset?: string | null
    ): SupportedAssetAddedEventFilter;
    SupportedAssetAdded(
      wallet?: string | null,
      asset?: string | null
    ): SupportedAssetAddedEventFilter;

    "SupportedAssetRemoved(address,address)"(
      wallet?: string | null,
      asset?: string | null
    ): SupportedAssetRemovedEventFilter;
    SupportedAssetRemoved(
      wallet?: string | null,
      asset?: string | null
    ): SupportedAssetRemovedEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    addExchange(
      name: string,
      wallet: string,
      assets: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    exchanges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getExchangeDetails(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    isAssetSupported(
      wallet: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExchangeExists(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    removeExchange(
      wallet: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addExchange(
      name: string,
      wallet: string,
      assets: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    exchanges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExchangeDetails(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isAssetSupported(
      wallet: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExchangeExists(
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeExchange(
      wallet: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeSupportedAsset(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}