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
var Tabuada2Component = (function () {
    function Tabuada2Component() {
        this.num = [];
        this.resp = [];
        this.mostraResp = [];
        this.pontos = 0;
        this.desabilita = [];
        this.mostraBotReset = true;
        this.resp[0] = 30;
        this.resp[1] = 64;
        this.resp[2] = 144;
        this.resp[3] = 75;
        this.resp[4] = 36;
        this.resp[5] = 63;
    }
    Tabuada2Component.prototype.confereResp = function (indice) {
        if (this.num[indice] == this.resp[indice]) {
            this.mostraResp[indice] = "Resposta Correta";
            this.pontos++;
        }
        else {
            this.mostraResp[indice] = "Resposta Incorreta (Valor correto: " + this.resp[indice] + ")";
        }
    };
    Tabuada2Component.prototype.desabCampo = function (indice) {
        this.desabilita[indice] = true;
    };
    Tabuada2Component.prototype.mostraRespGeral = function () {
        var indice = (this.pontos / this.resp.length) * 100;
        indice.toFixed(2);
        this.msgNota = "Você acertou " + this.pontos + " entre " + this.resp.length + " questões (" + indice + "%)";
        this.mostraBotReset = false;
    };
    Tabuada2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabuada2',
            templateUrl: './tabuada2.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Tabuada2Component);
    return Tabuada2Component;
}());
exports.Tabuada2Component = Tabuada2Component;
//# sourceMappingURL=tabuada2.component.js.map