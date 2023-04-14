import { IBaseSpec } from "../interface-private";
import { Point, RendererSpecType, Size } from "../interfaces";

export type RectSpec = IBaseSpec & {
    spec: RendererSpecType.RectSpec;
    startPoint: Point;
    size: Size;
}
