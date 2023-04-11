import { IBaseSpec, Point, RadianAngle, RendererSpecType } from "./interfaces";

export interface CircleSpec extends IBaseSpec {
  spec: RendererSpecType.CircleSpec;
  center: Point;
  radius: number;
  isFilledIn: boolean;
  isCounterClockwise: boolean;
  angle: RadianAngle;
}

export class CircleSpecBuilder {
  private alpha: number | null = null;
  private rotation: number | null = null;
  private color: string | CanvasGradient | CanvasPattern | null = null;
  private stroke: string | CanvasGradient | CanvasPattern | null = null;
  private isFilled: boolean = true;
  private radius: number = 0;
  private isCounterClockwise = false;
  private angle: RadianAngle = {
    start: 0,
    end: Math.PI * 2
  };

  public Alpha(alpha: number): CircleSpecBuilder {
    this.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): CircleSpecBuilder {
    this.rotation = rotation;
    return this;
  }

  public Color (color: string): CircleSpecBuilder {
    this.color = color;
    return this;
  }

  public Radius(r: number): CircleSpecBuilder {
    this.radius = r;
    return this;
  }

}

export function DrawCircle(spec: CircleSpec, context: CanvasRenderingContext2D): void {
    if (context == null) return;
    context.save()

    if (spec.metadata.alpha) {
      context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
        context.translate(spec.center.x, spec.center.y);   
        context.rotate(spec.metadata.rotation);
        context.translate(-spec.center.x, -spec.center.y);
      }  

    if (spec.metadata.color) {
      context.fillStyle = spec.metadata.color;
    }

    if(spec.isFilledIn) {
      context.fill();
    } else {
      context.stroke();
    }

    context.restore();
  }
