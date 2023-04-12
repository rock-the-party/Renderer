"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildRectangleSpec = void 0;
const interfaces_1 = require("../interfaces");
function BuildRectangleSpec() {
    return new RectSpecBuilder();
}
exports.BuildRectangleSpec = BuildRectangleSpec;
class RectSpecBuilder {
    constructor() {
        this.metadata = {};
        this.startPoint = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
    }
    Reset() {
        this.metadata = {};
        this.startPoint = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
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
    Create() {
        return {
            spec: interfaces_1.RendererSpecType.RectSpec,
            startPoint: this.startPoint,
            size: this.size,
            metadata: this.metadata
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVjdC9idWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBd0U7QUFHeEUsU0FBZ0Isa0JBQWtCO0lBQ2hDLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRkQsZ0RBRUM7QUFFRCxNQUFNLGVBQWU7SUFBckI7UUFDVSxhQUFRLEdBQWEsRUFBRyxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25DLFNBQUksR0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBK0IvQyxDQUFDO0lBN0JRLEtBQUs7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sUUFBUSxDQUFFLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxTQUFTLENBQUUsS0FBOEM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPO1lBQ0wsSUFBSSxFQUFFLDZCQUFnQixDQUFDLFFBQVE7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFBO0lBQ0gsQ0FBQztDQUNGIn0=