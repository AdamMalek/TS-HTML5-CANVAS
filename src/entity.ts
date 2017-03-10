import { Renderer } from "./engine/renderer";

export abstract class Entity {
    ctx: CanvasRenderingContext2D;
    maxX: number;
    maxY: number;
    constructor() {
        this.ctx = Renderer.getContext();
        this.maxX = this.ctx.canvas.width;
        this.maxY = this.ctx.canvas.height;
    }
    abstract HandleInput();
    abstract Update(dt: number);
    abstract Draw();
}