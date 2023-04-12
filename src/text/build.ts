import { IBuilder } from "../interface-private";
import { MetaData, Point, RendererSpecType } from "../interfaces";
import { TextSpec } from "./spec";


export function BuildTextSpec () {
  return new TextSpecBuilder();
}

class TextSpecBuilder implements IBuilder {
  private metadata: MetaData = { };
  private startPoint: Point = { x: 0, y: 0 };
  private text: string = "";
  private maxWidth?: number;
  private direction?: CanvasDirection;
  private font?: string;
  private fontKerning?: CanvasFontKerning;
  private textAlign?: CanvasTextAlign;
  private textBaseline?: CanvasTextBaseline;

  public Reset(): void {
    this.metadata = { };
    this.startPoint = { x: 0, y: 0 };
    this.text = "";
    this.maxWidth = undefined;
    this.direction = undefined;
    this.font = undefined;
    this.fontKerning = undefined;
    this.textAlign = undefined;
    this.textBaseline = undefined;
  }

  public Alpha(alpha: number): TextSpecBuilder {
    this.metadata.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): TextSpecBuilder {
    this.metadata.rotation = rotation;
    return this;
  }

  public FillStyle (color: string | CanvasGradient | CanvasPattern): TextSpecBuilder {
    this.metadata.fillStyle = color;
    return this;
  }

  public StrokeStyle (color: string | CanvasGradient | CanvasPattern): TextSpecBuilder {
    this.metadata.strokeStyle = color;
    return this;
  }

  public StartPoint (startPoint: Point): TextSpecBuilder {
    this.startPoint = startPoint;
    return this;
  }

  public Text (text: string): TextSpecBuilder {
    this.text = text;
    return this;
  }

  public MaxWidth (maxWidth?: number): TextSpecBuilder {
    this.maxWidth = maxWidth;
    return this;
  }

  public Direction (direction?: CanvasDirection): TextSpecBuilder {
    this.direction = direction;
    return this;
  }

  public Font (font?: string): TextSpecBuilder {
    this.font = font;
    return this;
  }

  public FontKerning (fontKerning: CanvasFontKerning): TextSpecBuilder {
    this.fontKerning = fontKerning;
    return this;
  }

  public TextAlign (textAlign: CanvasTextAlign): TextSpecBuilder {
    this.textAlign = textAlign;
    return this;
  }

  public TextBaseline (textBaseline: CanvasTextBaseline): TextSpecBuilder {
    this.textBaseline = textBaseline;
    return this;
  }

  public Create(): TextSpec {
    return {
      spec: RendererSpecType.TextSpec,
      metadata: this.metadata,
      startPoint: this.startPoint,
      text: this.text,
      maxWidth: this.maxWidth,
      direction: this.direction,
      font: this.font,
      fontKerning: this.fontKerning,
      textAlign: this.textAlign,
      textBaseline: this.textBaseline
    }
  }
}
