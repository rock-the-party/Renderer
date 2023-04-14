import { IBaseSpec } from "../interface-private";
import { RendererSpecType, Point } from "../interfaces";

export type TextSpec = IBaseSpec & {
  spec: RendererSpecType.TextSpec;
  startPoint: Point;
  text: string;
  maxWidth?: number;
  direction?: CanvasDirection;
  font?: string;
  fontKerning?: CanvasFontKerning;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}