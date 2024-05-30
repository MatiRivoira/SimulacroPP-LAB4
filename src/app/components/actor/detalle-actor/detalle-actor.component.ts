import { Component, Input } from '@angular/core';
import { Actor } from '../../../interfaces/actor';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [],
  templateUrl: './detalle-actor.component.html',
  styleUrl: './detalle-actor.component.css',
})
export class DetalleActorComponent {
  @Input() actor!: Actor;
}
