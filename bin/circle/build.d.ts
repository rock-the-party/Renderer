import { IBuilder } from "../interface-private";
import { Point, RadianAngle } from "../interfaces";
import { CircleSpec } from "./spec";
export declare function BuildCircleSpec(): CircleSpecBuilder;
declare class CircleSpecBuilder implements IBuilder {
    private center;
    private radius;
    private isFilled;
    private isClockwise;
    private radianAngle;
    private metadata;
    Reset(): void;
    Alpha(alpha: number): CircleSpecBuilder;
    Rotation(rotation: number): CircleSpecBuilder;
    FillStyle(color: string | CanvasGradient | CanvasPattern): CircleSpecBuilder;
    StrokeStyle(color: string | CanvasGradient | CanvasPattern): CircleSpecBuilder;
    Radius(r: number): CircleSpecBuilder;
    IsFilled(isFilled: boolean): CircleSpecBuilder;
    Center(center: Point): CircleSpecBuilder;
    RadianAngle(radianAngle: RadianAngle): CircleSpecBuilder;
    Create(): CircleSpec;
}
export {};
