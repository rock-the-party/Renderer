"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const circle_1 = require("./circle");
const image_1 = require("./image");
const interfaces_1 = require("./interfaces");
const rect_1 = require("./rect");
const text_1 = require("./text");
class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }
    Draw(spec) {
        if (this.canvas == null)
            throw new Error("Canvas is not defined");
        if (this.context == null)
            throw new Error("Context is not defined");
        this.context.beginPath();
        switch (spec.spec) {
            case interfaces_1.RendererSpecType.RectSpec:
                (0, rect_1.DrawRect)(spec, this.context);
                break;
            case interfaces_1.RendererSpecType.CircleSpec:
                (0, circle_1.DrawCircle)(spec, this.context);
                break;
            case interfaces_1.RendererSpecType.TextSpec:
                (0, text_1.DrawText)(spec, this.context);
                break;
            case interfaces_1.RendererSpecType.ImageSpec:
                (0, image_1.DrawImage)(spec, this.context);
                break;
        }
    }
    ClearCanvas() {
        if (this.canvas == null)
            throw new Error("Canvas is not defined");
        if (this.context == null)
            throw new Error("Context is not defined");
        this.context.beginPath();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNDO0FBQ3RDLG1DQUFvQztBQUNwQyw2Q0FBK0Q7QUFDL0QsaUNBQWtDO0FBQ2xDLGlDQUFrQztBQUVsQyxNQUFjLFFBQVE7SUFHcEIsWUFBcUIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQW1CO1FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssNkJBQWdCLENBQUMsUUFBUTtnQkFDNUIsSUFBQSxlQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNSLEtBQUssNkJBQWdCLENBQUMsVUFBVTtnQkFDOUIsSUFBQSxtQkFBVSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzlCLE1BQU07WUFDUixLQUFLLDZCQUFnQixDQUFDLFFBQVE7Z0JBQzVCLElBQUEsZUFBUSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLDZCQUFnQixDQUFDLFNBQVM7Z0JBQzdCLElBQUEsaUJBQVMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUNuRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7QUFuQ0QsNEJBbUNDIn0=