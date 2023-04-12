import { IBuilder } from "../interface-private";
import { Point, Size } from "../interfaces";
import { ImageSpec } from "./spec";
export declare function BuildImageSpec(): ImageSpecBuilder;
declare class ImageSpecBuilder implements IBuilder {
    private metadata;
    private image;
    private center;
    private size;
    Reset(): void;
    Alpha(alpha: number): ImageSpecBuilder;
    Rotation(rotation: number): ImageSpecBuilder;
    Image(image?: CanvasImageSource | OffscreenCanvas | null): ImageSpecBuilder;
    Center(center: Point): ImageSpecBuilder;
    Size(size: Size): ImageSpecBuilder;
    Create(): ImageSpec;
}
export {};
