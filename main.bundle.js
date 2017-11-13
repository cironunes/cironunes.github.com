webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <section class=\"cn-section cn-section--centralized cn-section--cover-about cn-animation-container\" id=\"cover\" #coverSection>\n    <div class=\"wrapper text-center cn-cover\">\n      <div class=\"cn-cover__text-container cn-animation-item\">\n        <img class=\"cn-cover__photo\" src=\"assets/ciro-at-google.png\" alt=\"Ciro at Google\">\n        <h1 class=\"cn-cover__title--dark\">Hello, there!</h1>\n        <p class=\"cn-section__text\">I started building websites when I was 15 and never stopped.</p>\n      </div>\n      <a class=\"cn-cover__call-to-action cn-animation-item\" href=\"#about-me\" (click)=\"goToMyStories($event)\">\n        <img class=\"animate-down\" id=\"arrow-down\" src=\"assets/icons/arrow_down_secondary.svg\">\n      </a>\n    </div>\n  </section>\n</div>\n\n<section class=\"cn-section\" #myStoriesSection>\n  <div class=\"wrapper\">\n    <div class=\"text-center\">\n      <h1 class=\"cn-section__title cn-space--top\">My stories</h1>\n      <h2 class=\"cn-section__subtitle\">The adventures of a Frontend Engineer</h2>\n      <p class=\"cn-section__text\" appAppear (appear)=\"onAppear()\">\n        I’ve prepared this space to share with you some moments of my life.\n        <em>Click into the thumbnails to read the stories.</em>\n      </p>\n\n      <!-- <div class=\"cn-space--bottom\">\n        0\n        <input type=\"range\" min=\"0\" max=\"100\" step=\".1\" [(ngModel)]=\"percentage\" [disabled]=\"storiesCmp.playing\">\n        100%\n      </div> -->\n    </div>\n\n    <app-stories #storiesCmp [position]=\"percentage\" [stories]=\"stories\" [state]=\"appearState\"></app-stories>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(domSanitizer, componentFactoryResolver, viewContainerRef) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.stories = [
            // {
            //   title: 'NG NL',
            //   full_title: 'Overview talk about Angular at GDG DevFest NE',
            //   where: 'Maceio, Brazil',
            //   when: '10 September 2016',
            //   thumbnail_position: '-270px -340px',
            //   photo: 'assets/about/ngnl.jpg',
            //   photo_position: '0 -250px',
            //   story: 'That was really awesome!'
            // },
            // {
            //   title: 'NG Poland',
            //   full_title: 'Overview talk about Angular at GDG DevFest NE',
            //   where: 'Maceio, Brazil',
            //   when: '10 September 2016',
            //   thumbnail_position: '-610px -300px',
            //   photo: 'assets/about/ngpoland.jpg',
            //   photo_position: '0 -280px',
            //   story: 'That was really awesome!'
            // },
            // {
            //   title: 'Front in Aracaju',
            //   full_title: 'Overview talk about Angular at GDG DevFest NE',
            //   where: 'Maceio, Brazil',
            //   when: '10 September 2016',
            //   thumbnail_position: '-500px -230px',
            //   photo: 'assets/about/frontinaracaju.jpg',
            //   photo_position: '0 0',
            //   story: 'That was really awesome!'
            // },
            {
                title: 'First talk',
                full_title: 'My first talk ever was at a meetup in Brazil',
                where: 'Rio de Janeiro, Brazil',
                when: '10 December 2012',
                thumbnail_position: '-250px -110px',
                photo: 'assets/about/first-talk.jpg',
                photo_position: '0',
                story: "\n        <p class=\"cn-section__text\">\n          I was 19 years old and I really wanted to start sharing some stuff I was learning at work. I\n          saw on Facebook that this group was about to have a meet up and they were looking for\n          presenters. I didn\u2019t have any doubt and volunteered myself to talk about Design Patterns in\n          JavaScript.\n        </p>\n\n        <p class=\"cn-section__text\">\n          It was a lot of fun, I\u2019ve got to meet\n          <a class=\"cn-anchor\" href=\"https://twitter.com/zenorocha\">@zenorocha</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/bernarddeluna\">@bernarddeluna</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/davidsonfelipe\">@davidsonfelipe</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/leobalter\">@leobalter</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/zaedysayao\">@zaedysayao</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/alganet\">@alganet</a>,\n          <a class=\"cn-anchor\" href=\"https://twitter.com/leobetosouza\">@leobetosouza</a>\n          and many others.\n        </p>\n\n        <p class=\"cn-section__text\">You can check out the\n          <a href=\"https://github.com/cironunes/js-design-patterns-pt\">slides</a> and bellow the video of the talk:\n        </p>\n\n        <div class=\"intrinsic-container intrinsic-container-16x9\">\n          <iframe width=\"880\" height=\"660\" src=\"https://www.youtube.com/embed/kiuVnpBXCEA\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      "
            },
        ];
        this.appearState = 'hidden';
        this.percentage = 100;
        this.stories = this.stories.map(function (story) {
            story.story = _this.domSanitizer.bypassSecurityTrustHtml(story.story);
            return story;
        });
    }
    AboutComponent.prototype.goToMyStories = function ($event) {
        $event.preventDefault();
        window.scroll({
            top: this.myStoriesSection.nativeElement.offsetTop - 84,
            behavior: 'smooth'
        });
    };
    AboutComponent.prototype.onAppear = function () {
        var _this = this;
        setTimeout(function () { _this.appearState = 'visible'; });
    };
    return AboutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myStoriesSection'),
    __metadata("design:type", Object)
], AboutComponent.prototype, "myStoriesSection", void 0);
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stories_stories_component__ = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_5__stories_stories_component__["a" /* StoriesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function cubicBezierAnimation(time, x1, y1, x2, y2) {
    if (time === void 0) { time = '.6s'; }
    if (x1 === void 0) { x1 = '.35'; }
    if (y1 === void 0) { y1 = '0'; }
    if (x2 === void 0) { x2 = '.25'; }
    if (y2 === void 0) { y2 = '1'; }
    return time + " cubic-bezier(" + x1 + ", " + y1 + ", " + x2 + ", " + y1 + ")";
}
function pageTransition(start, end) {
    var DEFAULT_POSITION = {
        position: 'absolute',
        top: '84px',
        left: 0,
        right: 0
    };
    var EXTREMELY_RIGHT = 'translateX(100%)';
    var EXTREMELY_LEFT = 'translateX(-100%)';
    var CENTER = 'translateX(0)';
    if (!start || !end) {
        throw new Error('Start and End page have to be provided');
    }
    if (start === end) {
        throw new Error('Transition to the same page is not allowed');
    }
    var startPosition = EXTREMELY_LEFT;
    var endPosition = EXTREMELY_RIGHT;
    if (start < end) {
        startPosition = EXTREMELY_RIGHT;
        endPosition = EXTREMELY_LEFT;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(start + " => " + end, [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ height: '!' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: startPosition })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])(DEFAULT_POSITION)),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(cubicBezierAnimation(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                transform: endPosition
            }))),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(cubicBezierAnimation(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                transform: CENTER
            })))
        ])
    ]);
}
var routeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('routeAnimation', [
    pageTransition(1, 2),
    pageTransition(1, 3),
    pageTransition(2, 3),
    pageTransition(2, 1),
    pageTransition(3, 2),
    pageTransition(3, 1)
]);
//# sourceMappingURL=app.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"cn-header\">\n  <div class=\"cn-header__container\">\n    <img src=\"assets/icons/cironunes.svg\" [routerLink]=\"['/home']\">\n    <ul class=\"nav cn-header__nav\">\n      <li>\n        <a class=\"cn-header__nav__link\" [routerLink]=\"['/about']\" [routerLinkActive]=\"['cn-header__nav__link--active']\">About</a>\n      </li>\n      <!-- <li>\n        <a class=\"cn-header__nav__link\" [routerLink]=\"['/conference-speaking']\" [routerLinkActive]=\"['cn-header__nav__link--active']\">Conference speaking</a>\n      </li> -->\n      <li>\n        <a class=\"cn-header__nav__link\" href=\"https://medium.com/@cironunesdev\">\n          Blog <img src=\"assets/icons/external.svg\">\n        </a>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<div class=\"route-container\" [@routeAnimation]=\"getDepth(myOutlet)\">\n  <router-outlet #myOutlet=\"outlet\" class=\"cn-main\"></router-outlet>\n</div>\n\n<footer class=\"cn-footer\">\n  <div class=\"wrapper cn-footer__container\">\n    <span class=\"cn-footer__content\">\n      <img src=\"assets/icons/foot.svg\" alt=\"\">\n      2017 © Ciro Nunes\n    </span>\n\n    <ul class=\"nav cn-footer__nav\">\n      <li>\n        <a href=\"//twitter.com/cironunesdev\" class=\"animate-scale\">\n          <img src=\"assets/icons/twitter.svg\" alt=\"\">\n        </a>\n      </li>\n      <li>\n        <a href=\"//github.com/cironunes\" class=\"animate-scale\">\n          <img src=\"assets/icons/github.svg\" alt=\"\">\n        </a>\n      </li>\n      <li>\n        <a href=\"https://www.facebook.com/Ciro-Nunes-1977347072481253/?ref=bookmarks\" class=\"animate-scale\">\n          <img src=\"assets/icons/fb.svg\" alt=\"Facebook\">\n        </a>\n      </li>\n      <li>\n        <a href=\"//instagram.com/ciroanunes\" class=\"animate-scale\">\n          <img src=\"assets/icons/instagram.svg\" alt=\"\">\n        </a>\n      </li>\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animation__ = __webpack_require__("../../../../../src/app/app.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]; })
            .subscribe(function (event) {
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__app_animation__["a" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conference_speaking_conference_speaking_module__ = __webpack_require__("../../../../../src/app/conference-speaking/conference-speaking.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conference_speaking_conference_speaking_component__ = __webpack_require__("../../../../../src/app/conference-speaking/conference-speaking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_throttleTime__ = __webpack_require__("../../../../rxjs/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], data: { depth: 1 } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */], data: { depth: 2 } },
    { path: 'conference-speaking', component: __WEBPACK_IMPORTED_MODULE_10__conference_speaking_conference_speaking_component__["a" /* ConferenceSpeakingComponent */], data: { depth: 3 } },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_22__modal_modal_component__["a" /* ModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_6__conference_speaking_conference_speaking_module__["a" /* ConferenceSpeakingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/conference-speaking/conference-speaking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conference-speaking/conference-speaking.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  conference-speaking works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/conference-speaking/conference-speaking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceSpeakingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConferenceSpeakingComponent = (function () {
    function ConferenceSpeakingComponent() {
    }
    ConferenceSpeakingComponent.prototype.ngOnInit = function () {
    };
    return ConferenceSpeakingComponent;
}());
ConferenceSpeakingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-conference-speaking',
        template: __webpack_require__("../../../../../src/app/conference-speaking/conference-speaking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/conference-speaking/conference-speaking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConferenceSpeakingComponent);

//# sourceMappingURL=conference-speaking.component.js.map

/***/ }),

/***/ "../../../../../src/app/conference-speaking/conference-speaking.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceSpeakingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conference_speaking_component__ = __webpack_require__("../../../../../src/app/conference-speaking/conference-speaking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConferenceSpeakingModule = (function () {
    function ConferenceSpeakingModule() {
    }
    return ConferenceSpeakingModule;
}());
ConferenceSpeakingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__conference_speaking_component__["a" /* ConferenceSpeakingComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__conference_speaking_component__["a" /* ConferenceSpeakingComponent */]]
    })
], ConferenceSpeakingModule);

//# sourceMappingURL=conference-speaking.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div @reveal>\n<section class=\"cn-section cn-section--centralized cn-section--cover cn-animation-container\" id=\"cover\" #coverSection>\n  <div class=\"wrapper text-center cn-cover\">\n    <div class=\"cn-cover__text-container cn-animation-item\">\n      <h1 class=\"cn-cover__title\">Pragmatic <span>Baby-steps</span> <br> <span>Frontend</span> Engineering</h1>\n      <p class=\"cn-cover__text\">An objective way of crafting software for the web</p>\n    </div>\n    <a class=\"cn-cover__call-to-action cn-animation-item\" href=\"#about-me\" (click)=\"goToAboutMe($event)\">\n      <div>READ MORE</div>\n      <img class=\"animate-down\" id=\"arrow-down\" src=\"assets/icons/arrow_down.svg\">\n    </a>\n  </div>\n</section>\n</div>\n\n\n<section class=\"cn-section cn-section--about\" id=\"about-me\" #aboutMeSection>\n  <div class=\"wrapper\">\n    <div class=\"text-center\">\n      <h1 class=\"cn-section__title cn-space--top\">About me</h1>\n      <h2 class=\"cn-section__subtitle\">I love computers & sports</h2>\n    </div>\n\n    <span class=\"cn-about__photo-container\">\n      <img src=\"assets/ciro.png\" class=\"cn-about__photo\">\n    </span>\n\n    <div class=\"cn-about__container\">\n      <h3 class=\"cn-section__highlight\">Hi, my name is Ciro Nunes :)</h3>\n      <div class=\"cn-space--bottom-sm\">\n        <p class=\"cn-section__text\">\n          I’m a Brazilian Frontend Engineer living in Berlin.\n        </p>\n        <p class=\"cn-section__text\">\n          Currently I’m the Lead Frontend Engineer of <i><a class=\"cn-anchor\" href=\"https://crossengage.io\">CrossEngage</a></i><br>\n          and <i>Google Developer Expert</i> in <i>Web Technologies</i> and <i>Angular</i>.\n        </p>\n      </div>\n\n      <ul class=\"nav cn-footer__nav\">\n        <li>\n          <button class=\"cn-btn\" [routerLink]=\"['/about']\">More about me</button>\n        </li>\n        <li>\n          <a class=\"cn-btn-inline\" href=\"https://developers.google.com/experts/people/ciro-nunes\">\n            <img src=\"assets/icons/experts.png\" alt=\"Google Developer Experts logo\">\n            Visit my expert profile\n          </a>\n        </li>\n        <li>\n          <a class=\"cn-btn-inline\" href=\"https://medium.com/@cironunesdev\">\n            <img src=\"assets/icons/medium.png\" alt=\"\">\n            Check out my blog posts\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"cn-section cn-section--what\" id=\"what-i-do\" #whatIDoSection>\n  <app-what-i-do></app-what-i-do>\n</section>\n\n<section class=\"cn-section cn-section--methodology\" id=\"methodology\" #methodologySection>\n  <div class=\"wrapper\">\n    <div class=\"text-center\">\n      <h1 class=\"cn-section__title cn-section__text--inverted cn-space--top\">Methodology</h1>\n      <h2 class=\"cn-section__subtitle cn-section__text--inverted\">How I approach web engineering</h2>\n    </div>\n  </div>\n\n  <div class=\"cn-methodology__container\">\n    <div class=\"wrapper\" [@appear]=\"appearedState\">\n      <div class=\"flag cn-animation-container\">\n        <img\n          class=\"flag__photo cn-methodology__photo cn-animation-item\"\n          src=\"assets/methodology.svg\"\n          alt=\"first make it work, then make it nice\"\n          [@child]=\"appearedState\"\n          appAppear (appear)=\"onAppear()\"\n        >\n        <div class=\"flag__content cn-animation-item\" [@child]=\"appearedState\">\n          <p class=\"cn-section__text cn-section__text--inverted\">\n            The web is one of the most challenging environments to work on. Everyday there's a new\n            device, a new trend, a new tool to do the job. It's easy to get lost. Basically, what is\n            considered a good practice today, might not be anymore tomorrow.\n          </p>\n          <p class=\"cn-section__text cn-section__text--inverted\">\n            The way I deal with it is to focus on <em>make it work</em>, even though the code is not the\n            best, and incrementally (baby steps) <em>make it better.</em>\n          </p>\n          <p class=\"cn-section__text cn-section__text--inverted\">\n            <em>It's not about what you know, it's about what you can figure out.</em>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent() {
        this.appearedState = 'hidden';
        this.lastScrollPosition = 0;
        this.loadingPercentage = 0;
        this.aboutMeState = 'inactive';
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.scroll$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'scroll')
            .distinctUntilChanged()
            .debounceTime(250)
            .throttleTime(250);
        this.setLastScrollPosition();
        var sections = [this.coverSection, this.aboutMeSection, this.whatIDoSection, this.methodologySection];
        this.sections = sections.map(function (section) {
            return {
                start: section.nativeElement.offsetTop,
                end: section.nativeElement.offsetTop + section.nativeElement.offsetHeight
            };
        });
    };
    HomeComponent.prototype.onAppear = function () {
        var _this = this;
        setTimeout(function () {
            _this.appearedState = 'visible';
        });
    };
    HomeComponent.prototype.goToAboutMe = function ($event) {
        $event.preventDefault();
        window.scroll({
            top: this.aboutMeSection.nativeElement.offsetTop - 84,
            behavior: 'smooth'
        });
    };
    HomeComponent.prototype.scrollToNextSection = function ($event) {
        $event.preventDefault();
        var position = window.scrollY + 84;
        var direction = (this.lastScrollPosition < position) ? 1 : -1;
        var top = direction > 0 ? 'end' : 'start';
        var currentSection = this.sections
            .find(function (section) { return (position >= section.start && position <= section.end); });
        this.setLastScrollPosition();
        window.scroll({
            top: currentSection[top] - 84 + (top === 'end' ? 0 : 1),
            behavior: 'smooth'
        });
    };
    HomeComponent.prototype.setLastScrollPosition = function () {
        this.lastScrollPosition = window.scrollY + 84;
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('coverSection'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "coverSection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('aboutMeSection'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "aboutMeSection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('whatIDoSection'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "whatIDoSection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('methodologySection'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "methodologySection", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* revealAnimation */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* appearAnimation */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* appearChildAnimation */]
        ]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__what_i_do_what_i_do_component__ = __webpack_require__("../../../../../src/app/home/what-i-do/what-i-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_5__what_i_do_what_i_do_component__["a" /* WhatIDoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/what-i-do/what-i-do.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper text-center\">\n  <h1 class=\"cn-section__title cn-space--top\" appAppear (appear)=\"onAppear()\">What do I do?</h1>\n  <h2 class=\"cn-section__subtitle\">Learn, create, share, repeat</h2>\n  <p class=\"cn-section__text\">\n    I’m <em>Frontend Engineer</em>. My daily job is to research, improve my skills and develop solutions\n    to my costumers.\n  </p>\n  <p class=\"cn-section__text\">\n    The open source community makes it much easier for me with free tools and\n    knowledge, so I try to make it up for them by sharing what I learn in my blog and speaking at\n    conferences.\n  </p>\n\n  <div [@appear]=\"appearState\">\n    <div class=\"nav nav--grid cn-animation-container\">\n      <div class=\"nav__item cn-animation-item\" *ngFor=\"let conference of conferences\">\n        <div class=\"cn-card {{ conference.className }}\" [@child]=\"appearState\">\n          <img class=\"cn-card__image\" [src]=\"conference.image\" [alt]=\"conference.name\">\n          <div class=\"cn-card__back\">\n            <h1 class=\"cn-card__back__title\">{{ conference.name }}</h1>\n            <p class=\"cn-card__back__description\" *ngIf=\"conference.talk\">Talk: {{ conference.talk }}</p>\n            <a class=\"cn-btn-inline\" [href]=\"conference.resources.slides\" *ngIf=\"conference.resources?.slides\">slides</a>\n            <a class=\"cn-btn-inline\" [href]=\"conference.resources.video\" *ngIf=\"conference.resources?.video\">video</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"nav cn-footer__nav\">\n    <!-- <li>\n      <button class=\"cn-btn\" [routerLink]=\"['/conference-speaking']\">All my talks</button>\n    </li> -->\n    <li>\n      <a class=\"cn-btn-inline\" href=\"https://speakerdeck.com/cironunes\">\n        <img src=\"assets/icons/speakerdeck.png\" alt=\"\">\n        Check out my slides\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/what-i-do/what-i-do.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatIDoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_appear_animation__ = __webpack_require__("../../../../../src/app/shared/appear.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WhatIDoComponent = (function () {
    function WhatIDoComponent() {
        this.appearState = 'hidden';
        this.conferences = [
            {
                name: 'NG Netherlands',
                talk: 'Angular and the Single Immutable State Tree',
                image: 'assets/ng-nl-logo.png',
                className: 'ng-nl',
                resources: {
                    slides: 'https://speakerdeck.com/cironunes/angular-and-the-single-immutable-state-tree'
                }
            },
            {
                description: 'Invite me to your conference',
                image: 'assets/icons/plus.svg',
                className: 'cn-card--dashed your'
            },
            {
                name: 'NG Poland',
                talk: 'Progressive Angular Apps',
                image: 'assets/ng-poland-logo.png',
                className: 'ng-poland',
                resources: {
                    slides: 'https://speakerdeck.com/cironunes/progressive-angular-apps',
                    video: 'https://www.youtube.com/watch?v=rH8D8OsPpXg'
                }
            },
            {
                name: 'JSConf Uruguay',
                talk: 'The awesomeness of Angular',
                image: 'assets/jsconf-uy-logo.png',
                className: 'jsconf-uy',
                resources: {
                    slides: 'https://speakerdeck.com/cironunes/the-awesomeness-of-angular-2',
                    video: 'https://www.youtube.com/watch?v=xth4tqj9vK0'
                }
            },
            {
                name: 'W3C web.br',
                talk: 'Angular e o futuro do desenvolvimento Front-end',
                image: 'assets/webbr-photo.jpg',
                className: 'webbr',
                resources: {
                    slides: 'https://speakerdeck.com/cironunes/angular-2-e-o-futuro-do-desenvolvimento-front-end',
                    video: 'https://www.youtube.com/watch?v=2D5YjURb1jA'
                }
            },
            {
                name: 'Front in BH',
                talk: 'Desenvolvimento Agil com AngularJS',
                image: 'assets/frontinbh-logo.png',
                className: 'frontinbh',
                resources: {}
            },
        ];
    }
    WhatIDoComponent.prototype.onAppear = function () {
        var _this = this;
        setTimeout(function () { return _this.appearState = 'visible'; });
    };
    WhatIDoComponent.prototype.onConferenceClick = function (conference) {
        window.location.href = 'mailto:cironunesdev@gmail.com';
    };
    return WhatIDoComponent;
}());
WhatIDoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-what-i-do',
        template: __webpack_require__("../../../../../src/app/home/what-i-do/what-i-do.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/what-i-do/what-i-do.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_appear_animation__["a" /* appearAnimation */], __WEBPACK_IMPORTED_MODULE_1__shared_appear_animation__["b" /* appearChildAnimation */]]
    })
], WhatIDoComponent);

//# sourceMappingURL=what-i-do.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/what-i-do/what-i-do.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cn-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.your {\n  cursor: pointer;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .your:hover {\n    opacity: .8; }\n  .your .cn-card__back {\n    display: none; }\n\n.your__icon {\n  margin-bottom: 3px; }\n\n.jsconf-uy {\n  background-color: #024870;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.frontinbh {\n  background-color: #341496; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cn-modal-overlay\" [@fade]=\"modalState\" (@fade.done)=\"onFadeDone($event)\">\n  <div class=\"cn-modal\">\n    <span class=\"cn-modal__photo\" [ngStyle]=\"{\n      'background-image': 'url('+ photo +')',\n      'background-position': photo_position\n    }\">\n      <img [src]=\"photo\" [alt]=\"title\">\n      <button class=\"cn-btn-inline cn-modal__close-button\" (click)=\"close()\">x</button>\n    </span>\n\n    <div class=\"cn-modal__content\">\n      <h2 class=\"cn-section__title cn-modal__subtitle\">\n        {{ where }} <span class=\"cn-date\">{{ when }}</span>\n      </h2>\n      <h1 class=\"cn-section__subtitle\">{{ full_title }}</h1>\n\n      <div [innerHTML]=\"story\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_fade_animation__ = __webpack_require__("../../../../../src/app/shared/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.modalState = {
                value: 'active',
                params: { duration: '250ms' }
            };
        });
    };
    ModalComponent.prototype.keyEvent = function ($event) {
        if ($event.keyCode === 27) {
            this.close();
        }
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
    };
    ModalComponent.prototype.close = function () { };
    ModalComponent.prototype.onFadeDone = function ($event) { };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "photo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "photo_position", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "when", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "where", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "full_title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "story", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalState", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "keyEvent", null);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__shared_fade_animation__["a" /* fadeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/appear.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appearAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appearChildAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var appearAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('appear', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('hidden => visible', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-container .cn-animation-item', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateY(-50px)', opacity: 0 })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-container', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(500, [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-item', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(300, [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                    ])
                ])
            ])
        ])
    ])
]);
var appearChildAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('child', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateY(-50px)', opacity: 0 }))
]);
//# sourceMappingURL=appear.animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/appear.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppearDirective = (function () {
    function AppearDirective(element) {
        this.element = element;
        this.appear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AppearDirective.prototype.ngAfterViewInit = function () {
        this.subscribe();
    };
    AppearDirective.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    AppearDirective.prototype.saveDimensions = function () {
        this.elementPosition = this.getOffsetTop(this.element.nativeElement);
        this.elementHeight = this.element.nativeElement.offsetHeight;
        this.windowHeight = window.innerHeight;
    };
    AppearDirective.prototype.saveScrollPosition = function () {
        this.scrollPosition = window.scrollY;
    };
    AppearDirective.prototype.getOffsetTop = function (element) {
        var offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    };
    AppearDirective.prototype.checkVisibility = function () {
        if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions();
            if (this.isVisible()) {
                this.unsubscribe();
                this.appear.emit();
            }
        }
    };
    AppearDirective.prototype.isVisible = function () {
        return this.scrollPosition >= this.elementPosition ||
            (this.scrollPosition + this.windowHeight) >= (this.elementPosition + this.elementHeight);
    };
    AppearDirective.prototype.subscribe = function () {
        var _this = this;
        this.subscriptionScroll = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'scroll').startWith(null)
            .subscribe(function () {
            _this.saveScrollPosition();
            _this.checkVisibility();
        });
        this.subscriptionResize = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'resize').startWith(null)
            .subscribe(function () {
            _this.saveDimensions();
            _this.checkVisibility();
        });
    };
    AppearDirective.prototype.unsubscribe = function () {
        if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe();
        }
        if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe();
        }
    };
    return AppearDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AppearDirective.prototype, "appear", void 0);
AppearDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appAppear]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], AppearDirective);

var _a, _b;
//# sourceMappingURL=appear.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fade.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => active', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{ duration }} ease-in')], {
        params: { duration: '400ms' }
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('active => inactive', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{ duration }} ease-out')], {
        params: { duration: '400ms' }
    }),
]);
//# sourceMappingURL=fade.animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appear_animation__ = __webpack_require__("../../../../../src/app/shared/appear.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reveal_animation__ = __webpack_require__("../../../../../src/app/shared/reveal.animation.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__appear_animation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__appear_animation__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__reveal_animation__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = (function () {
    function LoadingComponent(_builder) {
        this._builder = _builder;
        this._percentage = 0;
    }
    Object.defineProperty(LoadingComponent.prototype, "percentage", {
        get: function () { return this._percentage; },
        set: function (p) {
            this._percentage = p;
            if (this.player) {
                this.player.destroy();
            }
            var factory = this._builder.build([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ width: '0' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('5s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ width: (p * 100) + '%' }))
            ]);
            this.player = factory.create(this.loadingBar.nativeElement, {});
            this.player.play();
        },
        enumerable: true,
        configurable: true
    });
    LoadingComponent.prototype.play = function () {
        this.player.play();
    };
    LoadingComponent.prototype.pause = function () {
        this.player.pause();
    };
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('loadingBar'),
    __metadata("design:type", Object)
], LoadingComponent.prototype, "loadingBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])('percentage'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], LoadingComponent.prototype, "percentage", null);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-loading',
        template: "\n <div class=\"loading-stage\">\n   <div class=\"loading-bar\" #loadingBar>\n     {{ percentage * 100 }}%\n   </div>\n </div>\n<button (click)=\"play()\">play</button>\n<button (click)=\"pause()\">pause</button>\n<input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" [(ngModel)]=\"percentage\">\n  ",
        styles: ["\n.loading-stage {\n  border: 1px solid #444;\n}\n.loading-bar {\n  background-color: red;\n}\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object])
], LoadingComponent);

var _a;
//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/reveal.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return revealAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var revealAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('reveal', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-container .cn-animation-item', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-50px)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-container', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(225, [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.cn-animation-item', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(450, [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])('*'))
                    ])
                ])
            ])
        ])
    ])
]);
//# sourceMappingURL=reveal.animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appear_directive__ = __webpack_require__("../../../../../src/app/shared/appear.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_component__ = __webpack_require__("../../../../../src/app/shared/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__appear_directive__["a" /* AppearDirective */],
            __WEBPACK_IMPORTED_MODULE_3__loading_component__["a" /* LoadingComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__appear_directive__["a" /* AppearDirective */],
            __WEBPACK_IMPORTED_MODULE_3__loading_component__["a" /* LoadingComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@appear]=\"state\">\n  <ul class=\"cn-stories cn-animation-container\">\n    <li [@child]=\"state\" class=\"cn-stories__container cn-animation-item\" *ngFor=\"let story of stories\" (click)=\"openStory(story)\">\n      <span class=\"cn-stories__thumbnail\"\n        [ngStyle]=\"{\n          'background-position': story.thumbnail_position,\n          'background-image': 'url(' + story.photo + ')'\n        }\"\n      ></span>\n      <h1 class=\"cn-stories__thumbnail-title\">{{ story.title }}</h1>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cn-stories {\n  list-style: none;\n  margin: 20px 0 0 0;\n  padding: 0;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.cn-stories__container {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 300px;\n  height: 300px;\n  cursor: pointer;\n  overflow: hidden;\n  background-color: #fff; }\n  .cn-stories__container:hover .cn-stories__thumbnail {\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%); }\n\n.cn-stories__thumbnail {\n  width: 300px;\n  height: 300px;\n  background-repeat: no-repeat;\n  position: relative;\n  transition: 250ms all ease-in-out;\n  -webkit-clip-path: circle(100px at 50% 50%);\n          clip-path: circle(100px at 50% 50%); }\n\n.cn-stories__thumbnail-title {\n  position: absolute;\n  bottom: 90px;\n  font-size: 16px;\n  color: #fff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); }\n\n.cn-stories__photo {\n  position: absolute;\n  visibility: hidden;\n  top: 0;\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoriesComponent = (function () {
    function StoriesComponent(_builder, _element, componentFactoryResolver, viewContainerRef) {
        this._builder = _builder;
        this._element = _element;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.done = false;
        this.paused = false;
        this.player = new __WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* NoopAnimationPlayer */]();
    }
    Object.defineProperty(StoriesComponent.prototype, "position", {
        set: function (pos) {
            this.pause();
            this.player.setPosition(pos / 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoriesComponent.prototype, "stories", {
        get: function () { return this._stories; },
        set: function (stories) {
            var _this = this;
            this._stories = stories;
            Promise.resolve(true).then(function () {
                _this.start();
                _this.play();
            });
        },
        enumerable: true,
        configurable: true
    });
    StoriesComponent.prototype.pause = function () {
        this.paused = true;
        this.player.pause();
    };
    StoriesComponent.prototype.play = function () {
        this.paused = false;
        this.player.play();
    };
    StoriesComponent.prototype.start = function () {
        var _this = this;
        this.player = this._buildPlayer();
        this.player.onStart(function () {
            _this.done = false;
        });
        this.player.onDone(function () {
            _this.done = true;
        });
    };
    StoriesComponent.prototype._buildPlayer = function () {
        var animation = this._buildAnimation();
        return animation.create(this._element.nativeElement);
    };
    StoriesComponent.prototype._buildAnimation = function () {
        return this._builder.build([
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.cn-animation-container .cn-animation-item', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-50px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])(100, [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'none' }))
                ])
            ])
        ]);
    };
    StoriesComponent.prototype.openStory = function (story) {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a" /* ModalComponent */]);
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        Object.assign(componentRef.instance, story);
        document.body.style.overflowY = 'hidden';
        componentRef.instance.close = function () {
            componentRef.instance.modalState = 'inactive';
        };
        componentRef.instance.onFadeDone = function ($event) {
            if ($event.fromState === 'active' && $event.toState === 'inactive') {
                document.body.style.overflowY = 'auto';
                _this.viewContainerRef.clear();
            }
        };
    };
    return StoriesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('position'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], StoriesComponent.prototype, "position", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('stories'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StoriesComponent.prototype, "stories", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], StoriesComponent.prototype, "state", void 0);
StoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stories',
        template: __webpack_require__("../../../../../src/app/stories/stories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stories/stories.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__shared__["b" /* appearChildAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* appearAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _d || Object])
], StoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=stories.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map