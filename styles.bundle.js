webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/ciro.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ciro.e717b4898af3aa0fe5ec.png";

/***/ }),

/***/ "../../../../../src/assets/grid_pattern.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAgRJREFUeAHtnDFuw1AMQ+2Ouf81g24OMrUnYAYCBIn4dRW+RLwHxYvQ8/16/R2hv+u6jsfjEep+HN/Y/ydGi8YWAYRY2HKPEJJja3VGiIUt9wghObZWZ4RY2HKPEJJja3VGiIUt9wghObZWZ4RY2HKPEJJja3VGiIUt9wghObZWZ4RY2HKPEJJja3VGiIUt9wghObZWZ4RY2HKPEJJja3VGiIUt9wghObZWZ4RY2HKPzt/nM3YGlIv9vZ1P7rK03MbdFz9Z2kelgpAKdj0UIZpNpYKQCnY9FCGaTaWCkAp2PRQhmk2lgpAKdj0UIZpNpYKQCnY9FCGaTaWCkAp2PRQhmk2lgpAKdj0UIZpNpYKQCnY9FCGaTaWCkAp2PRQhmk2lgpAKdj0UIZpNpYKQCnY9lLsszaZS4S7rA3busj7AuUuJb8iYaYQgZIzAWBw2BCFjBMbisCEIGSMwFocNQcgYgbE4bAhCxgiMxWFDEDJGYCwOG4KQMQJjcdgQhIwRGIvDhiBkjMBYHDYEIWMExuJwl7UmhP+XpY1wl6XZ3KbCR31MNUIQMkZgLA4bgpAxAmNx2BCEjBEYi8OGIGSMwFgcNgQhYwTG4rAhCBkjMBaHDUHIGIGxOGwIQsYIjMVhQxAyRmAsDhuCkDECY3G4y1oTwl2WNsJdlmZzmwof9THVCBkT8g+ehV9e/5g/VQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/ignasi_pattern.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ignasi_pattern.4b9d6e0aeaf910dc3e46.png";

/***/ }),

/***/ "../../../../../src/assets/sports_pattern.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sports_pattern.a9a771a6d9bb48074796.png";

/***/ }),

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: \"Encode Sans\", sans-serif;\n  margin: 0; }\n\nh1, h2, h3, h4, h5, h6, p {\n  padding: 0;\n  margin: 0; }\n\np {\n  font-family: Georgia, serif; }\n\n.cn-anchor {\n  color: #666;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #2366b9;\n  text-decoration: none;\n  transition: .2s all; }\n  .cn-anchor:hover {\n    color: #A62D56;\n    border-color: #A62D56; }\n\n.cn-header img {\n  outline: none;\n  cursor: pointer; }\n\n.text-center {\n  text-align: center; }\n\n.wrapper {\n  max-width: 960px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.nav {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n  .nav li {\n    display: inline-block; }\n\n.nav--grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 45px -15px 40px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .nav--grid {\n      margin: 45px 0 40px; } }\n  .nav--grid .nav__item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 25%;\n            flex: 1 0 25%;\n    padding: 15px; }\n    @media (max-width: 767px) and (min-width: 320px) {\n      .nav--grid .nav__item {\n        -webkit-box-flex: 100%;\n            -ms-flex: 100%;\n                flex: 100%; } }\n\n.cn-header {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 10;\n  width: 100%;\n  background-color: #fff;\n  height: 84px;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3); }\n\n.cn-header__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 960px;\n  margin: 0 auto; }\n  @media (min-width: 768px) and (max-width: 1023px) {\n    .cn-header__container {\n      padding: 100px; } }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-header__container {\n      padding: 0 20px; } }\n\n.cn-header__nav > li {\n  margin: 0 15px; }\n\n.cn-header__nav > li:first-child {\n  margin-left: 0; }\n\n.cn-header__nav > li:last-child {\n  margin-right: 0; }\n\n.cn-header__nav__link {\n  color: #444;\n  font-size: 16px;\n  text-decoration: none;\n  padding-bottom: 3px;\n  border-bottom: 3px solid transparent;\n  transition: all .2s ease-in; }\n  .cn-header__nav__link:hover {\n    border-bottom: 3px solid #e0e0e0; }\n\n.cn-header__nav__link--active {\n  border-color: #2366b9; }\n  .cn-header__nav__link--active:hover {\n    border-color: #2366b9; }\n\n.cn-main {\n  display: block;\n  padding-top: 84px; }\n\n.cn-section {\n  min-height: calc(100vh - 44px); }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-section {\n      padding: 0 40px; } }\n\n.cn-section--centralized {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.cn-section--cover {\n  position: relative;\n  background-color: #2366BA;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/ignasi_pattern.png") + ");\n  background-blend-mode: multiply;\n  background-size: 30%; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-section--cover {\n      background-size: 100%; } }\n\n.cn-section--cover-about {\n  position: relative;\n  background-color: #77DAB1;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/sports_pattern.png") + ");\n  background-blend-mode: multiply;\n  background-size: 25%; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-section--cover-about {\n      background-size: 100%; } }\n\n.cn-section--about {\n  position: relative;\n  background-color: #fff; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-section--about {\n      padding-bottom: 60px; } }\n  .cn-section--about .wrapper {\n    height: 100%; }\n\n.cn-section--what {\n  background-color: #F9F7F7;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/grid_pattern.png") + ");\n  background-blend-mode: multiply;\n  background-size: 10%;\n  padding-bottom: 60px; }\n\n.cn-section--methodology {\n  position: relative;\n  background-color: #2366BA; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-section--methodology {\n      padding-bottom: 60px; } }\n\n.cn-section__title {\n  font-size: 13px;\n  text-transform: uppercase;\n  color: #C1005B;\n  margin-bottom: 10px; }\n\n.cn-section__subtitle {\n  font-size: 24px;\n  color: #444;\n  margin-bottom: 30px;\n  font-weight: 600; }\n\n.cn-section__highlight {\n  font-size: 22px;\n  font-weight: 400;\n  color: #444;\n  margin-bottom: 20px; }\n\n.cn-section__text {\n  font-size: 17px;\n  line-height: 28px;\n  color: #666;\n  margin-bottom: 20px; }\n  .cn-section__text:last-child {\n    margin-bottom: 0; }\n\n.cn-section__text--inverted {\n  color: #fff; }\n\n.cn-cover {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%; }\n\n.cn-cover__text-container {\n  margin-bottom: 120px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-cover__text-container {\n      margin-bottom: 10px; } }\n\n.cn-cover__photo {\n  margin-bottom: 30px; }\n\n.cn-cover__title {\n  padding-bottom: 40px;\n  font-size: 44px;\n  line-height: 58px;\n  color: #fff; }\n  .cn-cover__title span {\n    color: #79F1FE; }\n\n.cn-cover__title--dark {\n  font-size: 34px;\n  color: #444;\n  padding-bottom: 20px; }\n\n.cn-cover__text {\n  font-size: 21px;\n  color: #fff; }\n\n.cn-cover__call-to-action {\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 400;\n  color: #fff;\n  text-transform: uppercase;\n  transition: opacity .3s ease-in-out; }\n  .cn-cover__call-to-action:hover {\n    opacity: .5; }\n  .cn-cover__call-to-action div {\n    margin-bottom: 3px; }\n\n.cn-about__container {\n  position: absolute;\n  top: 50%;\n  margin-top: -80px;\n  z-index: 1; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-about__container {\n      position: static;\n      margin-top: 0;\n      text-align: center; } }\n\n@media (max-width: 767px) and (min-width: 320px) {\n  .cn-about__container .cn-footer__nav li {\n    display: block;\n    margin: 0 0 10px; } }\n\n.cn-about__container .cn-footer__nav .cn-btn,\n.cn-about__container .cn-footer__nav .cn-btn-inline {\n  width: 100%; }\n\n.cn-about__photo {\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-about__photo {\n      display: none; } }\n\n@media (max-width: 767px) and (min-width: 320px) {\n  .cn-about__photo-container {\n    display: block;\n    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);\n    width: 280px;\n    height: 280px;\n    border-radius: 1000px;\n    background: url(" + __webpack_require__("../../../../../src/assets/ciro.png") + ") 10px 0px no-repeat;\n    margin: 0 auto 10px; } }\n\n.cn-methodology__container {\n  margin-top: 100px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-methodology__container {\n      margin-top: 60px; } }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-methodology__container .flag {\n      display: block;\n      text-align: center; } }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-methodology__container .flag__photo {\n      margin: 0 0 30px 0; } }\n\n.cn-footer {\n  padding: 20px 0; }\n\n.cn-footer__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-footer__container {\n      display: block;\n      text-align: center; } }\n\n.cn-footer__content {\n  font-family: Georgia, serif;\n  font-size: 18px;\n  color: #444;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .cn-footer__content img {\n    margin-right: 20px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-footer__content {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      margin-bottom: 15px; } }\n\n.cn-footer__nav li {\n  margin: 0 10px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-footer__nav li {\n      margin: 0 5px; } }\n\n.cn-footer__nav li:first-child {\n  margin-left: 0; }\n\n.cn-footer__nav li:last-child {\n  margin-right: 0; }\n\n.flag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flag__photo {\n  margin-right: 50px; }\n\n.cn-btn {\n  padding: 14px 20px;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  color: #A62D56;\n  font-family: \"Encode Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 11px;\n  text-align: center;\n  border: 0;\n  height: 40px;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  transition: all .3s; }\n  .cn-btn:hover {\n    background-color: #A62D56;\n    color: #fff; }\n\n.cn-btn-inline {\n  text-decoration: none;\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: #444;\n  font-size: 13px;\n  line-height: 23px;\n  padding: 6px 20px;\n  font-family: \"Encode Sans\", sans-serif;\n  font-weight: bold;\n  background-color: transparent;\n  border-radius: 3px;\n  height: 40px;\n  border: 2px solid #d4d4d4;\n  transition: all .3s; }\n  .cn-btn-inline:hover {\n    border-color: #444;\n    background-color: #444;\n    color: #f0f0f0; }\n  .cn-btn-inline img {\n    display: inline-block;\n    vertical-align: middle;\n    padding-right: 12px; }\n\n.cn-card {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15);\n  box-sizing: border-box; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-card {\n      max-width: 250px;\n      margin: 0 auto;\n      overflow: hidden; } }\n\n.cn-card__back {\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n  background-color: #fff; }\n  .cn-card__back:hover {\n    opacity: 1; }\n\n.cn-card__back__title {\n  margin-bottom: 20px; }\n\n.cn-card__back__description {\n  margin-bottom: 10px; }\n\n.cn-card--dashed {\n  border: 2px dashed #979797;\n  box-shadow: none;\n  background-color: transparent; }\n\n.animate-scale img {\n  transition: 150ms all ease-in;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n  .animate-scale img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n\n@-webkit-keyframes down {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 3px, 0);\n            transform: translate3d(0, 3px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n\n@keyframes down {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 3px, 0);\n            transform: translate3d(0, 3px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n\n.animate-down {\n  -webkit-animation: down 2s infinite;\n          animation: down 2s infinite; }\n\nrouter-outlet {\n  display: none; }\n\n.route-container {\n  position: relative;\n  overflow: hidden; }\n\n.route-container > * {\n  display: block; }\n\n.cn-modal-overlay {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 20px;\n  background-color: rgba(68, 68, 68, 0.9);\n  overflow-y: auto; }\n\n.cn-modal {\n  max-width: 960px;\n  background-color: #fff;\n  margin: 0 auto;\n  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.cn-modal__photo {\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: block;\n  height: 420px; }\n  @media (max-width: 767px) and (min-width: 320px) {\n    .cn-modal__photo {\n      height: 260px; } }\n  .cn-modal__photo img {\n    display: none; }\n\n.cn-modal__subtitle {\n  text-transform: none; }\n\n.cn-modal__content {\n  padding: 40px; }\n  .cn-modal__content iframe {\n    display: block;\n    margin: 0 auto; }\n\n.cn-modal__close-button {\n  color: #fff;\n  position: absolute;\n  top: 20px;\n  right: 20px; }\n\n.cn-date {\n  font-weight: 400;\n  color: #666; }\n\n.cn-space--top {\n  padding-top: 60px; }\n\n.cn-space--bottom {\n  padding-bottom: 60px; }\n\n.cn-space--top-sm {\n  padding-top: 30px; }\n\n.cn-space--bottom-sm {\n  padding-bottom: 30px; }\n\n.intrinsic-container {\n  position: relative;\n  height: 0;\n  overflow: hidden; }\n\n/* 16x9 Aspect Ratio */\n.intrinsic-container-16x9 {\n  padding-bottom: 56.25%; }\n\n/* 4x3 Aspect Ratio */\n.intrinsic-container-4x3 {\n  padding-bottom: 75%; }\n\n.intrinsic-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map