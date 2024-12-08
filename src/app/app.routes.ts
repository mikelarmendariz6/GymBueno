import { Routes } from '@angular/router';
import { ListaActividadesComponent } from './listaactividades/listaactividades.component';

export const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: 'activities', component: ListaActividadesComponent }
];
