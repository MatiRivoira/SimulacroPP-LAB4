import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisSeleccionado = new EventEmitter<string>();

  private apiUrl = 'https://restcountries.com/v3.1/all';

  paises!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPaises().subscribe(
      (data: any[]) => {
        this.paises = data;
        console.log(this.paises);
      },
      error => {
        console.error('Error al obtener los países:', error);
      }
    );
  }

  seleccionarPais(pais: string) {
    this.paisSeleccionado.emit(pais);
  }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

