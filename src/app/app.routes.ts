import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { ROUTES_USUARIO } from './components/usuario/usuario.routes';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: ROUTES_USUARIO
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

export const app_routing = RouterModule.forRoot(ROUTES);
