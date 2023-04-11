import { CircleSpecBuilder } from "./draw-circle";
import { ImageSpecBuilder } from "./draw-image";
import { RectSpecBuilder } from "./draw-rect";
import { TextSpecBuilder } from "./draw-text";
import { DrawableSpecs, RendererSpecType } from "./interfaces";

export class SpecFactory {
  public static CreateCircleSpec(): CircleSpecBuilder {
    return new CircleSpecBuilder();
  }

  public static CreateImageSpec(): ImageSpecBuilder {
    return new ImageSpecBuilder();
  }

  public static CreateRectSpec(): RectSpecBuilder {
    return new RectSpecBuilder();
  }

  public static CreateTextSpec(): TextSpecBuilder {
    return new TextSpecBuilder();
  }
}