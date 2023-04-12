import { IBaseSpec, Point, RendererSpecType, Size } from "../interfaces";


export interface ImageSpec extends IBaseSpec {
  spec: RendererSpecType.ImageSpec;
  image: CanvasImageSource;
  center: Point;
  size: Size;
}

export class ImageSpecBuilder {
  private alpha: number | null = null;
  private rotation: number | null = null;
  private color: string | null = null;

  public Alpha(alpha: number): ImageSpecBuilder {
    this.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): ImageSpecBuilder {
    this.rotation = rotation;
    return this;
  }

  public Color (color: string): ImageSpecBuilder {
    this.color = color;
    return this;
  }
}

export function DrawImage(spec: ImageSpec, context: CanvasRenderingContext2D): void {
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

    context.drawImage(
      spec.image,
      spec.center.x - spec.size.width,
      spec.center.y - spec.size.height,
      spec.size.width,
      spec.size.height
    );

    context.restore();
  }
