import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tabuada1',
    templateUrl : './tabuada1.component.html';

})

export class Tabuada1Component{

num:number;
num2:number;
mostraDiv: boolean = false;
numeros:number[] = [];

mostraTabuada():boolean{
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



    }

}