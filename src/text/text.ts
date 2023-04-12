import { IBaseSpec, RendererSpecType, Point } from "../interfaces";

export interface TextSpec extends IBaseSpec {
  spec: RendererSpecType.TextSpec;
  font?: string;
  text: string;
  position: Point;
  maxWidth?: number;
}

export class TextSpecBuilder {
  private alpha: number | null = null;
  private rotation: number | null = null;
  private color: string | null = null;

  public Alpha(alpha: number): TextSpecBuilder {
    this.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): TextSpecBuilder {
    this.rotation = rotation;
    return this;
  }

  public Color (color: string): TextSpecBuilder {
    this.color = color;
    return this;
  }

}

export function DrawText(spec: TextSpec, context: CanvasRenderingContext2D): void {
    if (context == null) return;
    context.save()

    if (spec.metadata.alpha) {
      context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      context.translate(spec.position.x, spec.position.y);   
      context.rotate(spec.metadata.rotation);
      context.translate(-spec.position.x, -spec.position.y);
    }

    if (spec.metadata.color) {
      context.fillStyle = spec.metadata.color;
    }

    if (spec.font) {
      context.font = spec.font;
    }

    context.fillText(spec.text, spec.position.x, spec.position.y, spec.maxWidth);

    context.restore();
  }
