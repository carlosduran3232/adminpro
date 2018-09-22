import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms'; // nos servira para poder usar el ngmodel
import { ChartsModule } from 'ng2-charts'; // para las graficas
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';



@NgModule({ // aqui referencia a las paginas principales
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],

    exports: [ // hacemos un export porq para poder usarlas fuera de este modulo
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule, // nos servira para poder usar el ngmodel
        ChartsModule
    ]
})

export class PagesModule {}