import { settings } from '../settings';

export class Renderer {
    private static ctx: CanvasRenderingContext2D = null;

    public static createContext(id: string) {
        let canvas = <HTMLCanvasElement>document.getElementById(id);
        if (canvas) {
            this.ctx = canvas.getContext('2d');
            this.ctx.canvas.width = settings.video.screenWidth;
            this.ctx.canvas.height = settings.video.screenHeight;
        }
        return this.ctx;
    }

    public static getContext() {
        return this.ctx;
    }
}