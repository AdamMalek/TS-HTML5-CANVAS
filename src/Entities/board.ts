import { Entity } from "../entity";
import { Rectangle } from "./rectangle";

export class Board extends Entity {
    walls: Rectangle[] = [];
    constructor() {
        super();
        let offsetX = 0.1 * this.maxX;
        let offsetY = 0.1 * this.maxY;

        let boardWidth = this.maxX - 2 * offsetX;
        let boardHeight = this.maxY - 2 * offsetY;
        let wallThickness = this.maxX > this.maxY ? 0.1 * this.maxY : 0.1 * this.maxX;
        if (wallThickness > 40) wallThickness=40;
        this.walls.push(new Rectangle(offsetX, offsetY, 0.4 * boardWidth, wallThickness, 'blue'));
        this.walls.push(new Rectangle(this.maxX - offsetX - 0.4 * boardWidth, offsetY, 0.4 * boardWidth, wallThickness, 'blue'));
        this.walls.push(new Rectangle(offsetX, this.maxY - offsetY - wallThickness, 0.4 * boardWidth, wallThickness, 'blue'));
        this.walls.push(new Rectangle(this.maxX - offsetX - 0.4 * boardWidth, this.maxY - offsetY - wallThickness, 0.4 * boardWidth, wallThickness, 'blue'));

        this.walls.push(new Rectangle(offsetX, offsetY, wallThickness, 0.4 * boardHeight, 'blue'));
        this.walls.push(new Rectangle(this.maxX - offsetX - wallThickness, offsetY, wallThickness, 0.4 * boardHeight, 'blue'));
        this.walls.push(new Rectangle(offsetX, this.maxY - offsetY - 0.4 * boardHeight, wallThickness, 0.4 * boardHeight, 'blue'));
        this.walls.push(new Rectangle(this.maxX - offsetX - wallThickness, this.maxY - offsetY - 0.4 * boardHeight, wallThickness, 0.4 * boardHeight, 'blue'));
    }
    HandleInput() { }
    Update(dt: number){ }
    Draw() {
        for (let wall of this.walls) {
            wall.Draw();
        }
    }

}