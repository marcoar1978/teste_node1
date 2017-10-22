import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { TwoWayComponent } from './two.way/two.way.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
//import { ListagemComponent } from './listagem/listagem.component';
import {routing} from './app.routes';

import 'rxjs/add/operator/map';

@NgModule({ 
    imports : [BrowserModule, HttpModule , FormsModule, routing],
    declarations : [AppComponent, 
                    Pag1Component, 
                    Pag2Component, 
                    Pag3Component, 
                    CabecalhoComponent, 
                    InterpolationComponent,
                    PropertyComponent,
                    TwoWayComponent
                    ],
    bootstrap : [AppComponent]
})


export class AppModule{



}