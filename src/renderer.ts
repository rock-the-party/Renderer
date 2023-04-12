import { DrawCircle } from "./circle";
import { DrawImage } from "./image";
import { DrawableSpecs, RendererSpecType } from "./interfaces";
import { DrawRect } from "./rect";
import { DrawText } from "./text";

export interface IRenderer {
  ClearCanvas(): void;
  Draw(spec: DrawableSpecs): void;
}

export class  Renderer implements IRenderer {
  private context: CanvasRenderingContext2D | null;

  constructor (private canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext("2d");
  }

  public Draw(spec: DrawableSpecs): void {
    switch (spec.spec) {
      case RendererSpecType.RectSpec:
        if (this.context) {
          DrawRect(spec, this.context);
        }
        break;
      case RendererSpecType.CircleSpec:
        if (this.context) {
          DrawCircle(spec, this.context)
        }
        break;
      case RendererSpecType.TextSpec:
        if (this.context) {
          DrawText(spec, this.context);
        }
        break;
      case RendererSpecType.ImageSpec:
        if (this.context) {
          DrawImage(spec, this.context);
        }
        break;
    }
  }

  public ClearCanvas(): void {
    if (this.context == null) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
