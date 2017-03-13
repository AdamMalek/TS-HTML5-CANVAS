import { Entity } from "../entity";
import { Vector2 } from "../Engine/structures";

export class Ball extends Entity {
    constructor(private x: number, private y: number, private r: number, private baseSpeed: Vector2) {
        super();
        this.speed = baseSpeed;
    }
    private speed:Vector2;
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
        this.ctx.ellipse(this.x,this.y,this.r,this.r,0,0,Math.PI*2);
        this.ctx.fill();
    }
}