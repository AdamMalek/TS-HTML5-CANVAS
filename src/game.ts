import { Renderer } from './engine/renderer';
import { Entity } from "./entity";
import { Board } from "./Entities/board";
import { settings } from './settings';
import { Input } from "./Engine/input";
import { Paddle } from "./Entities/paddle";
import { AIPaddle } from "./Entities/aipaddle";
import { Ball } from "./Entities/ball";

class Game {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;

    entities: Entity[] = [];

    Start() {
        this.ctx = Renderer.createContext('gameCanvas');
        Input.createHandler(this.ctx);
        if (!this.ctx) {
            console.log("Error while creating context");
            return;
        }
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.entities.push(new Board());

        let paddleSpeed = 250;
        this.entities.push(new Paddle(10, 10, 20, 100, paddleSpeed));
        this.entities.push(new AIPaddle(this.width - 30, 10, 20, 100, paddleSpeed));

        let ballR = 4;
        let ballSpeed = {
            x: Math.random() * 600,
            y: Math.random() * 600
        };
        // this.entities.push(new Ball((this.width - ballR) / 2, (this.height - ballR) / 2, ballR, ballSpeed));
        this.entities.push(new Ball(100, 100, ballR, ballSpeed));

        this.GameLoop();
    }
    maxFPS = settings.video.maxFPS;
    interval = 1000 / this.maxFPS;
    prevFrameTime = Date.now();
    GameLoop = () => {
        requestAnimationFrame(this.GameLoop);
        let currentFrameTime = Date.now();
        let dt = currentFrameTime - this.prevFrameTime;
        // if (dt >= this.interval) {
        this.Update(dt);
        this.Draw();
        // }
        // this.prevFrameTime = currentFrameTime - (dt % this.interval);
        this.prevFrameTime = currentFrameTime;
    }

    fps = 0;
    fpsTime = 0;
    updateTime = settings.video.FPSUpdateTime;
    Update(dt: number) {
        this.fpsTime += dt;
        if (this.fpsTime >= this.updateTime) {
            this.fps = 1000 / dt;
            this.fpsTime = 0;
        }

        for (let ent of this.entities) {
            ent.HandleInput();
            ent.Update(dt / 1000);
        }
    }

    Draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let ent of this.entities) {
            ent.Draw();
        }
        if (settings.video.showFPS) {
            this.ctx.save();
            this.ctx.fillStyle = 'gray';
            this.ctx.fillRect(5, 15, 100, 35);
            this.ctx.font = '20pt Calibri';
            this.ctx.fillStyle = 'white';
            this.ctx.fillText("FPS: " + Math.ceil(this.fps), 10, 40);
            this.ctx.restore();
        }
    }
}

let game = new Game();
game.Start();