import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'interpolation',
    templateUrl : './interpolation.component.html';

})

export class InterpolationComponent{

getLivro():string{
    return "Angular 2";
}
getNumero():number{
    return 6;
}

}