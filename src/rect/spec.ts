import { IBaseSpec } from "../interface-private";
import { Point, RendererSpecType, Size } from "../interfaces";

export interface RectSpec extends IBaseSpec {
    spec: RendererSpecType.RectSpec;
    startPoint: Point;
    size: Size;
}
