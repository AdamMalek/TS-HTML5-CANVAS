var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../entity"], function (require, exports, entity_1) {
    "use strict";
    exports.__esModule = true;
    var Square = (function (_super) {
        __extends(Square, _super);
        function Square(x, y, length, color, rotation) {
            if (rotation === void 0) { rotation = 0; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.length = length;
            _this.color = color;
            _this.rotation = rotation;
            _this.angle = 0;
            return _this;
        }
        Square.prototype.HandleInput = function () { };
        Square.prototype.Update = function (dt) {
            this.angle += this.rotation * dt;
        };
        Square.prototype.Draw = function () {
            this.ctx.save();
            this.ctx.translate(this.x + this.length / 2, this.y + this.length / 2);
            this.ctx.rotate(this.angle);
            this.ctx.fillStyle = this.color;
            this.ctx.translate(-this.length / 2, -this.length / 2);
            this.ctx.fillRect(0, 0, this.length, this.length);
            this.ctx.restore();
        };
        return Square;
    }(entity_1.Entity));
    exports.Square = Square;
});
//# sourceMappingURL=square.js.map