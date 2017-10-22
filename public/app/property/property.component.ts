import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'property',
    templateUrl : './property.component.html';

})

export class PropertyComponent{

verParagrafo:boolean = true;

mostrar():boolean{
    
    this.verParagrafo = !this.verParagrafo;
}

}