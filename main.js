(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutBoxGrid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: 20px;\r\n      grid-template-areas:\r\n    \"title\"\r\n    \"content1\"\r\n    \"content2\"\r\n    \"content3\"\r\n    \"content4\"\r\n    \"content5\"\r\n    \"image\";\r\n  background-color: #fff;\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .aboutBoxGrid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: 20px;\r\n\r\n        -ms-grid-columns: minmax(400px, auto) minmax(300px, auto);\r\n\r\n        grid-template-columns: minmax(400px, auto) minmax(300px, auto);\r\n    grid-auto-rows: auto auto auto auto;\r\n        grid-template-areas:\r\n      \"title title\"\r\n      \"content1 image\"\r\n      \"content2 image\"\r\n      \"content3 image\"\r\n      \"content4 image\"\r\n      \"content5 image\";\r\n    color: #444;\r\n  }\r\n}\r\n\r\n.title{\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: title;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  font-family: Montserrat;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.content{\r\n\r\n  margin-top: 20px;\r\n  margin-right: 20px;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n  font-size: 1em;\r\n  color: white;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n@media (max-width: 1149px) {\r\n  .content {\r\n    margin-right: 0px;\r\n  }\r\n}\r\n\r\n.con1 {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: content1;\r\n}\r\n\r\n.con2 {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  grid-area: content2;\r\n}\r\n\r\n.con3 {\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 1;\r\n  grid-area: content3;\r\n}\r\n\r\n.con4 {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 1;\r\n  grid-area: content4;\r\n}\r\n\r\n.con5 {\r\n  -ms-grid-row: 6;\r\n  -ms-grid-column: 1;\r\n  grid-area: content5;\r\n}\r\n\r\n.developerStory{\r\n  width: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.developerStory :hover{\r\n  width: 100%;\r\n  opacity: 0.8;\r\n}\r\n\r\n@media (max-width: 1149px) {\r\n  .imageContainer {\r\n    -ms-grid-row: 7;\r\n    -ms-grid-column: 1;\r\n    grid-area: image;\r\n    margin-top: 20px;\r\n    width: 100%;\r\n  }\r\n\r\n@media (min-width: 1150px) {\r\n  .title {\r\n      -ms-grid-row: 1;\r\n      -ms-grid-column: 1;\r\n      -ms-grid-column-span: 2;\r\n  }\r\n  .con1 {\r\n      -ms-grid-row: 2;\r\n      -ms-grid-column: 1;\r\n  }\r\n  .con2 {\r\n      -ms-grid-row: 3;\r\n      -ms-grid-column: 1;\r\n  }\r\n  .con3 {\r\n      -ms-grid-row: 4;\r\n      -ms-grid-column: 1;\r\n  }\r\n  .con4 {\r\n      -ms-grid-row: 5;\r\n      -ms-grid-column: 1;\r\n  }\r\n  .con5 {\r\n      -ms-grid-row: 6;\r\n      -ms-grid-column: 1;\r\n  }\r\n  .imageContainer {\r\n      -ms-grid-row: 2;\r\n      -ms-grid-row-span: 5;\r\n      -ms-grid-column: 2;\r\n  }\r\n}\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .imageContainer {\r\n    -ms-grid-row: 7;\r\n    -ms-grid-column: 1;\r\n    grid-area: image;\r\n    margin-top: 20px;\r\n\r\n  }\r\n}\r\n\r\n@media (max-width: 1149px) {\r\n  .image {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .image {\r\n    max-width:100%;\r\n    max-height:100%;\r\n    text-align: right;\r\n    /*text-align: center;*/\r\n    /*margin-right: auto;*/\r\n    /*margin-left: auto;*/\r\n    /*margin-top: 20px;*/\r\n    /*height: 100%;*/\r\n    /*min-width: 10vw;*/\r\n  }\r\n}\r\n\r\n/*.empty{*/\r\n\r\n/*grid-area: empty;*/\r\n\r\n/*height: 90vh;*/\r\n\r\n/*}*/\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutBoxGrid\">\n  <div class=\"title\">\n    About me\n  </div>\n  <div class=\"content con1\">\n    Junior .NET Developer at GFI\n  </div>\n  <div class=\"content con2\">\n    IT student at Poznań University Of Technology, passionate of web development. Currently member of put .NET group.\n  </div>\n  <div class=\"content con3\">\n    Intrested in cardistry, photography and freestyle.\n  </div>\n  <div class=\"content con4\">\n    Developer Story:\n  </div>\n  <div class=\"content con5\">\n    <a href=\"https://stackoverflow.com/story/wolix\" target=\"_blank\" class=\"developerStory\">\n      <img src=\"https://i.imgur.com/hdCgM5O.png\" class=\"developerStory\" />\n    </a>\n  </div>\n  <div class=\"empty\">\n  </div>\n  <div class=\"imageContainer\">\n    <img src=\"assets/img/about/about.png\" alt=\"image\" class=\"image\" />\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    // @HostListener('window:resize', ['$event'])
    // sizeChange(event) {
    //   console.log('size changed.', event);
    // }
    AboutComponent.prototype.ngOnInit = function () {
        //window.dispatchEvent(new Event('resize'));
        console.log('XD');
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _init_view_init_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./init-view/init-view.component */ "./src/app/init-view/init-view.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _init_view_init_view_component__WEBPACK_IMPORTED_MODULE_7__["InitViewComponent"],
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: { depth: 1 },
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        data: { depth: 2 },
    },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
        data: { depth: 3 },
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        data: { depth: 4 },
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        data: { depth: 5 },
    },
    {
        path: 'projects/:name',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        data: { depth: 6 },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  font-family: Open Sans;\r\n}\r\n\r\n.wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: minmax(400px, auto);\r\n      grid-template-columns: minmax(400px, auto);\r\n  grid-auto-rows: 200px 64px 400px auto auto;/*minmax(100px, auto);*/\r\n      grid-template-areas:\r\n    \"title\"\r\n    \"header\"\r\n    \"content\"\r\n    \"rightbar\"\r\n    \"leftbar\";\r\n  background-color: #fff;\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: auto;\r\n    height: auto;\r\n    min-height: 101%;\r\n    background-color: #fff;\r\n        -ms-grid-columns: 250px minmax(650px, auto) 250px;\r\n        grid-template-columns: 250px minmax(650px, auto) 250px;\r\n    grid-auto-rows: 200px 64px minmax(400px, auto);/*minmax(100px, auto);*/\r\n        grid-template-areas:\r\n      \"leftbar  title    rightbar \"\r\n      \"leftbar  header    rightbar \"\r\n      \"leftbar  content  rightbar\";\r\n\r\n    color: #444;\r\n  }\r\n}\r\n\r\n.title{\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: title;\r\n  padding: 20px;\r\n}\r\n\r\n.title h1{\r\n  font-size: 50px;\r\n  font-family: Montserrat;\r\n  letter-spacing: 2px;\r\n  color: #606777;\r\n  position: relative;\r\n  margin-top: 100px;\r\n  line-height: 0px;\r\n  font-weight: 300;\r\n\r\n}\r\n\r\n.title h2{\r\n  font-size: 20px;\r\n  font-family: Montserrat;\r\n  letter-spacing: 2px;\r\n  color: #606777;\r\n  line-height: 30px;\r\n  margin-left: 10px;\r\n\r\n}\r\n\r\n.header {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: header;\r\n  background: #7a7b7b;\r\n  height: 100%;\r\n}\r\n\r\n.rightbar{\r\n  position: relative;\r\n\r\n  background: #383939;\r\n  height: 100%;\r\n}\r\n\r\n.leftbar{\r\n  position: relative;\r\n  background: #383939;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  .rightbar {\r\n    height: 0%;\r\n    width: 0%;\r\n  }\r\n  .leftbar {\r\n    height: 0%;\r\n    width: 0%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .rightbar {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: rightbar;\r\n  }\r\n  .leftbar {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 1;\r\n    grid-area: leftbar;\r\n  }\r\n}\r\n\r\n.content {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  grid-area: content;\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  .title {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n  }\r\n  .header {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n  }\r\n  .rightbar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 3;\r\n    -ms-grid-column: 3;\r\n  }\r\n  .leftbar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 3;\r\n    -ms-grid-column: 1;\r\n  }\r\n  .content {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n  }\r\n}\r\n\r\n.routeContainer{\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.routeContainer>* {\r\n  display: block;\r\n}\r\n\r\n.routerOutlet{\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 601px){\r\n  .blackBG{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\n}\r\n\r\n.blackBG{\r\n  background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <div class=\"title\">\r\n    <h1>Wojciech Rak</h1>\r\n    <h2>Student / Programmer</h2>\r\n  </div>\r\n\r\n  <div class=\"header\">\r\n    <app-upbar></app-upbar>\r\n  </div>\r\n\r\n  <div id=\"content\" class=\"routeContainer\" [@routeAnimation]=\"getDepth(myOutlet)\" >\r\n  <router-outlet class=\"routerOutlet\" #myOutlet=\"outlet\" ></router-outlet>\r\n  </div>\r\n\r\n\r\n  <div class=\"box rightbar\">\r\n  </div>\r\n\r\n  <div class=\"box leftbar\">\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Wojciech Rak';
    }
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 2, 1 => 3, 1 => 4, 1 => 5, 2 => 3, 2 => 4, 2 => 5, 3 => 4, 3 => 5, 4 => 5', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),]),
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('5 => 4, 5 => 3, 5 => 2, 5 => 1, 4 => 3, 4 => 2, 4 => 1, 3 => 2, 3 => 1, 2 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),]),
                        ])
                    ]),
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _upbar_upbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upbar/upbar.component */ "./src/app/upbar/upbar.component.ts");
/* harmony import */ var _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leftbar/leftbar.component */ "./src/app/leftbar/leftbar.component.ts");
/* harmony import */ var _rightbar_rightbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rightbar/rightbar.component */ "./src/app/rightbar/rightbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _init_view_init_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./init-view/init-view.component */ "./src/app/init-view/init-view.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _upbar_upbar_component__WEBPACK_IMPORTED_MODULE_6__["UpbarComponent"],
                _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_7__["LeftbarComponent"],
                _rightbar_rightbar_component__WEBPACK_IMPORTED_MODULE_8__["RightbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _init_view_init_view_component__WEBPACK_IMPORTED_MODULE_16__["InitViewComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_18__["MarkdownModule"].forRoot({
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_18__["MarkedOptions"],
                        useValue: {
                            gfm: true,
                            tables: true,
                            breaks: true,
                            pedantic: false,
                            sanitize: false,
                            smartLists: true,
                            smartypants: false,
                        },
                    },
                }),
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"].withConfig({ loadingMode: 'indeterminate' }),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_19__["NgxGalleryModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  font-family: Montserrat;\r\n}\r\n.informationsBox{\r\n  margin-left: 20px;\r\n  margin-right: 50%;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n  color: white;\r\n\r\n  border: 1px solid #fff;\r\n}\r\n.informations{\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 1em;\r\n}\r\n@media (max-width: 625px) {\r\n  .informations{\r\n    font-size: 15px;\r\n  }\r\n}\r\n.titleBox{\r\n  margin: 20px;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n  color: white;\r\n\r\n  border: 1px solid #fff;\r\n}\r\n.icons{\r\n  margin: 20px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.fa_with_bg{\r\n  position: relative;\r\n}\r\n.icon{\r\n  margin: 10px;\r\n  color: #383939;\r\n  /*background-color: #7a7b7b;\r\n  border-style: solid;\r\n  border-width: 1px;*/\r\n}\r\n.icon:hover{\r\n  color: #242525;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactBoxGrid\">\n  <div class=\"titleBox\">\n    <div class=\"title\">\n      Contact\n    </div>\n  </div>\n\n  <div class=\"informationsBox\">\n    <div class=\"informations\">\n      E-mail: rak.wojtek@wp.pl\n    </div>\n  </div>\n\n  <div class=\"icons\">\n    <a href=\"https://github.com/wojtek-rak\"target=\"_blank\" class=\"icon\">\n      <i class=\"fab fa-3x fa-github-square fa_with_bg\" ></i>\n    </a>\n    <a href=\"https://www.linkedin.com/in/wojciechrak/\" target=\"_blank\" class=\"icon\" >\n      <i class=\"fab fa-3x fa_with_bg  fa-linkedin\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/rak.wojtek\" target=\"_blank\" class=\"icon\">\n      <i class=\"fab fa-3x fa_with_bg fa-facebook \"></i>\n    </a>\n    <a href=\"https://twitter.com/WojciechR4k/\" target=\"_blank\" class=\"icon\">\n      <i class=\"fab fa-3x fa_with_bg  fa-twitter-square\"></i>\n    </a>\n    <a href=\"https://www.instagram.com/wojciech.r4k/\" target=\"_blank\" class=\"icon\">\n      <i class=\"fab fa-3x fa_with_bg  fa-instagram\"></i>\n    </a>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.repositories$ = [];
        this.repositoriesReadme$ = [];
        var repos = ['PaintStore', 'ApiReader', 'Pong', 'MySite'];
        for (var _i = 0, repos_1 = repos; _i < repos_1.length; _i++) {
            var repName = repos_1[_i];
            this.getRepo('wojtek-rak', repName).subscribe(function (data) { return _this.repositories$.push(data); });
        }
    }
    DataService.prototype.getRepos = function () {
        return this.http.get('https://api.github.com/users/wojtek-rak/repos');
    };
    DataService.prototype.getRepo = function (userName, repostioryName) {
        return this.http.get('https://api.github.com/repos/' + userName + '/' + repostioryName);
    };
    DataService.prototype.getReadme = function (userName, repostioryName) {
        return this.http.get('https://api.github.com/repos/' + userName + '/' + repostioryName + '/readme');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title{\r\n  font-family: Montserrat;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.title a {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 24px;\r\n\r\n}\r\n.detailsBox{\r\n  margin: 20px;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n  color: white;\r\n\r\n  padding: 20px;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.content{\r\n  line-break: auto;\r\n  padding: 20px;\r\n  position: relative;\r\n  color: black;\r\n  font-size: 22px;\r\n  background-color: white;\r\n}\r\n@media (max-width: 625px) {\r\n  .content > * {\r\n    font-size: 0.5em;\r\n  }\r\n}\r\n.description{\r\n  font-size: 18px;\r\n}\r\n.language{\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailsBoxGrid\">\n    <div class=\"detailsBox\">\n      <div class=\"title\">\n        <!--<a href=\"{{ repo$['html_url'] }}\" target=\"_blank\">{{ repo$['name'] }}</a>-->\n        <a routerLink=\"/projects\" >BACK</a>\n      </div>\n      <div class=\"content\">\n        <markdown [data]=\"readMe$\"></markdown>\n        <!--<div class=\"description\" [innerHTML]=\"description$\"></div>-->\n        <!--<div class=\"language\">{{ repo$['language'] }}</div>-->\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, data) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.route.params.subscribe(function (params) { return _this.name = params.name; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getRepo('wojtek-rak', this.name).subscribe(function (data) { return _this.repo$ = data; });
        this.data.getReadme('wojtek-rak', this.name).subscribe(function (data) { return _this.readMe$ = atob(data['content']); });
        var descriptionDict = {};
        descriptionDict['ApiReader'] = 'App for reading and displaying API from Github. Enter Username and Repositoryname and click Get Data. You can refresh it in time by enter interval time ( in sec ) <br> <br> Used NuGet: <br> NUnit <br> MoQ <br> System.Reactive <br> Akka <br> Akka.TestKit <br> Akka.TestKit.NUnit <br> Newtonsoft.Json<br> ';
        descriptionDict['PaintStore_BackEnd'] = 'API for connecting with database using ASP.NET with Entiti Framework';
        descriptionDict['GithubApi'] = 'App for deployment of .NET REST on http://github-api.azurewebsites.net/api/Repository/ to use it type http://github-api.azurewebsites.net/api/Repository/ (owner username) / (repository name) <br> <br>  For example" http://github-api.azurewebsites.net/api/Repository/google/gvisor';
        descriptionDict['Pong'] = 'Simple Pong game write in JS with rxjs.';
        descriptionDict['MySite'] = 'Site about me created in angular, which you are currently watching :D';
        console.log(descriptionDict[this.name]);
        this.description$ = '<br>' + descriptionDict[this.name] + '<br><br><br><br>';
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name{\r\n  grid-area: title;\r\n  padding: 20px;\r\n  font-family: Montserrat;\r\n\r\n  background-color: #606777;/* #383939;*/\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 46px;\r\n  /*border: 1px solid #fff;*/\r\n}\r\n\r\n@media (min-width: 601px){\r\n  .galleryDisplay{\r\n  display: table;\r\n  margin: 0 auto;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.galleryDisplay{\r\n  height: 100%;\r\n  background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"name\">UNIT TESTING</div>\r\n  <div class=\"galleryDisplay\">\r\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryUNIT_TESTING\"></ngx-gallery>\r\n  </div>\r\n<!--<gallery id=99 [items]=\"galleryUNIT_TESTING\" autoPlay=\"true\"></gallery>-->\r\n  <div class=\"name\">MVC - INTRO</div>\r\n  <div class=\"galleryDisplay\">\r\n\r\n  <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryMVC\"></ngx-gallery>\r\n  </div>\r\n  <!--<gallery id=100 [items]=\"galleryMVC\" autoPlay=\"true\" playerInterval=2000></gallery>-->\r\n<div class=\"name\">TESTING IN UNITY</div>\r\n  <div class=\"galleryDisplay\">\r\n  <ngx-gallery  [options]=\"galleryOptions\" [images]=\"galleryUNITY_TESTING\"></ngx-gallery>\r\n</div>\r\n\r\n<!--<gallery id=101 [items]=\"galleryUNITY_TESTING\" autoPlay=\"true\" playerInterval=3000 ></gallery>-->\r\n<div class=\"name\">GAME TESTING</div>\r\n  <div class=\"galleryDisplay\">\r\n  <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryGAMETESTING\"></ngx-gallery>\r\n</div>\r\n\r\n<!--<gallery id=102 [items]=\"galleryGAMETESTING\" autoPlay=\"true\" playerInterval=4000 ></gallery>-->\r\n<!--<ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>-->\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    // navigationSubscription;
    // initialiseInvites() {}
    function GalleryComponent(gallery
    //private router: Router
    ) {
        this.gallery = gallery;
        this.contentTag = document.getElementById('content');
        // Working but not necessary
        // this.navigationSubscription = this.router.events.subscribe((e: any) => {
        //   if (e instanceof NavigationEnd) {
        //     this.initialiseInvites();
        //   }
        // });
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.contentTag.classList.add('blackBG');
        this.galleryOptions = [
            {
                width: '600px',
                height: '500px',
                thumbnailsColumns: 3,
                imageAutoPlay: true,
                imageAutoPlayInterval: 3000
                //imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width
            {
                breakpoint: 1150,
                width: '600px',
                height: '500px',
            },
            {
                breakpoint: 601,
                width: '100%',
                height: '100%'
                //imagePercent: 80,
                //thumbnailsPercent: 20,
                //thumbnailsMargin: 20,
                //thumbnailMargin: 20
            },
            {
                breakpoint: 450,
                height: '80%',
                width: '100%'
            }
        ];
        this.galleryUNIT_TESTING = [
            {
                small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_1_MINI.png',
                medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png',
                big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png'
            },
            {
                small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_2_MINI.jpg',
                medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg',
                big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg'
            },
            {
                small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_3_MINI.jpg',
                medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg',
                big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg'
            },
            {
                small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_4_MINI.jpg',
                medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg',
                big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg'
            },
            {
                small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_5_MINI.jpg',
                medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg',
                big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg'
            }
        ];
        this.galleryMVC = [
            {
                small: 'assets/img/gallery/MVC/MINI/MVC_4_MINI.png',
                medium: 'assets/img/gallery/MVC/MVC_4.png',
                big: 'assets/img/gallery/MVC/MVC_4.png'
            },
            {
                small: 'assets/img/gallery/MVC/MINI/MVC_1_MINI.jpg',
                medium: 'assets/img/gallery/MVC/MVC_1.JPG',
                big: 'assets/img/gallery/MVC/MVC_1.JPG'
            },
            {
                small: 'assets/img/gallery/MVC/MINI/MVC_2_MINI.jpg',
                medium: 'assets/img/gallery/MVC/MVC_2.JPG',
                big: 'assets/img/gallery/MVC/MVC_2.JPG'
            },
            {
                small: 'assets/img/gallery/MVC/MINI/MVC_3_MINI.jpg',
                medium: 'assets/img/gallery/MVC/MVC_3.JPG',
                big: 'assets/img/gallery/MVC/MVC_3.JPG'
            }
        ];
        this.galleryUNITY_TESTING = [
            {
                small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_1_MINI.jpg',
                medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg',
                big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg'
            },
            {
                small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_2_MINI.jpg',
                medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG',
                big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG'
            },
            {
                small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_3_MINI.jpg',
                medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg',
                big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg'
            },
            {
                small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_4_MINI.jpg',
                medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg',
                big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg'
            }
        ];
        this.galleryGAMETESTING = [
            {
                small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_1_MINI.jpg',
                medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg',
                big: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg'
            },
            {
                small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_2_MINI.jpg',
                medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg',
                big: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg'
            },
            {
                small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_3_MINI.jpg',
                medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg',
                big: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg'
            }
        ];
        // this.galleryUNIT_TESTING = [
        //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_1_MINI.png'}),
        //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_2_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_3_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_4_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_5_MINI.jpg'})
        // ];
        // this.galleryMVC = [
        //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_4.png', thumb: 'assets/img/gallery/MVC/MINI/MVC_4_MINI.png'}),
        //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_1.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_1_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_2.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_2_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_3.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_3_MINI.jpg'})
        // ];
        // this.galleryUNITY_TESTING = [
        //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_1_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_2_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_3_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_4_MINI.jpg'})
        // ];
        // this.galleryGAMETESTING = [
        //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_1_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_2_MINI.jpg'}),
        //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_3_MINI.jpg'})
        // ];
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.galleryUNIT_TESTING.length = 0;
        this.galleryMVC.length = 0;
        this.galleryUNITY_TESTING.length = 0;
        this.galleryGAMETESTING.length = 0;
        this.contentTag.classList.remove('blackBG');
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"]
            //private router: Router
        ])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeBoxGrid{\r\n  width: 100%;\r\n}\r\n.title {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Montserrat;\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n}\r\n.homeBoxTitle{\r\n  margin: 20px;\r\n  padding: 20px;\r\n  background-color: #606777;\r\n\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.content {\r\n  margin: 20px;\r\n  background-color: #606777;\r\n\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.content:hover\r\n{\r\n  background-color: #4c5463\r\n}\r\n.moveNext\r\n {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: auto;\r\n}\r\n.material-icons{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: auto;\r\n  font-size: 150px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\na{\r\n  text-decoration: none\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homeBoxGrid\">\n  <div class=\"homeBoxTitle\">\n    <div class=\"title\">\n      Hello World!\n    </div>\n  </div>\n\n    <div class=\"content\">\n      <!--div class=\"title\">\n        Let's start!\n      </div-->\n      <a routerLink=\"/about\" class=\"moveNext\">\n        <i class=\"material-icons\">navigate_next</i>\n      </a>\n    </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/init-view/init-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/init-view/init-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rightDoor{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  background: #a2a3a3;\r\n  height: 100%;\r\n  width: 50%;\r\n}\r\n\r\n.slide1 {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  background: #a2a3a3;\r\n  -webkit-animation-duration: 0.5s;\r\n          animation-duration: 0.5s;\r\n  -webkit-animation-name: slidein1;\r\n          animation-name: slidein1;\r\n}\r\n\r\n@-webkit-keyframes slidein1 {\r\n  from {\r\n    left: 50%;\r\n    width: 50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n    width: 0%;\r\n\r\n  }\r\n}\r\n\r\n@keyframes slidein1 {\r\n  from {\r\n    left: 50%;\r\n    width: 50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n    width: 0%;\r\n\r\n  }\r\n}\r\n\r\n@media (min-width: 1150px) {\r\n  @-webkit-keyframes slidein1 {\r\n    from {\r\n      left: 50%;\r\n      width: 51%;\r\n    }\r\n    to {\r\n      left: 100%;\r\n      width: 0%;\r\n\r\n    }\r\n  }\r\n  @keyframes slidein1 {\r\n    from {\r\n      left: 50%;\r\n      width: 51%;\r\n    }\r\n    to {\r\n      left: 100%;\r\n      width: 0%;\r\n\r\n    }\r\n  }\r\n}\r\n\r\n.leftDoor{\r\n  position: absolute;\r\n  top: 0;\r\n  background: #a2a3a3;\r\n\r\n  height: 100%;\r\n  width: 50%;\r\n}\r\n\r\n.slide2 {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  background: #a2a3a3;\r\n  -webkit-animation-duration: 0.5s;\r\n          animation-duration: 0.5s;\r\n  -webkit-animation-name: slidein2;\r\n          animation-name: slidein2;\r\n}\r\n\r\n@-webkit-keyframes slidein2 {\r\n  from {\r\n    width: 51%;\r\n  }\r\n  to {\r\n    width: 0%;\r\n\r\n  }\r\n}\r\n\r\n@keyframes slidein2 {\r\n  from {\r\n    width: 51%;\r\n  }\r\n  to {\r\n    width: 0%;\r\n\r\n  }\r\n}\r\n\r\n.headerButon{\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 50px;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 20%;\r\n  background: #7a7b7b;\r\n  height: 1.6em;\r\n  width: 60%;\r\n  border: 2px solid #fff;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n@media (max-width: 625px) {\r\n  .headerButon {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.headerButon:hover{\r\n  background: #666767;\r\n}\r\n\r\n.clear{\r\n  position: absolute;\r\n  top: -100px;\r\n  left: -100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/init-view/init-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/init-view/init-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'slide1': doSlide, 'rightDoor': !doSlide}\">\n</div>\n\n<div [ngClass]=\"{'slide2': doSlide, 'leftDoor': !doSlide}\">\n</div>\n<a  (click)=\"doSlide = !doSlide; changeRoute()\" [ngClass]=\"{'clear': doSlide, 'headerButon': !doSlide}\" >Let's Start!</a >\n\n"

/***/ }),

/***/ "./src/app/init-view/init-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/init-view/init-view.component.ts ***!
  \**************************************************/
/*! exports provided: InitViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitViewComponent", function() { return InitViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitViewComponent = /** @class */ (function () {
    function InitViewComponent(router) {
        this.router = router;
    }
    InitViewComponent.prototype.ngOnInit = function () {
    };
    InitViewComponent.prototype.changeRoute = function () {
        var _this = this;
        setTimeout(function () { return _this.router.navigate(['/home']); }, 500);
    };
    InitViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-init-view',
            template: __webpack_require__(/*! ./init-view.component.html */ "./src/app/init-view/init-view.component.html"),
            styles: [__webpack_require__(/*! ./init-view.component.css */ "./src/app/init-view/init-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InitViewComponent);
    return InitViewComponent;
}());



/***/ }),

/***/ "./src/app/leftbar/leftbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/leftbar/leftbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.html":
/*!************************************************!*\
  !*** ./src/app/leftbar/leftbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  leftbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leftbar/leftbar.component.ts ***!
  \**********************************************/
/*! exports provided: LeftbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbarComponent", function() { return LeftbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftbarComponent = /** @class */ (function () {
    function LeftbarComponent() {
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    LeftbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftbar',
            template: __webpack_require__(/*! ./leftbar.component.html */ "./src/app/leftbar/leftbar.component.html"),
            styles: [__webpack_require__(/*! ./leftbar.component.css */ "./src/app/leftbar/leftbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftbarComponent);
    return LeftbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1150px) {\r\n  .repoBoxGrid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    border-radius: 50px;\r\n    padding: 20px;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    background-color: #fff;\r\n    color: #ad2717;\r\n    /*transition: all 1s;*/\r\n    /*animation: 0.7s curtain cubic-bezier(.86,0,.07,1) 0.1s both;*/\r\n  }\r\n}\r\n/*\r\n@keyframes curtain {\r\n  0% {\r\n    grid-gap: 30vw;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n  }\r\n  50% {\r\n    grid-gap: 30vw;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  }\r\n  100% {\r\n    grid-gap: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  }\r\n}*/\r\n@media (min-width: 1150px) {\r\n  .repoBoxGrid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    border-radius: 50px;\r\n    padding: 20px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    background-color: #fff;\r\n    color: #ad2717;\r\n    /*animation: 0.7s curtain cubic-bezier(.86,0,.07,1) 0.1s both;*/\r\n  }/*\r\n  @keyframes curtain {\r\n    0% {\r\n      grid-gap: 50vw;\r\n      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n    }\r\n    50% {\r\n      grid-gap: 50vw;\r\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n    100% {\r\n      grid-gap: 10px;\r\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    }\r\n  }*/\r\n\r\n}\r\n.title{\r\n  text-align: center;\r\n}\r\n.title a {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n.repoBox{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  background-color: #606777;\r\n  height: 150px;\r\n\r\n  padding: 20px;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.content{\r\n  position: relative;\r\n}\r\n.description{\r\n  font-size: 16px;\r\n}\r\n.readMore a{\r\n  color: #37c3ff;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n}\r\n.language{\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"repoBoxGrid\"  >\n  <div *ngFor=\"let repo of repos$\" >\n    <div class=\"repoBox\">\n      <div class=\"title\">\n        <a href=\"{{ repo['html_url'] }}\" target=\"_blank\">{{ repo['name'] }}</a>\n      </div>\n      <div class=\"content\">\n        <div class=\"description\">{{ repo['description'] }}</div>\n        <div class=\"readMore\"><a routerLink=\"/projects/{{repo['name']}}\">Read More</a></div>\n        <div class=\"language\">{{ repo['language'] }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--li *ngFor=\"let repo of repos$\">\n  <a routerLink=\"/details/{{repo.id}}\">{{ repo.name }}</a>\n\n  <ul>\n    <li>{{ repo.language }}</li>\n    <li>{{ repo.language }}</li>\n    <li><a href=\"{{ repo.html_url }}\">{{ repo.html_url }}</a></li>\n  </ul>\n</li-->\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';*/
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(data) {
        this.data = data;
        this.repos$ = [];
        this.repos$ = this.data.repositories$;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")],
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/rightbar/rightbar.component.css":
/*!*************************************************!*\
  !*** ./src/app/rightbar/rightbar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rightbar/rightbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/rightbar/rightbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rightbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/rightbar/rightbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/rightbar/rightbar.component.ts ***!
  \************************************************/
/*! exports provided: RightbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightbarComponent", function() { return RightbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightbarComponent = /** @class */ (function () {
    function RightbarComponent() {
    }
    RightbarComponent.prototype.ngOnInit = function () {
    };
    RightbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rightbar',
            template: __webpack_require__(/*! ./rightbar.component.html */ "./src/app/rightbar/rightbar.component.html"),
            styles: [__webpack_require__(/*! ./rightbar.component.css */ "./src/app/rightbar/rightbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RightbarComponent);
    return RightbarComponent;
}());



/***/ }),

/***/ "./src/app/upbar/upbar.component.css":
/*!*******************************************!*\
  !*** ./src/app/upbar/upbar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-area: header;\r\n  grid-gap: 10px;\r\n  border-radius: 50px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  -ms-grid-columns: (auto)[5];\r\n      grid-template-columns: repeat(5,auto);\r\n}\r\n\r\n@media (min-width: 1150px){\r\n  .header{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-area: header;\r\n    grid-gap: 60px;\r\n    border-radius: 50px;\r\n    padding-left: 60px;\r\n    padding-right: 60px;\r\n    -ms-grid-columns: (auto)[5];\r\n        grid-template-columns: repeat(5,auto);\r\n  }\r\n}\r\n\r\n.headerButon{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: auto;\r\n  max-width: 25px;\r\n  width: 100%;\r\n\r\n}\r\n\r\na {\r\n  color: #fff;\r\n  padding: 20px;\r\n  display: block;\r\n}\r\n\r\na:hover{/*po najechaniu tekst zmieni kolor na czerwony*/\r\n  background-color: #666767;\r\n  color: #ebebeb;\r\n}\r\n\r\n.activated {\r\n  background-color: #00a8ff;\r\n}\r\n\r\n.activated:hover{\r\n  background-color: #009aeb;\r\n  color: #ebebeb;\r\n}\r\n\r\n.home{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.about{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.gallery{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.projects{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.contact{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.material-icons{\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 1150px){\r\n  .headerButon {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: auto;\r\n    max-width: 150px;\r\n    max-height: 25px;\r\n    vertical-align: top;\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/upbar/upbar.component.html":
/*!********************************************!*\
  !*** ./src/app/upbar/upbar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n<div class=\"home\">\n  <a routerLink=\"home\" [class.activated]=\"currentUrl == '/home'\"  class=\"headerButon\">\n    <i  class=\"material-icons\">archive</i>\n  </a>\n</div>\n<div class=\"about\">\n  <a routerLink=\"about\" [class.activated]=\"currentUrl == '/about'\" class=\"headerButon\">\n    <i class=\"material-icons\">assignment_ind</i>\n  </a>\n</div>\n<div class=\"gallery\">\n  <a routerLink=\"gallery\" [class.activated]=\"currentUrl == '/gallery'\" class=\"headerButon\">\n    <i class=\"material-icons\">collections</i>\n  </a>\n</div>\n<div class=\"projects\">\n  <a routerLink=\"projects\" [class.activated]=\"currentUrl == '/projects'\" class=\"headerButon\">\n    <i class=\"material-icons\">description</i>\n  </a>\n</div>\n<div class=\"contact\">\n  <a  routerLink=\"contact\" [class.activated]=\"currentUrl == '/contact'\" class=\"headerButon\">\n    <i class=\"material-icons\">call</i>\n  </a>\n</div>\n</div>\n<!--nav>\n  <ul>\n    <li>\n      <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n        <i class=\"material-icons\">archive</i>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"about\" [class.activated]=\"currentUrl == '/about'\">\n        <i class=\"material-icons\">videogame_asset</i>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"projects\" [class.activated]=\"currentUrl == '/projects'\">\n        <i class=\"material-icons\">sentiment_satisfied_alt</i>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"contact\" [class.activated]=\"currentUrl == '/contact'\">\n        <i class=\"material-icons\">message</i>\n      </a>\n    </li>\n  </ul>\n</nav-->\n"

/***/ }),

/***/ "./src/app/upbar/upbar.component.ts":
/*!******************************************!*\
  !*** ./src/app/upbar/upbar.component.ts ***!
  \******************************************/
/*! exports provided: UpbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpbarComponent", function() { return UpbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpbarComponent = /** @class */ (function () {
    function UpbarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = event.url;
            }
        });
    }
    UpbarComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    UpbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upbar',
            template: __webpack_require__(/*! ./upbar.component.html */ "./src/app/upbar/upbar.component.html"),
            styles: [__webpack_require__(/*! ./upbar.component.css */ "./src/app/upbar/upbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpbarComponent);
    return UpbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wolix\Documents\.Projects\AngularApps\MySite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map