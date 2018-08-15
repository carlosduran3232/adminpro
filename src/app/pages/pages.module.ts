import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule({ // aqui referencia a las paginas principales
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    exports: [ // hacemos un export porq para poder usarlas fuera de este modulo
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ], 
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}