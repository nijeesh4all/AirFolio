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

module.exports = ".regular{\r\n  border: yellowgreen;\r\n}\r\n.error{\r\n  border-bottom-color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\r\n<div class=\"alert alert-success\" *ngIf=\"success\">{{success}}</div>\r\n\r\n<div style=\"background:wheat\">\r\n    <mat-accordion class=\"example-headers-align\">\r\n      <form [formGroup]='detailsForm'>\r\n\r\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Details\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Info on Airdrop\r\n            <i class=\"material-icons\">account_balance_wallet</i>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Airdrop Name\" required formControlName=\"name\" value=''>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Token Symbol\" formControlName=\"symbol\" value=''>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Difficulty\" formControlName=\"difficulty\" required>\r\n            <mat-option value=\"1\" style=\"background-color: green ;color:indigo\"> Easy </mat-option>\r\n            <mat-option value=\"2\" style=\"background-color: yellow;color:indigo\"> Medium </mat-option>\r\n            <mat-option value=\"3\" style=\"background-color: orange;color:indigo\"> Hard </mat-option>\r\n            <mat-option value=\"4\" style=\"background-color: red;color:indigo\"> Insane </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Referral link\" type=\"url\" required formControlName=\"ref_link\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Airdrop LOGO Url\" type=\"url\" formControlName=\"icon_url\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Website\" type=\"url\" formControlName=\"website\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Estimated Value in USD\" formControlName=\"value\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" placeholder=\"Ending Date Time\" formControlName=\"endDate\">\r\n          <owl-date-time #dt1></owl-date-time>\r\n        </mat-form-field>\r\n\r\n        <mat-action-row>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n    </form>\r\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Type\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Event Type\r\n            <i class=\"material-icons\">flight_takeoff</i>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n      <form [formGroup]=\"typeForm\">\r\n        <section class=\"type\">\r\n            <mat-checkbox class=\"example-margin\" value=\"airdrop\" formControlName=\"airdrop\">Airdrop</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" value=\"reffer\" formControlName=\"reffer\">Reffer</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" value=\"contest\" formControlName=\"contest\">Contest</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" value=\"bounty\" formControlName=\"bounty\">Bounty</mat-checkbox>\r\n\r\n        </section>\r\n    </form>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Requirements\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            To DO\r\n            <mat-icon>list</mat-icon>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <form [formGroup]='requirementsForm'>\r\n        <label for=\"general\">General</label>\r\n        <section class=\"type\">\r\n          <mat-checkbox class=\"example-margin\" value=\"kyc\" formControlName=\"kyc\">KYC</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"eth\" formControlName=\"eth_wallet\">ETH address</mat-checkbox>\r\n        </section>\r\n\r\n        <label for=\"telegram\">Telegram <i class=\"fab fa-telegram\"></i></label>\r\n        <section class=\"type\">\r\n          <mat-checkbox class=\"example-margin\" value=\"telegram_group\" formControlName=\"telegram_group\">Telegram Group</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"telegram_channel\" formControlName=\"telegram_channel\">Telegram Channel</mat-checkbox>\r\n        </section>\r\n\r\n        <label for=\"facebook\">Facebook <i class=\"fab fa-facebook\"></i></label>\r\n        <section class=\"type\">\r\n          <mat-checkbox class=\"example-margin\" value=\"facebook_like\" formControlName=\"facebook_like\"> Facebook Like</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"facebook_share\" formControlName=\"facebook_share\">Facebook Share</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"facebook_comment\" formControlName=\"facebook_comment\">Facebook Comment</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"facebook_post\" formControlName=\"facebook_post\">Facebook Post</mat-checkbox>\r\n        </section>\r\n\r\n        <label for=\"twitter\">Twitter <i class=\"fab fa-twitter\"></i></label>\r\n        <section class=\"type\">\r\n          <mat-checkbox class=\"example-margin\" value=\"telegram_group\" formControlName=\"twitter_follow\">Twitter Follow</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"telegram_channel\" formControlName=\"twitter_tweet\">Twitter Retweet</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"telegram_channel\" formControlName=\"twitter_retweet\">Twitter Tweet</mat-checkbox>\r\n        </section>\r\n\r\n        <label for=\"misc\">Misc</label>\r\n        <section class=\"misc\">\r\n          <mat-checkbox class=\"example-margin\" value=\"reddit\" formControlName=\"reddit\">Reddit</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"medium\" formControlName=\"medium\">Medium</mat-checkbox>\r\n          <mat-checkbox class=\"example-margin\" value=\"youtube\" formControlName=\"youtube\">Youtube</mat-checkbox>\r\n        </section>\r\n      </form>\r\n\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep();submit()\">Submit</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n\r\n    </mat-accordion>\r\n  </div>\r\n"

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
            ref_link: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            icon_url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            website: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            endDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
        });
        this.requirementsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            kyc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            eth_wallet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            telegram_group: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            telegram_channel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_like: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_share: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            facebook_post: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_follow: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_tweet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            twitter_retweet: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            reddit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            medium: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            youtube: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.formArray = [this.detailsForm, this.typeForm, this.requirementsForm];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-airdrop-add-pop-up',
            template: __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], AirdropAddPopUpComponent);
    return AirdropAddPopUpComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n  margin-bottom:10px;\r\n  background: #00587a;\r\n\tcolor: white;\r\n}\r\napp-list-item{\r\n  margin-bottom: 5px;\r\n}\r\nmat-form-field{\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span>Airdrop Portfolio</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div class='container' style='display:grid'>\n  <app-list-item class=\"list-item\" *ngFor='let token of tokens' [token]='token'></app-list-item>\n</div>\n<button mat-fab color=\"primary\" style='position: fixed;bottom: 2px;right: 2px;font-size: xx-large;' (click)=\"addAirdrop()\"\n  addn>+</button>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httprequest_service__ = __webpack_require__("./src/app/httprequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__airdrop_add_pop_up_airdrop_add_pop_up_component__ = __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function AppComponent(http, dialog) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.tokens = [];
        this.airdrops = {};
        this.config = {
            apiKey: 'AIzaSyDfeuS7jrsMShlFu05Ezk8crWicPEy6cIE',
            authDomain: 'https://airfolio-app.firebaseio.com/',
            databaseURL: 'https://airfolio-app.firebaseio.com/',
        };
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](this.config);
        this.database = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        var airdropsRef = this.database.ref('airdrops/');
        airdropsRef.on('value', function (result) {
            _this.airdrops = result.val();
            _this.tokens = [];
            for (var key in _this.airdrops) {
                if (_this.airdrops.hasOwnProperty(key)) {
                    var element = _this.airdrops[key];
                    _this.tokens.push(element);
                }
            }
        });
    }
    AppComponent.prototype.addAirdrop = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */], {
            width: '95%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var update = {};
            var newPostkey = _this.randomString(5, '#aA');
            update[newPostkey] = JSON.parse(JSON.stringify(result));
            update[newPostkey]['id'] = newPostkey;
            update['addedOn'] = new Date().toDateString();
            _this.database.ref('airdrops/').update(update);
            _this.displaySuccess('Successfully Added');
        });
    };
    AppComponent.prototype.randomString = function (length, chars) {
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
    AppComponent.prototype.displaySuccess = function (message) {
        var that = this;
        this.success = message;
        setTimeout(function () {
            that.success = null;
        }, 5000);
    };
    AppComponent.prototype.displayError = function (message) {
        var that = this;
        this.error = message;
        setTimeout(function () {
            that.error = null;
        }, 5000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httprequest_service__["a" /* HttprequestService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_item_list_item_component__ = __webpack_require__("./src/app/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__airdrop_add_pop_up_airdrop_add_pop_up_component__ = __webpack_require__("./src/app/airdrop-add-pop-up/airdrop-add-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_import_material_import_module__ = __webpack_require__("./src/app/material-import/material-import.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__httprequest_service__ = __webpack_require__("./src/app/httprequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_import_material_import_module__["a" /* MaterialImportModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__airdrop_add_pop_up_airdrop_add_pop_up_component__["a" /* AirdropAddPopUpComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__httprequest_service__["a" /* HttprequestService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/httprequest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttprequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttprequestService = /** @class */ (function () {
    function HttprequestService(http) {
        this.http = http;
    }
    HttprequestService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, data, { headers: headers });
    };
    HttprequestService.prototype.get = function (url) {
        return this.http.get(url);
    };
    HttprequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttprequestService);
    return HttprequestService;
}());



/***/ }),

/***/ "./src/app/list-item/list-item.component.css":
/***/ (function(module, exports) {

module.exports = ".airdrop-name{\r\n\r\n}\r\n.airdrop-symbol{\r\n\r\n}\r\n.small {\r\n  font-size: .6em\r\n}\r\n.medium{\r\n  font-size: 1em;\r\n}\r\n.big{\r\n  font-size: 1.4em;\r\n}\r\n.margin-small {\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n.main{\r\n  color:black;\r\n}\r\n.sub{\r\n  color:gray;\r\n}\r\n.part{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n.rows{\r\n  margin-top: 5px;\r\n}\r\n/* Ribbon*/\r\n.ribbon {\r\n  position: absolute;\r\n  left: -5px; top: -5px;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  width: 75px; height: 75px;\r\n  text-align: right;\r\n}\r\n.ribbon span {\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  color: #FFF;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n  width: 100px;\r\n  display: block;\r\n  -webkit-box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n          box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);\r\n  position: absolute;\r\n  top: 19px; left: -21px;\r\n}\r\n.ribbon span::before {\r\n  content: \"\";\r\n  position: absolute; left: 0px; top: 100%;\r\n  z-index: -1;\r\n\r\n  border-right: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n.ribbon span::after {\r\n  content: \"\";\r\n  position: absolute; right: 0px; top: 100%;\r\n  z-index: -1;\r\n  border-left: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n}\r\n/*Green*/\r\n.ribbon-green span {\r\n  background: #79A70A;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#9BC90D), to(#79A70A));\r\n  background: linear-gradient(#9BC90D 0%, #79A70A 100%);\r\n}\r\n.ribbon-green span::before {\r\n  border-left: 3px solid #79A70A;\r\n  border-top: 3px solid #79A70A;\r\n}\r\n.ribbon-green span::after{\r\n  border-right: 3px solid #79A70A;\r\n  border-top: 3px solid #79A70A;\r\n}\r\n/*Yellow*/\r\n.ribbon-yellow span {\r\n  background: #FFEA00;\r\n  color:black;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFFF8D), to(#FFEA00));\r\n  background: linear-gradient(#FFFF8D 0%, #FFEA00 100%);\r\n}\r\n.ribbon-yellow span::before {\r\n  border-left: 3px solid #FFEA00;\r\n  border-top: 3px solid #FFEA00;\r\n}\r\n.ribbon-yellow span::after{\r\n  border-right: 3px solid #FFEA00;\r\n  border-top: 3px solid #FFEA00;\r\n}\r\n/*orrange*/\r\n.ribbon-orange span {\r\n  background: #FF6F00;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFCA28), to(#FF6F00));\r\n  background: linear-gradient(#FFCA28 0%, #FF6F00 100%);\r\n}\r\n.ribbon-orange span::before {\r\n  border-left: 3px solid #FF6F00;\r\n  border-top: 3px solid #FF6F00;\r\n}\r\n.ribbon-orange span::after{\r\n  border-right: 3px solid #FF6F00;\r\n  border-top: 3px solid #FF6F00;\r\n}\r\n"

/***/ }),

/***/ "./src/app/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\" style=\"height:200px\">\r\n  <div class='ribbon ribbon-green' *ngIf='token.difficulty == 1'><span>Easy</span></div>\r\n  <div class='ribbon ribbon-yellow' *ngIf='token.difficulty == 2'><span>Medium</span></div>\r\n  <div class='ribbon ribbon-orange' *ngIf='token.difficulty == 3'><span>Hard</span></div>\r\n  <div class='ribbon ribbon-red' *ngIf='token.difficulty > 3'><span>Insane</span></div>\r\n  <div class=\"row\">\r\n    <mat-card class=\"col-6 part\">\r\n      <img src='{{getImage()}}' style=\"height:75px\">\r\n      <br><span class=\"small main margin-small\"> Ending on : </span><span class='airdrop-end small sub margin-small'> 23/4/5</span>\r\n    </mat-card>\r\n    <div class='col part'>\r\n      <div class=\"row rows\">\r\n          <span  class='airdrop-name main medium margin-small' >{{token.name}}</span> <span class='airdrop-symbol sub small margin-small'>{{token.symbol}}</span>\r\n      </div>\r\n      <div class=\"row rows\">\r\n          <span class=\"main meduim\">Referral : </span><span class=\"sub small\">{{token.ref_link}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function ListItemComponent() {
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.getImage = function () {
        if (this.token['icon_url']) {
            return this.token['icon_url'];
        }
        return 'https://www.residentadvisor.net/images/labels/airdrop.jpg';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "token", void 0);
    ListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list-item',
            template: __webpack_require__("./src/app/list-item/list-item.component.html"),
            styles: [__webpack_require__("./src/app/list-item/list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSelectModule */]
];
var MaterialImportModule = /** @class */ (function () {
    function MaterialImportModule() {
    }
    MaterialImportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: modules,
            declarations: [],
            exports: modules
        })
    ], MaterialImportModule);
    return MaterialImportModule;
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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