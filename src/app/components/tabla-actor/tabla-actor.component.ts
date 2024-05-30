import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../../interfaces/actor';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css'
})
export class TablaActorComponent implements OnInit {
  actores!: Observable<Actor[]>;
  @Output() actorSeleccionado = new EventEmitter<Actor>();
  selectedActor: Actor | null = null;  // Nuevo

  firestoreSvc = inject(FirestoreService);

  ngOnInit(): void {
    this.actores = this.firestoreSvc.getDocuments("actores");
  }

  selectActor(actor: Actor) {
    this.selectedActor = actor;  // Nuevo
    this.actorSeleccionado.emit(actor);
  }
}
