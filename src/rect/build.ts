import { IBuilder } from "../interface-private";
import { MetaData, Point, RendererSpecType, Size } from "../interfaces";
import { RectSpec } from "./spec";

export function BuildRectangleSpec() {
  return new RectSpecBuilder();
}

class RectSpecBuilder implements IBuilder {
  private metadata: MetaData = { };
  private startPoint: Point = { x: 0, y: 0 };
  private size: Size = { width: 0, height: 0 };

  public Reset(): void {
    this.metadata = { };
    this.startPoint = { x: 0, y: 0 };
    this.size = { width: 0, height: 0 };
  }

  public Alpha(alpha: number): RectSpecBuilder {
    this.metadata.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): RectSpecBuilder {
    this.metadata.rotation = rotation;
    return this;
  }

  public FillStyle (color: string | CanvasGradient | CanvasPattern): RectSpecBuilder {
    this.metadata.fillStyle = color;
    return this;
  }

  public Create(): RectSpec {
    return {
      spec: RendererSpecType.RectSpec,
      startPoint: this.startPoint,
      size: this.size,
      metadata: this.metadata
    }
  }
}
