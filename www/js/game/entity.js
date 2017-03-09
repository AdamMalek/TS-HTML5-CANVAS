define(["require", "exports", "./engine/renderer"], function (require, exports, renderer_1) {
    "use strict";
    exports.__esModule = true;
    var Entity = (function () {
        function Entity() {
            this.ctx = renderer_1.Renderer.getContext();
            this.maxX = this.ctx.canvas.width;
            this.maxY = this.ctx.canvas.height;
        }
        return Entity;
    }());
    exports.Entity = Entity;
});
//# sourceMappingURL=entity.js.map