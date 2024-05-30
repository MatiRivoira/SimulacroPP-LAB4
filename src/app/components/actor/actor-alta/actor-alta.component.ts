import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaPaisesComponent],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css',
})
export class ActorAltaComponent {
  nombre: string = '';
  paisNatal: string = '';
  apellido: string = '';
  email: string = '';
  direccion: string = '';
  direccion2: string = '';
  postalCode: string = '';
  localidad: string = '';

  firestoreService = inject(FirestoreService);

  constructor() {}

  guardarActor() {
    this.firestoreService
      .addDocument('actores', {
        nombre: this.nombre,
        paisNatal: this.paisNatal,
        apellido: this.apellido,
        email: this.email,
        direccion: this.direccion,
        direccion2: this.direccion2,
        postalCode: this.postalCode,
      })
      .then(() => {
        // El documento se ha agregado correctamente, muestra una alerta
        alert('El actor se ha agregado correctamente.');
      })
      .catch((error) => {
        // Ocurrió un error al agregar el documento, muestra una alerta con el mensaje de error
        alert('Error al agregar el actor: ' + error.message);
      });
  }

  seleccionarPais(pais: string) {
    this.paisNatal = pais;
  }
}
