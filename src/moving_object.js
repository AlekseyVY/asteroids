function MovingObject(dto) {
    this.pos = dto.pos;
    this.vel = dto.vel;
    this.radius = dto.radius;
    this.color = dto.color;
    this.canvas = dto.canvas;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.wrap();
}

MovingObject.prototype.wrap = function() {
    this.pos[0] = ((this.pos[0] % this.canvas.width) + this.canvas.width) % this.canvas.width;
    this.pos[1] = ((this.pos[1] % this.canvas.height) + this.canvas.height) % this.canvas.height;;
}

module.exports = MovingObject;