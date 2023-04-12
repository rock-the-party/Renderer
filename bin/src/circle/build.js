"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildCircleSpec = void 0;
const interfaces_1 = require("../interfaces");
function BuildCircleSpec() {
    return new CircleSpecBuilder();
}
exports.BuildCircleSpec = BuildCircleSpec;
class CircleSpecBuilder {
    constructor() {
        this.center = { x: 0, y: 0 };
        this.radius = 0;
        this.isFilled = true;
        this.isClockwise = true;
        this.radianAngle = { start: 0, end: 2 * Math.PI };
        this.metadata = {};
    }
    Reset() {
        this.center = { x: 0, y: 0 };
        this.radius = 0;
        this.isFilled = true;
        this.isClockwise = true;
        this.radianAngle = { start: 0, end: 2 * Math.PI };
        this.metadata = {};
    }
    Alpha(alpha) {
        this.metadata.alpha = alpha;
        return this;
    }
    Rotation(rotation) {
        this.metadata.rotation = rotation;
        return this;
    }
    FillStyle(color) {
        this.metadata.fillStyle = color;
        return this;
    }
    StrokeStyle(color) {
        this.metadata.strokeStyle = color;
        return this;
    }
    Radius(r) {
        this.radius = r;
        return this;
    }
    IsFilled(isFilled) {
        this.isFilled = isFilled;
        return this;
    }
    Center(center) {
        this.center = center;
        return this;
    }
    RadianAngle(radianAngle) {
        this.radianAngle = radianAngle;
        return this;
    }
    Create() {
        return {
            spec: interfaces_1.RendererSpecType.CircleSpec,
            isClockwise: this.isClockwise,
            isFilled: this.isFilled,
            radius: this.radius,
            center: this.center,
            radianAngle: this.radianAngle,
            metadata: this.metadata
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2lyY2xlL2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhDQUErRTtBQUcvRSxTQUFnQixlQUFlO0lBQzdCLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFGRCwwQ0FFQztBQUVELE1BQU0saUJBQWlCO0lBQXZCO1FBQ1UsV0FBTSxHQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDOUIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxhQUFRLEdBQWEsRUFBRyxDQUFDO0lBOERuQyxDQUFDO0lBNURRLEtBQUs7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRLENBQUUsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFNBQVMsQ0FBRSxLQUE4QztRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sV0FBVyxDQUFFLEtBQThDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsQ0FBUztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBaUI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFFLE1BQWE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sV0FBVyxDQUFFLFdBQXdCO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPO1lBQ0wsSUFBSSxFQUFFLDZCQUFnQixDQUFDLFVBQVU7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQTtJQUNILENBQUM7Q0FDRiJ9