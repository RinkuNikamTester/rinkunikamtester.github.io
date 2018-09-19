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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-home></app-home>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ABFXSupportDictionary';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"></div>\n<div class=\"header\">\n  <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"isHandset$ | async\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <h1>ABFX support dictionary</h1>\n</div>\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\"><input class=\"search\" type=\"text\" [(ngModel)]=\"search\" placeholder=\"search ...\" name=\"search\"></mat-toolbar>\n    <mat-nav-list>\n\n      <a *ngFor=\"let dict of dictionary | wordFilter:search; index as i\" (click)=\"show(i)\" href=\"#\">{{dict.word}}\n        <hr></a>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <!-- Add Content Here -->\n    <div class=\"word\">\n\n      <div>\n        <h3 [innerHTML]=\"dic.word\" id=\"word_text\"></h3>\n        <p [innerHTML]=\"dic.def\" id=\"definition\"></p>\n        <hr>\n      </div>\n\n      <div [hidden]=\"hideRel\">\n        <h3>Related defination:</h3>\n        <li *ngFor=\"let related of dic.rel\" [innerHTML]=\"related\" id=\"related\"></li>\n        <hr>\n      </div>\n\n      <div [hidden]=\"hideImage\">\n        <h3>Related Images:</h3>\n        <div class=\"releted-img-container\">\n          <li id=\"relatedImages\" *ngFor=\"let image of dic.img\">\n            <div class=\"releted-img-div\">\n              <img class=\"releted-img\" src='../../assets/images/{{image}}.jpg' />\n              <br>\n              \n            </div>\n          </li>\n        </div>\n      </div>\n    </div>\n    \n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 250px;\n  background: #66CDF6;\n  top: 135px !important; }\n\n@media (max-width: 559px) {\n  h1 {\n    display: inline-block; }\n  .mat-icon-button {\n    float: left !important;\n    top: inherit;\n    margin-left: 4px !important; } }\n\n@media (max-width: 551px) {\n  .sidenav {\n    top: 135px !important; }\n  h1 {\n    display: block; } }\n\n@media (max-width: 541px) {\n  .sidenav {\n    top: 129px !important; }\n  h1 {\n    display: contents; } }\n\n@media (max-width: 351px) {\n  .sidenav {\n    top: 129px !important; }\n  h1 {\n    display: inline; } }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #66CDF6; }\n\n.mat-icon-button {\n  float: left !important;\n  top: inherit;\n  margin-left: 22px; }\n\nh1 {\n  font-size: 2em;\n  -webkit-margin-before: 0.67em;\n  -webkit-margin-after: 0.67em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  font-weight: bold;\n  margin-left: -22px; }\n\n.header-container {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  height: 30px;\n  background-color: #fafafa; }\n\n.header {\n  width: 100%;\n  margin: 0px auto 0px;\n  color: white;\n  background: #000000;\n  text-align: center;\n  border: 1px solid gray;\n  border-radius: 8px 8px 0px 0px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30px;\n  z-index: 2; }\n\n.word {\n  width: 100%;\n  float: left;\n  padding-left: 10px; }\n\nli {\n  list-style-type: none;\n  line-height: 0.80cm; }\n\na:hover {\n  cursor: pointer;\n  color: #3d27cf;\n  background-color: #a1d664; }\n\na {\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  text-decoration: none;\n  display: block;\n  color: #000000;\n  padding: 2px 1px 1px 16px; }\n\na hr {\n    margin: auto; }\n\na.active {\n  background-color: #13eb1a;\n  color: #ffffff; }\n\nh3 {\n  margin-bottom: 3px;\n  color: #483d8b;\n  display: block;\n  font-size: 1.17em;\n  font-weight: bold;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px; }\n\n.search {\n  margin-left: -15px; }\n\n.releted-img {\n  height: 220px;\n  width: 100%;\n  margin: 10px;\n  border: 1px solid #ccc; }\n\n.releted-img-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap; }\n\n.releted-img-container li {\n    width: 50%; }\n\n.releted-img-div {\n  width: 96%; }\n"

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var data = __webpack_require__(/*! ../../assets/data/data.json */ "./src/assets/data/data.json");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.dictionary = data.dictionary;
        this.hideRel = false;
        this.hideImage = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dic = this.dictionary[0];
        (!this.dic.rel[0]) ? this.hideRel = true : this.hideRel = false;
        (!this.dic.img[0]) ? this.hideImage = true : this.hideImage = false;
    };
    HomeComponent.prototype.show = function (i) {
        this.dic = this.dictionary[i];
        (!this.dic.rel[0]) ? this.hideRel = true : this.hideRel = false;
        (!this.dic.img[0]) ? this.hideImage = true : this.hideImage = false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _word_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./word-filter.pipe */ "./src/app/home/word-filter.pipe.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _word_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["wordFilterPipe"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/word-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/home/word-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: wordFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordFilterPipe", function() { return wordFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var wordFilterPipe = /** @class */ (function () {
    function wordFilterPipe() {
    }
    wordFilterPipe.prototype.transform = function (words, search) {
        if (!words || !search) {
            return words;
        }
        return words.filter(function (element) {
            return element.word.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    };
    wordFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wordFilter',
            pure: false
        })
    ], wordFilterPipe);
    return wordFilterPipe;
}());



/***/ }),

/***/ "./src/assets/data/data.json":
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/*! exports provided: admin, dictionary, default */
/***/ (function(module) {

module.exports = {"admin":[],"dictionary":[{"word":"ABFX Introduction","def":"AlphaBeta FX is a leading Forex broker, providing traders access to the Global Forex market through the powerful platform.<br><br><strong>AlphaBeta FX .Ltd</strong> is incorporated in St. Vincent & the Grenadines as an International Broker Company with the registration number 23757 IBC 2016. The objects of the Company are all subject matters not forbidden by International Business Companies (Amendment and Consolidation) Act, Chapter 149 of the Revised Laws of Saint Vincent and Grenadines, 2009, in particular but not exclusively all commercial, Financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as to provide brokerage, training and managed account services in currencies, commodities, indexes, CFDs and leveraged Financial instruments. .<br><br>We provide our clients with a large selection of financial instruments for algorithmic or self-trading, money management and investment. Our dedicated team of highly educated and experienced professionals constantly works on the development and perfection of AlphaBeta FX services. ","rel":["","",""],"img":["abfx","abfxlogo"]},{"word":"Welcome Message","def":"Hi ****<br><br>Thank you for chatting with us. This is ****<br>how may I help you today?","rel":["","",""],"img":["wellcome"]},{"word":"Opening an Account","def":"As you are already in our website, I can guide you through the process. Is that okay with you? ","rel":["<strong>**Customer says yes**</strong> <br> Please click on Open Live Account and enter your details. Once done you would receive an email confirmation, please verify and upload the required documents. Once the documents are uploaded, we will verify the documents and approve. Post which you would be able to deposit funds and start trading. <br>","<br><strong>**Customer says NO** </strong><br> Shall I send you the screenshots with instructions to open a live account?"],"img":["Screenshot_6","Screenshot_2","Screenshot_4"]},{"word":"Types of account","def":"What are the different types of account do you have?<br><br><strong>We have 5 types of account which are:</strong> <br><br><strong>Alpha Micro</strong> with minimum deposit of $5 and Leverage up to 1:1000 and a Spread of 1.9 PIP and there would be no Commission<br><br><strong>Alpha Standard</strong> with minimum deposit of $100 and Leverage up to 1:500 and a Spread of 1.4 PIP and there would be no Commission<br><br><strong>Alpha Zero Spread</strong> with minimum deposit of $1000 and Leverage up to 1:300 and a Spread of 0.1-0.5 PIP and Commission $10/lot<br><br><strong>Alpha ECN</strong> with minimum deposit of $1000 and Leverage up to 1:200 and a Spread of 0.1-0.5 PIP and Commission $5/lot<br><br><strong>Alpha Pro</strong> with minimum deposit of $15000 and Leverage up to 1:100 and a Spread of 0.1 PIP and Commission $5 /lot<br><br>Please let me know your initial deposit, so we can choose the account accordingly.","rel":["When you create a new live account, we offer some account types such as alpha-micro, alpha-standard, alpha-zero-spray, alpha-ECN, alpha-pro account . For more information, go to the Compare Account Types page under Trading."],"img":["Screenshot_7","Screenshot_8"]},{"word":"Abfx services","def":"What kind of services do you provide?<br><br>1. We provide 30 mins withdrawal*<br>2. We have the latest MT5 platform<br>3. We also have MAM account<br>4. 24/7 customer service<br>5. Zero Swap charge","rel":["","",""],"img":["8","9","Screenshot_1"]},{"word":"No Deposit Bonus","def":"I understand that you would like to know if we provide no deposit bonus.<br>.<br>We are sorry to inform you that we currently don't have No Deposit Bonus offer available with Alphabetafx. We have 10% tradable initial deposit bonus available. We'll certainly update our website if we implement no deposit bonus in future.","rel":["","",""],"img":[]},{"word":"Profit Withdrawal","def":" I understand that you would like to withdraw the profit which you've gain. Let me assist you to go through the process. <br><br>Please login to your account at clients.alphabetafx.com >> Click on Finance >>Withdrawal<br><br><br>Then select the account number from which you would like to withdraw and select the payment method which you chose during depositing the funds with us and enter amount you would like to withdraw and select Submit. <br><br>**Note**: <br><br> Once the request is received we'll initiate the process and will be transferred to your account in 48 working hrs of time. Please do reach out to us if you need any more assistance. ","rel":["","",""],"img":["Screenshot_3"]},{"word":"Capital Withdrawal","def":"I am sorry to hear that you would like to do a Capital Withdrawal. <br> Is there any particular reason that you chose to do a Capital Withdrawal?","rel":["<strong>If customer says no I need money for my personal reasons</strong><br> I am sorry that you are in a situation that you need to do a withdrawal due to your personal reasons. Let me initiate the process before that May I ask few questions? <br> How satisfied are you with our service? <br>  Have you been satisfied with our withdrawal process till date? <br>  Will you be coming back to Alphabeta FX in future once you are out of your crisis period? <br>.","<strong>If customer says I am not happy with Alphabeta FX</strong><br>I am sorry that you were not happy with our brokerage Alphabeta FX<br>May I know the reason that you were not satisfied? <br>  How can we improve ourselves to make you stay back with us? <br>  We will make sure that you would not have any problem in coming future and request you not to withdraw. <br>We can help you with a compensation of $100 to your trading account. Also, we will make sure that you would have such bad experience in coming days..<br>","<br><strong>If Customer says your Spreads are really high</strong><br> We are sorry that you feel our spreads are on the higher side. Please let me know what kind of spread you are looking for?","<br><strong> My Withdrawal is pending, May I know when would it be processed?</strong> <br> I am sorry to hear that you have still not received your withdrawal. Let me quickly check the status on your withdrawal. <br><br><strong> May I have your account number?</strong> <br>I see that you have requested for withdrawal on *****. As we are awaiting funds from LP (Liquidity Provider), once we receive it we will complete the process. Please do let us know if you have any questions.<br>"],"img":[]},{"word":"Minimum Deposit","def":" We thank you and appreciate for choosing Alphabet FX as your broker. Our minimum deposit to open a trading account Alpha Micro is $5.","rel":["","",""],"img":[]},{"word":"Regulations & License","def":"Yes, we are licensed with St. Vincent & the Grenadine as an International Broker Company with the registration number 23757 IBC 2016. Alphabetafx is regulated with FSA (Financial Service Authority).","rel":["https://alphabetafx.com/licences-and-regulations/","",""],"img":["certificate-of-incorporation"]},{"word":"Mode of Deposit","def":"<strong>I understand you would like to know the options to deposit funds with us.</strong><br><br>We have Perfect Money, Payeer, Fasapay, Ok Pay, Bank Transfer, and Cash Pickup. Also, would like to inform you that we are having maintenance with Visa, Master, Union Pay, Neteller& Skrill. But if you insist to have the funds deposited through Neteller or Skrill, you can have it transferred to our Directors account.<br><br><strong>**Only if customer asks a question on having a personal Account**</strong>.<br><br>I understand you might feel skeptical transferring funds to a personal account, but not to worry, once we receive the funds to our<strong> Neteller or Skrill, </strong> we'll have it transferred to your trading account.","rel":["","",""],"img":["Screenshot_5"]},{"word":"Skrill, Neteller Payment Gateway","def":"I'm sorry to inform you that Skrill, Neteller& other online payment gateway are currently under maintenance, as there are some changes with payment options. We are in process of updating it as per their new standards.<br><br>Please bear with us until it is fixed and we will update you once it is available. Until then you can make payments through the other payment options with us.","rel":["","",""],"img":[]},{"word":"Email Verification","def":"I understand that you did not receive the confirmation email from ABFX (Alphabeta FX) after registering. We suggest you to check your Spam Box.<br><br>Reason why the Alphabeta FX welcome email triggers to Spam Mail, as there would be certain email filtering from the mail server/clients. We will have to look at it and confirm you once it is fixed.","rel":["","",""],"img":[]},{"word":"Demo Contest","def":"I understand that you would like to know about our Demo Contest. Let me explain you in detail.","rel":["<strong>**If Customer says Yes Explain**</strong><br>We want customers to come learn trading with us and win the contest and create an opportunity to have the live account active with funds transferred from us.<br>We have the demo contest for which you would have to sign up with us and trade in our demo account with either being the highest number of lots or earning more money with more than 80 lots.<br>We'll announce the winners by the end of every month and publish it in the website. If you are one of the winners, you'll have to create a live account and we'll have the trading funds transferred to your live account with which you can trade and earn you profit.<br><strong>Note: </strong> You'll only be able to make 1 profit withdrawal with the initial trading funds which are transferred to your account.","<br><strong>**If customer says No**</strong><br>Inform the customer that we have the demo contest page, you can visit it in our website and get ot know more about it.<br><br>",""],"img":["Screenshot_9","Screenshot_14"]},{"word":"What is Spread?","def":"The difference between Buy and Sell price is called spread. It represents brokerage service costs and replaces transaction fees. ><br><br><strong>**Eg**:<br><br> EURUSD - 1.2345 Sell<br><br>EURUSD - 1.2348 Sell</strong><br><br>Difference between the last decimal is called Spread. It is called as 0.3 PIPs. ><br>Let me know if I have to explain you about PIPs?","rel":["","",""],"img":["Screenshot_11"]},{"word":"What is your Brokerage Spread?","def":"That's a nice question. Let me explain you about our Spread.<br><br>We have 5 different account types and every account type differs spread accordingly. <br>We have spread stating from 1.9 - 0.4 (variable). <br>Would you like to know about our account Types? <br>","rel":["","",""],"img":[]},{"word":"What is a PIP?","def":"PIP (Point in Percentage), is the very small measure of change in a currency pair. PIP is a standardized unit and is the smallest amount by which a currency quote can change. It is usually referred to 1/100 of 1%.","rel":["","",""],"img":["Screenshot_10"]},{"word":"What is your Leverage?","def":"Leverage is given as a loan to a customer by the broker. Customers use leverage to profit from the fluctuations in exchange rates between two different countries. <br><br>When a trader decides to trade in the forex market, he or she must first open a margin account with ABFX. We provide a leverage of 1:200 upto 1:1000, depending on the customer requirement and the type of account being selected.","rel":["","",""],"img":[]},{"word":"What is a LOT?","def":"Lot is the number of currency units you would buy or sell. There are 3 types of Lot s.<br><br><strong>Micro - 0.01 - 1000<br>Mini - 0.1 - 10000<br>Standard - 1.0 - 100000</strong>","rel":["","",""],"img":[]},{"word":"Do you provide Grey Label?","def":"Yes, we provide grey label. Kindly let us know if you would like to run Dealing Desk or Non Dealing Desk?<br><br> We support both dealing and non-dealing desk. Below are the charges for both the grey label.<strong><br><br> Dealing Desk - $3000 (if you want to develop website). $2500 (without website development) - Monthly Non Dealing Desk - $ 2500 (with Website development), ($2000) (without website development) - Monthly</strong><br><br>Please provide with your Phone Number. Email Address and Name. so we can have it sent to the concerned team.","rel":["","",""],"img":[]},{"word":"Do you provide White Label?","def":"We as Alphabeta FX do not provide white label, we have our service providers (Bridging FX) they would provide you with the white label. Please provide with your Phone Number, Email Address and Name, so we can have it sent to the concerned team.","rel":["","",""],"img":[]},{"word":"Can I be an IB with ABFX?","def":"Yes, you can certainly be an IB with us. If you would like to know more about the account types and our commission structure, I can assist you or offer a call back from our Account Manager.","rel":["<br><strong>***If Customer says Explain***</strong><br><br><strong>We have 5 types of account which are:</strong><br> Alpha Micro with minimum deposit of $5 and Leverage up to 1:1000 and a Spread of 1.9 PIP and there would be no Commission<br>Alpha Standard with minimum deposit of $100 and Leverage up to 1:500 and a Spread of 1.4 PIP and there would be no Commission<br>Alpha Zero Spread with minimum deposit of $1000 and Leverage up to 1:300 and a Spread of 0.1-0.5 PIP and Commission $10/lot<br>Alpha ECN with minimum deposit of $1000 and Leverage up to 1:200 and a Spread of 0.1-0.5 PIP and Commission $5/lot<br>Alpha Pro with minimum deposit of $15000 and Leverage up to 1:100 and a Spread of 0.1 PIP and Commission $5 /lot<br>Please let me know your initial deposit, so we can choose the account accordingly","<br><strong>***If Customer asks for a call back from Account Manager***</strong><br>You would receive a call back in an hour or two.Please provide with your Phone Number, Email Address and Name, so we can have it forwarded to the concerned team.",""],"img":["Screenshot_12","Screenshot_13"]},{"word":"Do you have PAM/MAM account service?","def":"Thanks for asking about our additional account type services provided by ABFX. Yes, we have MAM account and we will be integrating PAM in coming days.","rel":["","",""],"img":["Screenshot_1"]},{"word":"How can I add my account into MAM?","def":"You need fill up a form for signing up with ABFX MAM account. I’ll have it emailed to you in a while. Once you receive the form, you’ll have to fill up the form and reply back to that email. Please do get back to us if you have any questions.","rel":["","",""],"img":[]},{"word":"How to participate in Demo contest and where would the ranking be put up to check?","def":"<strong>How to participate in Demo contest and where would the ranking be put up to check?</strong><br><br>Thank you for showing interest in our Demo Competition. We have set this ongoing competition only to get new traders to learn more about the aspect of trading and how it works. <br><br>. Open a Demo Account with ABFX<br>. Select the Account type, Leverage, Spread and the virtual currency to start trading<br><br>You are all set to start trading with our Demo competition.<br><br>You will be able to get to know your ranking and status of your trading skills updated in website, every 15 days once the ranking will be updated.","rel":[],"img":["Screenshot_9","Screenshot_14"]},{"word":"internal transfer","def":"<strong>How to request for withdrawal and internal transfer from dashboard?</strong><br><br>Thanks for reaching us to know on the withdrawal & Internal fund transfer process.<br>.  You Wll have to select Finance >> Withdrawal >> Select the account type and mention the amount that you would like to take withdrawal.<br>.  If you would like to do an internal transfer to another account, you need to select the Finance >> Internal Fund Transfer >> Go through the process.<br><br>Did I answer your question and please do not hesitate to reach out to us if there are any concerns.","rel":["","",""],"img":["Screenshot_15"]},{"word":"Tell me about your company?","def":"Sure, we will be glad to help you with our company details. Please let me know what is that you would like to know. So I can explain in detail.","rel":["","",""],"img":[]},{"word":"Where is your Head Office?","def":"We have our Head Office located in London and financial head office is in Dubai & Hong Kong. We also have our affiliate office in India, Malaysia & Kuwait.<br><br>India – We have branches in Bangalore, Chennai, Coimbatore, Hyderabad & Mumbai.","rel":["","",""],"img":[]},{"word":"Document verification?","def":"<strong>I would like to know the status on my Document verification?</strong><br><br>Good to know that you have opened an account with ABFX. Let me quickly check the status on your document verification.","rel":["<strong>***If the verification is success***</strong><br>Congratulations! Your account is verified successful and your account is active for trading. Please go ahead and deposit to start trading.","<br><strong>***If the verification is not successful***</strong><br>I am sorry to inform you that your account is not verified successful, please upload relevant document to get it verified successful. ",""],"img":[]},{"word":"MT4 platform","def":"<strong>Why Am I not able to see MT4 platform in your broker?</strong><br><br>Thank you for asking a question about this, I would to inform you that MT4 is no longer available for purchases and it is not being supported by Meta Quotes any more. We did not want to take any risk on this and put our customers on Risk. <br><br>We have the upgraded version of platform MT5 and it has all benefits and advantages. You can certainly go ahead and register with MT5 and have all advantages.","rel":["","",""],"img":[]},{"word":"What type of account should I select?","def":"It totally depends on you and the amount you deposit. If you are depositing more than $2000 you can select Zero Spread account with a Leverage of 1:300 or 400, which would be helpful and risk free. Zero Spread would have a spread of 0.4-0.8 variable spread. Did I answer your question?","rel":["","",""],"img":[]},{"word":"Required Documents ","def":"For international Client We need at least two documents to accept you as an individual client.<br><br> National ID card, Passport or Driving License and a proof of your legal address in your name that has been issued within the last 3 months.","rel":["<br><strong>Proof of Identity</strong><br>  In compliance with the requirements of regulation upload a color copy of the document (National ID card, Passport or Driving License)<br><br>(*)- Your photo,<br>(*)- Name and Surname,<br>(*)- Date of birth,<br>- Expiry Date,<br>- Number of the document.","<br><strong>Proof of Address</strong><br>In compliance with the requirements of regulation upload a color copy of a proof of your legal address (Recent utility bill, bank Statement, tax invoice or certificate from local authorities with the name and address of organization that is internationally recognized): Name and address should be same which mentioned Alphabeta FX account details.<br><br>(*)- Name and Surname,<br>(*)- Actual residential address,<br>- Dated within the last 3 months.","<br><strong>Credit Card Verification</strong><br>In compliance with the requirements of AML Policy upload a color copy of the credit card:<br>- Full color copy, that shows all corners of the card,<br>- With only the last 4 digit number and expiry date,<br>- With the full name of the card owner.<br><br>Documents will be verified within 2-24 working hours of submission.","<strong>Note:-</strong> <br>for Indian Client ID proof We Will accept only Adharcard, Pan Card, Driving License Voter ID, Passport and Mack sure ID proof page contain your picture, Name and Date of birth and upload it in your personal area<br>in Address Proof we will accept Bank Passbook (Front Page), Adharcard, Passport. Make sure Address proof page contain Name and Actual residential address. Client Name Should Be Same In ID proof and Address Proof and Give First Preference For Bank Passbook<br><br>. We only accept UNCROPPED CENTERED CLEAR COLOR scans/photos with a very GOOD RESOLUTION.<br>. In Proof of Identity and Proof of Address document. Client name should be same<br>. If Identity (ID) and Address Proof Both Are in different language then Client have To translate all those in English  that is mention on ID And Address Proof. and Send By Mail on backoffice@alphabetafx.com"],"img":[]},{"word":"Available Bank's Account & E-Gateway","def":"Alphabeta FX traders are usually given several options when deciding how they will deposit funds into their Live accounts. User can simply deposit funds into their trading live accounts from an existing bank account or send the funds through a Electronic Systems or Wire Transfer.","rel":["","",""],"img":["Screenshot_16"]},{"word":"Available Bank's Account","def":"Wire Transfer is a method of Deposit / Withdraw from your bank account to our company bank account. Clients can Transfer the funds directly to our registered bank accounts. Once the fund verified (ones we get Amount in Company Account) then the funds will be deposited to your trading account. Or Clients can withdraw funds back to their verified Banks.<br><br><strong>Note-<strong> conversion Charge will Be applicable then amount Will Be Credit to the Live account base on account Currency (trading account Currency Trade) for both international or Indian client","rel":["","",""],"img":[]},{"word":"Available Bank's Account","def":"","rel":["","",""],"img":[]},{"word":"Available Bank's Account","def":"","rel":["","",""],"img":[]}]};

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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\Rinku\Documents\abfx2\ABFXSupportDictionary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map