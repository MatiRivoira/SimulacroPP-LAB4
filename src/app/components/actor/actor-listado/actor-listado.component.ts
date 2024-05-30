import { Component } from '@angular/core';
import { Actor } from '../../../interfaces/actor';
import { TablaActorComponent } from '../../tabla-actor/tabla-actor.component';
import { DetalleActorComponent } from '../detalle-actor/detalle-actor.component';
import { ActorPeliculasComponent } from '../actor-peliculas/actor-peliculas.component';

@Component({
  selector: 'app-actor-listado',
  standalone: true,
  imports: [TablaActorComponent, DetalleActorComponent, ActorPeliculasComponent],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.css',
})
export class ActorListadoComponent {
  actorSeleccionado!: Actor;
  actualizarActor(actor: any) {
    this.actorSeleccionado = actor;
  }
}
