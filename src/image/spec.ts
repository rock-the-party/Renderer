import { IBaseSpec } from "../interface-private";
import { Point, RendererSpecType, Size } from "../interfaces";

export interface ImageSpec extends IBaseSpec {
  spec: RendererSpecType.ImageSpec;
  image: CanvasImageSource | OffscreenCanvas;
  center: Point;
  size: Size;
}