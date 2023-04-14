"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawCircle = void 0;
function DrawCircle(spec, context) {
    if (context == null)
        return;
    context.save();
    if (spec.metadata.alpha) {
        context.globalAlpha = spec.metadata.alpha;
    }
    if (spec.metadata.rotation) {
        context.translate(spec.center.x, spec.center.y);
        context.rotate(spec.metadata.rotation);
        context.translate(-spec.center.x, -spec.center.y);
    }
    context.arc(spec.center.x, spec.center.y, spec.radius, spec.radianAngle.start, spec.radianAngle.end, !spec.isClockwise);
    if (spec.isFilled) {
        if (spec.metadata.fillStyle) {
            context.fillStyle = spec.metadata.fillStyle;
        }
        context.fill();
    }
    else {
        if (spec.metadata.strokeStyle) {
            context.fillStyle = spec.metadata.strokeStyle;
        }
        context.stroke();
    }
    context.restore();
}
exports.DrawCircle = DrawCircle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaXJjbGUvZHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFnQixVQUFVLENBQUMsSUFBZ0IsRUFBRSxPQUFpQztJQUMxRSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTztJQUM1QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFZixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRDtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4SCxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCO1NBQU07UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDL0M7UUFDRCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDbEI7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQTdCSCxnQ0E2QkcifQ==