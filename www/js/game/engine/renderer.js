define(["require", "exports", "../settings"], function (require, exports, settings_1) {
    "use strict";
    exports.__esModule = true;
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.createContext = function (id) {
            var canvas = document.getElementById(id);
            if (canvas) {
                this.ctx = canvas.getContext('2d');
                this.ctx.canvas.width = settings_1.settings.video.screenWidth;
                this.ctx.canvas.height = settings_1.settings.video.screenHeight;
            }
            return this.ctx;
        };
        Renderer.getContext = function () {
            return this.ctx;
        };
        return Renderer;
    }());
    Renderer.ctx = null;
    exports.Renderer = Renderer;
});
//# sourceMappingURL=renderer.js.map