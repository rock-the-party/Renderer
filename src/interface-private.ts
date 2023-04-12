import { DrawableSpecs, MetaData, RendererSpecType } from "./interfaces";

export interface IBaseSpec {
  metadata: MetaData;
  spec: RendererSpecType;
}

export interface IBuilder {
  Reset(): void;
  Create(): DrawableSpecs;
}