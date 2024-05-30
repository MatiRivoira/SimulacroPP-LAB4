import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
  @Input() peliculas!: Observable<Pelicula[]>;
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
