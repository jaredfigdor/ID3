(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SlotMachine", [], factory);
	else if(typeof exports === 'object')
		exports["SlotMachine"] = factory();
	else
		root["SlotMachine"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 75:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ 87:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(75)
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lib)
});

// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__(87);
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);
;// CONCATENATED MODULE: ./lib/raf.ts

function raf_raf(cb, timeout = 0) {
    setTimeout(() => raf_default()(cb), timeout);
}

;// CONCATENATED MODULE: ./lib/timer.ts
class Timer {
    constructor(cb, delay) {
        this.cb = cb;
        this.initialDelay = delay;
        this.delay = delay;
        this.running = false;
        this.resume();
        return this;
    }
    _start() {
        this.timer = setTimeout(() => {
            this.running = false;
            this.cb(this);
        }, this.delay);
    }
    cancel() {
        this.running = false;
        clearTimeout(this.timer);
    }
    pause() {
        if (this.running) {
            this.delay -= new Date().getTime() - this.startTime;
            this.cancel();
        }
    }
    resume() {
        if (!this.running) {
            this.running = true;
            this.startTime = new Date().getTime();
            this._start();
        }
    }
    reset() {
        this.cancel();
        this.delay = this.initialDelay;
        this._start();
    }
    add(extraDelay) {
        this.pause();
        this.delay += extraDelay;
        this.resume();
    }
}

;// CONCATENATED MODULE: ./lib/slot-machine.ts


const defaults = {
    active: 0,
    delay: 200,
    auto: false,
    spins: 5,
    randomize: undefined,
    onComplete: undefined,
    inViewport: true,
    direction: 'up',
    transition: 'ease-in-out',
};
var FX;
(function (FX) {
    FX["NO_TRANSITION"] = "slotMachineNoTransition";
    FX["FAST"] = "slotMachineBlurFast";
    FX["NORMAL"] = "slotMachineBlurMedium";
    FX["SLOW"] = "slotMachineBlurSlow";
    FX["TURTLE"] = "slotMachineBlurTurtle";
    FX["GRADIENT"] = "slotMachineGradient";
    FX["STOP"] = "slotMachineGradient";
})(FX || (FX = {}));
class SlotMachine {
    constructor(element, options) {
        this.element = element;
        this.tiles = [].slice.call(this.element.children);
        this.running = false;
        this.stopping = false;
        this.element.style.overflow = 'hidden';
        this._wrapTiles();
        this._minTop = -this._fakeFirstTile.offsetHeight;
        this._maxTop = -this.tiles.reduce((acc, tile) => acc + tile.offsetHeight, 0);
        this.changeSettings({ ...defaults, ...options });
        this._setBounds();
        this._resetPosition();
        if (this.auto) {
            this.run();
        }
    }
    changeSettings(options) {
        Object.keys(options).forEach((key) => {
            this[key] = options[key];
        });
    }
    _wrapTiles() {
        this.container = document.createElement('div');
        this.container.classList.add('slotMachineContainer');
        this.container.style.transition = '1s ease-in-out';
        this.element.appendChild(this.container);
        this._fakeFirstTile = this.tiles[this.tiles.length - 1].cloneNode(true);
        this.container.appendChild(this._fakeFirstTile);
        this.tiles.forEach((tile) => {
            this.container.appendChild(tile);
        });
        this._fakeLastTile = this.tiles[0].cloneNode(true);
        this.container.appendChild(this._fakeLastTile);
    }
    _setBounds() {
        const initial = this.getTileOffset(this.active);
        const first = this.getTileOffset(this.tiles.length);
        const last = this.getTileOffset(this.tiles.length);
        this._bounds = {
            up: {
                key: 'up',
                initial,
                first: 0,
                last,
                to: this._maxTop,
                firstToLast: last,
                lastToFirst: 0,
            },
            down: {
                key: 'down',
                initial,
                first,
                last: 0,
                to: this._minTop,
                firstToLast: last,
                lastToFirst: 0,
            },
        };
    }
    get active() {
        return this._active;
    }
    set active(index) {
        if (index < 0 || index >= this.tiles.length || isNaN(index)) {
            index = 0;
        }
        this._active = index;
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        if (this.running) {
            return;
        }
        this._direction = direction === 'down' ? 'down' : 'up';
    }
    get bounds() {
        return this._bounds[this._direction];
    }
    get transition() {
        return this._transition;
    }
    set transition(transition) {
        this._transition = transition || 'ease-in-out';
    }
    get visibleTile() {
        const firstTileHeight = this.tiles[0].offsetHeight;
        const rawContainerMargin = this.container.style.transform || '';
        const matrixRegExp = /^matrix\(-?\d+,\s?-?\d+,\s?-?\d+,\s?-?\d+,\s?-?\d+,\s?(-?\d+)\)$/;
        const containerMargin = parseInt(rawContainerMargin.replace(matrixRegExp, '$1'), 10);
        return Math.abs(Math.round(containerMargin / firstTileHeight)) - 1;
    }
    get random() {
        return Math.floor(Math.random() * this.tiles.length);
    }
    get custom() {
        let choosen = this.random;
        if (this.randomize) {
            let index = this.randomize(this.active);
            if (index < 0 || index >= this.tiles.length) {
                index = 0;
            }
            choosen = index;
        }
        return choosen;
    }
    get _prevIndex() {
        const prevIndex = this.active - 1;
        return prevIndex < 0 ? this.tiles.length - 1 : prevIndex;
    }
    get _nextIndex() {
        const nextIndex = this.active + 1;
        return nextIndex < this.tiles.length ? nextIndex : 0;
    }
    get prevIndex() {
        return this.direction === 'up' ? this._nextIndex : this._prevIndex;
    }
    get nextIndex() {
        return this.direction === 'up' ? this._prevIndex : this._nextIndex;
    }
    get visible() {
        const rect = this.element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
        const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
        return vertInView && horInView;
    }
    set _animationFX(effect) {
        const delay = this.delay / 4;
        raf_raf(() => {
            [...this.tiles, this._fakeLastTile, this._fakeFirstTile].forEach((tile) => {
                tile.classList.remove(FX.FAST, FX.NORMAL, FX.SLOW, FX.TURTLE);
                if (effect !== FX.STOP) {
                    tile.classList.add(effect);
                }
            });
            if (effect === FX.STOP) {
                this.container.classList.remove(FX.GRADIENT);
            }
            else {
                this.container.classList.add(FX.GRADIENT);
            }
        }, delay);
    }
    _changeTransition(delay = this.delay, transition = this.transition) {
        this.container.style.transition = `${delay / 1000}s ${transition}`;
    }
    _changeTransform(margin) {
        this.container.style.transform = `matrix(1, 0, 0, 1, 0, ${margin})`;
    }
    _isGoingBackward() {
        return !!(this.active === 0 &&
            this.nextActive === this.tiles.length - 1);
    }
    _isGoingForward() {
        return !!(this.active === this.tiles.length - 1 &&
            this.nextActive === 0);
    }
    getTileOffset(index) {
        let offset = 0;
        for (let i = 0; i < index; i++) {
            offset += this.tiles[i].offsetHeight;
        }
        return this._minTop - offset;
    }
    _resetPosition(margin) {
        this.container.classList.toggle(FX.NO_TRANSITION);
        this._changeTransform(margin !== undefined ? margin : this.bounds.initial);
        this.container.offsetHeight;
        this.container.classList.toggle(FX.NO_TRANSITION);
    }
    next() {
        this.direction = 'down';
        this.nextActive = this.nextIndex;
        this.running = true;
        this.stop();
        return this.nextActive;
    }
    prev() {
        this.direction = 'up';
        this.nextActive = this.nextIndex;
        this.running = true;
        this.stop();
        return this.nextActive;
    }
    _getDelayFromSpins(spins) {
        let delay = this.delay;
        this.transition = 'linear';
        switch (spins) {
            case 1:
                delay /= 0.5;
                this.transition = 'ease-out';
                this._animationFX = FX.TURTLE;
                break;
            case 2:
                delay /= 0.75;
                this._animationFX = FX.SLOW;
                break;
            case 3:
                delay /= 1;
                this._animationFX = FX.NORMAL;
                break;
            case 4:
                delay /= 1.25;
                this._animationFX = FX.NORMAL;
                break;
            default:
                delay /= 1.5;
                this._animationFX = FX.FAST;
        }
        return delay;
    }
    shuffle(spins, onComplete) {
        if (typeof spins === 'function') {
            onComplete = spins;
        }
        this.running = true;
        if (!this.visible && this.inViewport === true) {
            this.stop(onComplete);
        }
        else {
            const delay = this._getDelayFromSpins(spins);
            this._changeTransition(delay);
            this._changeTransform(this.bounds.to);
            raf_raf(() => {
                if (!this.stopping && this.running) {
                    const left = spins - 1;
                    this._resetPosition(this.bounds.first);
                    if (left > 1) {
                        this.shuffle(left, onComplete);
                    }
                    else {
                        this.stop(onComplete);
                    }
                }
            }, delay);
        }
        return this.nextActive;
    }
    stop(onStop) {
        if (!this.running || this.stopping) {
            return this.nextActive;
        }
        this.running = true;
        this.stopping = true;
        if (!Number.isInteger(this.nextActive)) {
            this.nextActive = this.custom;
        }
        if (this._isGoingBackward()) {
            this._resetPosition(this.bounds.firstToLast);
        }
        else if (this._isGoingForward()) {
            this._resetPosition(this.bounds.lastToFirst);
        }
        this.active = this.nextActive;
        const delay = this._getDelayFromSpins(1);
        this._changeTransition(delay);
        this._animationFX = FX.STOP;
        this._changeTransform(this.getTileOffset(this.active));
        raf_raf(() => {
            this.stopping = false;
            this.running = false;
            this.nextActive = undefined;
            if (typeof this.onComplete === 'function') {
                this.onComplete(this.active);
            }
            if (typeof onStop === 'function') {
                onStop.apply(this, [this.active]);
            }
        }, delay);
        return this.active;
    }
    run() {
        if (this.running) {
            return;
        }
        this._timer = new Timer(() => {
            if (!this.visible && this.inViewport === true) {
                raf_raf(() => {
                    this._timer.reset();
                }, 500);
            }
            else {
                this.shuffle(this.spins, () => {
                    this._timer.reset();
                });
            }
        }, this.delay);
    }
    destroy() {
        this._fakeFirstTile.remove();
        this._fakeLastTile.remove();
        this.tiles.forEach((tile) => {
            this.element.appendChild(tile);
        });
        this.container.remove();
    }
}

;// CONCATENATED MODULE: ./lib/index.ts

/* harmony default export */ const lib = (SlotMachine);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=slotmachine.js.map