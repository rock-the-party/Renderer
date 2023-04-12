import { CircleSpec } from "./spec";

export function DrawCircle(spec: CircleSpec, context: CanvasRenderingContext2D): void {
    if (context == null) return;
    context.save()

    if (spec.metadata.alpha) {
      context.globalAlpha = spec.metadata.alpha;
    }

    if (spec.metadata.rotation) {
      context.translate(spec.center.x, spec.center.y);   
      context.rotate(spec.metadata.rotation);
      context.translate(-spec.center.x, -spec.center.y);
    }

    context.arc(spec.center.x, spec.center.y, spec.radius, spec.radianAngle.start, spec.radianAngle.end, !spec.isClockwise);

    if(spec.isFilled) {
      if (spec.metadata.fillStyle) {
        context.fillStyle = spec.metadata.fillStyle;
      }
      context.fill();
    } else {
      if (spec.metadata.strokeStyle) {
        context.fillStyle = spec.metadata.strokeStyle;
      }
      context.stroke();
    }

    context.restore();
  }
