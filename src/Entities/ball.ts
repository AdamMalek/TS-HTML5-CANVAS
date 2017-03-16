import { Entity } from "../entity";
import { Vector2, Rect, Line } from "../Engine/structures";
import { Paddle } from "./paddle";

export class Ball extends Entity {
    constructor(private x: number, public y: number, private r: number, private baseSpeed: Vector2) {
        super();
        this.speed = baseSpeed;
    }
    private speed: Vector2;
    HandleInput() {
    }
    Update(dt: number) {
        this.x += this.speed.x * dt;
        this.y += this.speed.y * dt;
        if (this.y < 4 || this.y > this.maxY - 4) this.speed.y *= -1;
    }
    Draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, this.r, this.r, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }
    checkForHit(face: Line) {
        if ((Math.abs(this.x - face.A.x) > this.r) ||
            (this.y < (face.A.y - this.r)) ||
            (this.y > (face.B.y + this.r))) {
                this.speed.x *=-1;
        }
    }
}