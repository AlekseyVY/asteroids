const Game = require("./game");

function GameView(ctx, canvas, asteroids) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.asteroids = asteroids;
    this.game = new Game(this.ctx, this.canvas, this.asteroids)
    this.start();
}

GameView.prototype.start = function() {
    this.game.step();
    this.game.draw();
    requestAnimationFrame(() => {
        this.start();
    });
}

module.exports = GameView;