define(["require", "exports", "./engine/renderer", "./Entities/square", "./settings"], function (require, exports, renderer_1, square_1, settings_1) {
    "use strict";
    exports.__esModule = true;
    var Game = (function () {
        function Game() {
            var _this = this;
            this.entities = [];
            this.maxFPS = settings_1.settings.video.maxFPS;
            this.interval = 1000 / this.maxFPS;
            this.prevFrameTime = Date.now();
            this.GameLoop = function () {
                requestAnimationFrame(_this.GameLoop);
                var currentFrameTime = Date.now();
                var dt = currentFrameTime - _this.prevFrameTime;
                // if (dt >= this.interval) {
                _this.Update(dt);
                _this.Draw();
                // }
                // this.prevFrameTime = currentFrameTime - (dt % this.interval);
                _this.prevFrameTime = currentFrameTime;
            };
            this.fps = 0;
            this.fpsTime = 0;
            this.updateTime = settings_1.settings.video.FPSUpdateTime;
        }
        Game.prototype.Start = function () {
            this.ctx = renderer_1.Renderer.createContext('gameCanvas');
            if (!this.ctx) {
                console.log("Error while creating context");
                return;
            }
            this.width = this.ctx.canvas.width;
            this.height = this.ctx.canvas.height;
            var colors = [
                'white', 'yellow', 'red', 'pink', 'green', 'blue'
            ];
            var minLen = 20;
            var maxLen = 100;
            for (var i = 0; i < 10; i++) {
                var len = (Math.random() * (maxLen - minLen)) + minLen;
                var x = Math.random() * (this.width - len);
                var y = Math.random() * (this.height - len);
                var rot = ((Math.random() - 0.5) * 2) * Math.PI * 2;
                var color = colors[Math.floor(Math.random() * colors.length)];
                this.entities.push(new square_1.Square(x, y, len, color, rot));
            }
            this.GameLoop();
        };
        Game.prototype.Update = function (dt) {
            this.fpsTime += dt;
            if (this.fpsTime >= this.updateTime) {
                this.fps = 1000 / dt;
                this.fpsTime = 0;
            }
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var ent = _a[_i];
                ent.HandleInput();
                ent.Update(dt / 1000);
            }
        };
        Game.prototype.Draw = function () {
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var ent = _a[_i];
                ent.Draw();
            }
            this.ctx.fillStyle = 'gray';
            this.ctx.fillRect(5, 15, 100, 35);
            this.ctx.font = '20pt Calibri';
            this.ctx.fillStyle = 'white';
            this.ctx.fillText("FPS: " + Math.ceil(this.fps), 10, 40);
        };
        return Game;
    }());
    var game = new Game();
    game.Start();
});
//# sourceMappingURL=game.js.map