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

module.exports = "<h1>Traffic lights</h1>\n<app-intersection></app-intersection>\n"

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
        this.title = "app";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_intersection_traffic_light_traffic_light_component__ = __webpack_require__("../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_intersection_intersection_component__ = __webpack_require__("../../../../../src/app/modules/intersection/intersection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_intersection_car_car_component__ = __webpack_require__("../../../../../src/app/modules/intersection/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_state_state_module__ = __webpack_require__("../../../../../src/app/modules/state/state.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__modules_intersection_traffic_light_traffic_light_component__["a" /* TrafficLightComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modules_intersection_intersection_component__["a" /* IntersectionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modules_intersection_car_car_component__["a" /* CarComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__modules_state_state_module__["a" /* StateModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/intersection/car/car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".car {\n  width: 12px;\n  height: 28px;\n  background-color: blue;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/intersection/car/car.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"car\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/intersection/car/car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
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

var CarComponent = (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () { };
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-car",
            template: __webpack_require__("../../../../../src/app/modules/intersection/car/car.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/intersection/car/car.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/intersection/intersection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.intersection {\n  height: 600px;\n  width:600px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-item-align: center;\n      align-self: center;\n  position: relative;\n}\n\n.road {\n  width: 100%;\n  height: 50px;\n  background-color: grey;\n}\n\n.vertical {\n  height: 100%;\n  width: 50px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.horizontal {\n  -webkit-transform: translateY(300px);\n          transform: translateY(300px);\n}\n\n.car {\n  position: absolute;\n  transition: left 1s;\n}\n\n.traffic-light-icon {\n  border-radius: 1000px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  background-color: red;\n  position: absolute;\n  opacity: 0.5;\n}\n\n.traffic-light-icon.green {\n  background-color: green;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/intersection/intersection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n  <div class=\"traffic-light\"\n       *ngFor=\"let light of trafficLights$ | async\">\n    <app-traffic-light [color]=\"light.color\"\n                       [id]=\"light.id\"\n                       (toggleLight)=\"toggleTrafficLight($event)\"></app-traffic-light>\n  </div>\n</div>\n\n<div class=\"intersection\">\n  <div class=\"road horizontal\">\n\n  </div>\n\n  <div class=\"road vertical\">\n\n  </div>\n\n  <app-car *ngFor=\"let car of getCarsOnLane(1) | async\"\n           class=\"car\"\n           [ngStyle]=\"{\n            'transform': 'rotate(90deg)',\n            'top.px': 320,\n            'left.px': car.progress * 2\n           }\"></app-car>\n\n  <app-car *ngFor=\"let car of getCarsOnLane(2) | async\"\n           class=\"car\"\n           [ngStyle]=\"{\n            'transform': 'rotate(90deg)',\n            'top.px': 300,\n            'left.px': 600 - car.progress * 2\n           }\"></app-car>\n\n  <app-car *ngFor=\"let car of getCarsOnLane(3) | async\"\n           class=\"car\"\n           [ngStyle]=\"{\n            'top.px': 600  - car.progress * 2,\n            'left.px': 305\n           }\"></app-car>\n\n  <app-car *ngFor=\"let car of getCarsOnLane(4) | async\"\n           class=\"car\"\n           [ngStyle]=\"{\n            'top.px': car.progress * 2,\n            'left.px': 280\n           }\"></app-car>\n\n  <div class=\"traffic-light-icon\"\n       [ngClass]=\"{ green: (getTrafficLightById(1) | async)?.color === lightState.Green }\"\n       [ngStyle]=\"{ 'left.px': 250, 'top.px': 325 }\">1</div>\n\n  <div class=\"traffic-light-icon\"\n       [ngClass]=\"{ green: (getTrafficLightById(2) | async)?.color === lightState.Green }\"\n       [ngStyle]=\"{ 'left.px': 325, 'top.px': 300 }\">2</div>\n\n  <div class=\"traffic-light-icon\"\n       [ngClass]=\"{ green: (getTrafficLightById(3) | async)?.color === lightState.Green }\"\n       [ngStyle]=\"{ 'left.px': 305, 'top.px': 350 }\">3</div>\n\n  <div class=\"traffic-light-icon\"\n       [ngClass]=\"{ green: (getTrafficLightById(4) | async)?.color === lightState.Green }\"\n       [ngStyle]=\"{ 'left.px': 275, 'top.px': 275 }\">4</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/intersection/intersection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntersectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_TrafficLight__ = __webpack_require__("../../../../../src/app/types/TrafficLight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_traffic_lights_traffic_lights_action__ = __webpack_require__("../../../../../src/app/modules/state/traffic-lights/traffic-lights.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntersectionComponent = (function () {
    function IntersectionComponent(store) {
        this.store = store;
        this.lightState = __WEBPACK_IMPORTED_MODULE_2__types_TrafficLight__["a" /* LightState */];
        this.trafficLights$ = this.store.select(function (s) { return s.trafficLights.trafficLights; });
        this.cars$ = this.store.select(function (s) { return s.cars.cars; });
    }
    IntersectionComponent.prototype.toggleTrafficLight = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__state_traffic_lights_traffic_lights_action__["b" /* ToggleTrafficLight */]({ id: id }));
    };
    IntersectionComponent.prototype.getTrafficLightById = function (id) {
        return this.trafficLights$.map(function (lights) {
            return lights.filter(function (light) { return light.id === id; }).pop();
        });
    };
    IntersectionComponent.prototype.getCarsOnLane = function (lane) {
        return this.cars$.map(function (cars) {
            return cars.filter(function (car) { return car.lane === lane; });
        });
    };
    IntersectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-intersection",
            template: __webpack_require__("../../../../../src/app/modules/intersection/intersection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/intersection/intersection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], IntersectionComponent);
    return IntersectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shell {\n  border-radius: 1000px;\n  height: 160px;\n  width: 50px;\n  background-color: black;\n}\n\n\n.number {\n  color: white;\n  text-align: center;\n}\n\n.light {\n  border-radius: 1000px;\n  height: 40px;\n  width: 40px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n\n  opacity: 0.3;\n}\n\n.active {\n  opacity: 1;\n}\n\n.red {\n  background-color: red;\n}\n\n.orange {\n  background-color: orange;\n}\n\n.green {\n  background-color: green;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\" (click)=\"click()\" [id]=\"'traffic-light-' + id \">\n  <div class=\"number\">{{ id }}</div>\n  <div class=\"light red\" [ngClass]=\"{ active: color === lightState.Red }\"></div>\n  <div class=\"light orange\" [ngClass]=\"{ active: color === lightState.Orange }\"></div>\n  <div class=\"light green\" [ngClass]=\"{ active: color === lightState.Green }\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_TrafficLight__ = __webpack_require__("../../../../../src/app/types/TrafficLight.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficLightComponent = (function () {
    function TrafficLightComponent() {
        this.toggleLight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.lightState = __WEBPACK_IMPORTED_MODULE_1__types_TrafficLight__["a" /* LightState */];
    }
    TrafficLightComponent.prototype.click = function () {
        this.toggleLight.emit(this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TrafficLightComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TrafficLightComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TrafficLightComponent.prototype, "toggleLight", void 0);
    TrafficLightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-traffic-light",
            template: __webpack_require__("../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/intersection/traffic-light/traffic-light.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrafficLightComponent);
    return TrafficLightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/state/cars/cars.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TICK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MOVE_CAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CAR; });
/* unused harmony export Tick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MoveCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddCar; });
var TICK = "[Cars] Tick";
var MOVE_CAR = "[Cars] Move car";
var ADD_CAR = "[Cars] Add car";
var Tick = (function () {
    function Tick() {
        this.type = TICK;
    }
    return Tick;
}());

var MoveCar = (function () {
    function MoveCar(payload) {
        this.payload = payload;
        this.type = MOVE_CAR;
    }
    return MoveCar;
}());

var AddCar = (function () {
    function AddCar(payload) {
        this.payload = payload;
        this.type = ADD_CAR;
    }
    return AddCar;
}());



/***/ }),

/***/ "../../../../../src/app/modules/state/cars/cars.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cars_action__ = __webpack_require__("../../../../../src/app/modules/state/cars/cars.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__types_TrafficLight__ = __webpack_require__("../../../../../src/app/types/TrafficLight.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var progressToTrafficLight = 125;
var widthOfCar = 24;
var CarsEffects = (function () {
    function CarsEffects(store) {
        this.store = store;
        this.addCars$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].interval(3000).map(function () {
            var lane = Math.ceil(Math.random() * 4);
            return new __WEBPACK_IMPORTED_MODULE_11__cars_action__["b" /* AddCar */]({ id: Object(__WEBPACK_IMPORTED_MODULE_10_uuid__["v4"])(), lane: lane });
        });
        this.moveCars$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].interval(50)
            .withLatestFrom(this.store.select(function (s) {
            return s;
        }))
            .mergeMap(function (_a) {
            var state = _a[1];
            var movements = [];
            state.cars.cars.forEach(function (car) {
                // Get traffic light on lane of the car
                var trafficLight = state.trafficLights.trafficLights
                    .filter(function (light) { return light.id === car.lane; })
                    .pop();
                var carsOnLane = state.cars.cars.filter(function (c) { return c.lane === car.lane; });
                var carsInFrontUntilTrafficLight = carsOnLane.filter(function (c) {
                    return c.progress < progressToTrafficLight + 1 && c.progress > car.progress;
                });
                var canCarMove = false;
                if (trafficLight && trafficLight.color === __WEBPACK_IMPORTED_MODULE_12__types_TrafficLight__["a" /* LightState */].Green) {
                    // Light is green
                    canCarMove = true;
                }
                else if (car.progress <
                    progressToTrafficLight -
                        carsInFrontUntilTrafficLight.length * widthOfCar) {
                    // Car is not yet at the stop light (keep in account amount of cars between current car and stoplight)
                    canCarMove = true;
                }
                else if (car.progress > progressToTrafficLight) {
                    // Car has passed the stoplight
                    canCarMove = true;
                }
                if (canCarMove) {
                    movements.push(new __WEBPACK_IMPORTED_MODULE_11__cars_action__["d" /* MoveCar */]({ id: car.id }));
                }
            });
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].from(movements);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */])
    ], CarsEffects.prototype, "addCars$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */])
    ], CarsEffects.prototype, "moveCars$", void 0);
    CarsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["h" /* Store */]])
    ], CarsEffects);
    return CarsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/modules/state/cars/cars.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = carsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cars_action__ = __webpack_require__("../../../../../src/app/modules/state/cars/cars.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    cars: []
};
function carsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__cars_action__["c" /* MOVE_CAR */]:
            var newCars = state.cars.map(function (car) {
                if (car.id === action.payload.id) {
                    return __assign({}, car, { progress: car.progress + 1 });
                }
                return car;
            });
            return __assign({}, state, { cars: newCars });
        case __WEBPACK_IMPORTED_MODULE_0__cars_action__["a" /* ADD_CAR */]:
            var newCar = __assign({}, action.payload, { progress: 0 });
            return __assign({}, state, { cars: state.cars.concat([newCar]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/modules/state/state.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traffic_lights_traffic_lights_reducer__ = __webpack_require__("../../../../../src/app/modules/state/traffic-lights/traffic-lights.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cars_cars_reducer__ = __webpack_require__("../../../../../src/app/modules/state/cars/cars.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cars_cars_effects__ = __webpack_require__("../../../../../src/app/modules/state/cars/cars.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StateModule = (function () {
    function StateModule() {
    }
    StateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["i" /* StoreModule */].forRoot({
                    trafficLights: __WEBPACK_IMPORTED_MODULE_4__traffic_lights_traffic_lights_reducer__["a" /* trafficLightsReducer */],
                    cars: __WEBPACK_IMPORTED_MODULE_5__cars_cars_reducer__["a" /* carsReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_6__cars_cars_effects__["a" /* CarsEffects */]]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25
                })
            ]
        })
    ], StateModule);
    return StateModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/state/traffic-lights/traffic-lights.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_TRAFFIC_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleTrafficLight; });
var TOGGLE_TRAFFIC_LIGHT = "[Traffic lights] Toggle";
var ToggleTrafficLight = (function () {
    function ToggleTrafficLight(payload) {
        this.payload = payload;
        this.type = TOGGLE_TRAFFIC_LIGHT;
    }
    return ToggleTrafficLight;
}());



/***/ }),

/***/ "../../../../../src/app/modules/state/traffic-lights/traffic-lights.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = trafficLightsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__ = __webpack_require__("../../../../../src/app/types/TrafficLight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traffic_lights_action__ = __webpack_require__("../../../../../src/app/modules/state/traffic-lights/traffic-lights.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    trafficLights: [
        { id: 1, color: __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red },
        { id: 2, color: __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red },
        { id: 3, color: __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red },
        { id: 4, color: __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red }
    ]
};
function trafficLightsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__traffic_lights_action__["a" /* TOGGLE_TRAFFIC_LIGHT */]:
            var newTrafficLights = state.trafficLights.map(function (light) {
                // Toggle clicked traffic light
                if (light.id === action.payload.id) {
                    var toggledColor = light.color === __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red
                        ? __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Green
                        : __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red;
                    return __assign({}, light, { color: toggledColor });
                }
                // Reset all green lights to red
                if (light.color === __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Green) {
                    return __assign({}, light, { color: __WEBPACK_IMPORTED_MODULE_0__types_TrafficLight__["a" /* LightState */].Red });
                }
                // No change
                return light;
            });
            return __assign({}, state, { trafficLights: newTrafficLights });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/types/TrafficLight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightState; });
var LightState;
(function (LightState) {
    LightState[LightState["Red"] = 0] = "Red";
    LightState[LightState["Orange"] = 1] = "Orange";
    LightState[LightState["Green"] = 2] = "Green";
})(LightState || (LightState = {}));
// TODO: remove folder


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map