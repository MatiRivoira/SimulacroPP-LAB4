import { Component, OnInit, inject } from '@angular/core';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { Observable } from 'rxjs';
import { Pelicula } from '../../interfaces/pelicula';
import { FirestoreService } from '../../services/firestore.service';
import { DetallePeliculaComponent } from '../pelicula/detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculaComponent, DetallePeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
})
export class BusquedaComponent implements OnInit {
  peliculas$!: Observable<Pelicula[]>;
  peliculaSeleccionada!: Pelicula;

  //* Servicios
  firestoreSrv = inject(FirestoreService);

  ngOnInit(): void {
    this.peliculas$ = this.firestoreSrv.getDocuments('peliculas');
  }

  actualizarDetallePelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
