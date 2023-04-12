"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildTextSpec = void 0;
const interfaces_1 = require("../interfaces");
function BuildTextSpec() {
    return new TextSpecBuilder();
}
exports.BuildTextSpec = BuildTextSpec;
class TextSpecBuilder {
    constructor() {
        this.metadata = {};
        this.startPoint = { x: 0, y: 0 };
        this.text = "";
    }
    Reset() {
        this.metadata = {};
        this.startPoint = { x: 0, y: 0 };
        this.text = "";
        this.maxWidth = undefined;
        this.direction = undefined;
        this.font = undefined;
        this.fontKerning = undefined;
        this.textAlign = undefined;
        this.textBaseline = undefined;
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
    StartPoint(startPoint) {
        this.startPoint = startPoint;
        return this;
    }
    Text(text) {
        this.text = text;
        return this;
    }
    MaxWidth(maxWidth) {
        this.maxWidth = maxWidth;
        return this;
    }
    Direction(direction) {
        this.direction = direction;
        return this;
    }
    Font(font) {
        this.font = font;
        return this;
    }
    FontKerning(fontKerning) {
        this.fontKerning = fontKerning;
        return this;
    }
    TextAlign(textAlign) {
        this.textAlign = textAlign;
        return this;
    }
    TextBaseline(textBaseline) {
        this.textBaseline = textBaseline;
        return this;
    }
    Create() {
        return {
            spec: interfaces_1.RendererSpecType.TextSpec,
            metadata: this.metadata,
            startPoint: this.startPoint,
            text: this.text,
            maxWidth: this.maxWidth,
            direction: this.direction,
            font: this.font,
            fontKerning: this.fontKerning,
            textAlign: this.textAlign,
            textBaseline: this.textBaseline
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGV4dC9idWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBa0U7QUFJbEUsU0FBZ0IsYUFBYTtJQUMzQixPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUZELHNDQUVDO0FBRUQsTUFBTSxlQUFlO0lBQXJCO1FBQ1UsYUFBUSxHQUFhLEVBQUcsQ0FBQztRQUN6QixlQUFVLEdBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBOEY1QixDQUFDO0lBdEZRLEtBQUs7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFFBQVEsQ0FBRSxRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sU0FBUyxDQUFFLEtBQThDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxXQUFXLENBQUUsS0FBOEM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFVBQVUsQ0FBRSxVQUFpQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLENBQUUsSUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRLENBQUUsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sU0FBUyxDQUFFLFNBQTJCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLElBQUksQ0FBRSxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFdBQVcsQ0FBRSxXQUE4QjtRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxTQUFTLENBQUUsU0FBMEI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sWUFBWSxDQUFFLFlBQWdDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPO1lBQ0wsSUFBSSxFQUFFLDZCQUFnQixDQUFDLFFBQVE7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUE7SUFDSCxDQUFDO0NBQ0YifQ==