import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AssetsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Assets {
  readonly id: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly Images?: string;
  readonly FileSize?: string;
  readonly CompatableEngineVer?: string;
  readonly DateCreated?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Assets, AssetsMetaData>);
  static copyOf(source: Assets, mutator: (draft: MutableModel<Assets, AssetsMetaData>) => MutableModel<Assets, AssetsMetaData> | void): Assets;
}