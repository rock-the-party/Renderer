import { TextSpec } from "./spec";


export function DrawText(spec: TextSpec, context: CanvasRenderingContext2D): void {
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

    if (spec.font) {
      context.font = spec.font;
    }

    if (spec.textAlign) {
      context.textAlign = spec.textAlign;
    }

    if (spec.direction) {
      context.direction = spec.direction;
    }

    if (spec.font) {
      context.font = spec.font;
    }

    if (spec.fontKerning) {
      context.fontKerning = spec.fontKerning;
    }

    if (spec.textAlign) {
      context.textAlign = spec.textAlign;
    }

    if (spec.textBaseline) {
      context.textBaseline = spec.textBaseline;
    }

    context.fillText(spec.text, spec.startPoint.x, spec.startPoint.y, spec.maxWidth);
    context.restore();
  }
