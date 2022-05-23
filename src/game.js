const Asteroid = require("./asteroid");

function Game(canvas, ctx, asteroids) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.DIM_X = this.canvas.width;
    this.DIM_Y = this.canvas.height;
    this.NUM_ASTEROIDS = asteroids;
    this.asteroids = []
    this.addAsteroids()
}

Game.prototype.randomPosition = function() {
    const x = Math.random() * this.DIM_X;
    const y = Math.random() * this.DIM_Y;
    return [x, y]
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
        const dto = {
            pos: this.randomPosition(),
            canvas: this.canvas,
        }
        const tmp = new Asteroid(dto);
        tmp.draw(this.ctx);
        this.asteroids.push(tmp);
    }
}

Game.prototype.draw = function() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.asteroids.forEach((asteroid) => {
        asteroid.draw(this.ctx);
    })
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach((asteroid) => {
        asteroid.move();
    })
}

Game.prototype.checkCollisions = function() {
    this.asteroids.forEach((parent, idx_p) => {
        this.asteroids.forEach((child, idx_c) => {
            let tmp;
            if(idx_p !== idx_c) tmp = parent.isCollidedWith(child);
            if(tmp) alert('COLLISION');
        })
    })
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}




module.exports = Game;