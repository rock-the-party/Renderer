import { RectSpec } from "./spec";

export function DrawRect(spec: RectSpec, context: CanvasRenderingContext2D): void {
  if (context == null) return;
  context.save();

  if (spec.metadata.alpha) {
    context.globalAlpha = spec.metadata.alpha;
  }

  if (spec.metadata.rotation) {
    context.translate(spec.startPoint.x, spec.startPoint.y);   
    context.rotate(spec.metadata.rotation);
    context.translate(-spec.startPoint.x, -spec.startPoint.y);
  }

  if (spec.metadata.fillStyle) {
    context.fillStyle = spec.metadata.fillStyle;
  }

  context.fillRect(spec.startPoint.x, spec.startPoint.y, spec.size.width, spec.size.height);
  context.restore();
}
