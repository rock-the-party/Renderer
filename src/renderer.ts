import { DrawCircle } from "./circle";
import { DrawImage } from "./image";
import { DrawableSpecs, RendererSpecType } from "./interfaces";
import { DrawRect } from "./rect";
import { DrawText } from "./text";

export class  Renderer {
  private context: CanvasRenderingContext2D | null;

  constructor (private canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext("2d");
  }

  public Draw(spec: DrawableSpecs): void {
    if (this.canvas == null) throw new Error ("Canvas is not defined");
    if (this.context == null) throw new Error ("Context is not defined");

    this.context.beginPath();
    switch (spec.spec) {
      case RendererSpecType.RectSpec:
        DrawRect(spec, this.context);
        break;
      case RendererSpecType.CircleSpec:
        DrawCircle(spec, this.context)
        break;
      case RendererSpecType.TextSpec:
        DrawText(spec, this.context);
        break;
      case RendererSpecType.ImageSpec:
        DrawImage(spec, this.context);
        break;
    }
  }

  public ClearCanvas(): void {
    if (this.canvas == null) throw new Error ("Canvas is not defined");
    if (this.context == null) throw new Error ("Context is not defined");

    this.context.beginPath();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
