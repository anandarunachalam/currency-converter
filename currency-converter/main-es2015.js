(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _currency_converter_form_currency_converter_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-converter-form/currency-converter-form.component */ "./src/app/currency-converter-form/currency-converter-form.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "currency-converter"], [1, "currency-converter__innerblock"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-currency-converter-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_currency_converter_form_currency_converter_form_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyConverterFormComponent"]], styles: [".currency-converter[_ngcontent-%COMP%] {\n  max-width: 377px;\n  margin: auto;\n  overflow: hidden;\n  border: 2px solid #424242;\n  background: #ffffff;\n}\n\n.currency-converter__innerblock[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  padding: 15px 15px;\n}\n\n.currency-converter__innerblock[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEFOQU5ELURSSVZFXFxIb21lIERlcG9cXGN1cnJlbmN5LWNvbnZlcnRlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURDQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0VEOztBREFBO0VBQ0MsV0FBQTtBQ0dEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbmN5LWNvbnZlcnRlciB7XHJcblx0bWF4LXdpZHRoOiAzNzdweDtcdFxyXG5cdG1hcmdpbjogYXV0bztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM0MjQyNDI7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uY3VycmVuY3ktY29udmVydGVyX19pbm5lcmJsb2NrIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdHBhZGRpbmc6IDE1cHggMTVweDtcclxufVxyXG4uY3VycmVuY3ktY29udmVydGVyX19pbm5lcmJsb2NrPmRpdiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn0iLCIuY3VycmVuY3ktY29udmVydGVyIHtcbiAgbWF4LXdpZHRoOiAzNzdweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDI0MjQyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY3VycmVuY3ktY29udmVydGVyX19pbm5lcmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG59XG5cbi5jdXJyZW5jeS1jb252ZXJ0ZXJfX2lubmVyYmxvY2sgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/@ngrx/store.js");
/* harmony import */ var ng_lightning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lightning */ "./node_modules/ng-lightning/__ivy_ngcc__/fesm2015/ng-lightning.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _services_currency_operations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/currency-operations.service */ "./src/app/services/currency-operations.service.ts");
/* harmony import */ var _services_currency_request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/currency-request.service */ "./src/app/services/currency-request.service.ts");
/* harmony import */ var _store_currency_converter_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/currency-converter.reducer */ "./src/app/store/currency-converter.reducer.ts");
/* harmony import */ var _components_cx_select_cx_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cx-select/cx-select.component */ "./src/app/components/cx-select/cx-select.component.ts");
/* harmony import */ var _components_cx_input_cx_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cx-input/cx-input.component */ "./src/app/components/cx-input/cx-input.component.ts");
/* harmony import */ var _currency_converter_form_currency_converter_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./currency-converter-form/currency-converter-form.component */ "./src/app/currency-converter-form/currency-converter-form.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_currency_operations_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyOperationsService"], _services_currency_request_service__WEBPACK_IMPORTED_MODULE_10__["CurrencyRequestService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng_lightning__WEBPACK_IMPORTED_MODULE_7__["NglModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({ currencyconverter: _store_currency_converter_reducer__WEBPACK_IMPORTED_MODULE_11__["updateCurrencyData"] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _currency_converter_form_currency_converter_form_component__WEBPACK_IMPORTED_MODULE_14__["CurrencyConverterFormComponent"],
        _components_cx_select_cx_select_component__WEBPACK_IMPORTED_MODULE_12__["CxSelectComponent"],
        _components_cx_input_cx_input_component__WEBPACK_IMPORTED_MODULE_13__["CxInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ng_lightning__WEBPACK_IMPORTED_MODULE_7__["NglModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _currency_converter_form_currency_converter_form_component__WEBPACK_IMPORTED_MODULE_14__["CurrencyConverterFormComponent"],
                    _components_cx_select_cx_select_component__WEBPACK_IMPORTED_MODULE_12__["CxSelectComponent"],
                    _components_cx_input_cx_input_component__WEBPACK_IMPORTED_MODULE_13__["CxInputComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    ng_lightning__WEBPACK_IMPORTED_MODULE_7__["NglModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({ currencyconverter: _store_currency_converter_reducer__WEBPACK_IMPORTED_MODULE_11__["updateCurrencyData"] })
                ],
                providers: [_services_currency_operations_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyOperationsService"], _services_currency_request_service__WEBPACK_IMPORTED_MODULE_10__["CurrencyRequestService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cx-input/cx-input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cx-input/cx-input.component.ts ***!
  \***********************************************************/
/*! exports provided: CxInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CxInputComponent", function() { return CxInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var ng_lightning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lightning */ "./node_modules/ng-lightning/__ivy_ngcc__/fesm2015/ng-lightning.js");







function CxInputComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.formData.customValidate.msg1);
} }
function CxInputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CxInputComponent_div_5_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f[ctx_r3.formData.key] == null ? null : ctx_r3.f[ctx_r3.formData.key].errors == null ? null : ctx_r3.f[ctx_r3.formData.key].errors.required);
} }
function CxInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.formData.customValidate.msg2);
} }
const _c0 = function (a0) { return { "slds-has-error": a0 }; };
class CxInputComponent {
    constructor() {
        this.formClk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cxInputKeyup(e) {
        this.formClk.emit(e);
    }
}
CxInputComponent.ɵfac = function CxInputComponent_Factory(t) { return new (t || CxInputComponent)(); };
CxInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CxInputComponent, selectors: [["app-cx-input"]], inputs: { formData: "formData", f: "f" }, outputs: { formClk: "formClk" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]
            }
        ])], decls: 7, vars: 14, consts: [[1, "slds-form-element", 3, "ngClass"], [1, "slds-form-element__label", 3, "for"], [1, "slds-form-element__control"], ["ngl", "", "aria-describedby", "error-message-unique-id", "aria-invalid", "true", 1, "slds-input", 3, "type", "formControlName", "required", "disabled", "placeholder", "id", "ngModel", "value", "keyup", "ngModelChange", "valueChange"], ["class", "slds-form-element__help", 4, "ngIf"], [1, "slds-form-element__help"], [4, "ngIf"]], template: function CxInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CxInputComponent_Template_input_keyup_4_listener($event) { return ctx.cxInputKeyup($event); })("ngModelChange", function CxInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.formData.value = $event; })("valueChange", function CxInputComponent_Template_input_valueChange_4_listener($event) { return ctx.formData.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CxInputComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CxInputComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].invalid) && ((ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].dirty) || (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.formData.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formData.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.formData.type)("formControlName", ctx.formData.key)("required", true)("placeholder", ctx.formData.placeholder)("id", ctx.formData.id)("ngModel", ctx.formData.value)("value", ctx.formData.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].invalid) && ((ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].dirty) || (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].errors == null ? null : ctx.f[ctx.formData.key].errors.required) && (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].errors == null ? null : ctx.f[ctx.formData.key].errors.invalidCurrency) && ((ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].dirty) || (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].touched)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], ng_lightning__WEBPACK_IMPORTED_MODULE_4__["NglInputElement"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3gtaW5wdXQvY3gtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CxInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cx-input',
                templateUrl: './cx-input.component.html',
                styleUrls: ['./cx-input.component.scss'],
                viewProviders: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                        useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]
                    }
                ]
            }]
    }], function () { return []; }, { formData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], f: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formClk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/cx-select/cx-select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cx-select/cx-select.component.ts ***!
  \*************************************************************/
/*! exports provided: CxSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CxSelectComponent", function() { return CxSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var ng_lightning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lightning */ "./node_modules/ng-lightning/__ivy_ngcc__/fesm2015/ng-lightning.js");







function CxSelectComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", opt_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r2.value);
} }
function CxSelectComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formData.customValidate.msg1);
} }
const _c0 = function (a0) { return { "slds-has-error": a0 }; };
class CxSelectComponent {
    constructor() {
        this.formClk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cxInputKeyup(e) {
        this.formClk.emit(e);
    }
}
CxSelectComponent.ɵfac = function CxSelectComponent_Factory(t) { return new (t || CxSelectComponent)(); };
CxSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CxSelectComponent, selectors: [["app-cx-select"]], inputs: { formData: "formData", f: "f" }, outputs: { formClk: "formClk" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]
            }
        ])], decls: 7, vars: 8, consts: [[1, "slds-form-element", 3, "ngClass"], ["for", "select-01", "fxHide.xs", "true", 1, "slds-form-element__label"], [1, "slds-form-element__control"], [1, "slds-select_container", "m-t-5"], ["ngl", "", "aria-describedby", "error-01", "id", "select-01", "required", "", 1, "slds-select", 3, "formControlName", "ngModel", "value", "change", "ngModelChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "slds-form-element__help", "id", "error-01", 4, "ngIf"], [3, "value"], ["id", "error-01", 1, "slds-form-element__help"]], template: function CxSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CxSelectComponent_Template_select_change_4_listener($event) { return ctx.cxInputKeyup($event); })("ngModelChange", function CxSelectComponent_Template_select_ngModelChange_4_listener($event) { return ctx.formData.value = $event; })("valueChange", function CxSelectComponent_Template_select_valueChange_4_listener($event) { return ctx.formData.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CxSelectComponent_option_5_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CxSelectComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].invalid) && ((ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].dirty) || (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formData.key)("ngModel", ctx.formData.value)("value", ctx.formData.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].invalid) && ((ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].dirty) || (ctx.f[ctx.formData.key] == null ? null : ctx.f[ctx.formData.key].touched)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], ng_lightning__WEBPACK_IMPORTED_MODULE_4__["NglSelectInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3gtc2VsZWN0L2N4LXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CxSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cx-select',
                templateUrl: './cx-select.component.html',
                styleUrls: ['./cx-select.component.scss'],
                viewProviders: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                        useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]
                    }
                ]
            }]
    }], function () { return []; }, { formData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], f: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formClk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/currency-converter-form/currency-converter-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/currency-converter-form/currency-converter-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: CurrencyConverterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterFormComponent", function() { return CurrencyConverterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _validators_currency_converter_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators/currency-converter-validator */ "./src/app/validators/currency-converter-validator.ts");
/* harmony import */ var _assets_CURRENCY_CONVERT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/CURRENCY_CONVERT.json */ "./src/assets/CURRENCY_CONVERT.json");
var _assets_CURRENCY_CONVERT_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/CURRENCY_CONVERT.json */ "./src/assets/CURRENCY_CONVERT.json", 1);
/* harmony import */ var _services_currency_operations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/currency-operations.service */ "./src/app/services/currency-operations.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/@ngrx/store.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _components_cx_input_cx_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cx-input/cx-input.component */ "./src/app/components/cx-input/cx-input.component.ts");
/* harmony import */ var _components_cx_select_cx_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cx-select/cx-select.component */ "./src/app/components/cx-select/cx-select.component.ts");











class CurrencyConverterFormComponent {
    constructor(formBuilder, curOprApi, store) {
        this.formBuilder = formBuilder;
        this.curOprApi = curOprApi;
        this.store = store;
    }
    ngOnInit() {
        this.cxRenderCurrForm(_assets_CURRENCY_CONVERT_json__WEBPACK_IMPORTED_MODULE_3___namespace);
        this.currConvFrm = this.cxGetCurrencyFrmVals();
        this.cxSetDisableFrmField("cu_to_amt");
    }
    cxRenderCurrForm(resData) {
        this.formData = resData.default;
    }
    cxUpdateCurrencyStore(frmCurVal, toCurVal, frmCurSelected, toCurSelected) {
        this.store.dispatch({
            type: 'CALC_CURR',
            curvalues: {
                frmCurVal: frmCurVal,
                toCurVal: toCurVal,
                frmCurSelected: frmCurSelected,
                toCurSelected: toCurSelected
            }
        });
    }
    getFromCurr(e) {
        this.curOprApi.setCurrencyVal(this.currConvFrm)
            .subscribe(upCurrVal => {
            this.getConvertVal = this.curOprApi.getCurConverted(upCurrVal, this.currConvFrm.value.cu_from_amt, this.currConvFrm.value.cu_from_curr);
            this.cxUpdateCurrencyStore(this.currConvFrm.value.cu_from_amt, this.getConvertVal, this.currConvFrm.value.cu_from_curr, this.currConvFrm.value.cu_to_curr);
            this.store.subscribe(s => {
                this.currConvFrm.patchValue({
                    cu_to_amt: s.currencyconverter['toCurVal']
                });
            });
        }, err => {
        });
    }
    cxGetCurrencyFrmVals() {
        return this.formBuilder.group({
            cu_from_amt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_currency_converter_validator__WEBPACK_IMPORTED_MODULE_2__["currencyConverterValidator"]]],
            cu_from_curr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cu_to_amt: ['', ''],
            cu_to_curr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    cxSetDisableFrmField(fldId) {
        this.currConvFrm.reset({
            [fldId]: { value: '', disabled: true }
        });
    }
    get f() {
        return this.currConvFrm.controls;
    }
}
CurrencyConverterFormComponent.ɵfac = function CurrencyConverterFormComponent_Factory(t) { return new (t || CurrencyConverterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_currency_operations_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyOperationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
CurrencyConverterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyConverterFormComponent, selectors: [["app-currency-converter-form"]], decls: 12, vars: 12, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "5px", "fxFlex", "none", 1, "currency-converter__formblock", 3, "formGroup"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutGap.xs", "0"], [1, "text-15"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap.xs", "0"], ["fxFlex", "79%", "fxFlex.xs", "100%", 1, "mb-p-n", "p-r-10", 3, "formData", "f", "formClk"], ["fxFlex", "21%", "fxFlex.xs", "100%", 3, "formData", "f", "formClk"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "end end", "fxLayoutGap.xs", "0"], ["target", "_blank", 1, "currency-converter__link", "p-t-10", "text-12", 3, "href", "innerHTML"]], template: function CurrencyConverterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-cx-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formClk", function CurrencyConverterFormComponent_Template_app_cx_input_formClk_5_listener($event) { return ctx.getFromCurr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-cx-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formClk", function CurrencyConverterFormComponent_Template_app_cx_select_formClk_6_listener($event) { return ctx.getFromCurr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-cx-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formClk", function CurrencyConverterFormComponent_Template_app_cx_input_formClk_8_listener($event) { return ctx.getFromCurr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-cx-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formClk", function CurrencyConverterFormComponent_Template_app_cx_select_formClk_9_listener($event) { return ctx.getFromCurr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.currConvFrm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formData.frmBlkTits.blk1Tit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.formData.frmBlk[0])("f", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.formData.frmBlk[1])("f", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.formData.frmBlk[2])("f", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.formData.frmBlk[3])("f", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.formData.frmBlkFoot.blk1Link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("innerHTML", ctx.formData.frmBlkFoot.blk1Txt, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_cx_input_cx_input_component__WEBPACK_IMPORTED_MODULE_7__["CxInputComponent"], _components_cx_select_cx_select_component__WEBPACK_IMPORTED_MODULE_8__["CxSelectComponent"]], styles: [".currency-converter__link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVuY3ktY29udmVydGVyLWZvcm0vQzpcXEFOQU5ELURSSVZFXFxIb21lIERlcG9cXGN1cnJlbmN5LWNvbnZlcnRlci9zcmNcXGFwcFxcY3VycmVuY3ktY29udmVydGVyLWZvcm1cXGN1cnJlbmN5LWNvbnZlcnRlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXJyZW5jeS1jb252ZXJ0ZXItZm9ybS9jdXJyZW5jeS1jb252ZXJ0ZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFBO0FBR0E7RUFDSSwwQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY3VycmVuY3ktY29udmVydGVyLWZvcm0vY3VycmVuY3ktY29udmVydGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypMYXlvdXQqL1xyXG5cclxuXHJcbi5jdXJyZW5jeS1jb252ZXJ0ZXJfX2xpbmsgeyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiIsIi8qTGF5b3V0Ki9cbi5jdXJyZW5jeS1jb252ZXJ0ZXJfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-converter-form',
                templateUrl: './currency-converter-form.component.html',
                styleUrls: ['./currency-converter-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_currency_operations_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyOperationsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/currency-operations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/currency-operations.service.ts ***!
  \*********************************************************/
/*! exports provided: CurrencyOperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyOperationsService", function() { return CurrencyOperationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_currency_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/currency-request.service */ "./src/app/services/currency-request.service.ts");




class CurrencyOperationsService {
    constructor(curReqApi) {
        this.curReqApi = curReqApi;
    }
    setCurrencyVal(curReqVals) {
        const newCurData = { symbols: curReqVals.value.cu_from_curr, base: curReqVals.value.cu_to_curr };
        return this.curReqApi.getApiData(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url, newCurData);
    }
    getCurConverted(curReqVals, CurSelAmt, CurSelVals) {
        return curReqVals.rates[CurSelVals] * CurSelAmt;
    }
}
CurrencyOperationsService.ɵfac = function CurrencyOperationsService_Factory(t) { return new (t || CurrencyOperationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_currency_request_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyRequestService"])); };
CurrencyOperationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyOperationsService, factory: CurrencyOperationsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyOperationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_currency_request_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyRequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/currency-request.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/currency-request.service.ts ***!
  \******************************************************/
/*! exports provided: CurrencyRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyRequestService", function() { return CurrencyRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CurrencyRequestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getApiData(curApiUrl, curData) {
        const queryString = Object.keys(curData).map(key => key + '=' + curData[key]).join('&');
        return this.httpClient.get(curApiUrl + queryString);
    }
}
CurrencyRequestService.ɵfac = function CurrencyRequestService_Factory(t) { return new (t || CurrencyRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CurrencyRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyRequestService, factory: CurrencyRequestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/currency-converter.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/currency-converter.reducer.ts ***!
  \*****************************************************/
/*! exports provided: CALC_CURR, updateCurrencyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALC_CURR", function() { return CALC_CURR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrencyData", function() { return updateCurrencyData; });
const CALC_CURR = 'CALC_CURR';
function updateCurrencyData(state, action) {
    switch (action.type) {
        case CALC_CURR:
            return action.curvalues;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/validators/currency-converter-validator.ts":
/*!************************************************************!*\
  !*** ./src/app/validators/currency-converter-validator.ts ***!
  \************************************************************/
/*! exports provided: currencyConverterValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyConverterValidator", function() { return currencyConverterValidator; });
function currencyConverterValidator(control) {
    const valid = /^\$?[0-9][0-9,]*[0-9]\.?[0-9]{0,2}$/i.test(control.value);
    console.log(valid);
    return valid ? null : { invalidCurrency: { valid: false, value: control.value } };
}


/***/ }),

/***/ "./src/assets/CURRENCY_CONVERT.json":
/*!******************************************!*\
  !*** ./src/assets/CURRENCY_CONVERT.json ***!
  \******************************************/
/*! exports provided: frmBlkTits, frmBlk, frmBlkFoot, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frmBlkTits\":{\"blk1Tit\":\"Currency converter\"},\"frmBlk\":[{\"type\":\"tel\",\"key\":\"cu_from_amt\",\"label\":\"Type in amount and select currency:\",\"id\":\"cuFromAmt\",\"placeholder\":\"0.00\",\"value\":\"\",\"customValidate\":{\"msg1\":\"Please enter amount\",\"msg2\":\"Invalid currency format\"}},{\"key\":\"cu_from_curr\",\"label\":\"\",\"value\":\"USD\",\"options\":[{\"key\":\"CAD\",\"value\":\"CAD\"},{\"key\":\"USD\",\"value\":\"USD\"},{\"key\":\"EUR\",\"value\":\"EUR\"}],\"customValidate\":{\"msg1\":\"Select currency\"}},{\"type\":\"text\",\"key\":\"cu_to_amt\",\"label\":\"Converted amount:\",\"id\":\"cuToAmt\",\"placeholder\":\"0.00\",\"value\":\"\",\"customValidate\":{\"msg1\":\"Please enter amount\"}},{\"key\":\"cu_to_curr\",\"label\":\"\",\"value\":\"USD\",\"options\":[{\"key\":\"CAD\",\"value\":\"CAD\"},{\"key\":\"USD\",\"value\":\"USD\"},{\"key\":\"EUR\",\"value\":\"EUR\"}],\"customValidate\":{\"msg1\":\"Select currency\"}}],\"frmBlkFoot\":{\"blk1Txt\":\"Disclaimer\",\"blk1Link\":\"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html\"}}");

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'https://api.exchangeratesapi.io/latest?'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANAND-DRIVE\Home Depo\currency-converter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map