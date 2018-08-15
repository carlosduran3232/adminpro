import { RouterModule, Routes } from '@angular/router';  // para poder importar estas rutas necesito el modulo
import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
   {
   path: '',
   component: PagesComponent, // una ruta vacia me llevara al pages.component.html
   children: [ // estas rutas trabajaran con el outle secundario
       {path: 'dashboard', component: DashboardComponent},
       {path: 'progress', component: ProgressComponent},
       {path: 'grafica1', component: Graficas1Component},
       {path: '', redirectTo: '/dashboard', pathMatch: 'full'} // cuando no existe ninguna ruta rediregeme al dashboard
    ]
},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent
   {path: '**', component: NopagefoundComponent}
 ];

 export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});



