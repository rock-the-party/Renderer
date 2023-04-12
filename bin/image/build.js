"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildImageSpec = void 0;
const interfaces_1 = require("../interfaces");
function BuildImageSpec() {
    return new ImageSpecBuilder();
}
exports.BuildImageSpec = BuildImageSpec;
class ImageSpecBuilder {
    constructor() {
        this.metadata = {};
        this.image = null;
        this.center = { x: 0, y: 0 };
        this.size = { height: 0, width: 0 };
    }
    Reset() {
        this.metadata = {};
        this.image = null;
        this.center = { x: 0, y: 0 };
        this.size = { height: 0, width: 0 };
    }
    Alpha(alpha) {
        this.metadata.alpha = alpha;
        return this;
    }
    Rotation(rotation) {
        this.metadata.rotation = rotation;
        return this;
    }
    Image(image = null) {
        this.image = image;
        return this;
    }
    Center(center) {
        this.center = center;
        return this;
    }
    Size(size) {
        this.size = size;
        return this;
    }
    Create() {
        return {
            spec: interfaces_1.RendererSpecType.ImageSpec,
            image: this.image || new HTMLImageElement(),
            center: this.center,
            size: this.size,
            metadata: this.metadata
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW1hZ2UvYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQXdFO0FBSXhFLFNBQWdCLGNBQWM7SUFDNUIsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUZELHdDQUVDO0FBRUQsTUFBTSxnQkFBZ0I7SUFBdEI7UUFDVSxhQUFRLEdBQWEsRUFBRyxDQUFDO1FBQ3pCLFVBQUssR0FBK0MsSUFBSSxDQUFDO1FBQ3pELFdBQU0sR0FBVSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzdCLFNBQUksR0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBMkMvQyxDQUFDO0lBekNRLEtBQUs7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sUUFBUSxDQUFFLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUUsUUFBb0QsSUFBSTtRQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUUsTUFBYTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLENBQUUsSUFBVTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTztZQUNMLElBQUksRUFBRSw2QkFBZ0IsQ0FBQyxTQUFTO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFBO0lBQ0gsQ0FBQztDQUNGIn0=