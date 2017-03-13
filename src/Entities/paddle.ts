import { Entity } from '../entity';
import { Input } from '../Engine/input';

export class Paddle extends Entity {

    constructor(protected x: number, protected y: number, protected width: number, protected height: number, protected baseSpeed: number = 200) {
        super();
        this.speed = baseSpeed;
    }

    protected down = false;
    protected up = false;
    protected speed;
    HandleInput() {
        this.up = Input.isKeyPressed(87);
        this.down = Input.isKeyPressed(83);
        if (this.down && this.up) {
            this.up = this.down = false;
        }
        if (Input.isKeyPressed(16)) {
            this.speed = this.baseSpeed * 1.5;
        }
        else {
            this.speed = this.baseSpeed;
        }
    }

    Update(dt: number) {
        if (this.down) {
            this.y += this.speed * dt;
        }
        else if (this.up) {
            this.y -= this.speed * dt;
        }
        if (this.y < 5) this.y = 5;
        else if (this.y + this.height > this.maxY - 5) this.y = this.maxY - this.height - 5;
    }
    Draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}