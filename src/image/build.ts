import { IBuilder } from "../interface-private";
import { MetaData, Point, RendererSpecType, Size } from "../interfaces";
import { ImageSpec } from "./spec";


export function BuildImageSpec(): ImageSpecBuilder {
  return new ImageSpecBuilder();
}

class ImageSpecBuilder implements IBuilder {
  private metadata: MetaData = { };
  private image: CanvasImageSource | OffscreenCanvas | null = null;
  private center: Point = {x: 0, y: 0};
  private size: Size = { height: 0, width: 0 };

  public Reset(): void {
    this.metadata = { };
    this.image = null;
    this.center = {x: 0, y: 0};
    this.size = { height: 0, width: 0 };
  }

  public Alpha(alpha: number): ImageSpecBuilder {
    this.metadata.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): ImageSpecBuilder {
    this.metadata.rotation = rotation;
    return this;
  }

  public Image (image: CanvasImageSource | OffscreenCanvas | null = null): ImageSpecBuilder {
    this.image = image;
    return this;
  }

  public Center (center: Point): ImageSpecBuilder {
    this.center = center;
    return this;
  }

  public Size (size: Size): ImageSpecBuilder {
    this.size = size;
    return this;
  }

  public Create(): ImageSpec {
    return {
      spec: RendererSpecType.ImageSpec,
      image: this.image || new HTMLImageElement(),
      center: this.center,
      size: this.size,
      metadata: this.metadata
    }
  }
}