const GameView = require("./game_view");

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    new GameView(canvas, ctx, 10);
});