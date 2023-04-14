import { IBaseSpec } from "../interface-private";
import { Point, RadianAngle, RendererSpecType } from "../interfaces";
export type CircleSpec = IBaseSpec & {
    spec: RendererSpecType.CircleSpec;
    center: Point;
    radius: number;
    isFilled: boolean;
    isClockwise: boolean;
    radianAngle: RadianAngle;
};
