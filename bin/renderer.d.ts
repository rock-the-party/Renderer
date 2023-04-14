import { DrawableSpecs } from "./interfaces";
export declare class Renderer {
    private canvas;
    private context;
    constructor(canvas: HTMLCanvasElement);
    Draw(spec: DrawableSpecs): void;
    ClearCanvas(): void;
}
