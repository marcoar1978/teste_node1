"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var pag1_component_1 = require('./pag1/pag1.component');
var pag2_component_1 = require('./pag2/pag2.component');
var pag3_component_1 = require('./pag3/pag3.component');
var interpolation_component_1 = require('./interpolation/interpolation.component');
var property_component_1 = require('./property/property.component');
var two_way_component_1 = require('./two.way/two.way.component');
var tabuada1_component_1 = require('./tabuada1/tabuada1.component');
var cabecalho_component_1 = require('./cabecalho/cabecalho.component');
//import { ListagemComponent } from './listagem/listagem.component';
var app_routes_1 = require('./app.routes');
require('rxjs/add/operator/map');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent,
                pag1_component_1.Pag1Component,
                pag2_component_1.Pag2Component,
                pag3_component_1.Pag3Component,
                cabecalho_component_1.CabecalhoComponent,
                interpolation_component_1.InterpolationComponent,
                property_component_1.PropertyComponent,
                two_way_component_1.TwoWayComponent,
                tabuada1_component_1.Tabuada1Component
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map