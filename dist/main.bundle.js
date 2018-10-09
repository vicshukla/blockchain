webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-block/add-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form #addBlockForm=\"ngForm\" (ngSubmit)=\"saveBlock(addBlockForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add New Block</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">hash</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputHash\" placeholder=\"Ver\" name=\"ver\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputVersion\" placeholder=\"Version\" name=\"ver\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" name=\"publicationYear\"\r\n              ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-block/add-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBlockComponent = (function () {
    function AddBlockComponent(dataService) {
        this.dataService = dataService;
    }
    AddBlockComponent.prototype.ngOnInit = function () { };
    AddBlockComponent.prototype.saveBlock = function (formValues) {
        var newBlock = formValues;
        newBlock.hash = ' ';
        console.log(newBlock);
        this.dataService.addBlock(newBlock)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    AddBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-block',
            template: __webpack_require__("../../../../../src/app/add-block/add-block.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_core_data_service__["a" /* DataService */]])
    ], AddBlockComponent);
    return AddBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-transaction/add-transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form #addTransactionForm=\"ngForm\" (ngSubmit)=\"saveTransaction(addTransactionForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Single Transaction</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" name=\"name\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" name=\"weeklyReadingGoal\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" name=\"totalMinutesRead\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-transaction/add-transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTransactionComponent = (function () {
    function AddTransactionComponent() {
    }
    AddTransactionComponent.prototype.ngOnInit = function () { };
    AddTransactionComponent.prototype.saveTransaction = function (formValues) {
        var newTransaction = formValues;
        newTransaction.hash = "";
        console.log(newTransaction);
        console.warn('Save new transaction not yet implemented.');
    };
    AddTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-transactionr',
            template: __webpack_require__("../../../../../src/app/add-transaction/add-transaction.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_add_block_add_block_component__ = __webpack_require__("../../../../../src/app/add-block/add-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_add_transaction_add_transaction_component__ = __webpack_require__("../../../../../src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_block_edit_block_component__ = __webpack_require__("../../../../../src/app/edit-block/edit-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_edit_transaction_edit_transaction_component__ = __webpack_require__("../../../../../src/app/edit-transaction/edit-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_block_resolver_service__ = __webpack_require__("../../../../../src/app/core/block-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__["a" /* DashboardComponent */], resolve: { resolvedBlocks: __WEBPACK_IMPORTED_MODULE_7__core_block_resolver_service__["a" /* BlocksResolverService */] } },
    { path: 'addblock', component: __WEBPACK_IMPORTED_MODULE_2_app_add_block_add_block_component__["a" /* AddBlockComponent */] },
    { path: 'addtransaction', component: __WEBPACK_IMPORTED_MODULE_3_app_add_transaction_add_transaction_component__["a" /* AddTransactionComponent */] },
    { path: 'edittransaction/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_edit_transaction_edit_transaction_component__["a" /* EditTransactionComponent */] },
    { path: 'editblock/:id', component: __WEBPACK_IMPORTED_MODULE_5__edit_block_edit_block_component__["a" /* EditBlockComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Blockchain</a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/addblock']\">Single Block<span class=\"sr-only\">(current)</span></a></li>\r\n                <li><a [routerLink]=\"['/addtransaction']\">Single Transaction</a></li>\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_block_add_block_component__ = __webpack_require__("../../../../../src/app/add-block/add-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_transaction_add_transaction_component__ = __webpack_require__("../../../../../src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_block_edit_block_component__ = __webpack_require__("../../../../../src/app/edit-block/edit-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_transaction_edit_transaction_component__ = __webpack_require__("../../../../../src/app/edit-transaction/edit-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__add_block_add_block_component__["a" /* AddBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_transaction_edit_transaction_component__["a" /* EditTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_block_edit_block_component__["a" /* EditBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_transaction_add_transaction_component__["a" /* AddTransactionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/add-header.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddHeaderInterceptor = (function () {
    function AddHeaderInterceptor() {
    }
    AddHeaderInterceptor.prototype.intercept = function (req, next) {
        console.log("AddHeaderInterceptor - $(req.url)");
        var jsonReq = req.clone({
            setHeaders: { 'Content-Type': 'application/json' }
        });
        return next.handle(jsonReq);
    };
    AddHeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AddHeaderInterceptor);
    return AddHeaderInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/block-chain-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockTrackerErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_blockChainError__ = __webpack_require__("../../../../../src/app/models/blockChainError.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockTrackerErrorHandlerService = (function () {
    function BlockTrackerErrorHandlerService() {
    }
    BlockTrackerErrorHandlerService.prototype.handleError = function (error) {
        var customError = new __WEBPACK_IMPORTED_MODULE_1__models_blockChainError__["a" /* BlockChainError */]();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    };
    BlockTrackerErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BlockTrackerErrorHandlerService);
    return BlockTrackerErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/block-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlocksResolverService = (function () {
    function BlocksResolverService(dataService) {
        this.dataService = dataService;
    }
    BlocksResolverService.prototype.resolve = function (route, state) {
        return this.dataService.getAllBlocks()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(err); }));
    };
    BlocksResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_core_data_service__["a" /* DataService */]])
    ], BlocksResolverService);
    return BlocksResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/core/cache.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_http_cache_service__ = __webpack_require__("../../../../../src/app/core/http-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CacheInterceptor = (function () {
    function CacheInterceptor(cacheService) {
        this.cacheService = cacheService;
    }
    CacheInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // pass along non-cacheable and invalidate cache
        if (req.method !== 'GET') {
            console.log("Invalidating cache: " + req.method + "  " + req.url);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }
        //attempt to retrieve a cached response
        var cachedResponse = this.cacheService.get(req.url);
        //return cached response
        if (cachedResponse) {
            console.log("Returning a cached response: " + cachedResponse.url);
            console.log(cachedResponse);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(cachedResponse);
        }
        //send response to server and add response to cache
        return next.handle(req)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                console.log("Adding item to cache: " + req.url);
                _this.cacheService.put(req.url, event);
            }
        }));
    };
    CacheInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_core_http_cache_service__["a" /* HttpCacheService */]])
    ], CacheInterceptor);
    return CacheInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_core_module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_chain_error_handler_service__ = __webpack_require__("../../../../../src/app/core/block-chain-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_resolver_service__ = __webpack_require__("../../../../../src/app/core/block-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_header_interceptor__ = __webpack_require__("../../../../../src/app/core/add-header.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_core_log_response_interceptor__ = __webpack_require__("../../../../../src/app/core/log-response.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_cache_service__ = __webpack_require__("../../../../../src/app/core/http-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cache_interceptor__ = __webpack_require__("../../../../../src/app/core/cache.interceptor.ts");
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












var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_5_app_core_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6__block_chain_error_handler_service__["a" /* BlockTrackerErrorHandlerService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9_app_core_log_response_interceptor__["a" /* LogResponseInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_8__add_header_interceptor__["a" /* AddHeaderInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__cache_interceptor__["a" /* CacheInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_7__block_resolver_service__["a" /* BlocksResolverService */], ,
                __WEBPACK_IMPORTED_MODULE_10__http_cache_service__["a" /* HttpCacheService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_blockChainError__ = __webpack_require__("../../../../../src/app/models/blockChainError.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.latestBlock = __WEBPACK_IMPORTED_MODULE_4_app_data__["a" /* allBlocks */][0];
    }
    DataService.prototype.setLatestBlock = function (latestBlock) {
        this.latestBlock = latestBlock;
    };
    DataService.prototype.getAllTransactions = function () {
        return __WEBPACK_IMPORTED_MODULE_4_app_data__["b" /* allTransactions */];
    };
    DataService.prototype.getTransactionByHash = function (hash) {
        return __WEBPACK_IMPORTED_MODULE_4_app_data__["b" /* allTransactions */].find(function (transaction) { return transaction.hash === hash; });
    };
    DataService.prototype.getAllBlocks = function () {
        var _this = this;
        console.log('Getting all books from the server.');
        return this.http.get('https://blockchain.info/rawblock/$block_hash')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (err) { return _this.handleHttpError(err); }));
    };
    DataService.prototype.handleHttpError = function (error) {
        var dataError = new __WEBPACK_IMPORTED_MODULE_5__models_blockChainError__["a" /* BlockChainError */]();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        ;
        dataError.friendlyMessage = 'An error occured retrieving data.';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(dataError);
    };
    DataService.prototype.getBlockByHash = function (hash) {
        return this.http.get("/" + hash, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Accept': 'application/json',
                'Authorization': 'my-token'
            })
        });
    };
    DataService.prototype.addBlock = function (newBlock) {
        return this.http.post('https://blockchain.info/rawblock/$block_hash', newBlock, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        });
    };
    DataService.prototype.updateBlock = function (updatedBlock) {
        return this.http.put("https://blockchain.info/rawblock/$block_hash/" + updatedBlock.hash, updatedBlock, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        });
    };
    DataService.prototype.deleteBlock = function (blockHash) {
        return this.http.delete("https://blockchain.info/rawblock/$block_hash/" + blockHash);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/core/http-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpCacheService = (function () {
    function HttpCacheService() {
        this.requests = {};
    }
    HttpCacheService.prototype.put = function (url, response) {
        this.requests[url] = response;
    };
    HttpCacheService.prototype.get = function (url) {
        return this.requests[url];
    };
    HttpCacheService.prototype.invalidateUrl = function (url) {
        this.requests[url] = undefined;
    };
    HttpCacheService.prototype.invalidateCache = function () {
        this.requests = {};
    };
    HttpCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "../../../../../src/app/core/log-response.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogResponseInterceptor = (function () {
    function LogResponseInterceptor() {
    }
    LogResponseInterceptor.prototype.intercept = function (req, next) {
        console.log("LogResponseInterceptor - " + req.url);
        return next.handle(req)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].Response) {
                console.log(event.body);
            }
        }));
    };
    LogResponseInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LogResponseInterceptor);
    return LogResponseInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        var timeString = new Date().toLocaleTimeString();
        console.log(message + " (" + timeString + ")");
    };
    LoggerService.prototype.error = function (message) {
        console.error("ERROR: " + message);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Single Block</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <li *ngFor='let block of allBlocks'>\r\n            <i>{{block.title}}</i>\r\n            <a [routerLink]=\"['/editblock', block.blockID]\">Edit</a>\r\n            <a (click)=\"deleteBook(block.blockID)\">Delete</a>\r\n          </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Single Transaction</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <li *ngFor='let transaction of allTransactions'>\r\n            {{transaction.hash}}\r\n            <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\r\n            <a (click)=\"deleteReader(reader.readerID)\">Delete</a>\r\n          </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Latest Block</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <i>{{latestBlock.hash}}</i> {{latestBlock.ver}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_blockChainError__ = __webpack_require__("../../../../../src/app/models/blockChainError.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(dataService, title, route) {
        this.dataService = dataService;
        this.title = title;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var resolvedData = this.route.snapshot.data['resolvedBlocks'];
        if (resolvedData instanceof __WEBPACK_IMPORTED_MODULE_4__models_blockChainError__["a" /* BlockChainError */]) {
            console.log("Dashboard component error: " + resolvedData.friendlyMessage);
        }
        else {
            this.allBlocks = resolvedData;
        }
        this.allTransactions = this.dataService.getAllTransactions();
        this.latestBlock = this.dataService.latestBlock;
        this.title.setTitle("Block Chain " + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* VERSION */].full);
    };
    DashboardComponent.prototype.deleteBlock = function (blockID) {
        var _this = this;
        this.dataService.deleteBlock(blockID)
            .subscribe(function (data) {
            var index = _this.allBlocks.findIndex(function (block) { return blockID === blockID; });
            _this.allBlocks.splice(index, 0);
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.deleteTransaction = function (transactionID) {
        console.warn("Delete transaction not yet implemented (transactionID: " + transactionID + ").");
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_core_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return allTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allBlocks; });
/* unused harmony export allLatestBlocks */
var allTransactions = [
    {
        hash: 'b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da',
        ver: 1,
        vin_sz: 1,
        vout_sz: 2,
        lock_time: 'Unavailable',
        size: 258,
        relayed_by: "64.179.201.80",
        block_height: 12200,
        tx_index: 12563028,
        inputs: [
            {
                prev_out: {
                    hash: 'a3e2bcc9a5f776112497a32b05f4b9e5b2405ed9',
                    value: 100000000,
                    tx_index: 12554260,
                    n: 2
                },
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac'
            }
        ],
        out: [
            {
                value: 98000000,
                hash: '29d6a3540acfa0a950bef2bfdc75cd51c24390fd',
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac'
            },
            {
                value: 2000000,
                hash: '17b5038a413f5c5ee288caa64cfab35a0c01914e',
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac',
            },
        ]
    }
];
var allBlocks = [
    {
        hash: '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103',
        ver: 1,
        prev_block: '00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a',
        mrkl_root: '935aa0ed2e29a4b81e0c995c39e06995ecce7ddbebb26ed32d550a72e8200bf5',
        time: 1322131230,
        bits: 437129626,
        nonce: 2964215930,
        n_tx: 22,
        size: 9195,
        block_index: 818044,
        main_chain: true,
        height: 154595,
        received_time: 1322131301,
        relayed_by: '108.60.208.156',
        tx: []
    },
];
var allLatestBlocks = [
    {
        hash: '0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a',
        time: 1325794737,
        block_index: 841841,
        height: 160778,
        txIndexes: [13950369, 13950510, 13951472]
    }
];


/***/ }),

/***/ "../../../../../src/app/edit-block/edit-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Book</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"selectedBook && selectedBook.title\" name=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" [(ngModel)]=\"selectedBook && selectedBook.author\" name=\"author\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" [(ngModel)]=\"selectedBook && selectedBook.publicationYear\" name=\"publicationYear\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"setMostPopular()\">Set As Most Popular</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-block/edit-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBlockComponent = (function () {
    function EditBlockComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    EditBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        var blockHash = (this.route.snapshot.params['name']);
        this.dataService.getBlockByHash(blockHash)
            .subscribe(function (data) { return _this.selectedBlock = data; }, function (err) { return console.log(err); });
        // this.dataService.getPreviousBlockByHash(blockHash)
        //   .subscribe(
        //     (data: PreviousBlock) => console.log(`Previous block title : ${data.blockHash} `)
        //   );
    };
    EditBlockComponent.prototype.setLatestBlock = function () {
        this.dataService.setLatestBlock(this.selectedBlock);
    };
    EditBlockComponent.prototype.saveChanges = function () {
        var _this = this;
        this.dataService.updateBlock(this.selectedBlock)
            .subscribe(function (data) { return console.log(_this.selectedBlock.hash + " updated successfully. "); }, function (err) { return console.log(err); });
    };
    EditBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-block',
            template: __webpack_require__("../../../../../src/app/edit-block/edit-block.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */]])
    ], EditBlockComponent);
    return EditBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-transaction/edit-transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Transaction</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">hash:</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Hash\" [(ngModel)]=\"selectedTransaction && selectedTransaction.name\"\r\n              name=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">ver:</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"ver\" [(ngModel)]=\"selectedTransaction && selectedTransaction.version\"\r\n              name=\"weeklyReaddingGoal\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\"></label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"vin_sz\" [(ngModel)]=\"selectedTransaction && selectedTransaction.vinSize\"\r\n              name=\"totalMinutesRead\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-transaction/edit-transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__ = __webpack_require__("../../../../../src/app/services/badge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTransactionComponent = (function () {
    function EditTransactionComponent(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    EditTransactionComponent.prototype.ngOnInit = function () {
        var transactionID = (this.route.snapshot.params['hash']);
        this.selectedTransaction = this.dataService.getTransactionByHash('hash');
        //this.currentBadge = this.badgeService.getTransactionBadge(this.selectedTransaction);
    };
    EditTransactionComponent.prototype.saveChanges = function () {
        console.warn('Save Transaction not yet implemented.');
    };
    EditTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-transaction',
            template: __webpack_require__("../../../../../src/app/edit-transaction/edit-transaction.component.html"),
            styles: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]])
    ], EditTransactionComponent);
    return EditTransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/blockChainError.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockChainError; });
var BlockChainError = (function () {
    function BlockChainError() {
    }
    return BlockChainError;
}());



/***/ }),

/***/ "../../../../../src/app/services/badge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeService = (function () {
    function BadgeService() {
    }
    BadgeService.prototype.getTransactionBadge = function (minutesRead) {
        if (minutesRead > 5000) {
            return 'Book Worm';
        }
        else if (minutesRead > 2500) {
            return 'Page Turner';
        }
        else {
            return 'Getting Started';
        }
    };
    BadgeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BadgeService);
    return BadgeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map