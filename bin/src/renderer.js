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
        switch (spec.spec) {
            case interfaces_1.RendererSpecType.RectSpec:
                if (this.context) {
                    (0, rect_1.DrawRect)(spec, this.context);
                }
                break;
            case interfaces_1.RendererSpecType.CircleSpec:
                if (this.context) {
                    (0, circle_1.DrawCircle)(spec, this.context);
                }
                break;
            case interfaces_1.RendererSpecType.TextSpec:
                if (this.context) {
                    (0, text_1.DrawText)(spec, this.context);
                }
                break;
            case interfaces_1.RendererSpecType.ImageSpec:
                if (this.context) {
                    (0, image_1.DrawImage)(spec, this.context);
                }
                break;
        }
    }
    ClearCanvas() {
        if (this.context == null)
            return;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNDO0FBQ3RDLG1DQUFvQztBQUNwQyw2Q0FBK0Q7QUFDL0QsaUNBQWtDO0FBQ2xDLGlDQUFrQztBQU9sQyxNQUFjLFFBQVE7SUFHcEIsWUFBcUIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQW1CO1FBQzdCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLDZCQUFnQixDQUFDLFFBQVE7Z0JBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBQSxlQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssNkJBQWdCLENBQUMsVUFBVTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFBLG1CQUFVLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDL0I7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssNkJBQWdCLENBQUMsUUFBUTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyw2QkFBZ0IsQ0FBQyxTQUFTO2dCQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUEsaUJBQVMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDRjtBQXBDRCw0QkFvQ0MifQ==