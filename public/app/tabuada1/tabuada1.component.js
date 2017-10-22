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
var Tabuada1Component = (function () {
    function Tabuada1Component() {
        this.mostraDiv = false;
        this.numeros = [];
    }
    Tabuada1Component.prototype.mostraTabuada = function () {
        //this.mostraDiv = !this.mostraDiv;
        this.num2 = this.num;
        this.numeros[0] = this.num * 0;
        this.numeros[1] = this.num * 1;
        this.numeros[2] = this.num * 2;
        this.numeros[3] = this.num * 3;
        this.numeros[4] = this.num * 4;
        this.numeros[5] = this.num * 5;
        this.numeros[6] = this.num * 6;
        this.numeros[7] = this.num * 7;
        this.numeros[8] = this.num * 8;
        this.numeros[9] = this.num * 9;
        this.numeros[10] = this.num * 10;
    };
    Tabuada1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabuada1',
            templateUrl: './tabuada1.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Tabuada1Component);
    return Tabuada1Component;
}());
exports.Tabuada1Component = Tabuada1Component;
//# sourceMappingURL=tabuada1.component.js.map