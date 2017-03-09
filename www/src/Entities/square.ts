import { Entity } from '../entity';

export class Square extends Entity {
    constructor(private x: number, private y: number, private length: number, private color: string, private rotation: number = 0) {
        super();
    }
    HandleInput() { }

    Update(dt: number) {
        this.angle +=  this.rotation * dt;
    }
    angle = 0;
    Draw() {
        this.ctx.save();

        this.ctx.translate(this.x + this.length / 2, this.y + this.length / 2);
        this.ctx.rotate(this.angle);

        this.ctx.fillStyle = this.color;
        this.ctx.translate(-this.length / 2, -this.length / 2);
        this.ctx.fillRect(0, 0, this.length, this.length);

        this.ctx.restore();
    }
}
