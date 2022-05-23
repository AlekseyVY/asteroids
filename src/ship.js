const Util = require("./utils");
const MovingObject = require("./moving_object");

function Ship(dto) {
    this.radius = 1;
    this.color =
    MovingObject.call(this, {
        pos: dto.pos,
        vel: 0,
        radius: this.radius,
        color: this.color,
        canvas: dto.canvas
    });
}

Util.inherits(Ship, MovingObject);

module.exports = Ship;