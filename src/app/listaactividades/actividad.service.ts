import { Injectable } from '@angular/core';
import { Actividad } from './actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private actividades: Actividad[] = [
    { nombre: 'Yoga', fecha: '2024-12-08', aula: 1, monitor: 'María López' },
    { nombre: 'Pilates', fecha: '2024-12-09', aula: 2, monitor: 'Carlos García' },
    { nombre: 'Spinning', fecha: '2024-12-10', aula: 3, monitor: 'Laura Martínez' },
    { nombre: 'Zumba', fecha: '2024-12-11', aula: 4, monitor: 'Juan Pérez' },
  ];

  constructor() {}

  getActividades(): Actividad[] {
    return this.actividades;
  }
}
