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
const el = document.querySelector(".sk-cube-grid");

domready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  el.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMvZWFzaW5nLnV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2V2ZW50LnV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYmdsL1dlYkdMVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy93ZWJnbC9jb250cm9scy9JbnRlcmFjdGl2ZUNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYmdsL3BhcnRpY2xlcy9QYXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvd2ViZ2wvcGFydGljbGVzL1RvdWNoVGV4dHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9wYXJ0aWNsZS5mcmFnIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3BhcnRpY2xlLnZlcnQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDRztBQUNSO0FBQ0Y7O0FBRXRCLGlCQUFpQixvREFBRztBQUNwQjs7QUFFQSwrQ0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNYRCx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQTBDO0FBQzNCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQTRCOztBQUU1Qjs7QUFFTztBQUNQLGFBQWEseUNBQUk7QUFDakI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxLQUFLLFFBQVE7QUFDYixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSyxRQUFRO0FBQ2IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssUUFBUTtBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLFFBQVE7QUFDYixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSyxRQUFRO0FBQ2IsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNOO0FBQ25COztBQUUvQjtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFLOztBQUUxQjtBQUNBLHNCQUFzQix1REFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1EQUFhLEVBQUUsK0JBQStCOztBQUV0RTtBQUNBLHFCQUFxQiwyQ0FBSztBQUMxQjs7QUFFQTtBQUNBLDJCQUEyQixxRUFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNERBQVM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ3lCO0FBQ3RCOztBQUVxQjs7QUFFM0Msa0NBQWtDLDZDQUFZO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLDJDQUFLO0FBQzFCLHlCQUF5QiwrQ0FBUzs7QUFFbEMscUJBQXFCLDZDQUFPO0FBQzVCLHNCQUFzQiw2Q0FBTztBQUM3Qiw0QkFBNEIsNkNBQU87O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsOERBQU87O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxrRUFBWTtBQUMzRSw4REFBOEQsa0VBQVk7QUFDMUUsMkRBQTJELGtFQUFZO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0QsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLHVCQUF1QjtBQUN4RDs7QUFFQTtBQUNBOztBQUVBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFlO0FBQ2tCO0FBQ1M7QUFDSzs7QUFFL0MsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVM7O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBUTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsbURBQWE7O0FBRXBDO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQVk7QUFDM0MsK0JBQStCLGtEQUFZO0FBQzNDLDRCQUE0QiwrQ0FBUzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLGdCQUFnQixhQUFhO0FBQzdCLGVBQWUsYUFBYTtBQUM1QixjQUFjLGFBQWE7QUFDM0IscUJBQXFCLFlBQVksNkNBQU8sMkJBQTJCO0FBQ25FLGlCQUFpQixzQkFBc0I7QUFDdkMsZUFBZSxjQUFjO0FBQzdCOztBQUVBLHlCQUF5Qix1REFBaUI7QUFDMUM7QUFDQSw0QkFBNEIsbUJBQU8sQ0FBQyxtRUFBZ0M7QUFDcEUsOEJBQThCLG1CQUFPLENBQUMsbUVBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwseUJBQXlCLDZEQUF1Qjs7QUFFaEQ7QUFDQSwwQkFBMEIscURBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxREFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHFEQUFlO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsb0JBQW9CO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw4REFBd0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4REFBd0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4REFBd0I7QUFDbEM7O0FBRUEsd0JBQXdCLDBDQUFJO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxxREFBWTtBQUNsRDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFhO0FBQ3RDLHlCQUF5Qix1REFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLDBDQUFJO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksOENBQVM7QUFDYjtBQUNBO0FBQ0EsT0FBTyxhQUFhO0FBQ3BCLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSSw4Q0FBUyxvREFBb0QsV0FBVztBQUM1RSxJQUFJLDhDQUFTO0FBQ2I7QUFDQTtBQUNBLE9BQU8sY0FBYztBQUNyQixPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLDhDQUFTO0FBQ2Y7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLDhDQUFTO0FBQ2Y7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFNBO0FBQUE7QUFBQTtBQUFBO0FBQWdDOztBQUV1Qjs7QUFFeEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDZDQUFPOztBQUU5QjtBQUNBLDREQUE0RCxrQkFBa0I7QUFDOUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQXdDO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1RUFBVztBQUM3QixLQUFLO0FBQ0wsa0JBQWtCLHVFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckdBLDZGQUE2RixrREFBa0Qsc0JBQXNCLG1CQUFtQixpQkFBaUIsMkJBQTJCLGtCQUFrQixvQkFBb0IsNkRBQTZELGlGQUFpRiw0Q0FBNEMsc0NBQXNDLHVCQUF1QixrREFBa0QsNENBQTRDLHFDQUFxQyxnQkFBZ0IsMkJBQTJCLEdBQUcsQzs7Ozs7Ozs7Ozs7QUNBbHJCLDZGQUE2Riw4Q0FBOEMsMEJBQTBCLHdCQUF3QixvQkFBb0Isd0JBQXdCLGlDQUFpQyxnQ0FBZ0Msd0JBQXdCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLDRCQUE0Qiw2QkFBNkIsMkJBQTJCLHNCQUFzQixtQkFBbUIsdVpBQXVaLGdEQUFnRCxHQUFHLDZCQUE2QixnREFBZ0QsR0FBRyw4QkFBOEIsd0NBQXdDLEdBQUcsaUNBQWlDLDhPQUE4TyxzRUFBc0UscUNBQXFDLGdDQUFnQyxnQ0FBZ0MsbURBQW1ELHlEQUF5RCxtQ0FBbUMsa0NBQWtDLG1DQUFtQyxnQ0FBZ0MsaUJBQWlCLHlDQUF5QyxtSkFBbUosd0ZBQXdGLGFBQWEsYUFBYSw2TEFBNkwsMEJBQTBCLDZCQUE2QixxQkFBcUIseUdBQXlHLCtEQUErRCxnREFBZ0QsdUNBQXVDLDBDQUEwQyw2QkFBNkIsR0FBRyxpQ0FBaUMseUNBQXlDLEdBQUcsaUJBQWlCLGFBQWEsNERBQTRELGVBQWUsNkRBQTZELCtEQUErRCxpREFBaUQsMEdBQTBHLGdGQUFnRiwwREFBMEQsb0RBQW9ELHFEQUFxRCxtQ0FBbUMsZ0RBQWdELGdEQUFnRCxzRkFBc0YsNEJBQTRCLG1CQUFtQixvRkFBb0YsdUNBQXVDLHVEQUF1RCxrQ0FBa0MsR0FBRyxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgcmVhZHkgZnJvbSBcImRvbXJlYWR5XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL3NjcmlwdHMvQXBwXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvZmFkZVwiO1xuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbndpbmRvdy5hcHAgPSBuZXcgQXBwKCk7XG5jb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2stY3ViZS1ncmlkXCIpO1xuXG5yZWFkeSgoKSA9PiB7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgd2luZG93LmFwcC5pbml0KCk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBXZWJHTFZpZXcgZnJvbSBcIi4vd2ViZ2wvV2ViR0xWaWV3XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRXZWJHTCgpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIGluaXRXZWJHTCgpIHtcbiAgICB0aGlzLndlYmdsID0gbmV3IFdlYkdMVmlldyh0aGlzKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzQ29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kQ2hpbGQodGhpcy53ZWJnbC5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICB0aGlzLmhhbmRsZXJBbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICAgIGNvbnN0IGVsID0gdGhpcy53ZWJnbC5yZW5kZXJlci5kb21FbGVtZW50O1xuICAgIC8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVyQW5pbWF0ZSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUFVCTElDXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy53ZWJnbCkgdGhpcy53ZWJnbC51cGRhdGUoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMud2ViZ2wpIHRoaXMud2ViZ2wuZHJhdygpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEVWRU5UIEhBTkRMRVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy53ZWJnbCkgdGhpcy53ZWJnbC5yZXNpemUoKTtcbiAgfVxuXG4gIGNsaWNrKGUpIHtcbiAgICB0aGlzLndlYmdsLm5leHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmNvbnN0IHRhcmdldGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZVwiKSk7XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIG9uQ29tcGxldGU6ICgpID0+IHJlcygpLFxuICB9KTtcblxuICB0bC5mcm9tVG8oXG4gICAgdGFyZ2V0ZWRFbGVtZW50c1swXSxcbiAgICB7IHk6IDUwIH0sXG4gICAgeyB5OiAwLCBkdXJhdGlvbjogMC42LCBvcGFjaXR5OiAxIH1cbiAgKTtcbiAgdGwuZnJvbVRvKFxuICAgIHRhcmdldGVkRWxlbWVudHNbMV0sXG4gICAgeyB5OiAyNSB9LFxuICAgIHsgeTogMCwgZHVyYXRpb246IDAuNiwgb3BhY2l0eTogMSB9XG4gICk7XG4gIHRsLmZyb21UbyhcbiAgICB0YXJnZXRlZEVsZW1lbnRzWzJdLFxuICAgIHsgeTogMjAgfSxcbiAgICB7IHk6IDAsIGR1cmF0aW9uOiAwLjEsIG9wYWNpdHk6IDEgfVxuICApO1xuICB0bC5mcm9tVG8oXG4gICAgdGFyZ2V0ZWRFbGVtZW50c1szXSxcbiAgICB7IHk6IDIwIH0sXG4gICAgeyB5OiAwLCBkdXJhdGlvbjogMC4xLCBvcGFjaXR5OiAxIH1cbiAgKTtcbiAgdGwuZnJvbVRvKFxuICAgIHRhcmdldGVkRWxlbWVudHNbNF0sXG4gICAgeyB5OiAyMCB9LFxuICAgIHsgeTogMCwgZHVyYXRpb246IDAuMSwgb3BhY2l0eTogMSB9XG4gICk7XG59KTtcbiIsImNvbnN0IGVhc2VJblF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuXHR0IC89IGQ7XG5cdHJldHVybiBjICogdCAqIHQgKyBiO1xufTtcblxuY29uc3QgZWFzZU91dFF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuXHR0IC89IGQ7XG5cdHJldHVybiAtYyAqIHQgKiAodCAtIDIpICsgYjtcbn07XG5cbmNvbnN0IGVhc2VJbk91dFF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuXHR0IC89IGQgLyAyO1xuXHRpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcblx0dC0tO1xuXHRyZXR1cm4gLWMvMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbn07XG5cbmNvbnN0IGVhc2VJbk91dFF1YXJ0ID0gKHQsIGIsIGMsIGQpID0+IHtcblx0aWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gLWMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xuXHR9XG59O1xuXG5jb25zdCBlYXNlSW5TaW5lID0gKHQsIGIsIGMsIGQpID0+IHtcblx0cmV0dXJuIC1jICogTWF0aC5jb3ModC9kICogKE1hdGguUEkvMikpICsgYyArIGI7XG59O1xuXG5jb25zdCBlYXNlT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG5cdHJldHVybiBjICogTWF0aC5zaW4odC9kICogKE1hdGguUEkvMikpICsgYjtcbn07XG5cbmNvbnN0IGVhc2VJbk91dFNpbmUgPSAodCwgYiwgYywgZCkgPT4ge1xuXHRyZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG59O1xuXG5leHBvcnQgeyBlYXNlSW5RdWFkLCBlYXNlT3V0UXVhZCwgZWFzZUluT3V0UXVhZCwgZWFzZUluT3V0UXVhcnQsIGVhc2VJblNpbmUsIGVhc2VPdXRTaW5lLCBlYXNlSW5PdXRTaW5lIH07IiwibGV0IGFscmVhZHlUZXN0ZWQgPSBmYWxzZTtcbmxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cbmNvbnN0IGlzU3VwcG9ydGVkID0gKCkgPT4ge1xuXHRpZiAoYWxyZWFkeVRlc3RlZCkgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG5cdGFscmVhZHlUZXN0ZWQgPSB0cnVlO1xuXG5cdC8vIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWUgaWYgdGhlIHBhc3NpdmUgcHJvcGVydHkgaXMgYWNjZXNzZWRcblx0dHJ5IHtcblx0XHRsZXQgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG5cdFx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdFx0cGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuXHR9XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG5cdHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xufTtcblxuY29uc3QgcGFzc2l2ZUV2ZW50ID0gKCkgPT4ge1xuXHRyZXR1cm4gaXNTdXBwb3J0ZWQoKSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59O1xuXG5leHBvcnQgeyBwYXNzaXZlRXZlbnQgfTsiLCJpbXBvcnQgeyBTY2VuZSwgUGVyc3BlY3RpdmVDYW1lcmEsIFdlYkdMUmVuZGVyZXIsIENsb2NrIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgSW50ZXJhY3RpdmVDb250cm9scyBmcm9tIFwiLi9jb250cm9scy9JbnRlcmFjdGl2ZUNvbnRyb2xzXCI7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCIuL3BhcnRpY2xlcy9QYXJ0aWNsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViR0xWaWV3IHtcbiAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgICB0aGlzLnNhbXBsZXMgPSBbXCIvZGlzdC9hc3NldHMvZ2xhc3Nlcy5wbmdcIl07XG5cbiAgICB0aGlzLmluaXRUaHJlZSgpO1xuICAgIHRoaXMuaW5pdFBhcnRpY2xlcygpO1xuICAgIHRoaXMuaW5pdENvbnRyb2xzKCk7XG5cbiAgICBjb25zdCBybmQgPSB+fihNYXRoLnJhbmRvbSgpICogdGhpcy5zYW1wbGVzLmxlbmd0aCk7XG4gICAgdGhpcy5nb3RvKHJuZCk7XG4gIH1cblxuICBpbml0VGhyZWUoKSB7XG4gICAgLy8gc2NlbmVcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKCk7XG5cbiAgICAvLyBjYW1lcmFcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDUwLFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAxLFxuICAgICAgMTAwMDBcbiAgICApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAzMDA7XG5cbiAgICAvLyByZW5kZXJlclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IHRydWUgfSk7XG5cbiAgICAvLyBjbG9ja1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2sodHJ1ZSk7XG4gIH1cblxuICBpbml0Q29udHJvbHMoKSB7XG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IG5ldyBJbnRlcmFjdGl2ZUNvbnRyb2xzKFxuICAgICAgdGhpcy5jYW1lcmEsXG4gICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgaW5pdFBhcnRpY2xlcygpIHtcbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXModGhpcyk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0aWNsZXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQVUJMSUNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5jbG9jay5nZXREZWx0YSgpO1xuXG4gICAgaWYgKHRoaXMucGFydGljbGVzKSB0aGlzLnBhcnRpY2xlcy51cGRhdGUoZGVsdGEpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICBnb3RvKGluZGV4KSB7XG4gICAgLy8gaW5pdCBuZXh0XG4gICAgaWYgKHRoaXMuY3VyclNhbXBsZSA9PSBudWxsKSB0aGlzLnBhcnRpY2xlcy5pbml0KHRoaXMuc2FtcGxlc1tpbmRleF0pO1xuICAgIC8vIGhpZGUgY3VyciB0aGVuIGluaXQgbmV4dFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wYXJ0aWNsZXMuaGlkZSh0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuaW5pdCh0aGlzLnNhbXBsZXNbaW5kZXhdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3VyclNhbXBsZSA9IGluZGV4O1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5jdXJyU2FtcGxlIDwgdGhpcy5zYW1wbGVzLmxlbmd0aCAtIDEpXG4gICAgICB0aGlzLmdvdG8odGhpcy5jdXJyU2FtcGxlICsgMSk7XG4gICAgZWxzZSB0aGlzLmdvdG8oMCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRVZFTlQgSEFORExFUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZW5kZXJlcikgcmV0dXJuO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIHRoaXMuZm92SGVpZ2h0ID1cbiAgICAgIDIgKlxuICAgICAgTWF0aC50YW4oKHRoaXMuY2FtZXJhLmZvdiAqIE1hdGguUEkpIC8gMTgwIC8gMikgKlxuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uejtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDQyMCkge1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0Wig1MDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcmFjdGl2ZSkgdGhpcy5pbnRlcmFjdGl2ZS5yZXNpemUoKTtcbiAgICBpZiAodGhpcy5wYXJ0aWNsZXMpIHRoaXMucGFydGljbGVzLnJlc2l6ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IFBsYW5lLCBSYXljYXN0ZXIsIFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBicm93c2VyIGZyb20gXCJicm93c2VyLWRldGVjdFwiO1xuXG5pbXBvcnQgeyBwYXNzaXZlRXZlbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZXZlbnQudXRpbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RpdmVDb250cm9scyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2FtZXJhLCBlbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmVsID0gZWwgfHwgd2luZG93O1xuXG4gICAgdGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFJheWNhc3RlcigpO1xuXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWN0b3IyKCk7XG4gICAgdGhpcy5vZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uID0gbmV3IFZlY3RvcjMoKTtcblxuICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuaG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5icm93c2VyID0gYnJvd3NlcigpO1xuXG4gICAgdGhpcy5lbmFibGUoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSByZXR1cm47XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICB0aGlzLmhhbmRsZXJEb3duID0gdGhpcy5vbkRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZXJNb3ZlID0gdGhpcy5vbk1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZXJVcCA9IHRoaXMub25VcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlckxlYXZlID0gdGhpcy5vbkxlYXZlLmJpbmQodGhpcyk7XG4gICAgaWYgKHRoaXMuYnJvd3Nlci5tb2JpbGUpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVyRG93biwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZXJNb3ZlLCBwYXNzaXZlRXZlbnQpO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVyVXAsIHBhc3NpdmVFdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZXJEb3duKTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZXJNb3ZlKTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVyVXApO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmhhbmRsZXJMZWF2ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmJyb3dzZXIubW9iaWxlKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlckRvd24pO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlck1vdmUpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVyVXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVyRG93bik7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVyTW92ZSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlclVwKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5oYW5kbGVyTGVhdmUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgaWYgKHggfHwgeSB8fCB3aWR0aCB8fCBoZWlnaHQpIHtcbiAgICAgIHRoaXMucmVjdCA9IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbCA9PT0gd2luZG93KSB7XG4gICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShlKSB7XG4gICAgY29uc3QgdCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XG4gICAgY29uc3QgdG91Y2ggPSB7IHg6IHQuY2xpZW50WCwgeTogdC5jbGllbnRZIH07XG5cbiAgICB0aGlzLm1vdXNlLnggPSAoKHRvdWNoLnggKyB0aGlzLnJlY3QueCkgLyB0aGlzLnJlY3Qud2lkdGgpICogMiAtIDE7XG4gICAgdGhpcy5tb3VzZS55ID0gLSgodG91Y2gueSArIHRoaXMucmVjdC55KSAvIHRoaXMucmVjdC5oZWlnaHQpICogMiArIDE7XG5cbiAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHRoaXMubW91c2UsIHRoaXMuY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMub2JqZWN0cyk7XG5cbiAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3RzWzBdLm9iamVjdDtcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uRGF0YSA9IGludGVyc2VjdHNbMF07XG5cbiAgICAgIHRoaXMucGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQoXG4gICAgICAgIHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKHRoaXMucGxhbmUubm9ybWFsKSxcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5ob3ZlcmVkICE9PSBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtb3V0XCIsIHsgb2JqZWN0OiB0aGlzLmhvdmVyZWQgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcImludGVyYWN0aXZlLW92ZXJcIiwgeyBvYmplY3QgfSk7XG4gICAgICAgIHRoaXMuaG92ZXJlZCA9IG9iamVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdChcImludGVyYWN0aXZlLW1vdmVcIiwge1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25EYXRhOiB0aGlzLmludGVyc2VjdGlvbkRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbkRhdGEgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5ob3ZlcmVkICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImludGVyYWN0aXZlLW91dFwiLCB7IG9iamVjdDogdGhpcy5ob3ZlcmVkIH0pO1xuICAgICAgICB0aGlzLmhvdmVyZWQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRG93bihlKSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgIHRoaXMub25Nb3ZlKGUpO1xuXG4gICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtZG93blwiLCB7XG4gICAgICBvYmplY3Q6IHRoaXMuaG92ZXJlZCxcbiAgICAgIHByZXZpb3VzOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgaW50ZXJzZWN0aW9uRGF0YTogdGhpcy5pbnRlcnNlY3Rpb25EYXRhLFxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmhvdmVyZWQ7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgaWYgKHRoaXMucmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSh0aGlzLnBsYW5lLCB0aGlzLmludGVyc2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQuY29weSh0aGlzLmludGVyc2VjdGlvbikuc3ViKHRoaXMuc2VsZWN0ZWQucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVXAoZSkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLmVtaXQoXCJpbnRlcmFjdGl2ZS11cFwiLCB7IG9iamVjdDogdGhpcy5ob3ZlcmVkIH0pO1xuICB9XG5cbiAgb25MZWF2ZShlKSB7XG4gICAgdGhpcy5vblVwKGUpO1xuXG4gICAgdGhpcy5lbWl0KFwiaW50ZXJhY3RpdmUtb3V0XCIsIHsgb2JqZWN0OiB0aGlzLmhvdmVyZWQgfSk7XG4gICAgdGhpcy5ob3ZlcmVkID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgT2JqZWN0M0QsXG4gIFRleHR1cmVMb2FkZXIsXG4gIExpbmVhckZpbHRlcixcbiAgUkdCRm9ybWF0LFxuICBSYXdTaGFkZXJNYXRlcmlhbCxcbiAgVmVjdG9yMixcbiAgSW5zdGFuY2VkQnVmZmVyR2VvbWV0cnksXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlLFxuICBQbGFuZUdlb21ldHJ5LFxuICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgTWVzaCxcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBUd2VlbkxpdGUgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFRvdWNoVGV4dHVyZSBmcm9tIFwiLi9Ub3VjaFRleHR1cmVcIjtcbmltcG9ydCB7IGFuaW1hdGlvbkNvbXBsZXRlIH0gZnJvbSBcIi4uLy4uL2ZhZGVcIjtcblxuY29uc3QgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXMge1xuICBjb25zdHJ1Y3Rvcih3ZWJnbCkge1xuICAgIHRoaXMud2ViZ2wgPSB3ZWJnbDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBPYmplY3QzRCgpO1xuICAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSAxMDA7XG4gICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IDEwO1xuICB9XG5cbiAgaW5pdChzcmMpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlcigpO1xuXG4gICAgbG9hZGVyLmxvYWQoc3JjLCAodGV4dHVyZSkgPT4ge1xuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgIHRoaXMudGV4dHVyZS5taW5GaWx0ZXIgPSBMaW5lYXJGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUubWFnRmlsdGVyID0gTGluZWFyRmlsdGVyO1xuICAgICAgdGhpcy50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRleHR1cmUuaW1hZ2Uud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xuXG4gICAgICB0aGlzLmluaXRQb2ludHModHJ1ZSk7XG4gICAgICB0aGlzLmluaXRIaXRBcmVhKCk7XG4gICAgICB0aGlzLmluaXRUb3VjaCgpO1xuICAgICAgLy8gcHJvbWlzZSBoZXJlXG4gICAgICBhbmltYXRpb25Db21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRQb2ludHMoZGlzY2FyZCkge1xuICAgIHRoaXMubnVtUG9pbnRzID0gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuXG4gICAgbGV0IG51bVZpc2libGUgPSB0aGlzLm51bVBvaW50cztcbiAgICBsZXQgdGhyZXNob2xkID0gMDtcbiAgICBsZXQgb3JpZ2luYWxDb2xvcnM7XG5cbiAgICBpZiAoZGlzY2FyZCkge1xuICAgICAgLy8gZGlzY2FyZCBwaXhlbHMgZGFya2VyIHRoYW4gdGhyZXNob2xkICMyMlxuICAgICAgbnVtVmlzaWJsZSA9IDA7XG4gICAgICB0aHJlc2hvbGQgPSAzNDtcblxuICAgICAgY29uc3QgaW1nID0gdGhpcy50ZXh0dXJlLmltYWdlO1xuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICBjdHguc2NhbGUoMSwgLTEpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogLTEpO1xuXG4gICAgICBjb25zdCBpbWdEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgb3JpZ2luYWxDb2xvcnMgPSBGbG9hdDMyQXJyYXkuZnJvbShpbWdEYXRhLmRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsQ29sb3JzW2kgKiA0ICsgMF0gPiB0aHJlc2hvbGQpIG51bVZpc2libGUrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1bmlmb3JtcyA9IHtcbiAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXG4gICAgICB1UmFuZG9tOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgIHVEZXB0aDogeyB2YWx1ZTogMi4wIH0sXG4gICAgICB1U2l6ZTogeyB2YWx1ZTogMC4wIH0sXG4gICAgICB1VGV4dHVyZVNpemU6IHsgdmFsdWU6IG5ldyBWZWN0b3IyKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSB9LFxuICAgICAgdVRleHR1cmU6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgdVRvdWNoOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFJhd1NoYWRlck1hdGVyaWFsKHtcbiAgICAgIHVuaWZvcm1zLFxuICAgICAgdmVydGV4U2hhZGVyOiBnbHNsaWZ5KHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlLnZlcnRcIikpLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IGdsc2xpZnkocmVxdWlyZShcIi4uLy4uLy4uL3NoYWRlcnMvcGFydGljbGUuZnJhZ1wiKSksXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAvLyBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZ1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgSW5zdGFuY2VkQnVmZmVyR2VvbWV0cnkoKTtcblxuICAgIC8vIHBvc2l0aW9uc1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSg0ICogMyksIDMpO1xuICAgIHBvc2l0aW9ucy5zZXRYWVooMCwgLTAuNSwgMC41LCAwLjApO1xuICAgIHBvc2l0aW9ucy5zZXRYWVooMSwgMC41LCAwLjUsIDAuMCk7XG4gICAgcG9zaXRpb25zLnNldFhZWigyLCAtMC41LCAtMC41LCAwLjApO1xuICAgIHBvc2l0aW9ucy5zZXRYWVooMywgMC41LCAtMC41LCAwLjApO1xuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIHBvc2l0aW9ucyk7XG5cbiAgICAvLyB1dnNcbiAgICBjb25zdCB1dnMgPSBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoNCAqIDIpLCAyKTtcbiAgICB1dnMuc2V0WFlaKDAsIDAuMCwgMC4wKTtcbiAgICB1dnMuc2V0WFlaKDEsIDEuMCwgMC4wKTtcbiAgICB1dnMuc2V0WFlaKDIsIDAuMCwgMS4wKTtcbiAgICB1dnMuc2V0WFlaKDMsIDEuMCwgMS4wKTtcbiAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXCJ1dlwiLCB1dnMpO1xuXG4gICAgLy8gaW5kZXhcbiAgICBnZW9tZXRyeS5zZXRJbmRleChcbiAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KFswLCAyLCAxLCAyLCAzLCAxXSksIDEpXG4gICAgKTtcblxuICAgIGNvbnN0IGluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtVmlzaWJsZSk7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtVmlzaWJsZSAqIDMpO1xuICAgIGNvbnN0IGFuZ2xlcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtVmlzaWJsZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBpZiAoZGlzY2FyZCAmJiBvcmlnaW5hbENvbG9yc1tpICogNCArIDBdIDw9IHRocmVzaG9sZCkgY29udGludWU7XG5cbiAgICAgIG9mZnNldHNbaiAqIDMgKyAwXSA9IGkgJSB0aGlzLndpZHRoO1xuICAgICAgb2Zmc2V0c1tqICogMyArIDFdID0gTWF0aC5mbG9vcihpIC8gdGhpcy53aWR0aCk7XG5cbiAgICAgIGluZGljZXNbal0gPSBpO1xuXG4gICAgICBhbmdsZXNbal0gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcblxuICAgICAgaisrO1xuICAgIH1cblxuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcbiAgICAgIFwicGluZGV4XCIsXG4gICAgICBuZXcgSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDEsIGZhbHNlKVxuICAgICk7XG4gICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKFxuICAgICAgXCJvZmZzZXRcIixcbiAgICAgIG5ldyBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUob2Zmc2V0cywgMywgZmFsc2UpXG4gICAgKTtcbiAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXG4gICAgICBcImFuZ2xlXCIsXG4gICAgICBuZXcgSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlKGFuZ2xlcywgMSwgZmFsc2UpXG4gICAgKTtcblxuICAgIHRoaXMub2JqZWN0M0QgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm9iamVjdDNEKTtcbiAgfVxuXG4gIGluaXRUb3VjaCgpIHtcbiAgICAvLyBjcmVhdGUgb25seSBvbmNlXG4gICAgaWYgKCF0aGlzLnRvdWNoKSB0aGlzLnRvdWNoID0gbmV3IFRvdWNoVGV4dHVyZSh0aGlzKTtcbiAgICB0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVUb3VjaC52YWx1ZSA9IHRoaXMudG91Y2gudGV4dHVyZTtcbiAgfVxuXG4gIGluaXRIaXRBcmVhKCkge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDEsIDEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZSxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgfSk7XG4gICAgbWF0ZXJpYWwudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaGl0QXJlYSk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5oYW5kbGVySW50ZXJhY3RpdmVNb3ZlID0gdGhpcy5vbkludGVyYWN0aXZlTW92ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy53ZWJnbC5pbnRlcmFjdGl2ZS5hZGRMaXN0ZW5lcihcbiAgICAgIFwiaW50ZXJhY3RpdmUtbW92ZVwiLFxuICAgICAgdGhpcy5oYW5kbGVySW50ZXJhY3RpdmVNb3ZlXG4gICAgKTtcbiAgICB0aGlzLndlYmdsLmludGVyYWN0aXZlLm9iamVjdHMucHVzaCh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMud2ViZ2wuaW50ZXJhY3RpdmUuZW5hYmxlKCk7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy53ZWJnbC5pbnRlcmFjdGl2ZS5yZW1vdmVMaXN0ZW5lcihcbiAgICAgIFwiaW50ZXJhY3RpdmUtbW92ZVwiLFxuICAgICAgdGhpcy5oYW5kbGVySW50ZXJhY3RpdmVNb3ZlXG4gICAgKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy53ZWJnbC5pbnRlcmFjdGl2ZS5vYmplY3RzLmZpbmRJbmRleChcbiAgICAgIChvYmopID0+IG9iaiA9PT0gdGhpcy5oaXRBcmVhXG4gICAgKTtcbiAgICB0aGlzLndlYmdsLmludGVyYWN0aXZlLm9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLndlYmdsLmludGVyYWN0aXZlLmRpc2FibGUoKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQVUJMSUNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdDNEKSByZXR1cm47XG4gICAgaWYgKHRoaXMudG91Y2gpIHRoaXMudG91Y2gudXBkYXRlKCk7XG5cbiAgICB0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlICs9IGRlbHRhO1xuICB9XG5cbiAgc2hvdyh0aW1lID0gMS4wKSB7XG4gICAgLy8gU2l6ZSBvZiBwYXJ0aWNsZVxuICAgIGNvbnN0IHNpemUgPSB3aW5kb3cuc2NyZWVuLndpZHRoIDwgNDIwID8gMSA6IDI7XG5cbiAgICBUd2VlbkxpdGUuZnJvbVRvKFxuICAgICAgdGhpcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51U2l6ZSxcbiAgICAgIHRpbWUsXG4gICAgICB7IHZhbHVlOiAwLjUgfSxcbiAgICAgIHsgdmFsdWU6IHNpemUgfVxuICAgICk7XG4gICAgLy8gUmFuZG9tbmVzc1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVSYW5kb20sIHRpbWUsIHsgdmFsdWU6IDAgfSk7XG4gICAgVHdlZW5MaXRlLmZyb21UbyhcbiAgICAgIHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudURlcHRoLFxuICAgICAgdGltZSAqIDEsXG4gICAgICB7IHZhbHVlOiA1MC4wIH0sXG4gICAgICB7IHZhbHVlOiAzLjAgfVxuICAgICk7XG5cbiAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgaGlkZShfZGVzdHJveSwgdGltZSA9IDAuOCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBUd2VlbkxpdGUudG8odGhpcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51UmFuZG9tLCB0aW1lLCB7XG4gICAgICAgIHZhbHVlOiA1LjAsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBpZiAoX2Rlc3Ryb3kpIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgVHdlZW5MaXRlLnRvKHRoaXMub2JqZWN0M0QubWF0ZXJpYWwudW5pZm9ybXMudURlcHRoLCB0aW1lLCB7XG4gICAgICAgIHZhbHVlOiAtMjAuMCxcbiAgICAgICAgZWFzZTogUXVhZC5lYXNlSW4sXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLm9iamVjdDNELm1hdGVyaWFsLnVuaWZvcm1zLnVTaXplLCB0aW1lICogMC44LCB7XG4gICAgICAgIHZhbHVlOiAwLjAsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdDNEKSByZXR1cm47XG5cbiAgICB0aGlzLm9iamVjdDNELnBhcmVudC5yZW1vdmUodGhpcy5vYmplY3QzRCk7XG4gICAgdGhpcy5vYmplY3QzRC5nZW9tZXRyeS5kaXNwb3NlKCk7XG4gICAgdGhpcy5vYmplY3QzRC5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gICAgdGhpcy5vYmplY3QzRCA9IG51bGw7XG5cbiAgICBpZiAoIXRoaXMuaGl0QXJlYSkgcmV0dXJuO1xuXG4gICAgdGhpcy5oaXRBcmVhLnBhcmVudC5yZW1vdmUodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLmhpdEFyZWEuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuICAgIHRoaXMuaGl0QXJlYS5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gICAgdGhpcy5oaXRBcmVhID0gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFVkVOVCBIQU5ETEVSU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICByZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdDNEKSByZXR1cm47XG5cbiAgICAvLyBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA0MjApIHtcbiAgICAvLyAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSAwO1xuICAgIC8vICAgdGhpcy5jb250YWluZXIucG9zaXRpb24ueSA9IDA7XG4gICAgLy8gICB0aGlzLndlYmdsLnBhcnRpY2xlcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51U2l6ZS52YWx1ZSA9IDE7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnggPSAxMDA7XG4gICAgLy8gICB0aGlzLmNvbnRhaW5lci5wb3NpdGlvbi55ID0gMTA7XG4gICAgLy8gICB0aGlzLndlYmdsLnBhcnRpY2xlcy5vYmplY3QzRC5tYXRlcmlhbC51bmlmb3Jtcy51U2l6ZS52YWx1ZSA9IDI7XG4gICAgLy8gfVxuXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLndlYmdsLmZvdkhlaWdodCAvIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMub2JqZWN0M0Quc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgMSk7XG4gICAgdGhpcy5oaXRBcmVhLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIDEpO1xuICB9XG5cbiAgb25JbnRlcmFjdGl2ZU1vdmUoZSkge1xuICAgIGNvbnN0IHV2ID0gZS5pbnRlcnNlY3Rpb25EYXRhLnV2O1xuICAgIGlmICh0aGlzLnRvdWNoKSB0aGlzLnRvdWNoLmFkZFRvdWNoKHV2KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJ0aHJlZVwiO1xuXG5pbXBvcnQgeyBlYXNlT3V0U2luZSB9IGZyb20gXCIuLi8uLi91dGlscy9lYXNpbmcudXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hUZXh0dXJlIHtcbiAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaXplID0gNjQ7XG4gICAgdGhpcy5tYXhBZ2UgPSAxMjA7XG4gICAgdGhpcy5yYWRpdXMgPSAwLjE1O1xuICAgIHRoaXMudHJhaWwgPSBbXTtcblxuICAgIHRoaXMuaW5pdFRleHR1cmUoKTtcbiAgfVxuXG4gIGluaXRUZXh0dXJlKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5pZCA9IFwidG91Y2hUZXh0dXJlXCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhbnZhcy53aWR0aH1weGA7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAvLyBhZ2UgcG9pbnRzXG4gICAgdGhpcy50cmFpbC5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgcG9pbnQuYWdlKys7XG4gICAgICAvLyByZW1vdmUgb2xkXG4gICAgICBpZiAocG9pbnQuYWdlID4gdGhpcy5tYXhBZ2UpIHtcbiAgICAgICAgdGhpcy50cmFpbC5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyYWlsLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICB0aGlzLmRyYXdUb3VjaChwb2ludCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgYWRkVG91Y2gocG9pbnQpIHtcbiAgICBsZXQgZm9yY2UgPSAwO1xuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnRyYWlsW3RoaXMudHJhaWwubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIGNvbnN0IGR4ID0gbGFzdC54IC0gcG9pbnQueDtcbiAgICAgIGNvbnN0IGR5ID0gbGFzdC55IC0gcG9pbnQueTtcbiAgICAgIGNvbnN0IGRkID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICBmb3JjZSA9IE1hdGgubWluKGRkICogMTAwMDAsIDEpO1xuICAgIH1cbiAgICB0aGlzLnRyYWlsLnB1c2goeyB4OiBwb2ludC54LCB5OiBwb2ludC55LCBhZ2U6IDAsIGZvcmNlIH0pO1xuICB9XG5cbiAgZHJhd1RvdWNoKHBvaW50KSB7XG4gICAgY29uc3QgcG9zID0ge1xuICAgICAgeDogcG9pbnQueCAqIHRoaXMuc2l6ZSxcbiAgICAgIHk6ICgxIC0gcG9pbnQueSkgKiB0aGlzLnNpemUsXG4gICAgfTtcblxuICAgIGxldCBpbnRlbnNpdHkgPSAxO1xuICAgIGlmIChwb2ludC5hZ2UgPCB0aGlzLm1heEFnZSAqIDAuMykge1xuICAgICAgaW50ZW5zaXR5ID0gZWFzZU91dFNpbmUocG9pbnQuYWdlIC8gKHRoaXMubWF4QWdlICogMC4zKSwgMCwgMSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVuc2l0eSA9IGVhc2VPdXRTaW5lKFxuICAgICAgICAxIC0gKHBvaW50LmFnZSAtIHRoaXMubWF4QWdlICogMC4zKSAvICh0aGlzLm1heEFnZSAqIDAuNyksXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaW50ZW5zaXR5ICo9IHBvaW50LmZvcmNlO1xuXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5zaXplICogdGhpcy5yYWRpdXMgKiBpbnRlbnNpdHk7XG4gICAgY29uc3QgZ3JkID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwb3MueCxcbiAgICAgIHBvcy55LFxuICAgICAgcmFkaXVzICogMC4yNSxcbiAgICAgIHBvcy54LFxuICAgICAgcG9zLnksXG4gICAgICByYWRpdXNcbiAgICApO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKWApO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDAsIDAsIDAsIDAuMClcIik7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBncmQ7XG4gICAgdGhpcy5jdHguYXJjKHBvcy54LCBwb3MueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLy8gQGF1dGhvciBicnVub2ltYnJpemkgLyBodHRwOi8vYnJ1bm9pbWJyaXppLmNvbVxcblxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcblxcbnZhcnlpbmcgdmVjMiB2UFV2O1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFx0dmVjMiB1diA9IHZVdjtcXG5cXHR2ZWMyIHB1diA9IHZQVXY7XFxuXFxuXFx0Ly8gcGl4ZWwgY29sb3JcXG5cXHR2ZWM0IGNvbEEgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHB1dik7XFxuXFxuXFx0Ly8gZ3JleXNjYWxlXFxuXFx0ZmxvYXQgZ3JleSA9IGNvbEEuciAqIDAuMjEgKyBjb2xBLmcgKiAwLjcxICsgY29sQS5iICogMC4wNztcXG5cXHR2ZWM0IGNvbEIgPSB2ZWM0KGdyZXksIGdyZXksIGdyZXksIDEuMCk7XFxuXFxuXFx0Ly8gY2lyY2xlXFxuXFx0ZmxvYXQgYm9yZGVyID0gMC4zO1xcblxcdGZsb2F0IHJhZGl1cyA9IDAuNTtcXG5cXHRmbG9hdCBkaXN0ID0gcmFkaXVzIC0gZGlzdGFuY2UodXYsIHZlYzIoMC41KSk7XFxuXFx0ZmxvYXQgdCA9IHNtb290aHN0ZXAoMC4wLCBib3JkZXIsIGRpc3QpO1xcblxcblxcdC8vIGZpbmFsIGNvbG9yXFxuXFx0Y29sb3IgPSBjb2xCO1xcblxcdGNvbG9yLmEgPSB0O1xcblxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvLyBAYXV0aG9yIGJydW5vaW1icml6aSAvIGh0dHA6Ly9icnVub2ltYnJpemkuY29tXFxuXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxuYXR0cmlidXRlIGZsb2F0IHBpbmRleDtcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMyBvZmZzZXQ7XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIGZsb2F0IGFuZ2xlO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudW5pZm9ybSBmbG9hdCB1VGltZTtcXG51bmlmb3JtIGZsb2F0IHVSYW5kb207XFxudW5pZm9ybSBmbG9hdCB1RGVwdGg7XFxudW5pZm9ybSBmbG9hdCB1U2l6ZTtcXG51bmlmb3JtIHZlYzIgdVRleHR1cmVTaXplO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHVUb3VjaDtcXG5cXG52YXJ5aW5nIHZlYzIgdlBVdjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vXFxuLy8gRGVzY3JpcHRpb24gOiBBcnJheSBhbmQgdGV4dHVyZWxlc3MgR0xTTCAyRCBzaW1wbGV4IG5vaXNlIGZ1bmN0aW9uLlxcbi8vICAgICAgQXV0aG9yIDogSWFuIE1jRXdhbiwgQXNoaW1hIEFydHMuXFxuLy8gIE1haW50YWluZXIgOiBpam1cXG4vLyAgICAgTGFzdG1vZCA6IDIwMTEwODIyIChpam0pXFxuLy8gICAgIExpY2Vuc2UgOiBDb3B5cmlnaHQgKEMpIDIwMTEgQXNoaW1hIEFydHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuLy8gICAgICAgICAgICAgICBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUuXFxuLy8gICAgICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYXNoaW1hL3dlYmdsLW5vaXNlXFxuLy9cXG5cXG52ZWMzIG1vZDI4OV8xXzAodmVjMyB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWMyIG1vZDI4OV8xXzAodmVjMiB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWMzIHBlcm11dGVfMV8xKHZlYzMgeCkge1xcbiAgcmV0dXJuIG1vZDI4OV8xXzAoKCh4KjM0LjApKzEuMCkqeCk7XFxufVxcblxcbmZsb2F0IHNub2lzZV8xXzIodmVjMiB2KVxcbiAge1xcbiAgY29uc3QgdmVjNCBDID0gdmVjNCgwLjIxMTMyNDg2NTQwNTE4NywgIC8vICgzLjAtc3FydCgzLjApKS82LjBcXG4gICAgICAgICAgICAgICAgICAgICAgMC4zNjYwMjU0MDM3ODQ0MzksICAvLyAwLjUqKHNxcnQoMy4wKS0xLjApXFxuICAgICAgICAgICAgICAgICAgICAgLTAuNTc3MzUwMjY5MTg5NjI2LCAgLy8gLTEuMCArIDIuMCAqIEMueFxcbiAgICAgICAgICAgICAgICAgICAgICAwLjAyNDM5MDI0MzkwMjQzOSk7IC8vIDEuMCAvIDQxLjBcXG4vLyBGaXJzdCBjb3JuZXJcXG4gIHZlYzIgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXkpICk7XFxuICB2ZWMyIHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4KTtcXG5cXG4vLyBPdGhlciBjb3JuZXJzXFxuICB2ZWMyIGkxO1xcbiAgLy9pMS54ID0gc3RlcCggeDAueSwgeDAueCApOyAvLyB4MC54ID4geDAueSA/IDEuMCA6IDAuMFxcbiAgLy9pMS55ID0gMS4wIC0gaTEueDtcXG4gIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XFxuICAvLyB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eCA7XFxuICAvLyB4MSA9IHgwIC0gaTEgKyAxLjAgKiBDLnh4IDtcXG4gIC8vIHgyID0geDAgLSAxLjAgKyAyLjAgKiBDLnh4IDtcXG4gIHZlYzQgeDEyID0geDAueHl4eSArIEMueHh6ejtcXG4gIHgxMi54eSAtPSBpMTtcXG5cXG4vLyBQZXJtdXRhdGlvbnNcXG4gIGkgPSBtb2QyODlfMV8wKGkpOyAvLyBBdm9pZCB0cnVuY2F0aW9uIGVmZmVjdHMgaW4gcGVybXV0YXRpb25cXG4gIHZlYzMgcCA9IHBlcm11dGVfMV8xKCBwZXJtdXRlXzFfMSggaS55ICsgdmVjMygwLjAsIGkxLnksIDEuMCApKVxcbiAgICArIGkueCArIHZlYzMoMC4wLCBpMS54LCAxLjAgKSk7XFxuXFxuICB2ZWMzIG0gPSBtYXgoMC41IC0gdmVjMyhkb3QoeDAseDApLCBkb3QoeDEyLnh5LHgxMi54eSksIGRvdCh4MTIuencseDEyLnp3KSksIDAuMCk7XFxuICBtID0gbSptIDtcXG4gIG0gPSBtKm0gO1xcblxcbi8vIEdyYWRpZW50czogNDEgcG9pbnRzIHVuaWZvcm1seSBvdmVyIGEgbGluZSwgbWFwcGVkIG9udG8gYSBkaWFtb25kLlxcbi8vIFRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkgaXMgY2xvc2UgdG8gYSBtdWx0aXBsZSBvZiA0MSAoNDEqNyA9IDI4NylcXG5cXG4gIHZlYzMgeCA9IDIuMCAqIGZyYWN0KHAgKiBDLnd3dykgLSAxLjA7XFxuICB2ZWMzIGggPSBhYnMoeCkgLSAwLjU7XFxuICB2ZWMzIG94ID0gZmxvb3IoeCArIDAuNSk7XFxuICB2ZWMzIGEwID0geCAtIG94O1xcblxcbi8vIE5vcm1hbGlzZSBncmFkaWVudHMgaW1wbGljaXRseSBieSBzY2FsaW5nIG1cXG4vLyBBcHByb3hpbWF0aW9uIG9mOiBtICo9IGludmVyc2VzcXJ0KCBhMCphMCArIGgqaCApO1xcbiAgbSAqPSAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqICggYTAqYTAgKyBoKmggKTtcXG5cXG4vLyBDb21wdXRlIGZpbmFsIG5vaXNlIHZhbHVlIGF0IFBcXG4gIHZlYzMgZztcXG4gIGcueCAgPSBhMC54ICAqIHgwLnggICsgaC54ICAqIHgwLnk7XFxuICBnLnl6ID0gYTAueXogKiB4MTIueHogKyBoLnl6ICogeDEyLnl3O1xcbiAgcmV0dXJuIDEzMC4wICogZG90KG0sIGcpO1xcbn1cXG5cXG5cXG5cXG5cXG5mbG9hdCByYW5kb20oZmxvYXQgbikge1xcblxcdHJldHVybiBmcmFjdChzaW4obikgKiA0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZVdiA9IHV2O1xcblxcblxcdC8vIHBhcnRpY2xlIHV2XFxuXFx0dmVjMiBwdXYgPSBvZmZzZXQueHkgLyB1VGV4dHVyZVNpemU7XFxuXFx0dlBVdiA9IHB1djtcXG5cXG5cXHQvLyBwaXhlbCBjb2xvclxcblxcdHZlYzQgY29sQSA9IHRleHR1cmUyRCh1VGV4dHVyZSwgcHV2KTtcXG5cXHRmbG9hdCBncmV5ID0gY29sQS5yICogMC4yMSArIGNvbEEuZyAqIDAuNzEgKyBjb2xBLmIgKiAwLjA3O1xcblxcblxcdC8vIGRpc3BsYWNlbWVudFxcblxcdHZlYzMgZGlzcGxhY2VkID0gb2Zmc2V0O1xcblxcdC8vIHJhbmRvbWlzZVxcblxcdGRpc3BsYWNlZC54eSArPSB2ZWMyKHJhbmRvbShwaW5kZXgpIC0gMC41LCByYW5kb20ob2Zmc2V0LnggKyBwaW5kZXgpIC0gMC41KSAqIHVSYW5kb207XFxuXFx0ZmxvYXQgcm5keiA9IChyYW5kb20ocGluZGV4KSArIHNub2lzZV8xXzIodmVjMihwaW5kZXggKiAwLjEsIHVUaW1lICogMC4xKSkpO1xcblxcdGRpc3BsYWNlZC56ICs9IHJuZHogKiAocmFuZG9tKHBpbmRleCkgKiAyLjAgKiB1RGVwdGgpO1xcblxcdC8vIGNlbnRlclxcblxcdGRpc3BsYWNlZC54eSAtPSB1VGV4dHVyZVNpemUgKiAwLjU7XFxuXFxuXFx0Ly8gdG91Y2hcXG5cXHRmbG9hdCB0ID0gdGV4dHVyZTJEKHVUb3VjaCwgcHV2KS5yO1xcblxcdGRpc3BsYWNlZC56ICs9IHQgKiAyMC4wICogcm5kejtcXG5cXHRkaXNwbGFjZWQueCArPSBjb3MoYW5nbGUpICogdCAqIDIwLjAgKiBybmR6O1xcblxcdGRpc3BsYWNlZC55ICs9IHNpbihhbmdsZSkgKiB0ICogMjAuMCAqIHJuZHo7XFxuXFxuXFx0Ly8gcGFydGljbGUgc2l6ZVxcblxcdGZsb2F0IHBzaXplID0gKHNub2lzZV8xXzIodmVjMih1VGltZSwgcGluZGV4KSAqIDAuNSkgKyAyLjApO1xcblxcdHBzaXplICo9IG1heChncmV5LCAwLjIpO1xcblxcdHBzaXplICo9IHVTaXplO1xcblxcblxcdC8vIGZpbmFsIHBvc2l0aW9uXFxuXFx0dmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChkaXNwbGFjZWQsIDEuMCk7XFxuXFx0bXZQb3NpdGlvbi54eXogKz0gcG9zaXRpb24gKiBwc2l6ZTtcXG5cXHR2ZWM0IGZpbmFsUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcXG5cXG5cXHRnbF9Qb3NpdGlvbiA9IGZpbmFsUG9zaXRpb247XFxufVxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==