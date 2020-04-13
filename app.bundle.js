/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domready */ "./node_modules/domready/ready.js");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(domready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/App */ "./src/scripts/App.js");
/* harmony import */ var _scripts_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/fade */ "./src/scripts/fade.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);






window.app = new _scripts_App__WEBPACK_IMPORTED_MODULE_1__["default"]();
domready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  window.app.init();
});


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/App.js":
/*!****************************!*\
  !*** ./src/scripts/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _webgl_WebGLView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/WebGLView */ "./src/scripts/webgl/WebGLView.js");

class App {
  constructor() {}

  init() {
    this.initWebGL();
    this.addListeners();
    this.animate();
    this.resize();
  }

  initWebGL() {
    this.webgl = new _webgl_WebGLView__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    document
      .querySelector(".canvasContainer")
      .appendChild(this.webgl.renderer.domElement);
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this);

    window.addEventListener("resize", this.resize.bind(this));

    const el = this.webgl.renderer.domElement;
    // el.addEventListener("click", this.click.bind(this));
  }

  animate() {
    this.update();
    this.draw();

    this.raf = requestAnimationFrame(this.handlerAnimate);
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    if (this.webgl) this.webgl.update();
  }

  draw() {
    if (this.webgl) this.webgl.draw();
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (this.webgl) this.webgl.resize();
  }

  click(e) {
    this.webgl.next();
  }
}


/***/ }),

/***/ "./src/scripts/fade.js":
/*!*****************************!*\
  !*** ./src/scripts/fade.js ***!
  \*****************************/
/*! exports provided: animationComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationComplete", function() { return animationComplete; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


const targetedElements = Array.from(document.querySelectorAll(".fade"));

const animationComplete = new Promise((res, rej) => {
  const tl = gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].timeline({
    onComplete: () => res(),
  });

  tl.fromTo(
    targetedElements[0],
    { y: 50 },
    { y: 0, duration: 0.6, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[1],
    { y: 25 },
    { y: 0, duration: 0.6, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[2],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[3],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
  tl.fromTo(
    targetedElements[4],
    { y: 20 },
    { y: 0, duration: 0.1, opacity: 1 }
  );
});


/***/ }),

/***/ "./src/scripts/utils/easing.utils.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/easing.utils.js ***!
  \*******************************************/
/*! exports provided: easeInQuad, easeOutQuad, easeInOutQuad, easeInOutQuart, easeInSine, easeOutSine, easeInOutSine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInSine", function() { return easeInSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function() { return easeOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutSine", function() { return easeInOutSine; });
const easeInQuad = (t, b, c, d) => {
	t /= d;
	return c * t * t + b;
};

const easeOutQuad = (t, b, c, d) => {
	t /= d;
	return -c * t * (t - 2) + b;
};

const easeInOutQuad = (t, b, c, d) => {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t + b;
	t--;
	return -c/2 * (t * (t - 2) - 1) + b;
};

const easeInOutQuart = (t, b, c, d) => {
	if ((t /= d / 2) < 1) {
		return c / 2 * t * t * t * t + b;
	} else {
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	}
};

const easeInSine = (t, b, c, d) => {
	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
};

const easeOutSine = (t, b, c, d) => {
	return c * Math.sin(t/d * (Math.PI/2)) + b;
};

const easeInOutSine = (t, b, c, d) => {
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};



/***/ }),

/***/ "./src/scripts/utils/event.utils.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/event.utils.js ***!
  \******************************************/
/*! exports provided: passiveEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveEvent", function() { return passiveEvent; });
let alreadyTested = false;
let passiveSupported = false;

const isSupported = () => {
	if (alreadyTested) return passiveSupported;
	alreadyTested = true;

	// Test via a getter in the options object to see if the passive property is accessed
	try {
		let opts = Object.defineProperty({}, 'passive', {
			get: () => {
				passiveSupported = true;
			}
		});
		window.addEventListener('test', null, opts);
	} catch (e) {
		return passiveSupported;
	}
	window.removeEventListener('test', null, opts);
	return passiveSupported;
};

const passiveEvent = () => {
	return isSupported() ? { passive: true } : false;
};



/***/ }),

/***/ "./src/scripts/webgl/WebGLView.js":
/*!****************************************!*\
  !*** ./src/scripts/webgl/WebGLView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebGLView; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _controls_InteractiveControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/InteractiveControls */ "./src/scripts/webgl/controls/InteractiveControls.js");
/* harmony import */ var _particles_Particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particles/Particles */ "./src/scripts/webgl/particles/Particles.js");




class WebGLView {
  constructor(app) {
    this.app = app;

    this.samples = ["/dist/assets/glasses.png"];

    this.initThree();
    this.initParticles();
    this.initControls();

    const rnd = ~~(Math.random() * this.samples.length);
    this.goto(rnd);
  }

  initThree() {
    // scene
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();

    // camera
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 300;

    // renderer
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ antialias: true, alpha: true });

    // clock
    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"](true);
  }

  initControls() {
    this.interactive = new _controls_InteractiveControls__WEBPACK_IMPORTED_MODULE_1__["default"](
      this.camera,
      this.renderer.domElement
    );
  }

  initParticles() {
    this.particles = new _particles_Particles__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.scene.add(this.particles.container);
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    const delta = this.clock.getDelta();

    if (this.particles) this.particles.update(delta);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  goto(index) {
    // init next
    if (this.currSample == null) this.particles.init(this.samples[index]);
    // hide curr then init next
    else {
      this.particles.hide(true).then(() => {
        this.particles.init(this.samples[index]);
      });
    }

    this.currSample = index;
  }

  next() {
    if (this.currSample < this.samples.length - 1)
      this.goto(this.currSample + 1);
    else this.goto(0);
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z;

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.screen.width <= 420) {
      this.camera.position.setZ(500);
    }
    if (this.interactive) this.interactive.resize();
    if (this.particles) this.particles.resize();
  }
}


/***/ }),

/***/ "./src/scripts/webgl/controls/InteractiveControls.js":
/*!***********************************************************!*\
  !*** ./src/scripts/webgl/controls/InteractiveControls.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveControls; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var browser_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-detect */ "./node_modules/browser-detect/dist/browser-detect.es5.js");
/* harmony import */ var _utils_event_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/event.utils.js */ "./src/scripts/utils/event.utils.js");






class InteractiveControls extends events__WEBPACK_IMPORTED_MODULE_0___default.a {
  get enabled() {
    return this._enabled;
  }

  constructor(camera, el) {
    super();

    this.camera = camera;
    this.el = el || window;

    this.plane = new three__WEBPACK_IMPORTED_MODULE_1__["Plane"]();
    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();

    this.mouse = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
    this.offset = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
    this.intersection = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();

    this.objects = [];
    this.hovered = null;
    this.selected = null;

    this.isDown = false;

    this.browser = Object(browser_detect__WEBPACK_IMPORTED_MODULE_2__["default"])();

    this.enable();
  }

  enable() {
    if (this.enabled) return;
    this.addListeners();
    this._enabled = true;
  }

  disable() {
    if (!this.enabled) return;
    this.removeListeners();
    this._enabled = false;
  }

  addListeners() {
    this.handlerDown = this.onDown.bind(this);
    this.handlerMove = this.onMove.bind(this);
    this.handlerUp = this.onUp.bind(this);
    this.handlerLeave = this.onLeave.bind(this);
    if (this.browser.mobile) {
      this.el.addEventListener("touchstart", this.handlerDown, _utils_event_utils_js__WEBPACK_IMPORTED_MODULE_3__["passiveEvent"]);
      this.el.addEventListener("touchmove", this.handlerMove, _utils_event_utils_js__WEBPACK_IMPORTED_MODULE_3__["passiveEvent"]);
      this.el.addEventListener("touchend", this.handlerUp, _utils_event_utils_js__WEBPACK_IMPORTED_MODULE_3__["passiveEvent"]);
    } else {
      this.el.addEventListener("mousedown", this.handlerDown);
      this.el.addEventListener("mousemove", this.handlerMove);
      this.el.addEventListener("mouseup", this.handlerUp);
      this.el.addEventListener("mouseleave", this.handlerLeave);
    }
  }

  removeListeners() {
    if (this.browser.mobile) {
      this.el.removeEventListener("touchstart", this.handlerDown);
      this.el.removeEventListener("touchmove", this.handlerMove);
      this.el.removeEventListener("touchend", this.handlerUp);
    } else {
      this.el.removeEventListener("mousedown", this.handlerDown);
      this.el.removeEventListener("mousemove", this.handlerMove);
      this.el.removeEventListener("mouseup", this.handlerUp);
      this.el.removeEventListener("mouseleave", this.handlerLeave);
    }
  }

  resize(x, y, width, height) {
    if (x || y || width || height) {
      this.rect = { x, y, width, height };
    } else if (this.el === window) {
      this.rect = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      this.rect = this.el.getBoundingClientRect();
    }
  }

  onMove(e) {
    const t = e.touches ? e.touches[0] : e;
    const touch = { x: t.clientX, y: t.clientY };

    this.mouse.x = ((touch.x + this.rect.x) / this.rect.width) * 2 - 1;
    this.mouse.y = -((touch.y + this.rect.y) / this.rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.objects);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      this.intersectionData = intersects[0];

      this.plane.setFromNormalAndCoplanarPoint(
        this.camera.getWorldDirection(this.plane.normal),
        object.position
      );

      if (this.hovered !== object) {
        this.emit("interactive-out", { object: this.hovered });
        this.emit("interactive-over", { object });
        this.hovered = object;
      } else {
        this.emit("interactive-move", {
          object,
          intersectionData: this.intersectionData,
        });
      }
    } else {
      this.intersectionData = null;

      if (this.hovered !== null) {
        this.emit("interactive-out", { object: this.hovered });
        this.hovered = null;
      }
    }
  }

  onDown(e) {
    this.isDown = true;
    this.onMove(e);

    this.emit("interactive-down", {
      object: this.hovered,
      previous: this.selected,
      intersectionData: this.intersectionData,
    });
    this.selected = this.hovered;

    if (this.selected) {
      if (this.raycaster.ray.intersectPlane(this.plane, this.intersection)) {
        this.offset.copy(this.intersection).sub(this.selected.position);
      }
    }
  }

  onUp(e) {
    this.isDown = false;

    this.emit("interactive-up", { object: this.hovered });
  }

  onLeave(e) {
    this.onUp(e);

    this.emit("interactive-out", { object: this.hovered });
    this.hovered = null;
  }
}


/***/ }),

/***/ "./src/scripts/webgl/particles/Particles.js":
/*!**************************************************!*\
  !*** ./src/scripts/webgl/particles/Particles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particles; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _TouchTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchTexture */ "./src/scripts/webgl/particles/TouchTexture.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fade */ "./src/scripts/fade.js");





const glslify = __webpack_require__(/*! glslify */ "./node_modules/glslify/browser.js");

class Particles {
  constructor(webgl) {
    this.webgl = webgl;
    this.container = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
    this.container.position.x = 100;
    this.container.position.y = 10;
  }

  init(src) {
    const loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();

    loader.load(src, (texture) => {
      this.texture = texture;
      this.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
      this.texture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];

      this.width = texture.image.width;
      this.height = texture.image.height;

      this.initPoints(true);
      this.initHitArea();
      this.initTouch();
      // promise here
      _fade__WEBPACK_IMPORTED_MODULE_3__["animationComplete"].then(() => {
        this.resize();
        this.show();
      });
    });
  }

  initPoints(discard) {
    this.numPoints = this.width * this.height;

    let numVisible = this.numPoints;
    let threshold = 0;
    let originalColors;

    if (discard) {
      // discard pixels darker than threshold #22
      numVisible = 0;
      threshold = 34;

      const img = this.texture.image;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = this.width;
      canvas.height = this.height;
      ctx.scale(1, -1);
      ctx.drawImage(img, 0, 0, this.width, this.height * -1);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      originalColors = Float32Array.from(imgData.data);

      for (let i = 0; i < this.numPoints; i++) {
        if (originalColors[i * 4 + 0] > threshold) numVisible++;
      }
    }

    const uniforms = {
      uTime: { value: 0 },
      uRandom: { value: 1.0 },
      uDepth: { value: 2.0 },
      uSize: { value: 0.0 },
      uTextureSize: { value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](this.width, this.height) },
      uTexture: { value: this.texture },
      uTouch: { value: null },
    };

    const material = new three__WEBPACK_IMPORTED_MODULE_0__["RawShaderMaterial"]({
      uniforms,
      vertexShader: glslify(__webpack_require__(/*! ../../../shaders/particle.vert */ "./src/shaders/particle.vert")),
      fragmentShader: glslify(__webpack_require__(/*! ../../../shaders/particle.frag */ "./src/shaders/particle.frag")),
      depthTest: false,
      transparent: true,
      // blending: AdditiveBlending
    });

    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["InstancedBufferGeometry"]();

    // positions
    const positions = new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(4 * 3), 3);
    positions.setXYZ(0, -0.5, 0.5, 0.0);
    positions.setXYZ(1, 0.5, 0.5, 0.0);
    positions.setXYZ(2, -0.5, -0.5, 0.0);
    positions.setXYZ(3, 0.5, -0.5, 0.0);
    geometry.addAttribute("position", positions);

    // uvs
    const uvs = new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(4 * 2), 2);
    uvs.setXYZ(0, 0.0, 0.0);
    uvs.setXYZ(1, 1.0, 0.0);
    uvs.setXYZ(2, 0.0, 1.0);
    uvs.setXYZ(3, 1.0, 1.0);
    geometry.addAttribute("uv", uvs);

    // index
    geometry.setIndex(
      new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
    );

    const indices = new Uint16Array(numVisible);
    const offsets = new Float32Array(numVisible * 3);
    const angles = new Float32Array(numVisible);

    for (let i = 0, j = 0; i < this.numPoints; i++) {
      if (discard && originalColors[i * 4 + 0] <= threshold) continue;

      offsets[j * 3 + 0] = i % this.width;
      offsets[j * 3 + 1] = Math.floor(i / this.width);

      indices[j] = i;

      angles[j] = Math.random() * Math.PI;

      j++;
    }

    geometry.addAttribute(
      "pindex",
      new three__WEBPACK_IMPORTED_MODULE_0__["InstancedBufferAttribute"](indices, 1, false)
    );
    geometry.addAttribute(
      "offset",
      new three__WEBPACK_IMPORTED_MODULE_0__["InstancedBufferAttribute"](offsets, 3, false)
    );
    geometry.addAttribute(
      "angle",
      new three__WEBPACK_IMPORTED_MODULE_0__["InstancedBufferAttribute"](angles, 1, false)
    );

    this.object3D = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
    this.container.add(this.object3D);
  }

  initTouch() {
    // create only once
    if (!this.touch) this.touch = new _TouchTexture__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.object3D.material.uniforms.uTouch.value = this.touch.texture;
  }

  initHitArea() {
    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](this.width, this.height, 1, 1);
    const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
      color: 0xffffff,
      wireframe: true,
      depthTest: false,
    });
    material.visible = false;
    this.hitArea = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
    this.container.add(this.hitArea);
  }

  addListeners() {
    this.handlerInteractiveMove = this.onInteractiveMove.bind(this);

    this.webgl.interactive.addListener(
      "interactive-move",
      this.handlerInteractiveMove
    );
    this.webgl.interactive.objects.push(this.hitArea);
    this.webgl.interactive.enable();
  }

  removeListeners() {
    this.webgl.interactive.removeListener(
      "interactive-move",
      this.handlerInteractiveMove
    );

    const index = this.webgl.interactive.objects.findIndex(
      (obj) => obj === this.hitArea
    );
    this.webgl.interactive.objects.splice(index, 1);
    this.webgl.interactive.disable();
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update(delta) {
    if (!this.object3D) return;
    if (this.touch) this.touch.update();

    this.object3D.material.uniforms.uTime.value += delta;
  }

  show(time = 1.0) {
    // Size of particle
    const size = window.screen.width < 420 ? 1 : 2;

    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].fromTo(
      this.object3D.material.uniforms.uSize,
      time,
      { value: 0.5 },
      { value: size }
    );
    // Randomness
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this.object3D.material.uniforms.uRandom, time, { value: 0 });
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].fromTo(
      this.object3D.material.uniforms.uDepth,
      time * 1,
      { value: 50.0 },
      { value: 3.0 }
    );

    this.addListeners();
  }

  hide(_destroy, time = 0.8) {
    return new Promise((resolve, reject) => {
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this.object3D.material.uniforms.uRandom, time, {
        value: 5.0,
        onComplete: () => {
          if (_destroy) this.destroy();
          resolve();
        },
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this.object3D.material.uniforms.uDepth, time, {
        value: -20.0,
        ease: Quad.easeIn,
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this.object3D.material.uniforms.uSize, time * 0.8, {
        value: 0.0,
      });

      this.removeListeners();
    });
  }

  destroy() {
    if (!this.object3D) return;

    this.object3D.parent.remove(this.object3D);
    this.object3D.geometry.dispose();
    this.object3D.material.dispose();
    this.object3D = null;

    if (!this.hitArea) return;

    this.hitArea.parent.remove(this.hitArea);
    this.hitArea.geometry.dispose();
    this.hitArea.material.dispose();
    this.hitArea = null;
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.object3D) return;

    // if (window.screen.width <= 420) {
    //   this.container.position.x = 0;
    //   this.container.position.y = 0;
    //   this.webgl.particles.object3D.material.uniforms.uSize.value = 1;
    // } else {
    //   this.container.position.x = 100;
    //   this.container.position.y = 10;
    //   this.webgl.particles.object3D.material.uniforms.uSize.value = 2;
    // }

    const scale = this.webgl.fovHeight / this.height;
    this.object3D.scale.set(scale, scale, 1);
    this.hitArea.scale.set(scale, scale, 1);
  }

  onInteractiveMove(e) {
    const uv = e.intersectionData.uv;
    if (this.touch) this.touch.addTouch(uv);
  }
}


/***/ }),

/***/ "./src/scripts/webgl/particles/TouchTexture.js":
/*!*****************************************************!*\
  !*** ./src/scripts/webgl/particles/TouchTexture.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchTexture; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_easing_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/easing.utils */ "./src/scripts/utils/easing.utils.js");




class TouchTexture {
  constructor(parent) {
    this.parent = parent;
    this.size = 64;
    this.maxAge = 120;
    this.radius = 0.15;
    this.trail = [];

    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = this.size;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.texture = new three__WEBPACK_IMPORTED_MODULE_0__["Texture"](this.canvas);

    this.canvas.id = "touchTexture";
    this.canvas.style.width = this.canvas.style.height = `${this.canvas.width}px`;
  }

  update(delta) {
    this.clear();

    // age points
    this.trail.forEach((point, i) => {
      point.age++;
      // remove old
      if (point.age > this.maxAge) {
        this.trail.splice(i, 1);
      }
    });

    this.trail.forEach((point, i) => {
      this.drawTouch(point);
    });

    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point) {
    let force = 0;
    const last = this.trail[this.trail.length - 1];
    if (last) {
      const dx = last.x - point.x;
      const dy = last.y - point.y;
      const dd = dx * dx + dy * dy;
      force = Math.min(dd * 10000, 1);
    }
    this.trail.push({ x: point.x, y: point.y, age: 0, force });
  }

  drawTouch(point) {
    const pos = {
      x: point.x * this.size,
      y: (1 - point.y) * this.size,
    };

    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Object(_utils_easing_utils__WEBPACK_IMPORTED_MODULE_1__["easeOutSine"])(point.age / (this.maxAge * 0.3), 0, 1, 1);
    } else {
      intensity = Object(_utils_easing_utils__WEBPACK_IMPORTED_MODULE_1__["easeOutSine"])(
        1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7),
        0,
        1,
        1
      );
    }

    intensity *= point.force;

    const radius = this.size * this.radius * intensity;
    const grd = this.ctx.createRadialGradient(
      pos.x,
      pos.y,
      radius * 0.25,
      pos.x,
      pos.y,
      radius
    );
    grd.addColorStop(0, `rgba(255, 255, 255, 0.2)`);
    grd.addColorStop(1, "rgba(0, 0, 0, 0.0)");

    this.ctx.beginPath();
    this.ctx.fillStyle = grd;
    this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}


/***/ }),

/***/ "./src/shaders/particle.frag":
/*!***********************************!*\
  !*** ./src/shaders/particle.frag ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// @author brunoimbrizi / http://brunoimbrizi.com\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D uTexture;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = vec4(0.0);\n\tvec2 uv = vUv;\n\tvec2 puv = vPUv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\n\t// greyscale\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\tvec4 colB = vec4(grey, grey, grey, 1.0);\n\n\t// circle\n\tfloat border = 0.3;\n\tfloat radius = 0.5;\n\tfloat dist = radius - distance(uv, vec2(0.5));\n\tfloat t = smoothstep(0.0, border, dist);\n\n\t// final color\n\tcolor = colB;\n\tcolor.a = t;\n\n\tgl_FragColor = color;\n}"

/***/ }),

/***/ "./src/shaders/particle.vert":
/*!***********************************!*\
  !*** ./src/shaders/particle.vert ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// @author brunoimbrizi / http://brunoimbrizi.com\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute float pindex;\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec2 uv;\nattribute float angle;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uRandom;\nuniform float uDepth;\nuniform float uSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform sampler2D uTouch;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nfloat random(float n) {\n\treturn fract(sin(n) * 43758.5453123);\n}\n\nvoid main() {\n\tvUv = uv;\n\n\t// particle uv\n\tvec2 puv = offset.xy / uTextureSize;\n\tvPUv = puv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\n\t// displacement\n\tvec3 displaced = offset;\n\t// randomise\n\tdisplaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;\n\tfloat rndz = (random(pindex) + snoise_1_2(vec2(pindex * 0.1, uTime * 0.1)));\n\tdisplaced.z += rndz * (random(pindex) * 2.0 * uDepth);\n\t// center\n\tdisplaced.xy -= uTextureSize * 0.5;\n\n\t// touch\n\tfloat t = texture2D(uTouch, puv).r;\n\tdisplaced.z += t * 20.0 * rndz;\n\tdisplaced.x += cos(angle) * t * 20.0 * rndz;\n\tdisplaced.y += sin(angle) * t * 20.0 * rndz;\n\n\t// particle size\n\tfloat psize = (snoise_1_2(vec2(uTime, pindex) * 0.5) + 2.0);\n\tpsize *= max(grey, 0.2);\n\tpsize *= uSize;\n\n\t// final position\n\tvec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);\n\tmvPosition.xyz += position * psize;\n\tvec4 finalPosition = projectionMatrix * mvPosition;\n\n\tgl_Position = finalPosition;\n}\n"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMvZWFzaW5nLnV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2V2ZW50LnV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYmdsL1dlYkdMVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy93ZWJnbC9jb250cm9scy9JbnRlcmFjdGl2ZUNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYmdsL3BhcnRpY2xlcy9QYXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvd2ViZ2wvcGFydGljbGVzL1RvdWNoVGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9wYXJ0aWNsZS5mcmFnIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3BhcnRpY2xlLnZlcnQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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LGlEQUFpRCwwR0FBMEcsZ0ZBQWdGLDBEQUEwRCxvREFBb0QscURBQXFELG1DQUFtQyxnREFBZ0QsZ0RBQWdELHNGQUFzRiw0QkFBNEIsbUJBQW1CLG9GQUFvRix1Q0FBdUMsdURBQXVELGtDQUFrQyxHQUFHLEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCByZWFkeSBmcm9tIFwiZG9tcmVhZHlcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9zY3JpcHRzL0FwcFwiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2ZhZGVcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG53aW5kb3cuYXBwID0gbmV3IEFwcCgpO1xucmVhZHkoKCkgPT4ge1xuICB3aW5kb3cuYXBwLmluaXQoKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFdlYkdMVmlldyBmcm9tIFwiLi93ZWJnbC9XZWJHTFZpZXdcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdFdlYkdMKCk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgaW5pdFdlYkdMKCkge1xuICAgIHRoaXMud2ViZ2wgPSBuZXcgV2ViR0xWaWV3KHRoaXMpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYW52YXNDb250YWluZXJcIilcbiAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLndlYmdsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuaGFuZGxlckFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuXG4gICAgY29uc3QgZWwgPSB0aGlzLndlYmdsLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZXJBbmltYXRlKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQVUJMSUNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLndlYmdsKSB0aGlzLndlYmdsLnVwZGF0ZSgpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAodGhpcy53ZWJnbCkgdGhpcy53ZWJnbC5kcmF3KCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRVZFTlQgSEFORExFUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcmVzaXplKCkge1xuICAgIGlmICh0aGlzLndlYmdsKSB0aGlzLndlYmdsLnJlc2l6ZSgpO1xuICB9XG5cbiAgY2xpY2soZSkge1xuICAgIHRoaXMud2ViZ2wubmV4dCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcblxuY29uc3QgdGFyZ2V0ZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlXCIpKTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgb25Db21wbGV0ZTogKCkgPT4gcmVzKCksXG4gIH0pO1xuXG4gIHRsLmZyb21UbyhcbiAgICB0YXJnZXRlZEVsZW1lbnRzWzBdLFxuICAgIHsgeTogNTAgfSxcbiAgICB7IHk6IDAsIGR1cmF0aW9uOiAwLjYsIG9wYWNpdHk6IDEgfVxuICApO1xuICB0bC5mcm9tVG8oXG4gICAgdGFyZ2V0ZWRFbGVtZW50c1sxXSxcbiAgICB7IHk6IDI1IH0sXG4gICAgeyB5OiAwLCBkdXJhdGlvbjogMC42LCBvcGFjaXR5OiAxIH1cbiAgKTtcbiAgdGwuZnJvbVRvKFxuICAgIHRhcmdldGVkRWxlbWVudHNbMl0sXG4gICAgeyB5OiAyMCB9LFxuICAgIHsgeTogMCwgZHVyYXRpb246IDAuMSwgb3BhY2l0eTogMSB9XG4gICk7XG4gIHRsLmZyb21UbyhcbiAgICB0YXJnZXRlZEVsZW1lbnRzWzNdLFxuICAgIHsgeTogMjAgfSxcbiAgICB7IHk6IDAsIGR1cmF0aW9uOiAwLjEsIG9wYWNpdHk6IDEgfVxuICApO1xuICB0bC5mcm9tVG8oXG4gICAgdGFyZ2V0ZWRFbGVtZW50c1s0XSxcbiAgICB7IHk6IDIwIH0sXG4gICAgeyB5OiAwLCBkdXJhdGlvbjogMC4xLCBvcGFjaXR5OiAxIH1cbiAgKTtcbn0pO1xuIiwiY29uc3QgZWFzZUluUXVhZCA9ICh0LCBiLCBjLCBkKSA9PiB7XG5cdHQgLz0gZDtcblx0cmV0dXJuIGMgKiB0ICogdCArIGI7XG59O1xuXG5jb25zdCBlYXNlT3V0UXVhZCA9ICh0LCBiLCBjLCBkKSA9PiB7XG5cdHQgLz0gZDtcblx0cmV0dXJuIC1jICogdCAqICh0IC0gMikgKyBiO1xufTtcblxuY29uc3QgZWFzZUluT3V0UXVhZCA9ICh0LCBiLCBjLCBkKSA9PiB7XG5cdHQgLz0gZCAvIDI7XG5cdGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuXHR0LS07XG5cdHJldHVybiAtYy8yICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xufTtcblxuY29uc3QgZWFzZUluT3V0UXVhcnQgPSAodCwgYiwgYywgZCkgPT4ge1xuXHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG5cdH1cbn07XG5cbmNvbnN0IGVhc2VJblNpbmUgPSAodCwgYiwgYywgZCkgPT4ge1xuXHRyZXR1cm4gLWMgKiBNYXRoLmNvcyh0L2QgKiAoTWF0aC5QSS8yKSkgKyBjICsgYjtcbn07XG5cbmNvbnN0IGVhc2VPdXRTaW5lID0gKHQsIGIsIGMsIGQpID0+IHtcblx0cmV0dXJuIGMgKiBNYXRoLnNpbih0L2QgKiAoTWF0aC5QSS8yKSkgKyBiO1xufTtcblxuY29uc3QgZWFzZUluT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG5cdHJldHVybiAtYyAvIDIgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQgLyBkKSAtIDEpICsgYjtcbn07XG5cbmV4cG9ydCB7IGVhc2VJblF1YWQsIGVhc2VPdXRRdWFkLCBlYXNlSW5PdXRRdWFkLCBlYXNlSW5PdXRRdWFydCwgZWFzZUluU2luZSwgZWFzZU91dFNpbmUsIGVhc2VJbk91dFNpbmUgfTsiLCJsZXQgYWxyZWFkeVRlc3RlZCA9IGZhbHNlO1xubGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblxuY29uc3QgaXNTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGlmIChhbHJlYWR5VGVzdGVkKSByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcblx0YWxyZWFkeVRlc3RlZCA9IHRydWU7XG5cblx0Ly8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuXHR0cnkge1xuXHRcdGxldCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0XHRcdGdldDogKCkgPT4ge1xuXHRcdFx0XHRwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG5cdH1cblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcblx0cmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59O1xuXG5jb25zdCBwYXNzaXZlRXZlbnQgPSAoKSA9PiB7XG5cdHJldHVybiBpc1N1cHBvcnRlZCgpID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IHBhc3NpdmVFdmVudCB9OyIsImltcG9ydCB7IFNjZW5lLCBQZXJzcGVjdGl2ZUNhbWVyYSwgV2ViR0xSZW5kZXJlciwgQ2xvY2sgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBJbnRlcmFjdGl2ZUNvbnRyb2xzIGZyb20gXCIuL2NvbnRyb2xzL0ludGVyYWN0aXZlQ29udHJvbHNcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcIi4vcGFydGljbGVzL1BhcnRpY2xlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJHTFZpZXcge1xuICBjb25zdHJ1Y3RvcihhcHApIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcblxuICAgIHRoaXMuc2FtcGxlcyA9IFtcIi9kaXN0L2Fzc2V0cy9nbGFzc2VzLnBuZ1wiXTtcblxuICAgIHRoaXMuaW5pdFRocmVlKCk7XG4gICAgdGhpcy5pbml0UGFydGljbGVzKCk7XG4gICAgdGhpcy5pbml0Q29udHJvbHMoKTtcblxuICAgIGNvbnN0IHJuZCA9IH5+KE1hdGgucmFuZG9tKCkgKiB0aGlzLnNhbXBsZXMubGVuZ3RoKTtcbiAgICB0aGlzLmdvdG8ocm5kKTtcbiAgfVxuXG4gIGluaXRUaHJlZSgpIHtcbiAgICAvLyBzY2VuZVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcblxuICAgIC8vIGNhbWVyYVxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgNTAsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIDEsXG4gICAgICAxMDAwMFxuICAgICk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDMwMDtcblxuICAgIC8vIHJlbmRlcmVyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBXZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTtcblxuICAgIC8vIGNsb2NrXG4gICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jayh0cnVlKTtcbiAgfVxuXG4gIGluaXRDb250cm9scygpIHtcbiAgICB0aGlzLmludGVyYWN0aXZlID0gbmV3IEludGVyYWN0aXZlQ29udHJvbHMoXG4gICAgICB0aGlzLmNhbWVyYSxcbiAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudFxuICAgICk7XG4gIH1cblxuICBpbml0UGFydGljbGVzKCkge1xuICAgIHRoaXMucGFydGljbGVzID0gbmV3IFBhcnRpY2xlcyh0aGlzKTtcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBhcnRpY2xlcy5jb250YWluZXIpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBVQkxJQ1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNsb2NrLmdldERlbHRhKCk7XG5cbiAgICBpZiAodGhpcy5wYXJ0aWNsZXMpIHRoaXMucGFydGljbGVzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIGdvdG8oaW5kZXgpIHtcbiAgICAvLyBpbml0IG5leHRcbiAgICBpZiAodGhpcy5jdXJyU2FtcGxlID09IG51bGwpIHRoaXMucGFydGljbGVzLmluaXQodGhpcy5zYW1wbGVzW2luZGV4XSk7XG4gICAgLy8gaGlkZSBjdXJyIHRoZW4gaW5pdCBuZXh0XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhcnRpY2xlcy5oaWRlKHRydWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5pbml0KHRoaXMuc2FtcGxlc1tpbmRleF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyU2FtcGxlID0gaW5kZXg7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmN1cnJTYW1wbGUgPCB0aGlzLnNhbXBsZXMubGVuZ3RoIC0gMSlcbiAgICAgIHRoaXMuZ290byh0aGlzLmN1cnJTYW1wbGUgKyAxKTtcbiAgICBlbHNlIHRoaXMuZ290bygwKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFVkVOVCBIQU5ETEVSU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICByZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlbmRlcmVyKSByZXR1cm47XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgdGhpcy5mb3ZIZWlnaHQgPVxuICAgICAgMiAqXG4gICAgICBNYXRoLnRhbigodGhpcy5jYW1lcmEuZm92ICogTWF0aC5QSSkgLyAxODAgLyAyKSAqXG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNDIwKSB7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXRaKDUwMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVyYWN0aXZlKSB0aGlzLmludGVyYWN0aXZlLnJlc2l6ZSgpO1xuICAgIGlmICh0aGlzLnBhcnRpY2xlcykgdGhpcy5wYXJ0aWNsZXMucmVzaXplKCk7XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgUGxhbmUsIFJheWNhc3RlciwgVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IGJyb3dzZXIgZnJvbSBcImJyb3dzZXItZGV0ZWN0XCI7XG5cbmltcG9ydCB7IHBhc3NpdmVFdmVudCB9IGZyb20gXCIuLi8uLi91dGlscy9ldmVudC51dGlscy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZUNvbnRyb2xzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjYW1lcmEsIGVsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuZWwgPSBlbCB8fCB3aW5kb3c7XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IFBsYW5lKCk7XG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKCk7XG5cbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlY3RvcjIoKTtcbiAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb24gPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgdGhpcy5ob3ZlcmVkID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLmJyb3dzZXIgPSBicm93c2VyKCk7XG5cbiAgICB0aGlzLmVuYWJsZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuaGFuZGxlckRvd24gPSB0aGlzLm9uRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlck1vdmUgPSB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlclVwID0gdGhpcy5vblVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVyTGVhdmUgPSB0aGlzLm9uTGVhdmUuYmluZCh0aGlzKTtcbiAgICBpZiAodGhpcy5icm93c2VyLm1vYmlsZSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZXJEb3duLCBwYXNzaXZlRXZlbnQpO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlck1vdmUsIHBhc3NpdmVFdmVudCk7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZXJVcCwgcGFzc2l2ZUV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlckRvd24pO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlck1vdmUpO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZXJVcCk7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuaGFuZGxlckxlYXZlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuYnJvd3Nlci5tb2JpbGUpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVyRG93bik7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVyTW92ZSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZXJVcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZXJEb3duKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZXJNb3ZlKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVyVXApO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmhhbmRsZXJMZWF2ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAoeCB8fCB5IHx8IHdpZHRoIHx8IGhlaWdodCkge1xuICAgICAgdGhpcy5yZWN0ID0geyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsID09PSB3aW5kb3cpIHtcbiAgICAgIHRoaXMucmVjdCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlKGUpIHtcbiAgICBjb25zdCB0ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcbiAgICBjb25zdCB0b3VjaCA9IHsgeDogdC5jbGllbnRYLCB5OiB0LmNsaWVudFkgfTtcblxuICAgIHRoaXMubW91c2UueCA9ICgodG91Y2gueCArIHRoaXMucmVjdC54KSAvIHRoaXMucmVjdC53aWR0aCkgKiAyIC0gMTtcbiAgICB0aGlzLm1vdXNlLnkgPSAtKCh0b3VjaC55ICsgdGhpcy5yZWN0LnkpIC8gdGhpcy5yZWN0LmhlaWdodCkgKiAyICsgMTtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodGhpcy5tb3VzZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5vYmplY3RzKTtcblxuICAgIGlmIChpbnRlcnNlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdHNbMF0ub2JqZWN0O1xuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25EYXRhID0gaW50ZXJzZWN0c1swXTtcblxuICAgICAgdGhpcy5wbGFuZS5zZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludChcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24odGhpcy5wbGFuZS5ub3JtYWwpLFxuICAgICAgICBvYmplY3QucG9zaXRpb25cbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWQgIT09IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVtaXQoXCJpbnRlcmFjdGl2ZS1vdXRcIiwgeyBvYmplY3Q6IHRoaXMuaG92ZXJlZCB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtb3ZlclwiLCB7IG9iamVjdCB9KTtcbiAgICAgICAgdGhpcy5ob3ZlcmVkID0gb2JqZWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtbW92ZVwiLCB7XG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGludGVyc2VjdGlvbkRhdGE6IHRoaXMuaW50ZXJzZWN0aW9uRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uRGF0YSA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtb3V0XCIsIHsgb2JqZWN0OiB0aGlzLmhvdmVyZWQgfSk7XG4gICAgICAgIHRoaXMuaG92ZXJlZCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Eb3duKGUpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgdGhpcy5vbk1vdmUoZSk7XG5cbiAgICB0aGlzLmVtaXQoXCJpbnRlcmFjdGl2ZS1kb3duXCIsIHtcbiAgICAgIG9iamVjdDogdGhpcy5ob3ZlcmVkLFxuICAgICAgcHJldmlvdXM6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBpbnRlcnNlY3Rpb25EYXRhOiB0aGlzLmludGVyc2VjdGlvbkRhdGEsXG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuaG92ZXJlZDtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBpZiAodGhpcy5yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKHRoaXMucGxhbmUsIHRoaXMuaW50ZXJzZWN0aW9uKSkge1xuICAgICAgICB0aGlzLm9mZnNldC5jb3B5KHRoaXMuaW50ZXJzZWN0aW9uKS5zdWIodGhpcy5zZWxlY3RlZC5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25VcChlKSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgIHRoaXMuZW1pdChcImludGVyYWN0aXZlLXVwXCIsIHsgb2JqZWN0OiB0aGlzLmhvdmVyZWQgfSk7XG4gIH1cblxuICBvbkxlYXZlKGUpIHtcbiAgICB0aGlzLm9uVXAoZSk7XG5cbiAgICB0aGlzLmVtaXQoXCJpbnRlcmFjdGl2ZS1vdXRcIiwgeyBvYmplY3Q6IHRoaXMuaG92ZXJlZCB9KTtcbiAgICB0aGlzLmhvdmVyZWQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBPYmplY3QzRCxcbiAgVGV4dHVyZUxvYWRlcixcbiAgTGluZWFyRmlsdGVyLFxuICBSR0JGb3JtYXQsXG4gIFJhd1NoYWRlck1hdGVyaWFsLFxuICBWZWN0b3IyLFxuICBJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeSxcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUsXG4gIFBsYW5lR2VvbWV0cnksXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBNZXNoLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFR3ZWVuTGl0ZSB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgVG91Y2hUZXh0dXJlIGZyb20gXCIuL1RvdWNoVGV4dHVyZVwiO1xuaW1wb3J0IHsgYW5pbWF0aW9uQ29tcGxldGUgfSBmcm9tIFwiLi4vLi4vZmFkZVwiO1xuXG5jb25zdCBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlcyB7XG4gIGNvbnN0cnVjdG9yKHdlYmdsKSB7XG4gICAgdGhpcy53ZWJnbCA9IHdlYmdsO1xuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IE9iamVjdDNEKCk7XG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IDEwMDtcbiAgICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gMTA7XG4gIH1cblxuICBpbml0KHNyYykge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XG5cbiAgICBsb2FkZXIubG9hZChzcmMsICh0ZXh0dXJlKSA9PiB7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy50ZXh0dXJlLm1pbkZpbHRlciA9IExpbmVhckZpbHRlcjtcbiAgICAgIHRoaXMudGV4dHVyZS5tYWdGaWx0ZXIgPSBMaW5lYXJGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xuXG4gICAgICB0aGlzLndpZHRoID0gdGV4dHVyZS5pbWFnZS53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGV4dHVyZS5pbWFnZS5oZWlnaHQ7XG5cbiAgICAgIHRoaXMuaW5pdFBvaW50cyh0cnVlKTtcbiAgICAgIHRoaXMuaW5pdEhpdEFyZWEoKTtcbiAgICAgIHRoaXMuaW5pdFRvdWNoKCk7XG4gICAgICAvLyBwcm9taXNlIGhlcmVcbiAgICAgIGFuaW1hdGlvbkNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdFBvaW50cyhkaXNjYXJkKSB7XG4gICAgdGhpcy5udW1Qb2ludHMgPSB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG5cbiAgICBsZXQgbnVtVmlzaWJsZSA9IHRoaXMubnVtUG9pbnRzO1xuICAgIGxldCB0aHJlc2hvbGQgPSAwO1xuICAgIGxldCBvcmlnaW5hbENvbG9ycztcblxuICAgIGlmIChkaXNjYXJkKSB7XG4gICAgICAvLyBkaXNjYXJkIHBpeGVscyBkYXJrZXIgdGhhbiB0aHJlc2hvbGQgIzIyXG4gICAgICBudW1WaXNpYmxlID0gMDtcbiAgICAgIHRocmVzaG9sZCA9IDM0O1xuXG4gICAgICBjb25zdCBpbWcgPSB0aGlzLnRleHR1cmUuaW1hZ2U7XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIGN0eC5zY2FsZSgxLCAtMSk7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAtMSk7XG5cbiAgICAgIGNvbnN0IGltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBvcmlnaW5hbENvbG9ycyA9IEZsb2F0MzJBcnJheS5mcm9tKGltZ0RhdGEuZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgICBpZiAob3JpZ2luYWxDb2xvcnNbaSAqIDQgKyAwXSA+IHRocmVzaG9sZCkgbnVtVmlzaWJsZSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcbiAgICAgIHVSYW5kb206IHsgdmFsdWU6IDEuMCB9LFxuICAgICAgdURlcHRoOiB7IHZhbHVlOiAyLjAgfSxcbiAgICAgIHVTaXplOiB7IHZhbHVlOiAwLjAgfSxcbiAgICAgIHVUZXh0dXJlU2l6ZTogeyB2YWx1ZTogbmV3IFZlY3RvcjIodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIH0sXG4gICAgICB1VGV4dHVyZTogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICB1VG91Y2g6IHsgdmFsdWU6IG51bGwgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgUmF3U2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgdW5pZm9ybXMsXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IGdsc2xpZnkocmVxdWlyZShcIi4uLy4uLy4uL3NoYWRlcnMvcGFydGljbGUudmVydFwiKSksXG4gICAgICBmcmFnbWVudFNoYWRlcjogZ2xzbGlmeShyZXF1aXJlKFwiLi4vLi4vLi4vc2hhZGVycy9wYXJ0aWNsZS5mcmFnXCIpKSxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIC8vIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBJbnN0YW5jZWRCdWZmZXJHZW9tZXRyeSgpO1xuXG4gICAgLy8gcG9zaXRpb25zXG4gICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KDQgKiAzKSwgMyk7XG4gICAgcG9zaXRpb25zLnNldFhZWigwLCAtMC41LCAwLjUsIDAuMCk7XG4gICAgcG9zaXRpb25zLnNldFhZWigxLCAwLjUsIDAuNSwgMC4wKTtcbiAgICBwb3NpdGlvbnMuc2V0WFlaKDIsIC0wLjUsIC0wLjUsIDAuMCk7XG4gICAgcG9zaXRpb25zLnNldFhZWigzLCAwLjUsIC0wLjUsIDAuMCk7XG4gICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKFwicG9zaXRpb25cIiwgcG9zaXRpb25zKTtcblxuICAgIC8vIHV2c1xuICAgIGNvbnN0IHV2cyA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSg0ICogMiksIDIpO1xuICAgIHV2cy5zZXRYWVooMCwgMC4wLCAwLjApO1xuICAgIHV2cy5zZXRYWVooMSwgMS4wLCAwLjApO1xuICAgIHV2cy5zZXRYWVooMiwgMC4wLCAxLjApO1xuICAgIHV2cy5zZXRYWVooMywgMS4wLCAxLjApO1xuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcInV2XCIsIHV2cyk7XG5cbiAgICAvLyBpbmRleFxuICAgIGdlb21ldHJ5LnNldEluZGV4KFxuICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkoWzAsIDIsIDEsIDIsIDMsIDFdKSwgMSlcbiAgICApO1xuXG4gICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1WaXNpYmxlKTtcbiAgICBjb25zdCBvZmZzZXRzID0gbmV3IEZsb2F0MzJBcnJheShudW1WaXNpYmxlICogMyk7XG4gICAgY29uc3QgYW5nbGVzID0gbmV3IEZsb2F0MzJBcnJheShudW1WaXNpYmxlKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGlmIChkaXNjYXJkICYmIG9yaWdpbmFsQ29sb3JzW2kgKiA0ICsgMF0gPD0gdGhyZXNob2xkKSBjb250aW51ZTtcblxuICAgICAgb2Zmc2V0c1tqICogMyArIDBdID0gaSAlIHRoaXMud2lkdGg7XG4gICAgICBvZmZzZXRzW2ogKiAzICsgMV0gPSBNYXRoLmZsb29yKGkgLyB0aGlzLndpZHRoKTtcblxuICAgICAgaW5kaWNlc1tqXSA9IGk7XG5cbiAgICAgIGFuZ2xlc1tqXSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuXG4gICAgICBqKys7XG4gICAgfVxuXG4gICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKFxuICAgICAgXCJwaW5kZXhcIixcbiAgICAgIG5ldyBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSwgZmFsc2UpXG4gICAgKTtcbiAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXG4gICAgICBcIm9mZnNldFwiLFxuICAgICAgbmV3IEluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZShvZmZzZXRzLCAzLCBmYWxzZSlcbiAgICApO1xuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcbiAgICAgIFwiYW5nbGVcIixcbiAgICAgIG5ldyBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUoYW5nbGVzLCAxLCBmYWxzZSlcbiAgICApO1xuXG4gICAgdGhpcy5vYmplY3QzRCA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMub2JqZWN0M0QpO1xuICB9XG5cbiAgaW5pdFRvdWNoKCkge1xuICAgIC8vIGNyZWF0ZSBvbmx5IG9uY2VcbiAgICBpZiAoIXRoaXMudG91Y2gpIHRoaXMudG91Y2ggPSBuZXcgVG91Y2hUZXh0dXJlKHRoaXMpO1xuICAgIHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudVRvdWNoLnZhbHVlID0gdGhpcy50b3VjaC50ZXh0dXJlO1xuICB9XG5cbiAgaW5pdEhpdEFyZWEoKSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMSwgMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlLFxuICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICB9KTtcbiAgICBtYXRlcmlhbC52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5oaXRBcmVhID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5oaXRBcmVhKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICB0aGlzLmhhbmRsZXJJbnRlcmFjdGl2ZU1vdmUgPSB0aGlzLm9uSW50ZXJhY3RpdmVNb3ZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLndlYmdsLmludGVyYWN0aXZlLmFkZExpc3RlbmVyKFxuICAgICAgXCJpbnRlcmFjdGl2ZS1tb3ZlXCIsXG4gICAgICB0aGlzLmhhbmRsZXJJbnRlcmFjdGl2ZU1vdmVcbiAgICApO1xuICAgIHRoaXMud2ViZ2wuaW50ZXJhY3RpdmUub2JqZWN0cy5wdXNoKHRoaXMuaGl0QXJlYSk7XG4gICAgdGhpcy53ZWJnbC5pbnRlcmFjdGl2ZS5lbmFibGUoKTtcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLndlYmdsLmludGVyYWN0aXZlLnJlbW92ZUxpc3RlbmVyKFxuICAgICAgXCJpbnRlcmFjdGl2ZS1tb3ZlXCIsXG4gICAgICB0aGlzLmhhbmRsZXJJbnRlcmFjdGl2ZU1vdmVcbiAgICApO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLndlYmdsLmludGVyYWN0aXZlLm9iamVjdHMuZmluZEluZGV4KFxuICAgICAgKG9iaikgPT4gb2JqID09PSB0aGlzLmhpdEFyZWFcbiAgICApO1xuICAgIHRoaXMud2ViZ2wuaW50ZXJhY3RpdmUub2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMud2ViZ2wuaW50ZXJhY3RpdmUuZGlzYWJsZSgpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBVQkxJQ1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0M0QpIHJldHVybjtcbiAgICBpZiAodGhpcy50b3VjaCkgdGhpcy50b3VjaC51cGRhdGUoKTtcblxuICAgIHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgKz0gZGVsdGE7XG4gIH1cblxuICBzaG93KHRpbWUgPSAxLjApIHtcbiAgICAvLyBTaXplIG9mIHBhcnRpY2xlXG4gICAgY29uc3Qgc2l6ZSA9IHdpbmRvdy5zY3JlZW4ud2lkdGggPCA0MjAgPyAxIDogMjtcblxuICAgIFR3ZWVuTGl0ZS5mcm9tVG8oXG4gICAgICB0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVTaXplLFxuICAgICAgdGltZSxcbiAgICAgIHsgdmFsdWU6IDAuNSB9LFxuICAgICAgeyB2YWx1ZTogc2l6ZSB9XG4gICAgKTtcbiAgICAvLyBSYW5kb21uZXNzXG4gICAgVHdlZW5MaXRlLnRvKHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudVJhbmRvbSwgdGltZSwgeyB2YWx1ZTogMCB9KTtcbiAgICBUd2VlbkxpdGUuZnJvbVRvKFxuICAgICAgdGhpcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51RGVwdGgsXG4gICAgICB0aW1lICogMSxcbiAgICAgIHsgdmFsdWU6IDUwLjAgfSxcbiAgICAgIHsgdmFsdWU6IDMuMCB9XG4gICAgKTtcblxuICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBoaWRlKF9kZXN0cm95LCB0aW1lID0gMC44KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVSYW5kb20sIHRpbWUsIHtcbiAgICAgICAgdmFsdWU6IDUuMCxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIGlmIChfZGVzdHJveSkgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBUd2VlbkxpdGUudG8odGhpcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51RGVwdGgsIHRpbWUsIHtcbiAgICAgICAgdmFsdWU6IC0yMC4wLFxuICAgICAgICBlYXNlOiBRdWFkLmVhc2VJbixcbiAgICAgIH0pO1xuICAgICAgVHdlZW5MaXRlLnRvKHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudVNpemUsIHRpbWUgKiAwLjgsIHtcbiAgICAgICAgdmFsdWU6IDAuMCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0M0QpIHJldHVybjtcblxuICAgIHRoaXMub2JqZWN0M0QucGFyZW50LnJlbW92ZSh0aGlzLm9iamVjdDNEKTtcbiAgICB0aGlzLm9iamVjdDNELmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLm9iamVjdDNELm1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgICB0aGlzLm9iamVjdDNEID0gbnVsbDtcblxuICAgIGlmICghdGhpcy5oaXRBcmVhKSByZXR1cm47XG5cbiAgICB0aGlzLmhpdEFyZWEucGFyZW50LnJlbW92ZSh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMuaGl0QXJlYS5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5oaXRBcmVhLm1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEVWRU5UIEhBTkRMRVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0M0QpIHJldHVybjtcblxuICAgIC8vIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDQyMCkge1xuICAgIC8vICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IDA7XG4gICAgLy8gICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gMDtcbiAgICAvLyAgIHRoaXMud2ViZ2wucGFydGljbGVzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVTaXplLnZhbHVlID0gMTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueCA9IDEwMDtcbiAgICAvLyAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnkgPSAxMDtcbiAgICAvLyAgIHRoaXMud2ViZ2wucGFydGljbGVzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVTaXplLnZhbHVlID0gMjtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBzY2FsZSA9IHRoaXMud2ViZ2wuZm92SGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5vYmplY3QzRC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCAxKTtcbiAgICB0aGlzLmhpdEFyZWEuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgMSk7XG4gIH1cblxuICBvbkludGVyYWN0aXZlTW92ZShlKSB7XG4gICAgY29uc3QgdXYgPSBlLmludGVyc2VjdGlvbkRhdGEudXY7XG4gICAgaWYgKHRoaXMudG91Y2gpIHRoaXMudG91Y2guYWRkVG91Y2godXYpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInRocmVlXCI7XG5cbmltcG9ydCB7IGVhc2VPdXRTaW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Vhc2luZy51dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaFRleHR1cmUge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpemUgPSA2NDtcbiAgICB0aGlzLm1heEFnZSA9IDEyMDtcbiAgICB0aGlzLnJhZGl1cyA9IDAuMTU7XG4gICAgdGhpcy50cmFpbCA9IFtdO1xuXG4gICAgdGhpcy5pbml0VGV4dHVyZSgpO1xuICB9XG5cbiAgaW5pdFRleHR1cmUoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5zaXplO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLmlkID0gXCJ0b3VjaFRleHR1cmVcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuY2FudmFzLndpZHRofXB4YDtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIC8vIGFnZSBwb2ludHNcbiAgICB0aGlzLnRyYWlsLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICBwb2ludC5hZ2UrKztcbiAgICAgIC8vIHJlbW92ZSBvbGRcbiAgICAgIGlmIChwb2ludC5hZ2UgPiB0aGlzLm1heEFnZSkge1xuICAgICAgICB0aGlzLnRyYWlsLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudHJhaWwuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgIHRoaXMuZHJhd1RvdWNoKHBvaW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMudGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBhZGRUb3VjaChwb2ludCkge1xuICAgIGxldCBmb3JjZSA9IDA7XG4gICAgY29uc3QgbGFzdCA9IHRoaXMudHJhaWxbdGhpcy50cmFpbC5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgY29uc3QgZHggPSBsYXN0LnggLSBwb2ludC54O1xuICAgICAgY29uc3QgZHkgPSBsYXN0LnkgLSBwb2ludC55O1xuICAgICAgY29uc3QgZGQgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIGZvcmNlID0gTWF0aC5taW4oZGQgKiAxMDAwMCwgMSk7XG4gICAgfVxuICAgIHRoaXMudHJhaWwucHVzaCh7IHg6IHBvaW50LngsIHk6IHBvaW50LnksIGFnZTogMCwgZm9yY2UgfSk7XG4gIH1cblxuICBkcmF3VG91Y2gocG9pbnQpIHtcbiAgICBjb25zdCBwb3MgPSB7XG4gICAgICB4OiBwb2ludC54ICogdGhpcy5zaXplLFxuICAgICAgeTogKDEgLSBwb2ludC55KSAqIHRoaXMuc2l6ZSxcbiAgICB9O1xuXG4gICAgbGV0IGludGVuc2l0eSA9IDE7XG4gICAgaWYgKHBvaW50LmFnZSA8IHRoaXMubWF4QWdlICogMC4zKSB7XG4gICAgICBpbnRlbnNpdHkgPSBlYXNlT3V0U2luZShwb2ludC5hZ2UgLyAodGhpcy5tYXhBZ2UgKiAwLjMpLCAwLCAxLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZW5zaXR5ID0gZWFzZU91dFNpbmUoXG4gICAgICAgIDEgLSAocG9pbnQuYWdlIC0gdGhpcy5tYXhBZ2UgKiAwLjMpIC8gKHRoaXMubWF4QWdlICogMC43KSxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpbnRlbnNpdHkgKj0gcG9pbnQuZm9yY2U7XG5cbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLnNpemUgKiB0aGlzLnJhZGl1cyAqIGludGVuc2l0eTtcbiAgICBjb25zdCBncmQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHBvcy54LFxuICAgICAgcG9zLnksXG4gICAgICByYWRpdXMgKiAwLjI1LFxuICAgICAgcG9zLngsXG4gICAgICBwb3MueSxcbiAgICAgIHJhZGl1c1xuICAgICk7XG4gICAgZ3JkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpYCk7XG4gICAgZ3JkLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMCwgMCwgMCwgMC4wKVwiKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyZDtcbiAgICB0aGlzLmN0eC5hcmMocG9zLngsIHBvcy55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvLyBAYXV0aG9yIGJydW5vaW1icml6aSAvIGh0dHA6Ly9icnVub2ltYnJpemkuY29tXFxuXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZQVXY7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dmVjNCBjb2xvciA9IHZlYzQoMC4wKTtcXG5cXHR2ZWMyIHV2ID0gdlV2O1xcblxcdHZlYzIgcHV2ID0gdlBVdjtcXG5cXG5cXHQvLyBwaXhlbCBjb2xvclxcblxcdHZlYzQgY29sQSA9IHRleHR1cmUyRCh1VGV4dHVyZSwgcHV2KTtcXG5cXG5cXHQvLyBncmV5c2NhbGVcXG5cXHRmbG9hdCBncmV5ID0gY29sQS5yICogMC4yMSArIGNvbEEuZyAqIDAuNzEgKyBjb2xBLmIgKiAwLjA3O1xcblxcdHZlYzQgY29sQiA9IHZlYzQoZ3JleSwgZ3JleSwgZ3JleSwgMS4wKTtcXG5cXG5cXHQvLyBjaXJjbGVcXG5cXHRmbG9hdCBib3JkZXIgPSAwLjM7XFxuXFx0ZmxvYXQgcmFkaXVzID0gMC41O1xcblxcdGZsb2F0IGRpc3QgPSByYWRpdXMgLSBkaXN0YW5jZSh1diwgdmVjMigwLjUpKTtcXG5cXHRmbG9hdCB0ID0gc21vb3Roc3RlcCgwLjAsIGJvcmRlciwgZGlzdCk7XFxuXFxuXFx0Ly8gZmluYWwgY29sb3JcXG5cXHRjb2xvciA9IGNvbEI7XFxuXFx0Y29sb3IuYSA9IHQ7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8vIEBhdXRob3IgYnJ1bm9pbWJyaXppIC8gaHR0cDovL2JydW5vaW1icml6aS5jb21cXG5cXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG5hdHRyaWJ1dGUgZmxvYXQgcGluZGV4O1xcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG9mZnNldDtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgZmxvYXQgYW5nbGU7XFxuXFxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gZmxvYXQgdVJhbmRvbTtcXG51bmlmb3JtIGZsb2F0IHVEZXB0aDtcXG51bmlmb3JtIGZsb2F0IHVTaXplO1xcbnVuaWZvcm0gdmVjMiB1VGV4dHVyZVNpemU7XFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxudW5pZm9ybSBzYW1wbGVyMkQgdVRvdWNoO1xcblxcbnZhcnlpbmcgdmVjMiB2UFV2O1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuLy9cXG4vLyBEZXNjcmlwdGlvbiA6IEFycmF5IGFuZCB0ZXh0dXJlbGVzcyBHTFNMIDJEIHNpbXBsZXggbm9pc2UgZnVuY3Rpb24uXFxuLy8gICAgICBBdXRob3IgOiBJYW4gTWNFd2FuLCBBc2hpbWEgQXJ0cy5cXG4vLyAgTWFpbnRhaW5lciA6IGlqbVxcbi8vICAgICBMYXN0bW9kIDogMjAxMTA4MjIgKGlqbSlcXG4vLyAgICAgTGljZW5zZSA6IENvcHlyaWdodCAoQykgMjAxMSBBc2hpbWEgQXJ0cy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4vLyAgICAgICAgICAgICAgIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZS5cXG4vLyAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2hpbWEvd2ViZ2wtbm9pc2VcXG4vL1xcblxcbnZlYzMgbW9kMjg5XzFfMCh2ZWMzIHgpIHtcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzIgbW9kMjg5XzFfMCh2ZWMyIHgpIHtcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzMgcGVybXV0ZV8xXzEodmVjMyB4KSB7XFxuICByZXR1cm4gbW9kMjg5XzFfMCgoKHgqMzQuMCkrMS4wKSp4KTtcXG59XFxuXFxuZmxvYXQgc25vaXNlXzFfMih2ZWMyIHYpXFxuICB7XFxuICBjb25zdCB2ZWM0IEMgPSB2ZWM0KDAuMjExMzI0ODY1NDA1MTg3LCAgLy8gKDMuMC1zcXJ0KDMuMCkpLzYuMFxcbiAgICAgICAgICAgICAgICAgICAgICAwLjM2NjAyNTQwMzc4NDQzOSwgIC8vIDAuNSooc3FydCgzLjApLTEuMClcXG4gICAgICAgICAgICAgICAgICAgICAtMC41NzczNTAyNjkxODk2MjYsICAvLyAtMS4wICsgMi4wICogQy54XFxuICAgICAgICAgICAgICAgICAgICAgIDAuMDI0MzkwMjQzOTAyNDM5KTsgLy8gMS4wIC8gNDEuMFxcbi8vIEZpcnN0IGNvcm5lclxcbiAgdmVjMiBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eSkgKTtcXG4gIHZlYzIgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHgpO1xcblxcbi8vIE90aGVyIGNvcm5lcnNcXG4gIHZlYzIgaTE7XFxuICAvL2kxLnggPSBzdGVwKCB4MC55LCB4MC54ICk7IC8vIHgwLnggPiB4MC55ID8gMS4wIDogMC4wXFxuICAvL2kxLnkgPSAxLjAgLSBpMS54O1xcbiAgaTEgPSAoeDAueCA+IHgwLnkpID8gdmVjMigxLjAsIDAuMCkgOiB2ZWMyKDAuMCwgMS4wKTtcXG4gIC8vIHgwID0geDAgLSAwLjAgKyAwLjAgKiBDLnh4IDtcXG4gIC8vIHgxID0geDAgLSBpMSArIDEuMCAqIEMueHggO1xcbiAgLy8geDIgPSB4MCAtIDEuMCArIDIuMCAqIEMueHggO1xcbiAgdmVjNCB4MTIgPSB4MC54eXh5ICsgQy54eHp6O1xcbiAgeDEyLnh5IC09IGkxO1xcblxcbi8vIFBlcm11dGF0aW9uc1xcbiAgaSA9IG1vZDI4OV8xXzAoaSk7IC8vIEF2b2lkIHRydW5jYXRpb24gZWZmZWN0cyBpbiBwZXJtdXRhdGlvblxcbiAgdmVjMyBwID0gcGVybXV0ZV8xXzEoIHBlcm11dGVfMV8xKCBpLnkgKyB2ZWMzKDAuMCwgaTEueSwgMS4wICkpXFxuICAgICsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcXG5cXG4gIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSwgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcXG4gIG0gPSBtKm0gO1xcbiAgbSA9IG0qbSA7XFxuXFxuLy8gR3JhZGllbnRzOiA0MSBwb2ludHMgdW5pZm9ybWx5IG92ZXIgYSBsaW5lLCBtYXBwZWQgb250byBhIGRpYW1vbmQuXFxuLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQxICg0MSo3ID0gMjg3KVxcblxcbiAgdmVjMyB4ID0gMi4wICogZnJhY3QocCAqIEMud3d3KSAtIDEuMDtcXG4gIHZlYzMgaCA9IGFicyh4KSAtIDAuNTtcXG4gIHZlYzMgb3ggPSBmbG9vcih4ICsgMC41KTtcXG4gIHZlYzMgYTAgPSB4IC0gb3g7XFxuXFxuLy8gTm9ybWFsaXNlIGdyYWRpZW50cyBpbXBsaWNpdGx5IGJ5IHNjYWxpbmcgbVxcbi8vIEFwcHJveGltYXRpb24gb2Y6IG0gKj0gaW52ZXJzZXNxcnQoIGEwKmEwICsgaCpoICk7XFxuICBtICo9IDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogKCBhMCphMCArIGgqaCApO1xcblxcbi8vIENvbXB1dGUgZmluYWwgbm9pc2UgdmFsdWUgYXQgUFxcbiAgdmVjMyBnO1xcbiAgZy54ICA9IGEwLnggICogeDAueCAgKyBoLnggICogeDAueTtcXG4gIGcueXogPSBhMC55eiAqIHgxMi54eiArIGgueXogKiB4MTIueXc7XFxuICByZXR1cm4gMTMwLjAgKiBkb3QobSwgZyk7XFxufVxcblxcblxcblxcblxcbmZsb2F0IHJhbmRvbShmbG9hdCBuKSB7XFxuXFx0cmV0dXJuIGZyYWN0KHNpbihuKSAqIDQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dlV2ID0gdXY7XFxuXFxuXFx0Ly8gcGFydGljbGUgdXZcXG5cXHR2ZWMyIHB1diA9IG9mZnNldC54eSAvIHVUZXh0dXJlU2l6ZTtcXG5cXHR2UFV2ID0gcHV2O1xcblxcblxcdC8vIHBpeGVsIGNvbG9yXFxuXFx0dmVjNCBjb2xBID0gdGV4dHVyZTJEKHVUZXh0dXJlLCBwdXYpO1xcblxcdGZsb2F0IGdyZXkgPSBjb2xBLnIgKiAwLjIxICsgY29sQS5nICogMC43MSArIGNvbEEuYiAqIDAuMDc7XFxuXFxuXFx0Ly8gZGlzcGxhY2VtZW50XFxuXFx0dmVjMyBkaXNwbGFjZWQgPSBvZmZzZXQ7XFxuXFx0Ly8gcmFuZG9taXNlXFxuXFx0ZGlzcGxhY2VkLnh5ICs9IHZlYzIocmFuZG9tKHBpbmRleCkgLSAwLjUsIHJhbmRvbShvZmZzZXQueCArIHBpbmRleCkgLSAwLjUpICogdVJhbmRvbTtcXG5cXHRmbG9hdCBybmR6ID0gKHJhbmRvbShwaW5kZXgpICsgc25vaXNlXzFfMih2ZWMyKHBpbmRleCAqIDAuMSwgdVRpbWUgKiAwLjEpKSk7XFxuXFx0ZGlzcGxhY2VkLnogKz0gcm5keiAqIChyYW5kb20ocGluZGV4KSAqIDIuMCAqIHVEZXB0aCk7XFxuXFx0Ly8gY2VudGVyXFxuXFx0ZGlzcGxhY2VkLnh5IC09IHVUZXh0dXJlU2l6ZSAqIDAuNTtcXG5cXG5cXHQvLyB0b3VjaFxcblxcdGZsb2F0IHQgPSB0ZXh0dXJlMkQodVRvdWNoLCBwdXYpLnI7XFxuXFx0ZGlzcGxhY2VkLnogKz0gdCAqIDIwLjAgKiBybmR6O1xcblxcdGRpc3BsYWNlZC54ICs9IGNvcyhhbmdsZSkgKiB0ICogMjAuMCAqIHJuZHo7XFxuXFx0ZGlzcGxhY2VkLnkgKz0gc2luKGFuZ2xlKSAqIHQgKiAyMC4wICogcm5kejtcXG5cXG5cXHQvLyBwYXJ0aWNsZSBzaXplXFxuXFx0ZmxvYXQgcHNpemUgPSAoc25vaXNlXzFfMih2ZWMyKHVUaW1lLCBwaW5kZXgpICogMC41KSArIDIuMCk7XFxuXFx0cHNpemUgKj0gbWF4KGdyZXksIDAuMik7XFxuXFx0cHNpemUgKj0gdVNpemU7XFxuXFxuXFx0Ly8gZmluYWwgcG9zaXRpb25cXG5cXHR2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KGRpc3BsYWNlZCwgMS4wKTtcXG5cXHRtdlBvc2l0aW9uLnh5eiArPSBwb3NpdGlvbiAqIHBzaXplO1xcblxcdHZlYzQgZmluYWxQb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcblxcblxcdGdsX1Bvc2l0aW9uID0gZmluYWxQb3NpdGlvbjtcXG59XFxuXCIiXSwic291cmNlUm9vdCI6IiJ9