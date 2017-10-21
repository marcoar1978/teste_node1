
import {RouterModule, Routes} from '@angular/router';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';



const appRoutes:Routes = [
    {path: '', component: Pag3Component},
    {path: 'pagina1', component: Pag1Component},
    {path: 'pagina2', component: Pag2Component},
    {path: 'pagina3', component: Pag3Component}
   
 ];


export const routing = RouterModule.forRoot(appRoutes);