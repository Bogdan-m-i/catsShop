/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  'id': '1',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 2,\n  'paws': '4',\n  'cost': 30000,\n  'sale': '-40%',\n  'saled': false,\n  'img': 'cat-1.png'\n}, {\n  'id': '2',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 4,\n  'paws': '4',\n  'cost': 40000,\n  'sale': false,\n  'saled': true,\n  'img': 'cat-2.png'\n}, {\n  'id': '3',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 3,\n  'paws': '4',\n  'cost': 20000,\n  'sale': false,\n  'saled': false,\n  'img': 'cat-3.png'\n}, {\n  'id': '4',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 5,\n  'paws': '4',\n  'cost': 25000,\n  'sale': false,\n  'saled': false,\n  'img': 'cat-1.png'\n}, {\n  'id': '5',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 2,\n  'paws': '4',\n  'cost': 30000,\n  'sale': '-40%',\n  'saled': false,\n  'img': 'cat-3.png'\n}, {\n  'id': '6',\n  'name': 'Кот полосатый',\n  'color': 'Коричневый',\n  'age': 6,\n  'paws': '4',\n  'cost': 10000,\n  'sale': false,\n  'saled': true,\n  'img': 'cat-2.png'\n}]);\n\n//# sourceURL=webpack:///./src/js/db.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/js/db.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  renderCats(_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  like();\n  scrollTop();\n  nav();\n  sortCats();\n  subscribe();\n\n  function subscribe() {\n    var $form = document.querySelector('#subscribeForm');\n    var inputsEmail = $form.querySelectorAll('input[type=email]');\n    $form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      inputsEmail.forEach(function (el) {\n        var reg = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\n\n        if (!reg.test(el.value)) {\n          el.parentNode.querySelector('.form__error').classList.add('active');\n        } else {\n          el.parentNode.querySelector('.form__error').classList.remove('active');\n        }\n      });\n    });\n  }\n\n  function sortCats() {\n    var $sort = document.querySelector('.sort');\n    var sort = null; // 'age', 'price'\n\n    var sortBy = 'DESC'; // 'ASC'\n\n    $sort.addEventListener('click', function (e) {\n      if (e.target.closest('.sort__btn_age')) {\n        var sortRes = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sort(function (a, b) {\n          return Number(a.age) - Number(b.age);\n        });\n        renderCats(sortRes);\n      }\n\n      if (e.target.closest('.sort__btn_price')) {\n        var _sortRes = _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sort(function (a, b) {\n          return Number(a.cost) - Number(b.cost);\n        });\n\n        renderCats(_sortRes);\n      }\n    });\n  }\n\n  function nav() {\n    var $nav = document.querySelector('.nav');\n    $nav.addEventListener('click', function (e) {\n      if ($nav.classList.contains('active')) {\n        removeActive();\n      } else {\n        addActive();\n      }\n    });\n\n    function resize() {\n      if (window.matchMedia('(min-width: 768px)').matches) {\n        removeActive();\n      }\n    }\n\n    function addActive() {\n      $nav.classList.add('active');\n      document.body.style.overflow = 'hidden';\n      window.addEventListener('resize', resize);\n    }\n\n    function removeActive() {\n      $nav.classList.remove('active');\n      document.body.style.overflow = 'auto';\n      window.removeEventListener('resize', resize);\n    }\n  }\n\n  function scrollTop() {\n    var $btn = document.querySelector('.scroll-top');\n    window.addEventListener('scroll', function (e) {\n      if (window.pageYOffset > 250) {\n        $btn.classList.add('active');\n      } else {\n        $btn.classList.remove('active');\n      }\n    });\n    $btn.addEventListener('click', function () {\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    });\n  }\n\n  function like() {\n    var $cards = document.querySelector('.cards');\n    $cards.addEventListener('click', function (e) {\n      if (e.target.classList.contains('card__like')) {\n        if (e.target.classList.contains('true') || e.target.classList.contains('false')) {\n          e.target.classList.toggle('false');\n        }\n\n        e.target.classList.toggle('true');\n      }\n    });\n  }\n\n  function renderCats() {\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var html = [];\n    var $cards = document.querySelector('.cards__content');\n\n    function curFilter(sum) {\n      return new Intl.NumberFormat('ru-RU').format(sum); //, { style: 'currency', currency: 'RUB', currencyDisplay: 'code' }\n    }\n\n    data.forEach(function (el) {\n      html += \"<div class=\\\"cards__item card \".concat(el.saled ? 'saled' : '', \"\\\">\\n                        <div class=\\\"card__img\\\">\\n                            <img src=\\\"./img/cats/\").concat(el.img, \"\\\" alt=\\\"cat 1\\\">\\n                        </div>\\n                        \").concat(el.sale ? '<div class=\"card__sale\">' + el.sale + '</div>' : '', \"\\n                        <div class=\\\"card__like\\\" data-id=\\\"\").concat(el.id, \"\\\"></div>\\n                        <div class=\\\"card__desc\\\">\\n                            <div class=\\\"card__name\\\"><h3 class=\\\"h3\\\">\").concat(el.name, \"</h3></div>\\n                            <div class=\\\"card__info\\\">\\n                                <div class=\\\"card__color\\\">\\n                                    <div class=\\\"card__color-val\\\">\").concat(el.color, \"</div>\\n                                    <div class=\\\"card__color-desc\\\">\\u043E\\u043A\\u0440\\u0430\\u0441</div>    \\n                                </div>\\n                                <div class=\\\"card__age\\\">\\n                                    <div class=\\\"card__age-val\\\">\").concat(el.age, \" \\u043C\\u0435\\u0441.</div>\\n                                    <div class=\\\"card__age-desc\\\">\\u0412\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442</div>\\n                                </div>\\n                                <div class=\\\"card__paws\\\">\\n                                    <div class=\\\"card__paws-val\\\">\").concat(el.paws, \"</div>\\n                                    <div class=\\\"card__paws-desc\\\">\\u041A\\u043E\\u043B-\\u0432\\u043E \\u043B\\u0430\\u043F</div>\\n                                </div>\\n                            </div>\\n                            <div class=\\\"card__price\\\">\").concat(curFilter(el.cost), \" \\u0440\\u0443\\u0431.</div>\\n                        </div>\\n                        <button class=\\\"btn \").concat(el.saled ? 'btn_black' : 'btn_blue', \" card__btn\\\">\").concat(el.saled ? 'Продан' : 'Купить', \"</button>\\n                    </div>\");\n    });\n    $cards.innerHTML = html;\n  } //polyfils\n\n\n  if ('NodeList' in window && !NodeList.prototype.forEach) {\n    console.info('polyfill for IE11');\n\n    NodeList.prototype.forEach = function (callback, thisArg) {\n      thisArg = thisArg || window;\n\n      for (var i = 0; i < this.length; i++) {\n        callback.call(thisArg, this[i], i, this);\n      }\n    };\n  }\n\n  (function (ELEMENT) {\n    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;\n\n    ELEMENT.closest = ELEMENT.closest || function closest(selector) {\n      if (!this) return null;\n      if (this.matches(selector)) return this;\n\n      if (!this.parentElement) {\n        return null;\n      } else return this.parentElement.closest(selector);\n    };\n  })(Element.prototype);\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });