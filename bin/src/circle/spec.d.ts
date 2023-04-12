import { IBaseSpec } from "../interface-private";
import { Point, RadianAngle, RendererSpecType } from "../interfaces";
export interface CircleSpec extends IBaseSpec {
    spec: RendererSpecType.CircleSpec;
    center: Point;
    radius: number;
    isFilled: boolean;
    isClockwise: boolean;
    radianAngle: RadianAngle;
}
