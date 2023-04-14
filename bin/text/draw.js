"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawText = void 0;
function DrawText(spec, context) {
    if (context == null)
        return;
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
exports.DrawText = DrawText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L2RyYXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsU0FBZ0IsUUFBUSxDQUFDLElBQWMsRUFBRSxPQUFpQztJQUN0RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTztJQUM1QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFZixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRDtJQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztLQUM3QztJQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUMxQjtJQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDcEM7SUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzFCO0lBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN4QztJQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDcEM7SUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDckIsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFDO0lBRUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQWhESCw0QkFnREcifQ==