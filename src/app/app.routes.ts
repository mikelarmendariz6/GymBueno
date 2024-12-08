import { Routes } from '@angular/router';
import { ListaactividadesComponent } from './listaactividades/listaactividades.component';

export const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: 'activities', component: ListaactividadesComponent }
];
