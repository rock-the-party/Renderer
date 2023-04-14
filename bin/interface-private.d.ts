import { DrawableSpecs, MetaData, RendererSpecType } from "./interfaces";
export type IBaseSpec = {
    metadata: MetaData;
    spec: RendererSpecType;
};
export interface IBuilder {
    Reset(): void;
    Create(): DrawableSpecs;
}
