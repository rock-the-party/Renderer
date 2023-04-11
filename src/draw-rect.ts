import { Point, RendererSpecType, Size, IBaseSpec } from "./interfaces";

export interface RectSpec extends IBaseSpec {
    spec: RendererSpecType.RectSpec;
    startPoint: Point;
    size: Size;
    stroke?:  string | CanvasGradient | CanvasPattern | null;
}

export class RectSpecBuilder {
  private alpha: number | null = null;
  private rotation: number | null = null;
  private color: string | null = null;
  private stroke: string | CanvasGradient | CanvasPattern | null = null;

  public Alpha(alpha: number): RectSpecBuilder {
    this.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): RectSpecBuilder {
    this.rotation = rotation;
    return this;
  }

  public Color (color: string): RectSpecBuilder {
    this.color = color;
    return this;
  }
}
    
export function DrawRect(spec: RectSpec, context: CanvasRenderingContext2D): void {
    if (context == null) return;
    context.save()

    if (spec.metadata.alpha) {
      context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      context.translate(spec.startPoint.x, spec.startPoint.y);   
      context.rotate(spec.metadata.rotation);
      context.translate(-spec.startPoint.x, -spec.startPoint.y);
    }

    if (spec.metadata.color) {
      context.fillStyle = spec.metadata.color;
    }

    context.fillRect(spec.startPoint.x, spec.startPoint.y, spec.size.width, spec.size.height);

    context.restore();
  }
