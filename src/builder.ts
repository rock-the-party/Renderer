import { CircleSpecBuilder } from "./circle/draw";
import { ImageSpecBuilder } from "./image/draw";
import { RectSpecBuilder } from "./rect/draw";
import { TextSpecBuilder } from "./text/text";
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