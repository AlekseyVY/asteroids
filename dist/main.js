/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\n\r\nfunction Asteroid(dto) {\r\n    this.color = '#5A4B47';\r\n    this.radius = 2;\r\n    MovingObject.call(this, {\r\n        pos: dto.pos,\r\n        vel: Util.randomVec(0.5),\r\n        radius: this.radius,\r\n        color: this.color,\r\n        canvas: dto.canvas\r\n    });\r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\n\r\nfunction Game(canvas, ctx, asteroids) {\r\n    this.ctx = ctx;\r\n    this.canvas = canvas;\r\n    this.DIM_X = this.canvas.width;\r\n    this.DIM_Y = this.canvas.height;\r\n    this.NUM_ASTEROIDS = asteroids;\r\n    this.asteroids = []\r\n    this.addAsteroids()\r\n}\r\n\r\nGame.prototype.randomPosition = function() {\r\n    const x = Math.random() * this.DIM_X;\r\n    const y = Math.random() * this.DIM_Y;\r\n    return [x, y]\r\n}\r\n\r\nGame.prototype.addAsteroids = function() {\r\n    for(let i = 0; i < this.NUM_ASTEROIDS; i++) {\r\n        const dto = {\r\n            pos: this.randomPosition(),\r\n            canvas: this.canvas,\r\n        }\r\n        const tmp = new Asteroid(dto);\r\n        tmp.draw(this.ctx);\r\n        this.asteroids.push(tmp);\r\n    }\r\n}\r\n\r\nGame.prototype.draw = function() {\r\n    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);\r\n    this.asteroids.forEach((asteroid) => {\r\n        asteroid.draw(this.ctx);\r\n    })\r\n}\r\n\r\nGame.prototype.moveObjects = function() {\r\n    this.asteroids.forEach((asteroid) => {\r\n        asteroid.move();\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\n\r\nfunction GameView(ctx, canvas, asteroids) {\r\n    this.ctx = ctx;\r\n    this.canvas = canvas;\r\n    this.asteroids = asteroids;\r\n    this.game = new Game(this.ctx, this.canvas, this.asteroids)\r\n    this.start();\r\n}\r\n\r\nGameView.prototype.start = function() {\r\n    this.game.moveObjects();\r\n    this.game.draw();\r\n    requestAnimationFrame(() => {\r\n        this.start();\r\n    });\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    const canvas = document.getElementById('game-canvas');\r\n    const ctx = canvas.getContext('2d');\r\n    new GameView(canvas, ctx, 10);\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(dto) {\r\n    this.pos = dto.pos;\r\n    this.vel = dto.vel;\r\n    this.radius = dto.radius;\r\n    this.color = dto.color;\r\n    this.canvas = dto.canvas;\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n    this.wrap();\r\n}\r\n\r\nMovingObject.prototype.wrap = function() {\r\n    this.pos[0] = ((this.pos[0] % this.canvas.width) + this.canvas.width) % this.canvas.width;\r\n    this.pos[1] = ((this.pos[1] % this.canvas.height) + this.canvas.height) % this.canvas.height;;\r\n}\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\r\n    inherits: function inherits(childClass, parentClass) {\r\n        childClass.prototype = Object.create(parentClass.prototype);\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n    randomVec: function randomVec(length) {\r\n        const deg = 2 + Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n    scale: function scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n}\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;