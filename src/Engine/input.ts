import { MouseInfo, Vector2, MouseButton, KeyboardButton } from '../Engine/structures';

export class Input {
    public static createHandler(ctx: CanvasRenderingContext2D) {
        ctx.canvas.onmousemove = (e) => {
            this.mousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        }
        ctx.canvas.onmousedown = (e) => {
            this.mouseButton = e.button;
        }
        ctx.canvas.onmouseup = () => {
            this.mouseButton = null;
        }
        ctx.canvas.addEventListener("keydown", (e: KeyboardEvent) => {
            this.keyboardButtons.isShift = e.shiftKey || e.keyCode == 16;
            this.keyboardButtons.isCtrl = e.ctrlKey || e.keyCode == 17;
            this.keyboardButtons.isAlt = e.altKey || e.keyCode == 18;
            if ([16, 17, 18].indexOf(e.keyCode) == -1 && this.keyboardButtons.keys.indexOf(e.keyCode) == -1) {
                this.keyboardButtons.keys.push(e.keyCode);
            }
        }, true);
        ctx.canvas.addEventListener("keyup", (e: KeyboardEvent) => {
            this.keyboardButtons.isAlt = e.altKey;
            this.keyboardButtons.isShift = e.shiftKey;
            this.keyboardButtons.isCtrl = e.ctrlKey;
            this.keyboardButtons.keys = this.keyboardButtons.keys.filter(x => x != e.keyCode);
        }, true);
    }

    private static keyboardButtons: KeyboardButton = {
        isCtrl: false,
        isAlt: false,
        isShift: false,
        keys: []
    };
    private static mousePosition: Vector2 = { x: 0, y: 0 };
    private static mouseButton: MouseButton = null;

    public static isKeyPressed(keyCode:number){
        if (keyCode == 16) return this.keyboardButtons.isShift;
        if (keyCode == 17) return this.keyboardButtons.isCtrl;
        if (keyCode == 18) return this.keyboardButtons.isAlt;
        return this.keyboardButtons.keys.indexOf(keyCode) != -1;
    }

    public static getKeyboardButtons(){
        return this.keyboardButtons;
    }

    public static getMouse(): MouseInfo {
        return {
            position: this.mousePosition,
            buttonPressed: this.mouseButton
        }
    }
}
