import { IBaseSpec } from "../interface-private";
import { Point, RendererSpecType, Size } from "../interfaces";

export type ImageSpec = IBaseSpec & {
  spec: RendererSpecType.ImageSpec;
  image: CanvasImageSource | OffscreenCanvas;
  center: Point;
  size: Size;
}