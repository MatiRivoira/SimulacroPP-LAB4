import { Component } from '@angular/core';
import { Pelicula } from '../../../interfaces/pelicula';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FireStorageService } from '../../../services/firestorage.service';
import { FirestoreService } from '../../../services/firestore.service';
import { TablaActorComponent } from '../../tabla-actor/tabla-actor.component';

@Component({
  selector: 'app-pelicula-alta',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TablaActorComponent,
  ],
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css'], // Corregir aquí
})
export class PeliculaAltaComponent {
  imagenSeleccionada: any;
  peliculaForm!: FormGroup;

  constructor(
    private fireStorageService: FireStorageService,
    private firestoreService: FirestoreService
  ) {
    this.initForm();
  }

  initForm() {
    this.peliculaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      fechaEstreno: new FormControl('', Validators.required),
      cantidadPublico: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
      foto: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.peliculaForm.valid) {
      const peliculaData: Pelicula = {
        id: 0, // Aquí puedes asignar el id según tu lógica
        nombre: this.peliculaForm.value.nombre,
        tipo: this.peliculaForm.value.tipo,
        fechaEstreno: this.peliculaForm.value.fechaEstreno,
        cantidadPublico: this.peliculaForm.value.cantidadPublico,
        foto: '',
        actorParticipante: this.actorSeleccionado,
      };
      
      // Guardamos la foto en el almacenamiento
      const fotoFile = this.peliculaForm.value.foto;
      this.fireStorageService
        .uploadImage('peliculas', `${peliculaData.nombre}.jpg`, fotoFile)
        .subscribe(
          (url) => {
            // Si la carga de la imagen es exitosa, actualizamos la URL de la foto en los datos de la película
            peliculaData.foto = url;
            this.firestoreService
              .addDocument('peliculas', peliculaData)
              .then(() => {
                console.log('Pelicula subida con exito');
              })
              .catch((errorContext) => {
                console.log(errorContext);
              });
          },
          (error) => {
            console.error('Error al subir la imagen:', error);
          }
        );
    } else {
      // Si el formulario no es válido, muestra un mensaje de error o realiza otra acción
      console.log('Formulario inválido');
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.peliculaForm.patchValue({
      foto: file,
    });
    this.mostrarImagenSeleccionada(file);
  }

  mostrarImagenSeleccionada(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenSeleccionada = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  actorSeleccionado: string = "";
  actualizarActor(actor: any) {
    this.actorSeleccionado = actor.id;
    
  }
}
