import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'two_way',
    templateUrl : './two.way.component.html';

})

export class TwoWayComponent{

nome:string;
nomes: string[] = [];
numNomes:number = 0 ;

incluir():void{
    this.nomes.push(this.nome);
    this.numNomes = this.nomes.length;
}

reset():void{
    for(i = 0; i < this.numNomes; i++){
        this.nomes.pop();
    }
    this.numNomes = this.nomes.length;

}

}