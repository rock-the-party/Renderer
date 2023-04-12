import { DrawableSpecs } from "./interfaces";
export interface IRenderer {
    ClearCanvas(): void;
    Draw(spec: DrawableSpecs): void;
}
export declare class Renderer implements IRenderer {
    private canvas;
    private context;
    constructor(canvas: HTMLCanvasElement);
    Draw(spec: DrawableSpecs): void;
    ClearCanvas(): void;
}
