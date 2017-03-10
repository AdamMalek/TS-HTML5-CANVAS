import { Entity } from '../entity';

export class Rectangle extends Entity {
    constructor(private x: number, private y: number, private width: number, private height: number, private color: string, private rotation: number = 0) {
        super();
    }
    HandleInput() { }

    Update(dt: number) {
        this.angle +=  this.rotation * dt;
    }
    angle = 0;
    Draw() {
        this.ctx.save();

        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.angle);

        this.ctx.fillStyle = this.color;
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.restore();
    }
}
