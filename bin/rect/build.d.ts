import { IBuilder } from "../interface-private";
import { RectSpec } from "./spec";
export declare function BuildRectangleSpec(): RectSpecBuilder;
declare class RectSpecBuilder implements IBuilder {
    private metadata;
    private startPoint;
    private size;
    Reset(): void;
    Alpha(alpha: number): RectSpecBuilder;
    Rotation(rotation: number): RectSpecBuilder;
    FillStyle(color: string | CanvasGradient | CanvasPattern): RectSpecBuilder;
    Create(): RectSpec;
}
export {};
