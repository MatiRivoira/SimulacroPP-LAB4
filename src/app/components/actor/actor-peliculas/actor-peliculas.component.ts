import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Pelicula } from '../../../interfaces/pelicula';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actor-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor-peliculas.component.html',
  styleUrl: './actor-peliculas.component.css'
})
export class ActorPeliculasComponent implements OnChanges {
  @Input() actorId!: string;
  peliculas!: Observable<Pelicula[]>;

  constructor(private firestoreSvc: FirestoreService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actorId'] && this['actorId']) {
      this.peliculas = this.firestoreSvc.getDocumentsWhere("peliculas", "actorParticipante", this['actorId']);
    }
  }
}
