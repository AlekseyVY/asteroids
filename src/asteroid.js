const Util = require("./utils");
const MovingObject = require("./moving_object");

function Asteroid(dto) {
    this.color = '#5A4B47';
    this.radius = 2;
    MovingObject.call(this, {
        pos: dto.pos,
        vel: Util.randomVec(0.5),
        radius: this.radius,
        color: this.color,
        canvas: dto.canvas
    });
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;