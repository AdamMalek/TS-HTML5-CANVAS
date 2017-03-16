import { Paddle } from "./paddle";
import { Input } from "../Engine/input";
import { Line } from "../Engine/structures";

export class AIPaddle extends Paddle {
    HandleInput() {
        this.up = Math.random() > 0.5;
        this.down = Math.random() > 0.5;
    }

    setY(y){
        this.y = y - this.height/2;
    }

    GetFace():Line{
        return {
            A: {
                x: this.x,
                y: this.y 
            },
            B: {
                x: this.x,
                y: this.y + this.height 
            }
        }
    }
}