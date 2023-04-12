import { CircleSpec } from "./circle";
import { ImageSpec } from "./image";
import { RectSpec } from "./rect";
import { TextSpec } from "./text";
export type Point = {
    x: number;
    y: number;
};
export type Size = {
    height: number;
    width: number;
};
export type RadianAngle = {
    start: number;
    end: number;
};
export type MetaData = {
    alpha?: number;
    rotation?: number;
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    fillStyle?: string | CanvasGradient | CanvasPattern;
};
export declare enum RendererSpecType {
    RectSpec = "RectSpec",
    CircleSpec = "CircleSpec",
    TextSpec = "TextSpec",
    ImageSpec = "ImageSpec"
}
export declare const RENDERER_SPEC_TYPE: RendererSpecType[];
export type DrawableSpecs = RectSpec | CircleSpec | TextSpec | ImageSpec;
