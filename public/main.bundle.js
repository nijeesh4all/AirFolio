webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.css":
/***/ (function(module, exports) {

module.exports = "mat-panel-title{\r\n  display: block;\r\n  text-align: center;\r\n  line-height: 150%;\r\n  font-size: 1.4em;\r\n  font-weight: bolder;\r\n}\r\n\r\nmat-expansion-panel-header{\r\n  background-color:#ccc;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .airdrop-logo{\r\n    position: relative;\r\n    left: 30%;\r\n  }\r\n}\r\n\r\nlabel{\r\n  display: block;\r\n  text-align: center;\r\n  line-height: 150%;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.facebook{\r\n  color:#3b5998;\r\n}\r\n\r\n.facebook .mat-checkbox-frame {\r\n  color: #3b5998 !important;\r\n}\r\n\r\n.telegram{\r\n  color:#0088cc;\r\n}\r\n\r\n.telegram .mat-checkbox-frame{\r\n  color:#0088cc !important;\r\n}\r\n\r\n.twitter{\r\n  color:#1da1f2;\r\n}\r\n\r\n.twitter .mat-checkbox-frame{\r\n  color:#1da1f2 !important;\r\n}\r\n\r\n.general{\r\n  color:#791E94;\r\n}\r\n\r\n.general .mat-checkbox-frame{\r\n  color:#791E94 !important;\r\n}\r\n\r\n.misc{\r\n  color:#6abe83;\r\n}\r\n\r\n.misc .mat-checkbox-frame{\r\n  color:#6abe83 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\r\n<div class=\"alert alert-success\" *ngIf=\"success\">{{success}}</div>\r\n\r\n<div style=\"background:wheat\">\r\n  <mat-accordion class=\"example-headers-align\">\r\n\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Airdrop Details\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      <form [formGroup]='detailsForm' class='row'>\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Airdrop Name\" required formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Token Symbol\" #input (input)=\"input.value=$event.target.value.toUpperCase()\" formControlName=\"symbol\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <mat-select placeholder=\"Difficulty\" formControlName=\"difficulty\" required>\r\n            <mat-option value=\"1\" style=\"background-color: green ;color:indigo\"> Easy </mat-option>\r\n            <mat-option value=\"2\" style=\"background-color: yellow;color:indigo\"> Medium </mat-option>\r\n            <mat-option value=\"3\" style=\"background-color: orange;color:indigo\"> Hard </mat-option>\r\n            <mat-option value=\"4\" style=\"background-color: red;color:indigo\"> Insane </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Referral link\" type=\"url\" required formControlName=\"ref_url\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Airdrop LOGO Url\" type=\"url\" formControlName=\"icon_url\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Website\" type=\"url\" formControlName=\"website\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput placeholder=\"Estimated Value in USD\" formControlName=\"value\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class='col'>\r\n          <input matInput [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" placeholder=\"Ending Date Time\" formControlName=\"endDate\">\r\n          <owl-date-time #dt1></owl-date-time>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\" style=\"min-width: 100%;\">\r\n          <textarea matInput formControlName=\"decription\" placeholder=\"Enter the description of the airdrop\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col col-5\" [innerHTML]='htmlText.value'>\r\n          </div>\r\n          <div class=\"col col-6\">\r\n            <mat-form-field class=\"example-full-width\" >\r\n              <textarea matInput style=\"min-width: 600px;min-height: 200px\" #htmlText  [value]='steps_html' placeholder=\"HTML for the description\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </form>\r\n      <mat-action-row>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Type\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      <form [formGroup]=\"typeForm\">\r\n        <section class=\"type checkbox-grid\">\r\n          <mat-checkbox class=\"example-margin\" value=\"airdrop\" formControlName=\"airdrop\">Airdrop</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"reffer\" formControlName=\"reffer\">Reffer</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"contest\" formControlName=\"contest\">Contest</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"bounty\" formControlName=\"bounty\">Bounty</mat-checkbox>\r\n\r\n        </section>\r\n      </form>\r\n      <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Requirements\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]='requirementsForm'>\r\n\r\n\r\n        <label for=\"general\" class='general'>General\r\n          <i class=\"fab fa-info\"></i>\r\n        </label>\r\n        <section class=\"type row general\">\r\n          <mat-checkbox class=\"example-margin col\" value=\"kyc\" formControlName=\"kyc\">KYC</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" value=\"eth\" formControlName=\"eth_wallet\">ETH address</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" value=\"mail\" formControlName=\"mail\">Mail</mat-checkbox>\r\n        </section>\r\n\r\n        <label for=\"telegram\" class='telegram'>Telegram\r\n          <i class=\"fab fa-telegram\"></i>\r\n        </label>\r\n\r\n        <section class=\"type row telegram\">\r\n\r\n          <mat-checkbox class=\"example-margin col\" value=\"telegram_group\" #telegram formControlName=\"telegram\">Group</mat-checkbox>\r\n          <mat-form-field *ngIf='telegram.checked' class='col'>\r\n            <input matInput placeholder=\"Group Link\" type=\"url\" [required]='telegram.checked' formControlName=\"telegram_group_url\">\r\n          </mat-form-field>\r\n\r\n          <mat-checkbox class=\"example-margin col\" value=\"telegram_channel\" #telegramChannel formControlName=\"telegram_channel\">Channel</mat-checkbox>\r\n          <mat-form-field *ngIf='telegramChannel.checked' class='col'>\r\n            <input matInput placeholder=\"Group Link\" type=\"url\" [required]='telegramChannel.checked' formControlName=\"telegram_channel_link\">\r\n          </mat-form-field>\r\n\r\n        </section>\r\n\r\n        <label for=\"facebook\" class='facebook'>Facebook\r\n          <i class=\"fab fa-facebook\"></i>\r\n        </label>\r\n        <section class=\"type row facebook\">\r\n          <mat-checkbox class=\"example-margin col\" #fbLike value=\"facebook_like\" formControlName=\"facebook\">Like</mat-checkbox>&nbsp;&nbsp;&nbsp;\r\n          <mat-checkbox class=\"example-margin col\" #fbShare value=\"facebook_share\" formControlName=\"facebook_share\">Share</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #fbComment value=\"facebook_comment\" formControlName=\"facebook_comment\">Comment</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #fbPost value=\"facebook_post\" formControlName=\"facebook_post\">Post</mat-checkbox>\r\n        </section>\r\n        <section class=\"type row facebook\">\r\n          <mat-form-field *ngIf='fbLike.checked || fbShare.checked || fbComment.checked' class='col'>\r\n            <input matInput placeholder=\"Facebook Link\" type=\"url\" [required]='fbLike.checked || fbShare.checked || fbComment.checked' formControlName=\"facebook_url\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field *ngIf='fbPost.checked' class='col'>\r\n            <textarea matInput placeholder=\"Content To Post\" [required]='fbPost.checked' value='Anything About ICO' formControlName=\"fb_post_content\"></textarea>\r\n          </mat-form-field>\r\n        </section>\r\n\r\n\r\n        <label for=\"twitter\" class='twitter'>Twitter\r\n          <i class=\"fab fa-twitter\"></i>\r\n        </label>\r\n        <section class=\"type row twitter\">\r\n          <mat-checkbox class=\"example-margin col\" #twitterFollow value=\"twitter_follow\" formControlName=\"twitter_url\">Follow</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #twitterRetweet value=\"twitter_retweet\" formControlName=\"twitter_tweet\">Retweet</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #twitterTweet value=\"twitter_tweet\" formControlName=\"twitter_retweet\">Tweet</mat-checkbox>\r\n        </section>\r\n        <section class=\"type row twitter\">\r\n          <mat-form-field *ngIf='twitterFollow.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='twitterFollow.checked' formControlName=\"twitter_url\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='twitterRetweet.checked' class='col'>\r\n            <input matInput placeholder=\"Post Url\" type=\"url\" [required]='twitterRetweet.checked' value='Pinned Tweet' formControlName=\"twitter_post\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='twitterTweet.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='twitterTweet.checked' value='Anything About ICO' formControlName=\"twitter_post_content\">\r\n          </mat-form-field>\r\n        </section>\r\n\r\n\r\n        <label for=\"misc\" class='misc'>Misc\r\n          <i class=\"fab fa-codepen\"></i>\r\n        </label>\r\n        <section class=\"misc row\">\r\n          <mat-checkbox class=\"example-margin col\" #reddit value=\"reddit\" formControlName=\"reddit\">Reddit</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #medium value=\"medium\" formControlName=\"medium\">Medium</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #youtube value=\"youtube\" formControlName=\"youtube\">Youtube</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #btctalk value=\"bitcointalk\" formControlName=\"bitcointalk\">Bitcoin Talk</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin col\" #steemit value=\"Steemit\" formControlName=\"steemit\">Steemit</mat-checkbox>\r\n        </section>\r\n        <section class=\"misc row\">\r\n          <mat-form-field *ngIf='reddit.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='reddit.checked' formControlName=\"reddit_link\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='medium.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='medium.checked' formControlName=\"medium_link\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='youtube.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='youtube.checked' formControlName=\"youtube_link\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='btctalk.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='btctalk.checked' formControlName=\"bitcointalk_link\">\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='steemit.checked' class='col'>\r\n            <input matInput placeholder=\"Page Url\" type=\"url\" [required]='reddit.checked' formControlName=\"steemit_link\">\r\n          </mat-form-field>\r\n        </section>\r\n\r\n      </form>\r\n\r\n      <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep();submit()\">Submit</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n  </mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirdropAddPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AirdropAddPopUpComponent = /** @class */ (function () {
    function AirdropAddPopUpComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.step = 0;
        this.steps_html = '';
        this.typeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            airdrop: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            reffer: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            contest: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            bounty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.detailsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            symbol: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            difficulty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            ref_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            icon_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            website: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            endDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            decription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.requirementsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            kyc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            eth_wallet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            telegram: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            telegram_group_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            telegram_channel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_share: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_post: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_tweet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_retweet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            bitcointalk: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            bitcointalk_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            youtube: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            youtube_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            reddit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            reddit_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            steemit_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            steemit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            medium: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            medium_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
        });
        this.formArray = [this.detailsForm, this.typeForm, this.requirementsForm];
        this.airdropData = {};
        if (data) {
            this.detailsForm.patchValue(data);
            this.steps_html = data.steps_html;
            if (data.requirements) {
                this.requirementsForm.patchValue(data.requirements);
                this.requirementsForm.patchValue(data);
            }
            if (data.type) {
                this.typeForm.patchValue(data.type);
            }
        }
    }
    AirdropAddPopUpComponent.prototype.ngOnInit = function () {
    };
    AirdropAddPopUpComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AirdropAddPopUpComponent.prototype.nextStep = function () {
        if (this.formArray[this.step].valid) {
            this.step++;
        }
        else {
            this.displayError('All fields must be properly filled');
        }
    };
    AirdropAddPopUpComponent.prototype.prevStep = function () {
        this.step--;
    };
    AirdropAddPopUpComponent.prototype.displayError = function (message) {
        var that = this;
        this.error = message;
        setTimeout(function () {
            that.error = null;
        }, 5000);
    };
    AirdropAddPopUpComponent.prototype.submit = function () {
        var airdrop_object = JSON.parse(JSON.stringify(this.detailsForm.value));
        airdrop_object['type'] = this.typeForm.value;
        airdrop_object['requirements'] = this.requirementsForm.value;
        this.dialogRef.close(airdrop_object);
    };
    AirdropAddPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-airdrop-add-pop-up',
            template: __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], AirdropAddPopUpComponent);
    return AirdropAddPopUpComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n  margin-bottom:10px;\r\n  background: #00587a;\r\n\tcolor: white;\r\n}\r\n.publish-button {\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span>Airdrop Portfolio</span>\n    <span></span>\n    <button routerLink='/publish' class='publish-button' mat-button>Publish Airdrop &nbsp;&nbsp;&nbsp;<mat-icon>send</mat-icon></button>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_item_list_item_component__ = __webpack_require__("./src/app/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__airdrop_add_pop_up_airdrop_add_pop_up_component__ = __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__publish_publish_component__ = __webpack_require__("./src/app/publish/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__publish_list_item_publish_list_item_component__ = __webpack_require__("./src/app/publish-list-item/publish-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_component_home_component_component__ = __webpack_require__("./src/app/home-component/home-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_import_material_import_module__ = __webpack_require__("./src/app/material-import/material-import.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__ = __webpack_require__("./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_9__publish_publish_component__["a" /* PublishComponent */],
                __WEBPACK_IMPORTED_MODULE_10__publish_list_item_publish_list_item_component__["a" /* PublishListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_component_home_component_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__material_import_material_import_module__["a" /* MaterialImportModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_component_home_component_component__["a" /* HomeComponent */] },
                    { path: 'publish', component: __WEBPACK_IMPORTED_MODULE_9__publish_publish_component__["a" /* PublishComponent */] }
                ])
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */], __WEBPACK_IMPORTED_MODULE_5__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{data}}\n</p>\n<div>\n  <span>\n      <button mat-raised-button (click)='close(false)' style=\"background-color: #76FF03\">NO</button>\n  </span>\n  <span>\n      <button mat-raised-button (click)='close(true)' style=\"background-color: #FF3D00\">YES</button>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.close = function (data) {
        this.dialogRef.close(data);
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/firebase-database.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_firebase_config__ = __webpack_require__("./src/environments/firebase.config.ts");


var FirebaseDatabase = /** @class */ (function () {
    function FirebaseDatabase() {
    }
    FirebaseDatabase.prototype.getInstance = function () {
        if (FirebaseDatabase.databaseIntance == null) {
            FirebaseDatabase.databaseIntance = __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_1__environments_firebase_config__["a" /* firebaseConfig */]).database();
        }
        return FirebaseDatabase.databaseIntance;
    };
    FirebaseDatabase.databaseIntance = null;
    return FirebaseDatabase;
}());



/***/ }),

/***/ "./src/app/home-component/home-component.component.css":
/***/ (function(module, exports) {

module.exports = "app-list-item{\r\n  margin-bottom: 5px;\r\n}\r\nmat-form-field{\r\n  margin: 5px;\r\n}\r\n.parent {\r\n  position: relative;\r\n}\r\n.child {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-component/home-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container' style='display:grid' *ngIf='tokens'>\n  <app-list-item class=\"list-item\" *ngFor='let token of tokens' [token]='token'></app-list-item>\n</div>\n<div class='parent'*ngIf='!tokens'>\n    <mat-spinner class=\"child\" color='warn'></mat-spinner>\n</div>\n<button mat-fab color=\"primary\" style='position: fixed;bottom: 2px;right: 2px;font-size: xx-large;' (click)=\"addAirdrop()\">+</button>\n"

/***/ }),

/***/ "./src/app/home-component/home-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__airdrop_add_pop_up_airdrop_add_pop_up_component__ = __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_database__ = __webpack_require__("./src/app/firebase-database.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.tokens = null;
        this.airdrops = {};
        this.database = new __WEBPACK_IMPORTED_MODULE_3__firebase_database__["a" /* FirebaseDatabase */]().getInstance();
        var airdropsRef = this.database.ref('toPublish/');
        airdropsRef.on('value', function (result) {
            _this.airdrops = result.val();
            _this.tokens = [];
            for (var key in _this.airdrops) {
                if (_this.airdrops.hasOwnProperty(key)) {
                    var element = _this.airdrops[key];
                    if (element.published) {
                        console.log(element);
                        _this.tokens.push(element);
                        _this.tokens.reverse();
                    }
                }
            }
        });
    }
    HomeComponent.prototype.addAirdrop = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */], {
            width: '50%',
            maxWidth: '99vw',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var update = {};
            var newPostkey = _this.randomString(5, '#aA');
            update[newPostkey] = JSON.parse(JSON.stringify(result));
            update[newPostkey]['id'] = newPostkey;
            update[newPostkey]['addedOn'] = new Date().toDateString();
            _this.database.ref('toPublish/').update(update);
            _this.displaySuccess('Successfully Added');
        });
    };
    HomeComponent.prototype.randomString = function (length, chars) {
        var mask = '';
        if (chars.indexOf('a') > -1) {
            mask += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (chars.indexOf('A') > -1) {
            mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (chars.indexOf('#') > -1) {
            mask += '0123456789';
        }
        if (chars.indexOf('!') > -1) {
            mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        }
        var result = '';
        for (var i = length; i > 0; --i) {
            result += mask[Math.floor(Math.random() * mask.length)];
        }
        return result;
    };
    HomeComponent.prototype.displaySuccess = function (message) {
        var that = this;
        this.success = message;
        setTimeout(function () {
            that.success = null;
        }, 5000);
    };
    HomeComponent.prototype.displayError = function (message) {
        var that = this;
        this.error = message;
        setTimeout(function () {
            that.error = null;
        }, 5000);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-component',
            template: __webpack_require__("./src/app/home-component/home-component.component.html"),
            styles: [__webpack_require__("./src/app/home-component/home-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-item/list-item.component.css":
/***/ (function(module, exports) {

module.exports = ".airdrop-name{\r\n\r\n}\r\n.airdrop-symbol{\r\n  overflow: hidden;\r\n}\r\n.small {\r\n  font-size: .6em\r\n}\r\n.medium{\r\n  font-size: 1em;\r\n}\r\n.big{\r\n  font-size: 1.4em;\r\n}\r\n.margin-small {\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n.crop {\r\n  width: auto;\r\n  overflow: hidden;\r\n}\r\n.main{\r\n  color:black;\r\n}\r\n.sub{\r\n  color:gray;\r\n}\r\n.part{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n.rows{\r\n  margin-top: 5px;\r\n}\r\n/* Ribbon*/\r\n.ribbon {\r\n  position: absolute;\r\n  left: -5px; top: -5px;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  width: 75px; height: 75px;\r\n  text-align: right;\r\n}\r\n.ribbon span {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  color: #FFF;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n  width: 100px;\r\n  display: block;\r\n  -webkit-box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n          box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n  position: absolute;\r\n  top: 19px; left: -21px;\r\n}\r\n.ribbon span::before {\r\n  content: \"\";\r\n  position: absolute; left: 0px; top: 100%;\r\n  z-index: -1;\r\n\r\n  border-right: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n.ribbon span::after {\r\n  content: \"\";\r\n  position: absolute; right: 0px; top: 100%;\r\n  z-index: -1;\r\n  border-left: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n/*Green*/\r\n.ribbon-green span {\r\n  background: #79A70A;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#9BC90D), to(#79A70A));\r\n  background: linear-gradient(#9BC90D 0%, #79A70A 100%);\r\n}\r\n.ribbon-green span::before {\r\n  border-left: 3px solid #79A70A;\r\n  border-top: 3px solid #79A70A;\r\n}\r\n.ribbon-green span::after{\r\n  border-right: 3px solid #79A70A;\r\n  border-top: 3px solid #79A70A;\r\n}\r\n/*Yellow*/\r\n.ribbon-yellow span {\r\n  background: #FFEA00;\r\n  color:black;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFFF8D), to(#FFEA00));\r\n  background: linear-gradient(#FFFF8D 0%, #FFEA00 100%);\r\n}\r\n.ribbon-yellow span::before {\r\n  border-left: 3px solid #FFEA00;\r\n  border-top: 3px solid #FFEA00;\r\n}\r\n.ribbon-yellow span::after{\r\n  border-right: 3px solid #FFEA00;\r\n  border-top: 3px solid #FFEA00;\r\n}\r\n/*orrange*/\r\n.ribbon-orange span {\r\n\r\n  background: #FF6F00;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFCA28), to(#FF6F00));\r\n  background: linear-gradient(#FFCA28 0%, #FF6F00 100%);\r\n}\r\n.ribbon-orange span::before {\r\n  border-left: 3px solid #FF6F00;\r\n  border-top: 3px solid #FF6F00;\r\n}\r\n.ribbon-orange span::after{\r\n  border-right: 3px solid #FF6F00;\r\n  border-top: 3px solid #FF6F00;\r\n}\r\n/* red */\r\n.ribbon-red span {\r\n  color:white;\r\n  background: #D84315;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FF5722), to(#D84315));\r\n  background: linear-gradient(#FF5722 0%, #D84315 100%);\r\n}\r\n.ribbon-red span::before {\r\n  border-left: 3px solid #D84315;\r\n  border-top: 3px solid #D84315;\r\n}\r\n.ribbon-red span::after{\r\n  border-right: 3px solid #D84315;\r\n  border-top: 3px solid #D84315;\r\n}\r\n.airdrop-card{\r\n  background-color: rgba(57,62,70,1);\r\n  color: #EEEEEE !important;\r\n}\r\n.btn-outline-secondary:hover {\r\n  background: #FD7013 !important;\r\n  font-weight: bolder;\r\n  color: white;\r\n  font-weight: 900;\r\n}\r\n"

/***/ }),

/***/ "./src/app/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = " <mat-card class='airdrop-card' *ngIf='token.name'>\r\n    <div class='ribbon ribbon-green' *ngIf='token.difficulty == 1'><span>Easy</span></div>\r\n    <div class='ribbon ribbon-yellow' *ngIf='token.difficulty == 2'><span>Medium</span></div>\r\n    <div class='ribbon ribbon-orange' *ngIf='token.difficulty == 3'><span>Hard</span></div>\r\n    <div class='ribbon ribbon-red' *ngIf='token.difficulty > 3'><span>Insane</span></div>\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row flex-items-xs-middle align-items-center justify-content-md-center\">\r\n            <mat-card class=\"col-md-2 text-xs-center p-a-0\">\r\n                <div class=\" crop p-y-3\">\r\n                    <img class='airdrop-logo' [src]='imageUrl' style=\"height:75px\">\r\n                </div>\r\n            </mat-card>\r\n            <div class=\"content col-md-6 p-y-2\">\r\n                <h3 class=\"card-title\">{{token.name |uppercase}}</h3>\r\n                <h4>{{token.symbol | uppercase}}</h4>\r\n                <p class=\"card-text\" *ngIf='token.endDate' [innerText]='getTime()' ></p>\r\n                <a href=\"{{token.ref_link}}\" class=\"btn btn-outline-secondary btn-block\">Referral</a>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__("./node_modules/url/url.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(http) {
        this.http = http;
        this.imageUrl = 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmRuEJdjx6sQ2mEhCp5kXpe7xELfu3MHEmcgz8F5Z6dt7c';
    }
    ListItemComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    ListItemComponent.prototype.getImage = function () {
        if (this.token['icon_url']) {
            var imageFormats = ['.jpeg', '.jpg', '.png', '.svg', '.ico', '.bmp', '.gif'];
            var airdrop_url = this.token['icon_url'];
            var isImageUrl = false;
            for (var index = 0; index < imageFormats.length; index++) {
                var element = imageFormats[index];
                if (airdrop_url.indexOf(element) !== -1) {
                    isImageUrl = true;
                    break;
                }
            }
            if (isImageUrl) {
                this.imageUrl = airdrop_url;
            }
            else {
                this.getFaviconUrl(airdrop_url);
            }
        }
    };
    ListItemComponent.prototype.getFaviconUrl = function (uri) {
        var _this = this;
        var url_object = __WEBPACK_IMPORTED_MODULE_1_url__["parse"](uri);
        var fav_url = 'http://' + url_object.host + '/favicon.ico';
        this.http.get(fav_url)
            .subscribe(function (response) {
            if (!(response.status > 400)) {
                _this.imageUrl = fav_url;
            }
        });
    };
    ListItemComponent.prototype.getTime = function () {
        if (!this.token.endDate) {
            return null;
        }
        var now = new Date();
        var then = new Date(this.token.endDate);
        var outString = '';
        var diff = (then - now) / 1000;
        if (diff < 1) {
            return 'Event Over';
        }
        var days_remaining = Math.ceil(diff / 60 / 60 / 24);
        diff = -diff + (days_remaining * 60 * 60 * 24);
        var hrs_remaining = Math.ceil(diff / 60 / 60);
        diff = -diff + (hrs_remaining * 60 * 60);
        var mins_remaining = Math.ceil(diff / 60);
        outString = days_remaining + " Days : " + hrs_remaining + " Hrs : " + mins_remaining + " mins Remining";
        return outString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "token", void 0);
    ListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-item',
            template: __webpack_require__("./src/app/list-item/list-item.component.html"),
            styles: [__webpack_require__("./src/app/list-item/list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/material-import/material-import.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialImportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// tslint:disable-next-line:max-line-length

var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSlideToggleModule */]
];
var MaterialImportModule = /** @class */ (function () {
    function MaterialImportModule() {
    }
    MaterialImportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            declarations: [],
            exports: modules
        })
    ], MaterialImportModule);
    return MaterialImportModule;
}());



/***/ }),

/***/ "./src/app/publish-list-item/publish-list-item.component.css":
/***/ (function(module, exports) {

module.exports = ".action-btn {\r\n  position: absolute;\r\n}\r\n.delete {\r\n  top:2px;\r\n  right: 2px;\r\n}\r\n.edit {\r\n  bottom: 2px;\r\n  right: 2px;\r\n  color: green;\r\n}\r\n.overlay{\r\nbackground-color: gray;\r\nwidth: 100%;\r\nheight: 100%;\r\nposition: absolute;\r\nz-index: 1;\r\ntop: 0px;\r\nbottom: 0px;\r\nleft: 0px;\r\n}\r\n/*Animations*/\r\n.puffOut {\r\n  -webkit-animation-name: swashOut;\r\n          animation-name: swashOut;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n@-webkit-keyframes swashOut {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(1, 1);\r\n            transform: scale(1, 1);\r\n  }\r\n\r\n  80% {\r\n    opacity: 1;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(0.9, 0.9);\r\n            transform: scale(0.9, 0.9);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(0, 0);\r\n            transform: scale(0, 0);\r\n  }\r\n}\r\n@keyframes swashOut {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(1, 1);\r\n            transform: scale(1, 1);\r\n  }\r\n\r\n  80% {\r\n    opacity: 1;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(0.9, 0.9);\r\n            transform: scale(0.9, 0.9);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    -webkit-transform: scale(0, 0);\r\n            transform: scale(0, 0);\r\n  }\r\n}\r\n.message {\r\n  position: absolute;\r\n  bottom: 2px;\r\n  right: 2px;\r\n  background-color: #43A047;\r\n  padding: 5px;\r\n  border-radius: 9%;\r\n  color: white;\r\n}\r\n.ribbon {\r\n  position: absolute;\r\n  left: -5px; top: -5px;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  width: 75px; height: 75px;\r\n  text-align: right;\r\n}\r\n.ribbon span {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  color: #FFF;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n  width: 100px;\r\n  display: block;\r\n  -webkit-box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n          box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n  position: absolute;\r\n  top: 19px; left: -21px;\r\n}\r\n.ribbon span::before {\r\n  content: \"\";\r\n  position: absolute; left: 0px; top: 100%;\r\n  z-index: -1;\r\n\r\n  border-right: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n.ribbon span::after {\r\n  content: \"\";\r\n  position: absolute; right: 0px; top: 100%;\r\n  z-index: -1;\r\n  border-left: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n.ribbon-red span {\r\n  color:white;\r\n  background: #D84315;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FF5722), to(#D84315));\r\n  background: linear-gradient(#FF5722 0%, #D84315 100%);\r\n}\r\n.ribbon-red span::before {\r\n  border-left: 3px solid #D84315;\r\n  border-top: 3px solid #D84315;\r\n}\r\n.ribbon-red span::after{\r\n  border-right: 3px solid #D84315;\r\n  border-top: 3px solid #D84315;\r\n}\r\n"

/***/ }),

/***/ "./src/app/publish-list-item/publish-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "    <mat-card style='max-width:95%;width:95%;' [style.minWidth.px]='getMinWidth()' [ngClass]='{\"puffOut\" :puffOut}'>\n\n        <div class='ribbon ribbon-red' *ngIf='token.published'><span>Published</span></div>\n        <div *ngIf='token.expired' class=\"expired\" style=\"font-size: 8em;background: gray;opacity: .5;width: 100%;height: 100%;position: absolute;z-index: 3;top: 0px;left: 0px;color: red;\">\n          Expired\n        </div>\n        <div class='overlay'*ngIf='removed'></div>\n        <button (click)='remove()' class='action-btn delete' mat-icon-button>\n            <mat-icon color='warn' >delete</mat-icon>\n        </button>\n\n        <button *ngIf='token.ref_url' (click)='editData()' class='action-btn edit' mat-icon-button>\n            <mat-icon  >mode_edit</mat-icon>\n        </button>\n\n        <div class='message' *ngIf='message'>{{message}}</div>\n\n        <mat-slide-toggle color='warn' [checked]='slidervalue' (change)='publish_toggle($event)' style=\"position: absolute;top: 45%;right: 5px;\"></mat-slide-toggle>\n\n        <div class=\"thumbnail\">\n      <div class=\"caption\">\n        <h3>{{token.name}}</h3>\n        <p class=\"flex-text text-muted\">&nbsp;{{token.symbol}} </p>\n\n        <p *ngIf='!registeredClicked && !registered && !token.ref_url'><a (click)='registeredClicked = true'  mat-raised-button color=\"warn\" target='_blank' href=\"{{token.reg_url}}\">Register</a></p>\n        <p *ngIf='registeredClicked && !registered && !token.ref_url'>\n            <mat-form-field  class=\"example-full-width\">\n                <input matInput placeholder=\"referral\" #referralInput type='url'>\n              </mat-form-field>\n              <button mat-button (click)='addrefferal(referralInput.value)' color=\"primary\">Save</button>\n              <button mat-icon-button color='warn' (click)='registeredClicked = false' ><mat-icon  >cancel</mat-icon></button>\n        </p>\n\n        <p *ngIf='token.ref_url || registered'>Successfully Registered on {{token.ref_addedon | date}}</p>\n\n      </div>\n      <!-- /.caption -->\n    </div>\n    <!-- /.thumbnail -->\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/publish-list-item/publish-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__airdrop_add_pop_up_airdrop_add_pop_up_component__ = __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublishListItemComponent = /** @class */ (function () {
    function PublishListItemComponent(dialog) {
        this.dialog = dialog;
        this.puffOut = false;
        this.removed = false;
        this.registeredClicked = false;
        this.slidervalue = false;
        this.registered = false;
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.published = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.edited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.referralAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PublishListItemComponent.prototype.ngOnInit = function () {
        if (this.token.published) {
            this.slidervalue = true;
        }
        else {
            this.slidervalue = false;
        }
    };
    PublishListItemComponent.prototype.remove = function () {
        var _this = this;
        this.makeConfirmationialog("You really want to remove " + this.token.name + " from list", function (result) {
            if (result) {
                _this.puffOut = true;
                setTimeout(function () {
                    _this.deleted.emit(_this.token.id);
                    _this.removed = true;
                }, 1000);
            }
        });
    };
    PublishListItemComponent.prototype.editData = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */], {
            width: '95%',
            maxHeight: '75%',
            height: '70%',
            maxWidth: '95%',
            data: this.token
        });
        dialogRef.afterClosed()
            .subscribe(function (airdropObject) {
            if (airdropObject != null) {
                _this.edited.emit({ object: airdropObject, id: _this.token.id });
                _this.show_message('Edited');
            }
        });
    };
    PublishListItemComponent.prototype.publish_toggle = function (event) {
        var _this = this;
        this.slidervalue = event.checked;
        var action = event.checked ? 'Publish' : 'Unpublish';
        this.makeConfirmationialog("You really want to " + action + " " + this.token.name, function (confirmation) {
            if (confirmation) {
                if (_this.token.ref_url != null && _this.token.ref_url !== '') {
                    _this.published.emit({ status: event.checked, id: _this.token.id });
                }
                else {
                    _this.show_message('Please add referal link before publishing');
                    _this.slidervalue = !_this.slidervalue;
                }
            }
            else {
                _this.slidervalue = !_this.slidervalue;
            }
        });
    };
    PublishListItemComponent.prototype.makeConfirmationialog = function (message, callback) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: '300px',
            data: message
        });
        dialogRef.afterClosed().subscribe(callback);
    };
    PublishListItemComponent.prototype.show_message = function (message) {
        var that = this;
        this.message = message;
        setTimeout(function () {
            that.message = null;
        }, 3000);
    };
    PublishListItemComponent.prototype.addrefferal = function (value) {
        if (value) {
            this.token['ref_url'] = value;
            this.referralAdded.emit({ ref_url: value, id: this.token.id });
            this.registered = true;
        }
    };
    PublishListItemComponent.prototype.getMinWidth = function () {
        if (window.innerWidth < 500) {
            return window.innerWidth * .9;
        }
        return 450;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PublishListItemComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PublishListItemComponent.prototype, "deleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PublishListItemComponent.prototype, "published", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PublishListItemComponent.prototype, "edited", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PublishListItemComponent.prototype, "referralAdded", void 0);
    PublishListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publish-list-item',
            template: __webpack_require__("./src/app/publish-list-item/publish-list-item.component.html"),
            styles: [__webpack_require__("./src/app/publish-list-item/publish-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], PublishListItemComponent);
    return PublishListItemComponent;
}());



/***/ }),

/***/ "./src/app/publish/publish.component.css":
/***/ (function(module, exports) {

module.exports = ".parent {\r\n  position: relative;\r\n}\r\n.child {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n.small-margin {\r\n  margin:20px;\r\n}\r\n.airdrop-item {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.container-fluid { max-width: 1200px; }\r\n"

/***/ }),

/***/ "./src/app/publish/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf='airdrops_to_publish.length < 1' mode=\"indeterminate\"></mat-progress-bar>\n<mat-grid-list [cols]='cols' rowHeight=\"{{getHeight()}}\">\n  <mat-grid-tile colspan='1' *ngFor='let airdrop of airdrops_to_publish'>\n      <app-publish-list-item  (edited)='update_edited($event)' (referralAdded)='add_referral($event)'  [token]='airdrop' (published)='changePublish($event)' (deleted)='removeFromFirebase($event)'></app-publish-list-item>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "./src/app/publish/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_database__ = __webpack_require__("./src/app/firebase-database.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublishComponent = /** @class */ (function () {
    function PublishComponent() {
        this.airdrops_to_publish = [];
        this.airdrop_objects = {};
        this.cols = 1;
        this.database = new __WEBPACK_IMPORTED_MODULE_1__firebase_database__["a" /* FirebaseDatabase */]().getInstance();
        this.getCols();
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.update_publised_list();
    };
    PublishComponent.prototype.getCols = function () {
        var that = this;
        setInterval(function () {
            if (that.airdrops_to_publish.length > 1) {
                that.cols = Math.ceil((window.innerWidth - 100) / 490);
            }
        }, 1000);
    };
    PublishComponent.prototype.removeFromFirebase = function (id) {
        var object = {};
        object[id] = null;
        this.database.ref('toPublish/').update(object);
    };
    PublishComponent.prototype.changePublish = function (object) {
        var update = { published: object.status };
        this.database.ref('toPublish/' + object.id + '/').update(update);
    };
    PublishComponent.prototype.update_edited = function (object) {
        var id = object.id;
        var update = object.object;
        update[id] = id;
        this.database.ref('toPublish/' + id + '/').update(update);
    };
    PublishComponent.prototype.add_referral = function (object) {
        var refferal = object.ref_url;
        var update = { ref_url: refferal, ref_addedon: new Date() };
        this.database.ref('toPublish/' + object.id + '/').update(update);
    };
    PublishComponent.prototype.update_publised_list = function () {
        var _this = this;
        var publishRef = this.database.ref('toPublish/');
        publishRef.on('value', function (result) {
            _this.airdrops_to_publish = [];
            _this.airdrop_objects = result.val();
            for (var key in _this.airdrop_objects) {
                if (_this.airdrop_objects.hasOwnProperty(key)) {
                    var element = _this.airdrop_objects[key];
                    _this.airdrops_to_publish.push(element);
                }
            }
            console.log(_this.airdrops_to_publish);
        });
    };
    PublishComponent.prototype.getHeight = function () {
        if (window.innerWidth <= 450) {
            return 200;
        }
        else {
            return 300;
        }
    };
    PublishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publish',
            template: __webpack_require__("./src/app/publish/publish.component.html"),
            styles: [__webpack_require__("./src/app/publish/publish.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublishComponent);
    return PublishComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyB5xKtuEpyNuQ6Z0moK22zPgR7a8Kc9Qy0',
    authDomain: 'airfolio2-bead4.firebaseapp.com',
    databaseURL: 'https://airfolio2-bead4.firebaseio.com',
    projectId: 'airfolio2-bead4',
    storageBucket: 'airfolio2-bead4.appspot.com',
    messagingSenderId: '4773109964'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map