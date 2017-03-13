import { Paddle } from "./paddle";
import { Input } from "../Engine/input";

export class AIPaddle extends Paddle {
    HandleInput() {
        this.up = Math.random() > 0.5;
        this.down = Math.random() > 0.5;
    }
}