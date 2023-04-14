import { ImageSpec } from "./spec";


export function DrawImage(spec: ImageSpec, context: CanvasRenderingContext2D): void {
    if (context == null) return;
    context.save();

    if (spec.metadata.alpha) {
      context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      context.translate(spec.center.x, spec.center.y);   
      context.rotate(spec.metadata.rotation);
      context.translate(-spec.center.x, -spec.center.y);
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
