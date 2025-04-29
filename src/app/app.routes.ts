import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gestion-usuarios',
    component: GestionUsuariosComponent,
    canActivate: [authGuard],
  },
];
