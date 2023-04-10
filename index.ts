

export type Point = {
  x: number;
  y: number;
  z: number;
}

export type Size = {
  height: number;
  width: number;
  depth: number;
}

export type MetaData = {
  alpha?: number;
  rotation?: number;
  color?: string;
}

interface IBaseSpec {
  metadata: MetaData;
  spec: RendererSpecType;
}

export enum RendererSpecType {
  RectSpec = "RectSpec",
  CircleSpec = "CircleSpec",
  TextSpec = "TextSpec",
  ImageSpec = "ImageSpec",
}

export const RENDERER_SPEC_TYPE = Object.values(RendererSpecType);

export interface RectSpec extends IBaseSpec {
  spec: RendererSpecType.RectSpec;
  startPoint: Point;
  size: Size;
}

export interface CircleSpec extends IBaseSpec {
  spec: RendererSpecType.CircleSpec;
  center: Point;
  radius: number;
  isFilledIn: boolean;
}

export interface TextSpec extends IBaseSpec {
  spec: RendererSpecType.TextSpec;
  font?: string;
  text: string;
  position: Point;
  maxWidth?: number;
}

export interface ImageSpec extends IBaseSpec {
  spec: RendererSpecType.ImageSpec;
  image: CanvasImageSource;
  center: Point;
  size: Size;
}


export interface IRenderer {
  ClearCanvas(): void;
  Draw(spec: RectSpec | CircleSpec | TextSpec | ImageSpec): void;
}

export class  Renderer implements IRenderer {
  private context: CanvasRenderingContext2D | null;

  constructor (private canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext("2d");
  }

  public Draw(spec: RectSpec | CircleSpec | TextSpec | ImageSpec): void {
    switch (spec.spec) {
      case RendererSpecType.RectSpec:
        this.DrawRect(spec);
        break;
      case RendererSpecType.CircleSpec:
        this.DrawCircle(spec)
        break;
      case RendererSpecType.TextSpec:
        this.DrawText(spec);
        break;
      case RendererSpecType.ImageSpec:
        this.DrawImage(spec);
        break;
    }
  }


  public ClearCanvas(): void {
    if (this.context == null) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  DrawRect(spec: RectSpec): void {
    if (this.context == null) return;
    this.context.save()

    if (spec.metadata.alpha) {
      this.context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      this.context.translate(spec.startPoint.x, spec.startPoint.y);   
      this.context.rotate(spec.metadata.rotation);
      this.context.translate(-spec.startPoint.x, -spec.startPoint.y);
    }

    if (spec.metadata.color) {
      this.context.fillStyle = spec.metadata.color;
    }

    this.context.fillRect(spec.startPoint.x, spec.startPoint.y, spec.size.width, spec.size.height);

    this.context.restore();
  }

  DrawCircle(spec: CircleSpec): void {
    if (this.context == null) return;
    this.context.save()

    if (spec.metadata.alpha) {
      this.context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.color) {
      this.context.fillStyle = spec.metadata.color;
    }

    if(spec.isFilledIn) {
      this.context.fill();
    } else {
      this.context.stroke();
    }

    this.context.restore();
  }

  DrawText(spec: TextSpec): void {
    if (this.context == null) return;
    this.context.save()

    if (spec.metadata.alpha) {
      this.context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      this.context.translate(spec.position.x, spec.position.y);   
      this.context.rotate(spec.metadata.rotation);
      this.context.translate(-spec.position.x, -spec.position.y);
    }

    if (spec.metadata.color) {
      this.context.fillStyle = spec.metadata.color;
    }

    if (spec.font) {
      this.context.font = spec.font;
    }

    this.context.fillText(spec.text, spec.position.x, spec.position.y, spec.maxWidth);

    this.context.restore();
  }

  DrawImage(spec: ImageSpec): void {
    if (this.context == null) return;
    this.context.save()

    if (spec.metadata.alpha) {
      this.context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      this.context.translate(spec.center.x, spec.center.y);   
      this.context.rotate(spec.metadata.rotation);
      this.context.translate(-spec.center.x, -spec.center.y);
    }

    if (spec.metadata.color) {
      this.context.fillStyle = spec.metadata.color;
    }

    this.context.drawImage(
      spec.image,
      spec.center.x - spec.size.width,
      spec.center.y - spec.size.height,
      spec.size.width,
      spec.size.height
    );

    this.context.restore();
  }
}
