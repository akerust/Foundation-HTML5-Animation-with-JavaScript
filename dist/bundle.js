/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(1);
	var Arrow_1 = __webpack_require__(2);
	window.onload = function () {
	    var canvas = document.getElementById('canvas'), context = canvas.getContext('2d'), mouse = utils_1.captureMouse(canvas), arrow = new Arrow_1.Arrow();
	    arrow.x = canvas.width / 2;
	    arrow.y = canvas.height / 2;
	    (function drawFrame() {
	        window.requestAnimationFrame(drawFrame);
	        context.clearRect(0, 0, canvas.width, canvas.height);
	        var dx = mouse.x - arrow.x, dy = mouse.y - arrow.y;
	        arrow.rotation = Math.atan2(dy, dx);
	        arrow.draw(context);
	    })();
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function captureMouse(element) {
	    var mouse = {
	        x: 0,
	        y: 0
	    };
	    element.addEventListener('mousemove', function (event) {
	        var x, y;
	        if (event.pageX || event.pageY) {
	            x = event.pageX;
	            y = event.pageY;
	        }
	        else {
	            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        x -= element.offsetLeft;
	        y -= element.offsetTop;
	        mouse.x = x;
	        mouse.y = y;
	    }, false);
	    return mouse;
	}
	exports.captureMouse = captureMouse;
	;
	function captureTouch(element) {
	    var touch = {
	        x: null,
	        y: null,
	        isPressed: false
	    };
	    element.addEventListener('touchstart', function (event) {
	        touch.isPressed = true;
	    }, false);
	    element.addEventListener('touchend', function (event) {
	        touch.isPressed = false;
	        touch.x = null;
	        touch.y = null;
	    }, false);
	    element.addEventListener('touchmove', function (event) {
	        var x, y, touchEvent = event.touches[0];
	        if (touchEvent.pageX || touchEvent.pageY) {
	            x = touchEvent.pageX;
	            y = touchEvent.pageY;
	        }
	        else {
	            x = touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            y = touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        x -= element.offsetLeft;
	        y -= element.offsetTop;
	        touch.x = x;
	        touch.y = y;
	    }, false);
	    return touch;
	}
	exports.captureTouch = captureTouch;
	function parseColor(color, toNumber) {
	    if (toNumber === void 0) { toNumber = false; }
	    if (toNumber === true) {
	        if (typeof color === 'number') {
	            return (color | 0);
	        }
	        if (typeof color === 'string' && color[0] === '#') {
	            color = color.slice(1);
	        }
	        return parseInt(color, 16);
	    }
	    else {
	        if (typeof color === 'number') {
	            color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
	        }
	        return color;
	    }
	}
	exports.parseColor = parseColor;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Sprite_1 = __webpack_require__(3);
	var Arrow = (function (_super) {
	    __extends(Arrow, _super);
	    function Arrow() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.lineWidth = 0;
	        return _this;
	    }
	    Arrow.prototype.onDraw = function (context) {
	        context.moveTo(-50, -25);
	        context.lineTo(0, -25);
	        context.lineTo(0, -50);
	        context.lineTo(50, 0);
	        context.lineTo(0, 50);
	        context.lineTo(0, 25);
	        context.lineTo(-50, 25);
	        context.lineTo(-50, -25);
	    };
	    return Arrow;
	}(Sprite_1.Sprite));
	exports.Arrow = Arrow;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(1);
	var Sprite = (function () {
	    function Sprite(color) {
	        if (color === void 0) { color = '#000000'; }
	        this.x = 0;
	        this.y = 0;
	        this.rotation = 0;
	        this.scaleX = 1;
	        this.scaleY = 1;
	        this.lineWidth = 1;
	        this.color = utils_1.parseColor(color);
	    }
	    Sprite.prototype.draw = function (context) {
	        context.save();
	        context.translate(this.x, this.y);
	        context.rotate(this.rotation);
	        context.scale(this.scaleX, this.scaleY);
	        context.lineWidth = this.lineWidth;
	        context.fillStyle = this.color;
	        context.beginPath();
	        this.onDraw(context);
	        context.closePath();
	        context.fill();
	        if (this.lineWidth > 0) {
	            context.stroke();
	        }
	        context.restore();
	    };
	    return Sprite;
	}());
	exports.Sprite = Sprite;


/***/ }
/******/ ]);