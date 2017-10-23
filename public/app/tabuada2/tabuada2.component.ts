import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tabuada2',
    templateUrl : './tabuada2.component.html';

})

export class Tabuada2Component{

    num:number[] = [];
    resp:number[] = [];
    mostraResp:string[] = [];
    pontos:number = 0;
    msgNota:string;
    desabilita:boolean[] = [];
    mostraBotReset:boolean = true;

    constructor(){
        this.resp[0] = 30;   
        this.resp[1] = 64; 
        this.resp[2] = 144;
        this.resp[3] = 75;
        this.resp[4] = 36;
        this.resp[5] = 63;
        }

    confereResp(indice:number):void{
        if(this.num[indice] == this.resp[indice]){
            this.mostraResp[indice] = "Resposta Correta";
            this.pontos++;    
        }
        else{
            this.mostraResp[indice] = "Resposta Incorreta (Valor correto: "+this.resp[indice]+")";
         }

    }

    desabCampo(indice:number):void{
        this.desabilita[indice] = true;
    }


    mostraRespGeral():void{
        let indice = (this.pontos / this.resp.length) * 100;
        indice.toFixed(2);

        this.msgNota = "Você acertou "+this.pontos+" entre "+this.resp.length+" questões ("+indice+"%)";
        this.mostraBotReset = false;
        }  
   


}