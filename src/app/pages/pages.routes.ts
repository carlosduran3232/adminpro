import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const pagesRoutes: Routes = [
    {
           path: '',
           component: PagesComponent, // una ruta vacia me llevara al pages.component.html
           children: [ // estas rutas trabajaran con el outle secundario
               {path: 'dashboard', component: DashboardComponent},
               {path: 'progress', component: ProgressComponent},
               {path: 'grafica1', component: Graficas1Component},
               {path: '', redirectTo: '/dashboard', pathMatch: 'full'} // cuando no existe ninguna ruta rediregeme al dashboard
            ]
        }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes); // el forroot se utilizara para rutas principales pero como estas son router outlet dentro de otras router outlet usaremos child