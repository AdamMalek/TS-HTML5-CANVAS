import { Renderer } from './engine/renderer';
import { Entity } from "./entity";
import { Board } from "./Entities/board";
import { settings } from './settings';

class Game {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;

    entities: Entity[] = [];

    Start() {
        this.ctx = Renderer.createContext('gameCanvas');
        if (!this.ctx) {
            console.log("Error while creating context");
            return;
        }
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        // let colors = [
        //     'white', 'yellow', 'red', 'pink', 'green', 'blue'
        // ];
        // let minLen = 20;
        // let maxLen = 100;
        // for (let i = 0; i < 10; i++) {
        //     let len = (Math.random() * (maxLen - minLen)) + minLen;
        //     let x = Math.random() * (this.width - len);
        //     let y = Math.random() * (this.height - len);
        //     let rot = ((Math.random() - 0.5) * 2) * Math.PI * 2;
        //     let color = colors[Math.floor(Math.random() * colors.length)];
        //     this.entities.push(new Square(x, y, len, color, rot));
        // }
        this.entities.push(new Board());

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