import { Component } from '@angular/core';
import { Actividad } from './actividad.model';
import { ActividadService } from './actividad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listaactividades',
  imports: [CommonModule], 
  templateUrl: './listaactividades.component.html',
  styleUrls: ['./listaactividades.component.scss']
})
export class ListaactividadesComponent {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) {
    this.actividades = this.actividadService.getActividades();
  }
}
