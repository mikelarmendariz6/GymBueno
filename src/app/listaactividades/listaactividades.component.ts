import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listaactividades',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './listaactividades.component.html',
  styleUrls: ['./listaactividades.component.scss']
})
export class ListaActividadesComponent {
  actividades = [
    { nombre: 'Yoga', descripcion: 'Clases de yoga para principiantes' },
    { nombre: 'Crossfit', descripcion: 'Entrenamientos intensivos' },
    { nombre: 'Pilates', descripcion: 'Fortalecimiento del núcleo' }
  ];
}
